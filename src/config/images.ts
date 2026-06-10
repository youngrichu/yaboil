const CDN = "https://res.cloudinary.com/dud5jjhfz/image/upload/yaboil";
const VIDEO_CDN = "https://res.cloudinary.com/dud5jjhfz/video/upload/yaboil";

export const IMAGES = {
  logoPng: `${CDN}/yaboil-logo.png`,
  logoSvg: `${CDN}/yaboil-logo.svg`,
  heroPoster: `${CDN}/hero-poster.jpg`,
  blackSeed: `${CDN}/black-seed.png`,
  rosemary: `${CDN}/rosemary.png`,
  pumpkinSeed: `${CDN}/pumpkin-seed.png`,
  castor: `${CDN}/castor.png`,
  collection: `${CDN}/collection.png`,
  herbRosemary: `${CDN}/illustrations/herb-rosemary.jpg`,
  pumpkinVine: `${CDN}/illustrations/pumpkin-vine.jpg`,
  castorIllustration: `${CDN}/illustrations/castor.jpg`,
  nigellaSativa: `${CDN}/illustrations/nigella-sativa.jpg`,
  brandStory: `${CDN}/brand-story.png`,
  yaboilMark: `${CDN}/yaboil-mark.png`,
  philosophyHero: `${CDN}/philosophy-hero.png`,
  philosophyLogo: `${CDN}/philosophy-logo.png`,
  sunDrenched: `${CDN}/sun-drenched.png`,
  soilHands: `${CDN}/soil-hands.png`,
  alchemyPressing: `${CDN}/alchemy-pressing.png`,
} as const;

export const VIDEOS = {
  heroBg: `${VIDEO_CDN}/hero-bg.webm`,
  heroBgCompressed: `${VIDEO_CDN}/hero-bg-compressed.mp4`,
  heroBgMp4: `${VIDEO_CDN}/hero-bg.mp4`,
} as const;
