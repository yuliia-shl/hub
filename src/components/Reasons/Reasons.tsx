const Reasons = () => {
  return (
    <section id="reasons" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row-reverse gap-[108px] 1xl:gap-4 3xl:gap-[122px] 4xl:gap-[108px]">
        <div className="w-full shrink-1 4xl:pt-13 4xl:max-w-[1484px]">
          <h2 className="mb-14.5 1xl:mb-20 3xl:mb-17 4xl:mb-15 font-second text-[32px]/[110%] 1xl:text-[42px] 3xl:text-[54px] 4xl:text-[62px] font-medium text-center 1xl:text-left 1xl:ml-1 3xl:ml-0">
            Чому саме MVK MASH?
          </h2>
          <ul className="grid grid-cols-1 1xl:grid-cols-2 gap-21.5 1xl:gap-x-6.5 4xl:gap-x-32.5 1xl:gap-y-23.5 3xl:gap-y-21.5">
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(01)</p>
              </div>
              <p className="text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                <span className="text-tangerine">13 РОКІВ </span>ЕКСПЕРТИЗИ
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                Власне виробництво та розробка автоматизованих систем — з нуля
                до масштабних рішень. <br /> Виготовлення та запуск торгових
                об’єктів.
              </p>
            </li>
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(02)</p>
              </div>
              <p className="text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                <span className="text-tangerine">513 ПРОЄКТІВ </span>У 74
                КРАЇНАХ
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                Наші технології вже працюють у всьому світі — від Європи до
                Азії.
              </p>
            </li>
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(03)</p>
              </div>
              <p className="text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                ПАРТНЕРИ В{' '}
                <span className="text-tangerine">10+ КРАЇНАХ ЄС </span>
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                Нам довіряють компанії з Іспанії, Португалії, Греції, Чехії,
                Польщі та інших країн.
              </p>
            </li>
          </ul>
        </div>

        <div className="relative max:w-[520px] 1xl:w-[440px] 3xl:w-[460px] 4xl:w-[646px] shrink-0">
          <img
            src="/images/png/smart-locker.png"
            className="absolute top-[-16px] 1xl:top-15 3xl:top-7 4xl:top-3.5 -left-4 xs:left-10 1xl:left-8 3xl:left-8.5 4xl:left-21.5 max-w-[286px] 1xl:w-[244px] 3xl:w-[254px] 4xl:w-[306px] xs:h-[330px] 1xl:h-[280px] 3xl:h-[294px] 4xl:h-[352px] rotate-[-6deg] opacity-[0.26]"
          />
          <img
            src="/images/png/smart-locker.png"
            className="absolute top-[214px] xs:top-[206px] 1xl:top-[248px] 3xl:top-[226px] 4xl:top-[254px] left-10 xs:left-1/2 xs:-translate-x-1/2 max-w-[362px] 1xl:w-[308px] 3xl:w-[322px] 4xl:w-[386px] xs:h-[417px] 1xl:h-[354px] 3xl:h-[370px] 4xl:h-[445px] rotate-[29deg] z-2"
          />
          {/* Spacer для забезпечення висоти секції */}
          <div className="invisible w-full min-h-[596px] 1xl:h-[660px] 3xl:h-[638px] 4xl:h-[710px] 1xl:pt-12.5 3xl:pt-0 4xl:pl-23" />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
