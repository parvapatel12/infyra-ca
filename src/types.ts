export interface Product {
  id: string;
  name: string;
  subtitle: string;
  colorName: string;
  colorHex: string;
  bgGradient: string;
  badge: string;
  amazonUrl: string;
  description: string;
  dimensions: {
    height: string;
    width: string;
    weight: string;
    handleOpening?: string;
    thickness?: string;
  };
  keyFeatures: string[];
  sensoryBreakdown: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  specifications: {
    material: string;
    certifications: string;
    ageRange: string;
    careInstructions: string;
  };
  rating: number;
  reviewCount: number;
  svgType: 'rattle-green' | 'rattle-blue' | 'crocodile-grey' | 'crab-yellow';
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  type: 'page_view' | 'product_view' | 'amazon_click' | 'instagram_click' | 'lead_capture' | 'story_view';
  productId?: string;
  productName?: string;
  targetUrl?: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  referrer: string;
}

export interface LeadSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
  source: string;
}

export interface AnalyticsSummary {
  totalVisitors: number;
  uniqueSessions: number;
  totalPageViews: number;
  totalAmazonClicks: number;
  totalInstagramClicks: number;
  totalLeads: number;
  ctrAmazon: number;
  productClicks: Record<string, number>;
}

export interface InstagramPostItem {
  id: number;
  title: string;
  caption: string;
  hashtags: string[];
  postType: string;
  url: string;
  imagePath: string;
  imageAlt: string;
  date: string;
}
