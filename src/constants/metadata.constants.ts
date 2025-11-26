/**
 * Metadata Constants
 *
 * Centralized metadata configuration for SEO and social sharing.
 * Images hosted on Cloudinary for better performance and CDN delivery.
 */

export const METADATA_IMAGES = {
  openGraph:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145492/open-graph-image_lxozki.png",
  openGraphSquare:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145492/open-graph-square_uzie0n.png",
  twitterCard:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145492/twitter-card_mzl6k7.png",
  favicon16:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/favicon-16x16_pmysxs.png",
  favicon32:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/favicon-32x32_bd2cni.png",
  appleTouchIcon:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/apple-touch-icon_hd5k0d.png",
  androidChrome192:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/android-chrome-192x192_rml8ig.png",
  androidChrome512:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/android-chrome-512x512_ajcua2.png",
  mstile150:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/mstile-150x150_twmfl0.png",
  appleTouchIcon167:
    "https://res.cloudinary.com/dhhjqktea/image/upload/v1764145491/apple-touch-icon-167x167_nzmlxz.png",
} as const;

export const DEFAULT_METADATA = {
  siteName: "StrategyByte",
  siteUrl: "https://www.strategybyte.com.au",
  locale: "en-US",
  type: "website",
} as const;

/**
 * Generate Open Graph images array
 */
export function getOpenGraphImages(
  alt: string = "StrategyByte - Digital Marketing Agency Sydney"
) {
  return [
    {
      url: METADATA_IMAGES.openGraph,
      width: 1200,
      height: 630,
      alt,
    },
    {
      url: METADATA_IMAGES.openGraphSquare,
      width: 1200,
      height: 1200,
      alt: "StrategyByte Logo",
    },
  ];
}

/**
 * Generate Twitter Card images array
 */
export function getTwitterImages() {
  return [METADATA_IMAGES.twitterCard, METADATA_IMAGES.openGraph];
}
