import React from 'react';

const AskUsButton = () => (
  <div className="flex items-center justify-center gap-[11px] 1xl:gap-3">
    <button
      type="button"
      className="
        flex items-center justify-center
        py-6 1xl:py-[26px] px-[57px]
        max-w-[280px] max-h-[76px]
        rounded-[45px]
        border border-tangerine 1xl:border-gray
        text-tangerine 1xl:text-gray
        text-[24px] whitespace-nowrap font-semibold tracking-[-0.02em]
        leading-[100%]
        hover:bg-tangerine hover:text-black transition
        1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine
        focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine
      "
    >
      Запитати в нас
    </button>
    <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine 1xl:stroke-gray">
      <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
    </svg>
  </div>
);

export default AskUsButton;
