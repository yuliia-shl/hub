// import SmartButton from '../ui/Button/SmartButton';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
// import HiroTitle from '../HeroTitle/HeroTitle';

const Hero = () => {
  return (
    <section className="w-full relative 1xl:-mt-23 pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        {/* <HiroTitle className="1xl:hidden pl-6" /> */}
        <VideoPlayer />
        {/* <SmartButton
          label="Рішення для бізнесу"
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconClassName="w-4.5 h-4.5"
          iconStroke="currentColor"
          iconPosition="right"
          className="ml-auto 1xl:hidden gap-17 mr-6"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
