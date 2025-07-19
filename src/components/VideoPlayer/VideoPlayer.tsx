import HiroTitle from '../HeroTitle/HeroTitle';
import SmartButton from '../ui/Button/SmartButton';

const VideoPlayer = () => {
  return (
    <div className="relative  w-full h-70 1xl:h-screen overflow-hidden bg-woodsmoke-black/60">
      <video
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ pointerEvents: 'none' }}
        poster="/path/to/poster-image.jpg"
      >
        <source src="/video/heroVideo.mp4" type="video/mp4" />
        Ваш браузер не підтримує тег video.
      </video>

      {/* Контент поверх відео */}

      <div className="hidden 1xl:flex flex-col justify-center items-center  h-full">
        <HiroTitle className="1xl:flex flex-col items-center 1xl:mb-8 4xl:mb-8.5" />
        <SmartButton
          label="Рішення для бізнесу"
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconClassName="w-4.5 h-4.5 ml-16"
          iconStroke="currentColor"
          iconPosition="right"
          className="1xl:inline-flex"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
