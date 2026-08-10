import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { AnalyticsEvent, AnalyticsSummary, LeadSubscriber } from "../types";

const firebaseConfig = {
    apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
    authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: (import.meta as any).env.VITE_FIREBASE_DATABASE_URL,
    projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: (import.meta as any).env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseService {
    public static getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
            return 'mobile';
        }
        return 'desktop';
    }

    public static convertFirestoreTimestamp(timestampObj) {
        if (!timestampObj || !timestampObj.seconds) return null;

        const milliseconds =
            timestampObj.seconds * 1000 +
            (timestampObj.nanoseconds || 0) / 1000000;

        return new Date(milliseconds);
    }

    // Helper function to fetch approximate location via IP
    public static async fetchUserLocation() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return {
                country: data.country_name || "Unknown",
                state: data.region || "Unknown",
                city: data.city || "Unknown",
                ip: data.ip || "Unknown"
            };
        } catch (error) {
            console.error("Could not fetch location:", error);
            return { country: "Unknown", state: "Unknown", city: "Unknown" };
        }
    }

    public static getBrowserAndOS() {
        const ua = navigator.userAgent;

        // Detect Browser
        let browser = "Unknown Browser";
        if (ua.includes("Firefox/")) browser = "Firefox";
        else if (ua.includes("SamsungBrowser/")) browser = "Samsung Internet";
        else if (ua.includes("Opera/") || ua.includes("OPR/")) browser = "Opera";
        else if (ua.includes("Trident/")) browser = "Internet Explorer";
        else if (ua.includes("Edge/") || ua.includes("Edg/")) browser = "Microsoft Edge";
        else if (ua.includes("Chrome/")) browser = "Chrome";
        else if (ua.includes("Safari/")) browser = "Safari";

        // Detect OS
        let os = "Unknown OS";
        if (ua.includes("Win")) os = "Windows";
        else if (ua.includes("Mac")) os = "MacOS";
        else if (ua.includes("Linux")) os = "Linux";
        else if (ua.includes("Android")) os = "Android";
        else if (ua.includes("like Mac")) os = "iOS";

        return { browser, os };
    }

    public static async getEvents(): Promise<AnalyticsEvent[]> {
        try {
            // Create a query pointing to the "Events" collection, ordered by newest first
            const q = query(
                collection(db, "Events"),
                orderBy("timestamp", "desc")
            );

            const querySnapshot = await getDocs(q);
            const events: AnalyticsEvent[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                events.push({
                    id: doc.id, // Include the Firestore document ID if desired
                    type: data.type,
                    timestamp: this.convertFirestoreTimestamp(data.timestamp),
                    productId: data.productId,
                    productName: data.productName,
                    targetUrl: data.targetUrl,
                    deviceType: data.deviceType,
                    referrer: data.referrer,
                    location: data.location || { country: "", state: "", city: "" },
                    browser: data.browser,
                    os: data.os
                } as AnalyticsEvent);
            });
            return events;
        } catch (error) {
            console.error("Error reading events: ", error);
            return [];
        }
    }

    public static async getLeads(): Promise<LeadSubscriber[]> {
        try {
            const q = query(
                collection(db, "Leads"),
                orderBy("subscribedAt", "desc")
            );

            const querySnapshot = await getDocs(q);
            const leads: LeadSubscriber[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                leads.push({
                    id: doc.id, // Include the Firestore document ID if desired
                    email: data.email,
                    name: data.name,
                    subscribedAt: this.convertFirestoreTimestamp(data.subscribedAt),
                    source: data.source
                } as LeadSubscriber);
            });
            return leads;
        } catch (error) {
            console.error("Error reading leads: ", error);
            return [];
        }
    }

    // Helper to log user events/clicks
    public static async trackEvent(
        type: AnalyticsEvent['type'],
        details?: { productId?: string; productName?: string; targetUrl?: string }
    ) {
        try {
            const locationInfo = await this.fetchUserLocation(); // Fetches location in background
            const { browser, os } = this.getBrowserAndOS(); // Extract browser and OS
            const newEvent: AnalyticsEvent = {
                id: 'evt_' + Math.random().toString(36).substring(2, 9),
                timestamp: serverTimestamp(),
                type,
                productId: details?.productId ?? "",
                productName: details?.productName ?? "",
                targetUrl: details?.targetUrl ?? "",
                deviceType: this.getDeviceType(),
                referrer: document.referrer || 'direct / infyra.ca',
                location: locationInfo,
                browser,
                os
            };

            await addDoc(collection(db, "Events"), {
                ...newEvent
            });
        } catch (error) {
            console.error("Error writing event to Firebase: ", error);
        }
    }

    // Helper to capture VIP leads/emails
    public static async addLeadSubscriber(email: string, name?: string): Promise<{ success: boolean; message: string; }> {
        try {
            if (!email || !email.includes('@')) {
                return { success: false, message: 'Please enter a valid email address.' };
            }

            const leads = await this.getLeads();
            const normalized = email.trim().toLowerCase();

            if (leads.some(l => l.email.toLowerCase() === normalized)) {
                return { success: true, message: 'You are already subscribed to the Infyra Family!' };
            }

            const newLead: LeadSubscriber = {
                id: 'lead_' + Math.random().toString(36).substring(2, 9),
                email: normalized,
                name: name?.trim() ?? "",
                subscribedAt: serverTimestamp(),
                source: 'infyra.ca VIP Parent Club',
            };
            await addDoc(collection(db, "Leads"), {
                ...newLead
            });
            this.trackEvent('lead_capture', { productName: 'Newsletter Subscription' });
            return { success: true, message: 'Welcome to the Infyra Family! You will receive exclusive teething guides and early product access.' };
        } catch (error) {
            console.error("Error writing lead to Firebase: ", error);
        }
    }

    public static async getSummary(): Promise<AnalyticsSummary> {
        const events = await this.getEvents();
        const leads = await this.getLeads();

        const uniqueSessions = new Set(events.map(e => e.location?.ip || 'Unknown')).size || (events.length > 0 ? 1 : 0);
        const totalPageViews = events.filter(e => e.type === 'page_view').length;
        const amazonClicks = events.filter(e => e.type === 'amazon_click');
        const instagramClicks = events.filter(e => e.type === 'instagram_click').length;
        const productViews = events.filter(e => e.type === 'product_view').length;

        const productClicks: Record<string, number> = {};
        events.forEach(e => {
            if ((e.type === 'amazon_click' || e.type === 'product_view') && e.productName) {
                productClicks[e.productName] = (productClicks[e.productName] || 0) + 1;
            }
        });

        const ctr = productViews > 0 ? Math.round((amazonClicks.length / productViews) * 100) : 0;

        return {
            totalVisitors: Math.max(uniqueSessions, events.length > 0 ? 1 : 0),
            uniqueSessions: Math.max(uniqueSessions, 1),
            totalPageViews: Math.max(totalPageViews, events.length),
            totalAmazonClicks: amazonClicks.length,
            totalInstagramClicks: instagramClicks,
            totalLeads: leads.length,
            ctrAmazon: ctr,
            productClicks,
        };
    }

    public static async exportAnalyticsCSV() {
        const events = await this.getEvents();
        const leads = await this.getLeads();

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += '--- INFYRA.CA VISITOR EVENTS ---\n';
        csvContent += 'Event ID,Timestamp,Event Type,Product Name,Target URL,Device Type,Referrer,City,State,Country,IP Address,Browser,OS\n';

        events.forEach(e => {
            csvContent += `"${e.id}","${e.timestamp}","${e.type}","${e.productName || ''}","${e.targetUrl || ''}","${e.deviceType}","${e.referrer}","${e.location?.city || 'Unknown'}","${e.location?.state || 'Unknown'}","${e.location?.country || 'Unknown'}","${e.location?.ip || 'Unknown'}","${e.browser || 'Unknown'}","${e.os || 'Unknown'}"\n`;
        });

        csvContent += '\n--- INFYRA SUBSCRIBER LEADS ---\n';
        csvContent += 'Subscriber ID,Email,Name,Subscribed At,Source\n';
        leads.forEach(l => {
            csvContent += `"${l.id}","${l.email}","${l.name || ''}","${l.subscribedAt}","${l.source}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `infyra_analytics_export_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    public static initInitialPageView() {
        this.trackEvent('page_view');
    }
}