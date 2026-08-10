export type EventType = "page_view" | "product_view" | "amazon_click" | "instagram_click" | "lead_capture";
export type DeviceType = "desktop" | "mobile" | "tablet";

export interface AnalyticsEvent {
  type: EventType;
  timestamp?: any; // Uses serverTimestamp()
  productId?: string;
  productName?: string;
  targetUrl?: string;
  deviceType: DeviceType;
  referrer: string;
}

export interface LeadLead {
  email: string;
  subscribedAt?: any;
  source: string;
}