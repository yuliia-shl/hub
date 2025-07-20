import { faqItems } from '../../data/faq-items';
import AskUsButton from '../AskUsButton/AskUsButton';

const FAQ = () => {
  return (
    <section className="pb-40 1xl:pb-55">
      <div className="section flex flex-col pt-8.75 pb-7.5 1xl:pt-0 3xl:pt-0 4xl:pt-2.5 1xl:flex-row 1xl:justify-between 1xl:items-start 1xl:gap-24 4xl:gap-55">
        {/* Left: h2 + desktop-only button */}
        <div className="flex flex-col 1xl:items-start 1xl:w-[362px] 3xl:w-[488px] 4xl:w-[534px] 1xl:gap-8.5 3xl:gap-12.5 4xl:gap-10.5 4xl:pt-2.5 mb-12 1xl:mb-0">
          <h2 className="text-[32px]/[110%] 1xl:text-[42px] 3xl:text-5xl 4xl:text-[62px] font-second font-medium text-center 1xl:text-left tracking-[-0.02em]">
            Часті питання
          </h2>
          <AskUsButton
            targetId="more-info-section"
            className="hidden 1xl:flex"
          />
        </div>
        {/*Right: list */}
        <ul className="flex flex-col w-full gap-21 1xl:gap-14.5 mb-25 1xl:mb-19 3xl:mb-10 4xl:mb-20 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1486px]">
          {faqItems.map(({ title, text }, i) => (
            <li
              key={i}
              className="border-t border-tuatara pt-4 1xl:pt-8 flex flex-col 1xl:flex-row gap-3 4xl:gap-4.5 1xl:items-start"
            >
              <h3 className="text-[22px]/[145%] 1xl:leading-[173%] 3xl:text-[26px]/[146%] font-second font-semibold tracking-[-0.03em] 1xl:w-1/2">
                {title}
              </h3>
              <p className="text-lg/[122%] 1xl:text-xl/[110%] text-boulder-dust 1xl:w-1/2">
                {text}
              </p>
            </li>
          ))}
        </ul>
        {/* Mobile-only button под списком */}
        <AskUsButton targetId="more-info-section" className="flex 1xl:hidden" />
      </div>
    </section>
  );
};
export default FAQ;
