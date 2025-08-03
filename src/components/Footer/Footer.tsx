const Footer = () => {
  return (
    <footer className="w-full pb-[7px] lg:pb-5 1xl:pb-14.5 4xl:pb-17">
      <div className="section">
        <div className="pb-17 lg:pb-5 4xl:pb-6.5">
          <div className="flex flex-row justify-between 1xl:justify-none mb-15 lg:mb-8 4xl:mb-15">
            <div className="flex flex-row items-start  gap-x-[6px] lg:gap-x-2.5 4xl:gap-x-3">
              <svg className="w-[36px] h-[50px] lg:w-[56px] lg:h-[78px] 4xl:w-[68px] 4xl:h-[96px] fill-tangerine group-hover:fill-tangerine transition-colors duration-300">
                <use href="/images/svg/icons.svg#icon-logo" />
              </svg>
              <div className="flex flex-col pt-2 lg:pt-3 4xl:pt-5">
                <span className="text-xl/[120%] lg:text-[32px] 4xl:text-[38px] text-tangerine font-semibold font-second">
                  MBK MASH
                </span>
                <span className="text-sm/[120%] lg:text-[22px] 4xl:text-[26px] text-white font-second">
                  SMART LOCKERS
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 lg:gap-x-5 lg:pt-4 lg:w-1/2 4xl:gap-x-14">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="group"
              >
                <svg className="w-12 h-12 lg:w-14 lg:h-14 4xl:w-20.5 4xl:h-20.5 fill-tangerine">
                  <use href="/images/svg/icons.svg#icon-telegram" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <svg className="w-12 h-12 lg:w-14 lg:h-14 4xl:w-20.5 4xl:h-20.5 fill-tangerine">
                  <use href="/images/svg/icons.svg#icon-insta" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:order-2 lg:self-end lg:w-1/2">
              <h3 className="self-start leading-[120%] 4xl:text-xl/[120%] font-medium font-second mb-4.5 4xl:mb-6">
                Надсилайте свої запитання та пропозиції
              </h3>

              <div className="flex flex-row mb-13 4xl:mb-0">
                <div className="flex flex-col gap-y-[5px] flex-1 3xl:flex-none 3xl:mr-34 4xl:mr-50 items-start">
                  <p className="font-medium leading-[120%] 4xl:text-xl/[120%] text-mountain-mist">
                    Запитання:
                  </p>
                  <a
                    href="mailto:hub@mbk-mash.com"
                    className="font-semibold leading-[125%] 4xl:text-lg/[111%] hover:underline"
                  >
                    Hub@mbk-mash.com
                  </a>
                </div>

                <div className="flex flex-col gap-y-[5px] flex-1 items-start">
                  <p className="font-medium leading-[120%] 4xl:text-xl/[120%] text-mountain-mist">
                    Контакти:
                  </p>
                  <p className="font-semibold leading-[125%] 4xl:text-lg/[111%] hover:underline">
                    м. Київ, вул. Солом’янська 3
                    <span className="block">000 323 22 22</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:w-1/2 4xl:flex-row">
              <div className="flex flex-row 4xl:order-2 mb-9.5 lg:mb-8 4xl:mb-0  1xl:whitespace-nowrap">
                <a
                  href="#"
                  className="w-1/2 text-lg/[126%] tracking-[-0.03em] text-mountain-mist underline"
                >
                  Політика конфіденційності
                </a>
              </div>

              <div className="flex flex-col gap-4 lg:max-w-[296px] 1xl:max-w-[280px]">
                <p className="leading-[120%] font-medium text-mountain-mist">
                  © 2003–2025 ТОВ «MBK MASH»
                </p>
                <p className="leading-[120%] font-medium text-mountain-mist lg:text-left">
                  Всі права захищені. Використання матеріалів сайту{' '}
                  <span className="block lg:inline">
                    можливе тільки з посиланням на джерело.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
