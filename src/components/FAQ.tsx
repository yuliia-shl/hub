const faqItems = [
  {
    title: 'Чому це повинно працювати?',
    text: 'Ми створюємо міцну екосистему, об’єднуючи різні сфери діяльності в єдину рішення для взаємопов’язаних операцій.',
  },
  {
    title: (
      <>
        Чи несуть партнери-локації{' '}
        <span className="block">репутаційні ризики?</span>
      </>
    ),
    text: 'Ні, MVK MASH забезпечує повний контроль життєдіяльності ХАБа. Наш відділ підтримки користувача 24/7 на зв’язку і готовий допомогти у вирішенні будь-якої ситуації. Зв’язок забезпечується напряму через систему блоку керування.',
  },
  {
    title: 'Партнери мають самостійно обслуговувати модулі?',
    text: 'Ні. Кур’єр MVK забезпечує всю логістику та обслуговування системи.',
  },
];

const FAQ = () => {
  return (
    <section className="section pt-[35px] pb-[30px] mb-[254px] 1xl:mb-[227px]">
      <div className="flex flex-col 1xl:flex-row 1xl:justify-between 1xl:items-start 1xl:gap-[95px]">
        {/*Left: h2 + button */}
        <div className="flex flex-col 1xl:items-start 1xl:w-[362px] 1xl:gap-[34px]">
          <h2 className="text-[32px] 1xl:text-[42px] font-second font-medium text-center 1xl:text-left leading-[110%] tracking-[-0.02em] mb-[49px] 1xl:mb-0">
            Часті питання
          </h2>
          <div className="flex items-center justify-center gap-[11px] 1xl:gap-3">
            <button className="flex items-center justify-center py-6 1xl:py-[26px] px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine 1xl:border-gray text-tangerine 1xl:text-gray text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition 1xl:hover:border-tangerine 1xl:hover:text-tangerine">
              Запитати в нас{' '}
            </button>
            <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine 1xl:stroke-gray">
              <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
            </svg>
          </div>
        </div>
        {/*Right: list */}
        <ul className="flex flex-col w-full gap-[84px] 1xl:gap-[58px] mb-25 1xl:mb-[77px] 1xl:max-w-[902px]">
          {faqItems.map(({ title, text }, i) => (
            <li key={i} className="border-t border-tuatara pt-4 1xl:pt-8">
              <div className="flex flex-col 1xl:flex-row gap-3 1xl:items-start">
                <h3 className="text-[22px] font-second font-semibold leading-[145%] 1xl:leading-[173%] tracking-[-0.03em] 1xl:w-1/2">
                  {title}
                </h3>
                <p className="text-[18px] 1xl:text-xl leading-[122%] 1xl:leading-[110%] text-boulder-dust 1xl:w-1/2">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default FAQ;
