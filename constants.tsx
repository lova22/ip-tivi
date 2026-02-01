
import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: '1-month',
    name: '1 Monat Premium',
    basePrice: 14.99,
    badge: 'FLEXIBEL',
    features: {
      channels: '+18.000 Live TV Kanäle',
      vod: '+55.000 Filme & Serien',
      series: 'Inkl. EPG & Catch-up (7 Tage)',
      quality: '4K / UHD / FHD / HD',
      stability: true,
      antiFreeze: true,
      vpn: true,
      matchDays: true,
      support: '24/7 Technischer Support'
    }
  },
  {
    id: '12-months',
    name: '12 Monate Ultimate',
    basePrice: 59.99,
    highlight: true,
    badge: 'BESTSELLER - 60% RABATT',
    features: {
      channels: '+22.000 Premium Kanäle',
      vod: '+95.000 VOD (4K Qualität)',
      series: 'Catch-up & EPG v2.0',
      quality: 'True 4K & 8K Ready',
      stability: true,
      antiFreeze: true,
      vpn: 'Premium VPN Inklusive',
      matchDays: true,
      support: 'VIP Prioritäts-Support'
    }
  },
  {
    id: '3-months',
    name: '3 Monate Pro',
    basePrice: 29.99,
    badge: 'POPULÄR',
    features: {
      channels: '+18.000 Live TV Kanäle',
      vod: '+55.000 Filme & Serien',
      series: 'Inkl. EPG & Catch-up',
      quality: '4K / UHD / FHD',
      stability: true,
      antiFreeze: true,
      vpn: true,
      matchDays: true,
      support: 'Standard Support'
    }
  },
  {
    id: '6-months',
    name: '6 Monate Gold',
    basePrice: 44.99,
    badge: 'EMPFEHLUNG',
    features: {
      channels: '+18.000 Live TV Kanäle',
      vod: '+55.000 Filme & Serien',
      series: 'Inkl. EPG & Catch-up',
      quality: '4K / UHD / FHD',
      stability: true,
      antiFreeze: true,
      vpn: true,
      matchDays: true,
      support: '24/7 Support'
    }
  }
];

export const SPORTS_POSTERS = [
  { title: 'Formula 1', image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80', badge: 'LIVE' },
  { title: 'Champions League', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80', badge: 'DAZN' },
  { title: 'Bundesliga', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80', badge: 'SKY' },
  { title: 'UFC 300', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80', badge: 'PPV' },
  { title: 'NBA Finals', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80', badge: 'HD' },
  // Duplicate for seamless loop
  { title: 'Formula 1', image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80', badge: 'LIVE' },
  { title: 'Champions League', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80', badge: 'DAZN' },
  { title: 'Bundesliga', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80', badge: 'SKY' },
];

export const MOVIE_POSTERS = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542204172-3c1f11c56f44?auto=format&fit=crop&q=80',
  // Duplicate for seamless loop
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80',
];

export const SUPPORTED_DEVICES = [
  { name: 'Smart TV', icon: 'Tv', brands: 'Samsung, LG, Sony, Android TV' },
  { name: 'Fire TV', icon: 'Zap', brands: 'Firestick, Fire TV Cube' },
  { name: 'Android', icon: 'Smartphone', brands: 'Smartphone, Tablet, TV Box' },
  { name: 'Apple', icon: 'Smartphone', brands: 'iPhone, iPad, Apple TV' },
  { name: 'Windows', icon: 'Monitor', brands: 'PC, Laptop, Surface' },
  { name: 'Boxes', icon: 'Layers', brands: 'MAG, Enigma2, Formuler' }
];

export const FAQS = [
  {
    q: "Welche Internetgeschwindigkeit benötige ich?",
    a: "Für HD-Inhalte empfehlen wir mindestens 15 Mbps, für 4K-Streaming mindestens 50 Mbps. Unsere Server sind jedoch optimiert, um auch bei geringerer Bandbreite stabil zu laufen."
  },
  {
    q: "Wie lange dauert die Freischaltung?",
    a: "Nach erfolgreicher Zahlung erhalten Sie Ihre Zugangsdaten in der Regel innerhalb von 5 bis 15 Minuten per E-Mail und WhatsApp."
  },
  {
    q: "Kann ich den Service auf mehreren Geräten gleichzeitig nutzen?",
    a: "Ja, je nach gewähltem Abo können Sie den Service auf bis zu 3 oder 4 Geräten gleichzeitig nutzen. Sie können die Anzahl der Geräte beim Kauf einfach auswählen."
  },
  {
    q: "Gibt es eine Geld-zurück-Garantie?",
    a: "Ja, wir bieten eine 7-tägige Geld-zurück-Garantie, falls unser Service nicht Ihren Erwartungen entspricht. Kundenzufriedenheit steht bei uns an erster Stelle."
  },
  {
    q: "Welche Apps muss ich installieren?",
    a: "Wir unterstützen fast alle IPTV-Apps. Wir empfehlen IPTV Smarters Pro, TiviMate, IBO Player oder OTT Navigator für das beste Erlebnis."
  }
];
