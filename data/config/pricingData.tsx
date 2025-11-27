import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$9', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '960aec7b-5d41-445d-ac7b-84d7e39a66b9',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'eac7e2a6-4a76-404a-b30c-deff6c1b6043',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
