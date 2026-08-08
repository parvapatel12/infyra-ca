import { AnalyticsEvent, AnalyticsSummary, LeadSubscriber } from '../types';

const STORAGE_KEY_EVENTS = 'infyra_analytics_events_v1';
const STORAGE_KEY_LEADS = 'infyra_leads_v1';
const STORAGE_KEY_SESSION = 'infyra_session_id_v1';

export class AnalyticsService {
  private static getSessionId(): string {
    let sessionId = localStorage.getItem(STORAGE_KEY_SESSION);
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
      localStorage.setItem(STORAGE_KEY_SESSION, sessionId);
    }
    return sessionId;
  }

  private static getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  public static getEvents(): AnalyticsEvent[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_EVENTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public static getLeads(): LeadSubscriber[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_LEADS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public static trackEvent(
    type: AnalyticsEvent['type'],
    details?: { productId?: string; productName?: string; targetUrl?: string }
  ) {
    const events = this.getEvents();
    const newEvent: AnalyticsEvent = {
      id: 'evt_' + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      type,
      productId: details?.productId,
      productName: details?.productName,
      targetUrl: details?.targetUrl,
      deviceType: this.getDeviceType(),
      referrer: document.referrer || 'direct / infyra.ca',
    };

    events.unshift(newEvent);
    // Limit stored events to last 1000 for browser memory sanity
    const trimmed = events.slice(0, 1000);
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(trimmed));

    // Dispatch window custom event so open dashboards refresh instantly
    window.dispatchEvent(new CustomEvent('infyra-analytics-update'));
  }

  public static addLeadSubscriber(email: string, name?: string): { success: boolean; message: string } {
    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    const leads = this.getLeads();
    const normalized = email.trim().toLowerCase();
    
    if (leads.some(l => l.email.toLowerCase() === normalized)) {
      return { success: true, message: 'You are already subscribed to the Infyra Family!' };
    }

    const newLead: LeadSubscriber = {
      id: 'lead_' + Math.random().toString(36).substring(2, 9),
      email: normalized,
      name: name?.trim(),
      subscribedAt: new Date().toISOString(),
      source: 'infyra.ca VIP Parent Club',
    };

    leads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));

    this.trackEvent('lead_capture', { productName: 'Newsletter Subscription' });
    return { success: true, message: 'Welcome to the Infyra Family! You will receive exclusive teething guides and early product access.' };
  }

  public static getSummary(): AnalyticsSummary {
    const events = this.getEvents();
    const leads = this.getLeads();

    const uniqueSessions = new Set(events.map(e => e.id.split('_')[1] || e.id)).size || (events.length > 0 ? 1 : 0);
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

  public static exportAnalyticsCSV() {
    const events = this.getEvents();
    const leads = this.getLeads();

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += '--- INFYRA.CA VISITOR EVENTS ---\n';
    csvContent += 'Event ID,Timestamp,Event Type,Product Name,Target URL,Device Type,Referrer\n';

    events.forEach(e => {
      csvContent += `"${e.id}","${e.timestamp}","${e.type}","${e.productName || ''}","${e.targetUrl || ''}","${e.deviceType}","${e.referrer}"\n`;
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
    this.getSessionId();
    this.trackEvent('page_view');
  }
}
