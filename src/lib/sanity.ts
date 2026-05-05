import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Default useCdn=false (always fresh — protects against the ~60s stale-CDN
// race that can ship a build missing a just-published doc). Set
// SANITY_USE_CDN=true to opt into the CDN for faster builds when freshness
// isn't time-critical. deploy-live.sh sets SANITY_USE_CDN=false explicitly,
// so prod deploys are always safe regardless of this default.
const USE_CDN = process.env.SANITY_USE_CDN === 'true';

export const sanityClient = createClient({
  projectId: 'r33r2z1j',
  dataset: 'production',
  useCdn: USE_CDN,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
