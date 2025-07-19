import AskUsButton from './AskUsButton';

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
    <section className="pt-8.75 pb-7.5 mb-[254px] 1xl:mb-[227px]">
      <div className="section flex flex-col 1xl:flex-row 1xl:justify-between 1xl:items-start 1xl:gap-[95px] 3xl:gap-[97px] 4xl:gap-[219px]">
        {/* Left: h2 + desktop-only button */}
        <div className="flex flex-col 1xl:items-start 1xl:w-[362px] 3xl:w-[487px] 4xl:w-[534px] 1xl:gap-8.5 3xl:gap-14.5 4xl:gap-10.75 4xl:pt-2.5">
          <h2 className="text-[32px] 1xl:text-[42px] 3xl:text-5xl 4xl:text-[62px] font-second font-medium text-center 1xl:text-left leading-[110%] tracking-[-0.02em] mb-[49px] 1xl:mb-0">
            Часті питання
          </h2>
          <div className="hidden 1xl:flex">
            <AskUsButton targetId="more-info-section" />
          </div>
        </div>
        {/*Right: list */}
        <ul className="flex flex-col w-full gap-21 1xl:gap-14.5 mb-25 1xl:mb-19.25 3xl:mb-10 4xl:mb-20 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1487px]">
          {faqItems.map(({ title, text }, i) => (
            <li key={i} className="border-t border-tuatara pt-4 1xl:pt-8">
              <div className="flex flex-col 1xl:flex-row gap-3 4xl:gap-4.5 1xl:items-start">
                <h3 className="text-[22px] 3xl:text-[26px] font-second font-semibold leading-[145%] 3xl:leading-[146%] 1xl:leading-[173%] tracking-[-0.03em] 1xl:w-1/2">
                  {title}
                </h3>
                <p className="text-lg leading-[122%] 1xl:text-xl 1xl:leading-[110%] text-boulder-dust 1xl:w-1/2">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {/* Mobile-only button под списком */}
        <div className="flex items-center justify-center gap-[11px] mt-10 1xl:hidden">
          <AskUsButton targetId="more-info-section" />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
