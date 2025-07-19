const MoreInfoRequest = () => {
  return (
    <section className="pt-10.5 pb-[55px] 1xl:py-12.75 4xl:py-28.5 mb-48.5 1xl:mb-35 4xl:mb-66.25">
      <div className="section bg-cod-dark rounded-[26px] flex flex-col 1xl:flex-row gap-18">
        {/* Ліва колонка: заголовок + опис */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            Потрібно більше інформації?
          </h2>
          <p className="text-sm text-gray-400">
            Отримайте детальну презентацію про компанію та 40+ реалізованих
            проєктів
          </p>
        </div>

        {/* Права колонка: форма */}
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs text-gray-300 mb-1">
              Ім’я
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-orange-500 text-white"
              placeholder="Ваше ім’я"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs text-gray-300 mb-1">
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-orange-500 text-white"
              placeholder="+380 XX XXX XXXX"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-orange-500 text-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Кнопка: ліворуч на моб, праворуч на десктопі */}
          <div className="mt-4 flex justify-start lg:justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-600 transition"
            >
              Напишіть нам
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MoreInfoRequest;
