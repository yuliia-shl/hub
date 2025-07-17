const Reasons = () => {
  return (
    <section className="section mb-[188px] flex flex-col 1xl:flex-row-reverse gap-[108px] 1xl:gap-4 3xl:gap-[122px] 4xl:gap-[108px]">
      <div className="4xl:pt-13">
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
            <p className="text-xl/[110%] text-boulder-dust">
              Власне виробництво та розробка автоматизованих систем — з нуля до
              масштабних рішень. Виготовлення та запуск торгових об’єктів.
            </p>
          </li>
          <li className=" border-t border-t-tuatara/75 pt-4.5 1xl:pt-10">
            <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
              <p>Причина </p>
              <p>(02)</p>
            </div>
            <p className="text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
              <span className="text-tangerine">513 ПРОЄКТІВ </span>У 74 КРАЇНАХ
            </p>
            <p className="text-xl/[110%] text-boulder-dust">
              Наші технології вже працюють у всьому світі — від Європи до Азії.
            </p>
          </li>
          <li className=" border-t border-t-tuatara/75 pt-4.5 1xl:pt-10">
            <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
              <p>Причина </p>
              <p>(03)</p>
            </div>
            <p className="text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
              ПАРТНЕРИ В <span className="text-tangerine">10+ КРАЇНАХ ЄС </span>
            </p>
            <p className="text-xl/[110%] text-boulder-dust">
              Нам довіряють компанії з Іспанії, Португалії, Греції, Чехії,
              Польщі та інших країн.
            </p>
          </li>
        </ul>
      </div>
      <div className="1xl:w-[440px] 3xl:w-[460px] 4xl:w-[646px] 1xl:h-[660px] 3xl:h-[638px] 4xl:h-[710px] 1xl:pt-12.5 3xl:pt-0 4xl:pl-23 shrink-0">
        <img
          src="/images/png/smart-locker.png"
          className="1xl:w-[308px] 3xl:w-[322px] 1xl:h-[354px] 3xl:h-[370px] rotate-[29deg]"
        />
      </div>
    </section>
  );
};

export default Reasons;
