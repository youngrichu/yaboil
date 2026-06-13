const CDN = "https://res.cloudinary.com/dud5jjhfz/image/upload/yaboil";
const VIDEO_CDN = "https://res.cloudinary.com/dud5jjhfz/video/upload/yaboil";

// Cloudinary quality and format params for image optimization
const IMG_PARAMS = "f_auto,q_auto:good,c_limit";
const IMG_PARAMS_THUMB = "f_auto,q_auto:good,c_limit,w_600";
const IMG_PARAMS_POSTER = "f_auto,q_auto:good,c_limit,w_800";

export const IMAGES = {
  logoPng: `${CDN}/yaboil-logo.png`,
  logoSvg: `${CDN}/yaboil-logo.svg`,
  heroPoster: `${CDN}/hero-poster.jpg?${IMG_PARAMS_POSTER}`,
  blackSeed: `${CDN}/black-seed.png?${IMG_PARAMS}`,
  rosemary: `${CDN}/rosemary.png?${IMG_PARAMS}`,
  pumpkinSeed: `${CDN}/pumpkin-seed.png?${IMG_PARAMS}`,
  castor: `${CDN}/castor.png?${IMG_PARAMS}`,
  sesame: `${CDN}/sesame.png?${IMG_PARAMS}`,
  growth: `${CDN}/growth.png?${IMG_PARAMS}`,
  flaxseed: `${CDN}/flaxseed.png?${IMG_PARAMS}`,
  collection: `${CDN}/collection-2.png?${IMG_PARAMS}`,
  herbRosemary: `${CDN}/illustrations/herb-rosemary.jpg?${IMG_PARAMS_THUMB}`,
  pumpkinVine: `${CDN}/illustrations/pumpkin-vine.jpg?${IMG_PARAMS_THUMB}`,
  castorIllustration: `${CDN}/illustrations/castor.jpg?${IMG_PARAMS_THUMB}`,
  nigellaSativa: `${CDN}/illustrations/nigella-sativa.jpg?${IMG_PARAMS_THUMB}`,
  brandStory: `${CDN}/brand-story.png?${IMG_PARAMS_THUMB}`,
  yaboilMark: `${CDN}/yaboil-mark.png`,
  philosophyHero: `${CDN}/philosophy-hero.png?${IMG_PARAMS}`,
  philosophyLogo: `${CDN}/philosophy-logo.png?${IMG_PARAMS_THUMB}`,
  sunDrenched: `${CDN}/sun-drenched.png?${IMG_PARAMS}`,
  soilHands: `${CDN}/soil-hands.png?${IMG_PARAMS}`,
  alchemyPressing: `${CDN}/alchemy-pressing.png?${IMG_PARAMS}`,
} as const;

export const VIDEOS = {
  heroBg: `${VIDEO_CDN}/hero-bg.webm`,
  heroBgCompressed: `${VIDEO_CDN}/hero-bg-compressed.mp4`,
  heroBgMp4: `${VIDEO_CDN}/hero-bg.mp4`,
} as const;
