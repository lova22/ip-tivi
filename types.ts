
export interface PlanFeatures {
  channels: string;
  vod: string;
  series: string;
  quality: string;
  stability: boolean;
  antiFreeze: boolean;
  vpn: boolean | string;
  matchDays: boolean;
  support: string;
}

export interface Plan {
  id: string;
  name: string;
  basePrice: number;
  highlight?: boolean;
  badge?: string;
  features: PlanFeatures;
}

export type DeviceCount = 1 | 2 | 3 | 4;
export type DurationMonths = 1 | 3 | 6 | 12;

export interface PricingState {
  devices: DeviceCount;
  duration: DurationMonths;
}
