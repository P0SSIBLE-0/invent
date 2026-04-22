// "use client";

// import styles from "./HeroBanner.module.css";

// interface HeroBannerProps {
//   imageSrc?: string;
//   imageAlt?: string;
//   title?: React.ReactNode;
//   subtitle?: string;
// }

// export default function HeroBanner({
//   imageSrc = "/images/hero-banner.jpg",
//   imageAlt = "Smart Lifts for Smarter Buildings",
//   title,
//   subtitle = "Smart lift solutions for business environments",
// }: HeroBannerProps) {
//   return (
//     <div className={styles.wrapper}>
//       {/* Background image */}
//       <img src={imageSrc} alt={imageAlt} className={styles.bgImage} />

//       {/* Dark overlay */}
//       <div className={styles.overlay} />

//       {/* Bottom-left content */}
//       <div className={styles.content}>
//         <h1 className={styles.title}>
//           {title ?? (
//             <>
//               Smart <span className={styles.gold}>Lifts</span> for Smarter
//               <br />
//               <span className={styles.gold}>Buildings</span>
//             </>
//           )}
//         </h1>
//         <p className={styles.subtitle}>{subtitle}</p>
//         <button className={styles.ctaBtn}>
//           <span className={styles.ctaText}>Get a free quote</span>
//           <span className={styles.ctaArrow}>↗</span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  videoSrc?: string;
  videoPoster?: string;
  title?: React.ReactNode;
  subtitle?: string;
  data: any;
}

export default function HeroBanner({
  videoSrc = "/video.mp4",
  videoPoster = "",
  title,
  subtitle,
  data,
}: HeroBannerProps) {
  return (
    <div className={styles.wrapper}>
      {/* Background video */}
      <video
        className={styles.bgVideo}
        src={videoSrc}
        poster={videoPoster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Bottom-left content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title ?? (
            <>
              {data.hero.Heading} <span className={styles.gold}>{data.hero.highlightedText}</span>
            </>
          )}
        </h1>
        <p className={styles.subtitle}>{subtitle ?? data.hero.subHeading}</p>
        <button className={styles.ctaBtn}>
          <span className={styles.ctaText}>{data.hero.buttonText}</span>
          <span className={styles.ctaArrow}>↗</span>
        </button>
      </div>
    </div>
  );
}