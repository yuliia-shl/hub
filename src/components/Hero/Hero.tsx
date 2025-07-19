import SmartButton from '../ui/Button/SmartButton';

const Hero = () => {
  return (
    <section className="w-full mt-3.5 1xl:mt-10.5 3xl:mt-18 4xl:mt-17 mb-15">
      <div className="section flex gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe">
        <h1 className="font-second text-[34px]/[1] 1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
          <span className="text-tangerine">Smart</span> Locker HUB
        </h1>
        <p className="text-[18px]/[1.22] 4xl:text-[22px] font-normal text-alto-white max-w-69 1xl:max-w-101 text-left 1xl:text-center">
          Реалізація комплекса послуг та задоволення потреб населення в одному
          рішенні 
        </p>
        <SmartButton
          label="Рішення для бізнесу"
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconPosition="right"
        />
      </div>
    </section>
  );
};

export default Hero;
