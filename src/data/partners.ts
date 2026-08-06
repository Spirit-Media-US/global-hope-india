// Global Hope India partners and projects that accept designated giving.
//
// SECURITY: partners are identified as "<Name> in India" ONLY. Never publish the
// state, city or region a partner serves in — several serve in areas where being
// publicly identified with a location carries real risk. This is why the naming
// changed from the old Givebutter pages, which named locations.
//
// `campaign` must match a slug in the donations pipeline's campaigns.json, or the
// give form will 400 on checkout.

export interface Partner {
  slug: string;
  /** Display name — "<Name> in India" form only. */
  name: string;
  /** One-line description carried over from the partner's original page. */
  tagline: string;
  /** Campaign slug in the donations pipeline. */
  campaign: string;
  image: string;
  /** 'partner' shows under Indian Partners; 'project' under Projects. */
  kind: 'partner' | 'project';
}

const IMG = 'https://assets.spiritmediapublishing.com/images';

export const PARTNERS: Partner[] = [
  { slug: 'achu', name: 'Achu in India', tagline: 'Creating pathways to success through education', campaign: 'ghi-achu', image: `${IMG}/ghi-partner-achu.webp`, kind: 'partner' },
  { slug: 'amit', name: 'Amit in India', tagline: 'Sharing the good news in villages and mountains', campaign: 'ghi-amit', image: `${IMG}/ghi-partner-amit.webp`, kind: 'partner' },
  { slug: 'anil', name: 'Anil in India', tagline: 'A physician for the body and soul', campaign: 'ghi-anil', image: `${IMG}/ghi-partner-anil.webp`, kind: 'partner' },
  { slug: 'bernardshaw', name: 'Bernardshaw in India', tagline: 'A call for discipleship — in Scripture and action', campaign: 'ghi-bernardshaw', image: `${IMG}/ghi-partner-bernardshaw.webp`, kind: 'partner' },
  { slug: 'dbm', name: 'DBM in India', tagline: 'Transforming the lives of deaf individuals through education, food and shelter', campaign: 'ghi-dbm', image: `${IMG}/ghi-partner-dbm.webp`, kind: 'partner' },
  { slug: 'drs', name: 'Dr S in India', tagline: 'Proclaiming the gospel is a mission with action', campaign: 'ghi-drs', image: `${IMG}/ghi-partner-drs.webp`, kind: 'partner' },
  { slug: 'kasbe', name: 'Kasbe in India', tagline: "Strengthening the family and home with God's Word", campaign: 'ghi-kasbe', image: `${IMG}/ghi-partner-kasbe.webp`, kind: 'partner' },
  { slug: 'kel', name: 'KEL in India', tagline: 'Overcoming persecution in pursuit of the mission', campaign: 'ghi-kel', image: `${IMG}/ghi-partner-kel.webp`, kind: 'partner' },
  { slug: 'manoj', name: 'Manoj in India', tagline: 'Giving hope through the gospel and acting on it to help others', campaign: 'ghi-manoj', image: `${IMG}/ghi-partner-manoj.webp`, kind: 'partner' },
  { slug: 'mayon', name: 'Mayon in India', tagline: 'Impacting lives through evangelization and education', campaign: 'ghi-mayon', image: `${IMG}/ghi-partner-mayon.webp`, kind: 'partner' },
  { slug: 'raja', name: 'Raja in India', tagline: 'A heart for orphans, the disabled, and people suffering from leprosy', campaign: 'ghi-raja', image: `${IMG}/ghi-partner-raja.webp`, kind: 'partner' },
  { slug: 'sekhar', name: 'Sekhar in India', tagline: 'A compassionate crusader for the poor, orphans, widows and lepers', campaign: 'ghi-sekhar', image: `${IMG}/ghi-partner-sekhar.webp`, kind: 'partner' },
  { slug: 'shepherds-house', name: "The Shepherd's House", tagline: 'A home of prayer, peace and hope', campaign: 'ghi-shepherds-house', image: `${IMG}/ghi-partner-shepherds-house.webp`, kind: 'project' },
];

export const partnerBySlug = (slug: string) => PARTNERS.find((p) => p.slug === slug);
