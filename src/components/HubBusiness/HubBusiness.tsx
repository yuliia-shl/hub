import { useState } from 'react';
import { business } from '../../data/hub-business';

const HubBusiness = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { advantages } = business[activeIndex];
  const getButtonWidth = (index: number, activeIndex: number): string => {
    const isActive = index === activeIndex;
    if (isActive) return 'w-[372px]';
    return 'w-[68px]';
  };

  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section pt-3.5">
        <h2 className="text-[34px]/[110%] 1xl:text-[54px] 4xl:text-[62px] tracking-[-0.02em] font-second text-center text-mercury-white mb-8">
          Ваш бізнес з HUB
        </h2>
        <div className="flex flex-col gap-1">
          <ul className="flex gap-1.5 text-tangerine">
            {business.map((business, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center rounded-lg justify-center px-4 min-h-16 ${getButtonWidth(
                      index,
                      activeIndex
                    )} 
                     ${isActive ? 'bg-woodsmoke-black' : 'bg-cod-dark'}`}
                  >
                    {isActive ? (
                      <span className="font-second tracking-[-0.02em] text-[26px]/[110%] capitalize">
                        {business.role}
                      </span>
                    ) : (
                      <svg className="w-8.5 h-8.5 fill-boulder-gray stroke-boulder-gray 1xl:hidden">
                        <use
                          href={`/images/svg/icons.svg#icon-${business.icon}`}
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="px-6.5 py-3 bg-cod-dark rounded-lg">
            <ul className="flex flex-col gap-7 mb-14">
              {advantages.map((advantage, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={index}>
                    <p className="flex gap-3 items-center text-2xl/[117%] font-semibold text-mercury-white">
                      <span className="text-4xl/[183%] font-extralight text-masala-gray">
                        {index + 1}
                      </span>
                      <span>{advantage.title}</span>
                    </p>
                    <p className="text-base/[137%] text-boulder-dust">
                      {advantage.description}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div>
              <div className="text-base/[137%] font-medium text-silver mb-21">
                <p className="mb-5">
                  Ми завжди раді надати консультацію нашим майбутнім інвесторам
                  і відповісти на всі Ваші питання!
                </p>
                <p className="">
                  Також ви можете ознайомитись з нашими пропозиціями в
                  презентації.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="p-4 max-w-13 border-1 rounded-full border-tangerine">
                  <svg className="w-5 h-5 fill-tangerine">
                    <use href="/images/svg/icons.svg#icon-pdf" />
                  </svg>
                </p>
                <button className="flex items-center justify-between w-full rounded-full bg-tangerine text-base/1 tracking-[-0.02em] text-cod-gray font-bold px-6 py-4.5">
                  <span>Інвестувати</span>
                  <svg className="w-4.5 h-4.5 stroke-cod-gray">
                    <use
                      href={`/images/svg/icons.svg#icon-arrow-up-right`}
                    ></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubBusiness;
