/*FLEX*/

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
      <div className="flex flex-col 1xl:flex-row 1xl:justify-between 1xl:items-start 1xl:gap-[95px] 3xl:gap-[97px] 4xl:[219px]">
        {/*Left: h2 + button */}
        <div className="flex flex-col 1xl:items-start 1xl:w-[362px] 3xl:w-[487px] 4xl:w-[534px] 1xl:gap-[34px] 3xl:gap-[58px] 4xl:gap-[43px] 4xl:pt-[10px]">
          <h2 className="text-[32px] 1xl:text-[42px] 3xl:text-5xl font-second font-medium text-center 1xl:text-left leading-[110%] tracking-[-0.02em] mb-[49px] 1xl:mb-0">
            Часті питання
          </h2>
          <div className="flex items-center justify-center gap-[11px] 1xl:gap-3">
            <button className="flex items-center justify-center py-6 1xl:py-[26px] px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine 1xl:border-gray text-tangerine 1xl:text-gray text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition 1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine">
              Запитати в нас{' '}
            </button>
            <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine 1xl:stroke-gray">
              <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
            </svg>
          </div>
        </div>
        {/*Right: list */}
        <ul className="flex flex-col w-full gap-[84px] 1xl:gap-[58px] 4xl:gap-[64px] mb-25 1xl:mb-[77px] 3xl:mb-10 4xl:mb-20 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1487px]">
          {faqItems.map(({ title, text }, i) => (
            <li key={i} className="border-t border-tuatara pt-4 1xl:pt-8">
              <div className="flex flex-col 1xl:flex-row gap-3 1xl:items-start">
                <h3 className="text-[22px] 3xl:text-[26px] font-second font-semibold leading-[145%] 3xl:leading-[146%] 1xl:leading-[173%] tracking-[-0.03em] 1xl:w-1/2">
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

{
  /*перший код*/
}
// const faqItems = [
//   {
//     title: 'Чому це повинно працювати?',
//     text: 'Ми створюємо міцну екосистему, об’єднуючи різні сфери діяльності в єдину рішення для взаємопов’язаних операцій.',
//   },
//   {
//     title: (
//       <>
//         Чи несуть партнери-локації{' '}
//         <span className="block">репутаційні ризики?</span>
//       </>
//     ),
//     text: 'Ні, MVK MASH забезпечує повний контроль життєдіяльності ХАБа. Наш відділ підтримки користувача 24/7 на зв’язку і готовий допомогти у вирішенні будь-якої ситуації. Зв’язок забезпечується напряму через систему блоку керування.',
//   },
//   {
//     title: 'Партнери мають самостійно обслуговувати модулі?',
//     text: 'Ні. Кур’єр MVK забезпечує всю логістику та обслуговування системи.',
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="section pt-[35px] pb-[30px] mb-[254px]">
//       <h2 className="text-[32px] font-second font-medium text-center leading-[110%] tracking-[-0.02em] mb-[49px]">
//         Часті питання
//       </h2>

//       <ul className="flex flex-col w-full gap-[84px] mb-25">
//         {faqItems.map(({ title, text }, i) => (
//           <li key={i} className="border-t border-tuatara pt-4">
//             <div className="flex flex-col gap-3">
//               <h3 className="text-[22px] font-second font-semibold leading-[145%] tracking-[-0.03em]">
//                 {title}
//               </h3>
//               <p className="text-[18px] leading-[122%] text-boulder-dust">
//                 {text}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center justify-center gap-[11px]">
//         <button className="flex items-center justify-center py-6 px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine text-tangerine text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition focus">
//           Запитати в нас{' '}
//         </button>
//         <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine">
//           <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
//         </svg>
//       </div>
//     </section>
//   );
// };
// export default FAQ;

{
  /*GRID*/
}
// const faqItems = [
//   {
//     title: 'Чому це повинно працювати?',
//     text: 'Ми створюємо міцну екосистему, об’єднуючи різні сфери діяльності в єдину рішення для взаємопов’язаних операцій.',
//   },
//   {
//     title: (
//       <>
//         Чи несуть партнери-локації{' '}
//         <span className="block">репутаційні ризики?</span>
//       </>
//     ),
//     text: 'Ні, MVK MASH забезпечує повний контроль життєдіяльності ХАБа. Наш відділ підтримки користувача 24/7 на зв’язку і готовий допомогти у вирішенні будь-якої ситуації. Зв’язок забезпечується напряму через систему блоку керування.',
//   },
//   {
//     title: 'Партнери мають самостійно обслуговувати модулі?',
//     text: 'Ні. Кур’єр MVK забезпечує всю логістику та обслуговування системи.',
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="section pt-[35px] pb-[30px] mb-[254px] 1xl:mb-[227px]">
//       <div className="grid grid-cols-1 1xl:grid-cols-[auto,1fr] 1xl:gap-[95px] 3xl:gap-[97px] 4xl:gap-[219px] ">
//         {/* h2 */}
//         <h2 className="1xl:grid-row-[minmax(0,_1fr)_1fr] row-span-2 col-span-1 text-[32px] 1xl:text-[42px] 3xl:text-5xl font-second font-medium text-center 1xl:text-left leading-[110%] tracking-[-0.02em] mb-[49px] 1xl:mb-0 1xl:row-start-1 1xl:row-end-2 1xl:col-start-1">
//           Часті питання
//         </h2>

//         {/* list */}
//         <ul className="flex flex-col w-full gap-[84px] 1xl:gap-[58px] 4xl:gap-[64px] mb-25 1xl:mb-[77px] 3xl:mb-10 4xl:mb-20 1xl:row-start-1 1xl:row-end-3 1xl:col-start-2 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1487px]">
//           {faqItems.map(({ title, text }, i) => (
//             <li key={i} className="border-t border-tuatara pt-4 1xl:pt-8">
//               <div className="flex flex-col 1xl:flex-row gap-3 1xl:items-start">
//                 <h3 className="text-[22px] 3xl:text-[26px] font-second font-semibold leading-[145%] 3xl:leading-[146%] 1xl:leading-[173%] tracking-[-0.03em] 1xl:w-1/2">
//                   {title}
//                 </h3>
//                 <p className="text-[18px] 1xl:text-xl leading-[122%] 1xl:leading-[110%] text-boulder-dust 1xl:w-1/2">
//                   {text}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* button */}
//         <div className="flex items-center justify-center gap-[11px] 1xl:gap-3 1xl:row-start-1 1xl:col-start-1 1xl:justify-start">
//           <button className="flex items-center justify-center py-6 1xl:py-[26px] px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine 1xl:border-gray text-tangerine 1xl:text-gray text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition 1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine">
//             Запитати в нас
//           </button>
//           <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine 1xl:stroke-gray">
//             <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

{
  /*ДУБЛЮВАННЯ*/
}
// const faqItems = [
//   {
//     title: 'Чому це повинно працювати?',
//     text: 'Ми створюємо міцну екосистему, об’єднуючи різні сфери діяльності в єдину рішення для взаємопов’язаних операцій.',
//   },
//   {
//     title: (
//       <>
//         Чи несуть партнери-локації{' '}
//         <span className="block">репутаційні ризики?</span>
//       </>
//     ),
//     text: 'Ні, MVK MASH забезпечує повний контроль життєдіяльності ХАБа. Наш відділ підтримки користувача 24/7 на зв’язку і готовий допомогти у вирішенні будь-якої ситуації. Зв’язок забезпечується напряму через систему блоку керування.',
//   },
//   {
//     title: 'Партнери мають самостійно обслуговувати модулі?',
//     text: 'Ні. Кур’єр MVK забезпечує всю логістику та обслуговування системи.',
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="section pt-[35px] pb-[30px] mb-[254px] 1xl:mb-[227px]">
//       <div
//         className="1xl:grid 1xl:grid-cols-[auto_1fr] 1xl:gap-[95px] 3xl:gap-[97px] 4xl:gap-[219px] flex flex-col"
//         style={{ gridTemplateAreas: `"left list"` }}
//       >
//         {/* h2 + кнопка для десктопу */}
//         <div
//           className="flex flex-col items-center gap-6 1xl:items-start 1xl:w-[362px] 3xl:w-[487px] 4xl:w-[534px] mb-[49px] 1xl:mb-0"
//           style={{ gridArea: 'left' }}
//         >
//           <h2 className="text-[32px] 1xl:text-[42px] 3xl:text-5xl font-second font-medium text-center 1xl:text-left leading-[110%] tracking-[-0.02em]">
//             Часті питання
//           </h2>

//           {/* Кнопка — тільки для 1xl+ */}
//           <div className="hidden 1xl:flex items-center justify-center gap-[11px] 1xl:justify-start">
//             <button className="flex items-center justify-center py-6 1xl:py-[26px] px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine 1xl:border-gray text-tangerine 1xl:text-gray text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition 1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine">
//               Запитати в нас
//             </button>
//             <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine 1xl:stroke-gray">
//               <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
//             </svg>
//           </div>
//         </div>

//         {/* Список */}
//         <ul
//           className="flex flex-col w-full gap-[84px] 1xl:gap-[58px] 4xl:gap-[64px] mb-[30px] 1xl:mb-[77px] 3xl:mb-10 4xl:mb-20 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1487px]"
//           style={{ gridArea: 'list' }}
//         >
//           {faqItems.map(({ title, text }, i) => (
//             <li key={i} className="border-t border-tuatara pt-4 1xl:pt-8">
//               <div className="flex flex-col 1xl:flex-row gap-3 1xl:items-start">
//                 <h3 className="text-[22px] 3xl:text-[26px] font-second font-semibold leading-[145%] 3xl:leading-[146%] 1xl:leading-[173%] tracking-[-0.03em] 1xl:w-1/2">
//                   {title}
//                 </h3>
//                 <p className="text-[18px] 1xl:text-xl leading-[122%] 1xl:leading-[110%] text-boulder-dust 1xl:w-1/2">
//                   {text}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Кнопка — тільки для мобілки (під списком) */}
//         <div className="mt-10 flex items-center justify-center gap-[11px] 1xl:hidden">
//           <button className="flex items-center justify-center py-6 px-[57px] max-w-[280px] max-h-[76px] rounded-[45px] border border-tangerine text-tangerine text-[24px] whitespace-nowrap font-second font-semibold tracking-[-0.02em] leading-[100%] hover:bg-tangerine hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine">
//             Запитати в нас
//           </button>
//           <svg className="w-[37px] h-[41px] stroke-[2px] stroke-tangerine">
//             <use href="/images/svg/icons.svg#icon-arrow-down-to-the-left" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
