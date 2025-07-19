const Hero = () => {
  return (
    <section className="w-full mt-3.5 1xl:mt-10.5 3xl:mt-18 4xl:mt-17 mb-15">
      <div className="section flex gap-5.5 flex-col items-start">
        <h1 className="font-second text-[34px]/[1] font-medium text-gallery-white">
          <span className="text-tangerine">Smart</span> Locker HUB
        </h1>
        <p className="text-[18px]/[1.22] font-normal text-alto-white max-w-69">
          Реалізація комплекса послуг та задоволення потреб населення в одному
          рішенні 
        </p>
        <button
          type="button"
          className="flex shrink-1 text-nowrap mr-5.5 1xl:mr-0 items-center justify-center-safe px-8 1xl:px-15 py-2.5 1xl:py-4.5 4xl:py-5.5 border-1 4xl:border-1.29 border-masala-light 1xl:border-star-dust rounded-full w-fit max-h-10 max-w-full 1xl:max-h-13 4xl:max-h-16 text-lg/4.5 1xl:text-base/4 4xl:text-xl/5 1xl:font-semibold text-star-dust hover:border-tangerine transition-colors hover:text-tangerine hover:bg-fire hover:shadow-lg"
          // onClick={() => setOpenLoginModal(true)}
        >
          Рішення для бізнесу
        </button>
      </div>
    </section>
  );
};

export default Hero;
