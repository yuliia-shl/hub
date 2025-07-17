const Header = () => {
  return (
    <header>
      <div className="section flex 1xl:justify-between max-h-17 h-full max-w-full w-full items-center 1xl:mt-10.5 3xl:mt-18 4xl:mt-17 sticky top-10 z-50 border-boulder-dust border-2">
        <a href="/">
          <svg className="w-9.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
            <use href="/images/svg/icons.svg#icon-logo" />
          </svg>
        </a>
        <nav className="hidden 1xl:block py-6">
          <ul className="flex 1xl:gap-x-31 1xl:text-xl/5 3xl:gap-38 4xl:gap-52 4xl:text-2xl/6 text-boulder-dust/77 font-bold items-center h-full tracking-[-0.02em]">
            <li className="hover:text-gallery-white hover:text-exstrabold transition-colors">
              <a href="#">Інвестору</a>
            </li>
            <li className="hover:text-gallery-white hover:text-exstrabold transition-colors">
              <a href="#about">Партнеру</a>
            </li>
            <li className="hover:text-gallery-white hover:text-exstrabold transition-colors">
              <a href="#contact">Локації</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between 1xl:gap-x-10 4xl:gap-x-16 h-full w-full max-w-70 1xl:max-w-80 4xl:max-w-100">
          <button
            type="button"
            className="flex items-center justify-center-safe px-8 py-2.5 1xl:py-4 border-1 4xl:border-1.29 border-star-dust rounded-full max-w-70 max-h-10 4xl:max-w-80 w-full 1xl:max-h-12 text-lg/4.5 1xl:text-base/4 4xl:text-xl/5 1xl:font-semibold text-star-dust hover:border-tangerine transition-colors hover:text-tangerine hover:bg-fire hover:shadow-lg"
            // onClick={() => setOpenLoginModal(true)}
          >
            Замовити консультацію
          </button>
          <label
            htmlFor="toggle"
            className="flex flex-col items-center justify-center h-full w-full cursor-pointer transition-colors 1xl:hidden"
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="hidden"
            />
            <span className="relative flex w-12 h-0.75 bg-tangerine before:absolute before:top-3 before:w-full before:h-full before:bg-tangerine transition-transform duration-300 ease-in-out transform origin-center after:absolute after:-top-3 after:w-full after:h-full after:bg-tangerine"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
