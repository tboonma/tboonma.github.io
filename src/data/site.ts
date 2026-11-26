/**
 * Editable facts and placeholders.
 *
 * Replace these before treating the site as finished:
 * - FASTWORK_URL
 * - prices.landing
 * - prices.portfolio
 *
 * prices.sample and SAMPLE_EMAIL belong to the fictional sample pages.
 * Leave them as placeholders unless those pages stop being samples.
 *
 * Canonical facts (wording lives in src/data/copy.ts and src/data/samples.ts):
 * - Tawan Boonma (Tawan B.), contact@tawanb.dev
 * - Owner and CEO of THE iKON APARTMENT, 36 rooms, Phattha Nikhom, Lopburi
 * - Leads that hotel's custom PMS and IT work
 * - Agoda, Bangkok: internship June–July 2022 (.NET profiling tools);
 *   part-time internship August–December 2022 (Agoda Homes)
 * - Studied Software and Knowledge Engineering at Kasetsart University
 */

export type Lang = 'th' | 'en'

export const site = {
  url: 'https://tawanb.dev',
  name: 'Tawan Boonma',
  shortName: 'Tawan B.',
  email: 'contact@tawanb.dev',
  /**
   * Fastwork profile URL. Replace with the real profile, for example
   * https://fastwork.co/user/your-name
   */
  fastworkUrl: 'https://fastwork.co/user/REPLACE_WITH_FASTWORK_PROFILE',
  /**
   * Visible price placeholders. Replace each value with a real price
   * such as ฿4,900. Keep prices.sample fictional while the shop page is a sample.
   */
  prices: {
    landing: '฿X,XXX',
    portfolio: '฿X,XXX',
    sample: '฿X,XXX'
  },
  hotel: {
    name: 'THE iKON APARTMENT',
    rooms: 36,
    district: { th: 'พัฒนานิคม', en: 'Phattha Nikhom' },
    province: { th: 'ลพบุรี', en: 'Lopburi' },
    country: { th: 'ประเทศไทย', en: 'Thailand' }
  },
  /** Fictional inbox used only on the sample portfolio page. */
  sampleEmail: 'name@example.com',
  socials: [
    { id: 'linkedin', href: 'https://www.linkedin.com/in/tboonma' },
    { id: 'github', href: 'https://github.com/tboonma' },
    { id: 'instagram', href: 'https://www.instagram.com/tboonma_' },
    { id: 'facebook', href: 'https://www.facebook.com/tboonmaeiei' },
    { id: 'twitter', href: 'https://twitter.com/Tboonmaeiei' }
  ]
} as const

export type SocialId = (typeof site.socials)[number]['id']
export type SampleId = 'ikon' | 'shop' | 'portfolio'
export type PackageId = 'landing' | 'portfolio'

export const samplePath: Record<SampleId, string> = {
  ikon: '/samples/ikon/',
  shop: '/samples/shop/',
  portfolio: '/samples/portfolio/'
}

export function localizedPath(lang: Lang, route: string): string {
  const path = route.startsWith('/') ? route : `/${route}`
  if (path === '/') return lang === 'th' ? '/' : '/en/'
  return lang === 'th' ? path : `/en${path}`
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href
}

export function fill(
  template: string,
  lang: Lang,
  extra: Record<string, string | number> = {}
): string {
  const vars: Record<string, string | number> = {
    hotel: site.hotel.name,
    rooms: site.hotel.rooms,
    district: site.hotel.district[lang],
    province: site.hotel.province[lang],
    country: site.hotel.country[lang],
    email: site.email,
    priceLanding: site.prices.landing,
    pricePortfolio: site.prices.portfolio,
    priceSample: site.prices.sample,
    sampleEmail: site.sampleEmail,
    ...extra
  }
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  )
}
