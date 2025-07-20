import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pb-[7px]">
      <div className="section pb-17">
        <div className="flex flex-row justify-between 1xl:justify-none mb-15">
          <div className="flex flex-row items-start gap-[6px]">
            <svg className="w-[36px] h-[50px] fill-tangerine group-hover:fill-tangerine transition-colors duration-300">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
            <div className="flex flex-col pt-2">
              <span className="text-xl/[120%] text-tangerine font-semibold font-second">
                MBK MASH
              </span>
              <span className="text-sm/[120%] text-white font-second">
                SMART LOCKERS
              </span>
            </div>
          </div>

          <div className="flex gap-4 1xl:w-1/2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="group"
            >
              <svg className="w-12 h-12 fill-tangerine">
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
              <svg className="w-12 h-12 fill-tangerine">
                <use href="/images/svg/icons.svg#icon-insta" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col order-2">
          <h3 className="self-start leading-[120%] font-medium fond-second mb-4.5">
            Надсилайте свої запитання та пропозиції
          </h3>

          <div className="flex flex-row mb-15">
            <div className="flex flex-col gap-[5px] flex-1 items-start">
              <p className="font-medium leading-[120%] text-mountain-mist">
                Запитання:
              </p>
              <a
                href="mailto:hub@mbk-mash.com"
                className="font-semibold leading-[125%]hover:underline"
              >
                Hub@mbk-mash.com
              </a>
            </div>
            <div className="flex flex-col gap-[5px] flex-1 items-start">
              <p className="font-medium leading-[120%] text-mountain-mist">
                Контакти:
              </p>
              <p className="font-semibold leading-[125%]hover:underline">
                м. Київ, вул. Солом’янська 3
                <span className="block">000 323 22 22</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row 1xl:flex-col mb-9.5">
          <a
            href="#"
            className="w-1/2 text-lg/[126%] tracking-[-0.03em] text-mountain-mist hover:underline"
          >
            Договір оферти
          </a>
          <a
            href="#"
            className="w-1/2 text-lg/[126%] tracking-[-0.03em] text-mountain-mist hover:underline"
          >
            Політика конфіденційності
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <p className="leading-[120%] font-medium text-mountain-mist">
            © 2003–2025 ТОВ «MBK MASH»
          </p>
          <p className="leading-[120%] font-medium text-mountain-mist">
            Всі права захищені. Використання матеріалів сайту можливе тільки з
            посиланням на джерело.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
