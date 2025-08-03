import SmartButton from '../ui/Button/SmartButton';

export default function Product() {
  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row-reverse 1xl:justify-end">
        <h2 className="font-semibold font-second text-[32px]/[110%] text-mercury-white hidden">
          Product Page
        </h2>
        <div className="px-21 py-12 1xl:py-0 1xl:flex 1xl:items-center 1xl:justify-center">
          <svg className="w-[350px] h-[244px] 1xl:w-[444px] 1xl:h-[308px] 3xl:w-[588px] 3xl:h-[488px] 4xl:w-[754px] 4xl:h-[524px] mx-auto">
            <use href="/images/svg/icons-prod.svg#icon-product-min" />
          </svg>
        </div>
        <div className="flex flex-col 1xl:w-1/2 3xl:justify-center">
          <ul className="flex flex-wrap 1xl:flex-col gap-y-4.5 4xl:gap-y-14 mb-15 1xl:mb-27 4xl:mb-35 1xl:gap-10.5">
            <li className="flex flex-col gap-2 4xl:gap-3 max-w-[260px] w-1/2">
              <h4 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Тип комбінації:
              </h4>
              <p className="font-semibold text-xl/[140%] 1xl:text-[26px]/[108%] 4xl:text-[34px]/[108%]  text-mercury-white">
                MultiVita Hub
              </p>
            </li>
            <li className="flex flex-col gap-2 4xl:gap-3 max-w-[260px] w-1/2">
              <h4 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Розмір:
              </h4>
              <p className="font-semibold text-xl/[140%] 1xl:text-[26px]/[108%] 4xl:text-[34px]/[108%] text-mercury-white">
                Базовий
              </p>
            </li>
            <li className="flex flex-col gap-2 4xl:gap-3">
              <h4 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Склад:
              </h4>
              <p className="font-semibold text-xl/[140%] 1xl:text-[26px]/[108%] 4xl:text-[34px]/[108%] text-mercury-white">
                БК, Флоромат, Хімчистка, Ячейки з підігрівом
              </p>
            </li>
          </ul>
          <div className="flex gap-2 4xl:gap-5">
            <span className="flex justify-center items-center w-13 h-13 4xl:w-16 4xl:h-16 bg-cod-gray rounded-full border-tangerine border">
              <svg className="w-6 h-6 4xl:w-8 4xl:h-8 stroke-tangerine rotate-180">
                <use href="/images/svg/icons.svg#icon-arrow-right" />
              </svg>
            </span>
            <SmartButton
              className="1xl:max-w-70 4xl:max-w-90 4xl:max-h-16 1xl:w-full grow-1 1xl:grow-0 font-extrabold"
              label="Дізнатись більше"
              // href="/product"
              variant="secondary"
            />
            <span className="flex justify-center items-center w-13 h-13 4xl:w-16 4xl:h-16 bg-cod-gray rounded-full border-tangerine border">
              <svg className="w-6 h-6 4xl:w-8 4xl:h-8 stroke-tangerine">
                <use href="/images/svg/icons.svg#icon-arrow-right" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
