// Search limits for free users
export const SEARCH_LIMITS = {
  DAILY_SEARCH_LIMIT: Infinity,        // Unlimited daily searches for free users
  EXTREME_SEARCH_LIMIT: Infinity,     // Unlimited extreme searches for free users
} as const;

export const PRICING = {
  PRO_MONTHLY: 15, // Pro plan monthly price in USD
} as const;