import SmartButton from '../ui/Button/SmartButton';

const Hero = () => {
  return (
    <section className="w-full pt-3.5 1xl:pt-10.5 3xl:pt-18 4xl:pt-17 pb-15">
      <div className="section flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <div>
          <h1 className="font-second text-[34px]/[1] mb-5.5 1xl:mb-3.5  1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
            <span className="text-tangerine">Smart</span> Locker HUB
          </h1>
          <p className="text-[18px]/[1.22] 4xl:text-[22px] font-normal text-alto-white max-w-69 1xl:max-w-101 text-left 1xl:text-center 1xl:mb-8 4xl:mb-8.5">
            Реалізація комплекса послуг та задоволення потреб населення в одному
            рішенні
          </p>
        </div>
        <SmartButton
          label="Рішення для бізнесу"
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconClassName="w-4.5 h-4.5 ml-16"
          iconStroke="currentColor"
          iconPosition="right"
          className=" ml-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
