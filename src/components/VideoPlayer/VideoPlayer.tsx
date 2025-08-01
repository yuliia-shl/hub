import HiroTitle from '../HeroTitle/HeroTitle';
import SmartButton from '../ui/Button/SmartButton';

const VideoPlayer = () => {
  return (
    <div className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-[linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]">
      <video
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ pointerEvents: 'none' }}
        poster="/images/webp/AleksGolub-06543-2.webp"
      >
        <source src="/video/heroVideo.webm" type="video/webm" />
        <source src="/video/heroVideo.mp4" type="video/mp4" />
        Ваш браузер не підтримує тег video.
      </video>

      {/* Контент поверх відео */}

      <div className="section flex flex-col justify-around 1xl:justify-center 1xl:items-center h-full">
        <HiroTitle className="1xl:flex flex-col items-center 1xl:mb-12 4xl:mb-8.5" />
        <SmartButton
          label="Рішення для бізнесу"
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconClassName="w-4.5 h-4.5 ml-16"
          iconStroke="currentColor"
          iconPosition="right"
          href="#more-info"
          className="1xl:inline-flex ml-auto 1xl:ml-0 4xl:text-[20px]/[1]"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
