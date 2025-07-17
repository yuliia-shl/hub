const Header = () => {
  return (
    <header className="w-full 1xl:mt-10.5 3xl:mt-18 4xl:mt-17">
      <div className="section flex gap-4 justify-between max-h-17 1xl:max-h-14 4xl:max-h-16 h-full items-center bg-black/50 backdrop-blur-[4px]">
        <a href="/">
          <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
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
        <div className="flex items-center">
          <button
            type="button"
            className="flex shrink-1 text-nowrap mr-5.5 items-center justify-center-safe px-8 py-2.5 1xl:py-4 border-1 4xl:border-1.29 border-star-dust rounded-full w-fit max-h-10 max-w-full 1xl:max-h-12 text-lg/4.5 1xl:text-base/4 4xl:text-xl/5 1xl:font-semibold text-star-dust hover:border-tangerine transition-colors hover:text-tangerine hover:bg-fire hover:shadow-lg"
            // onClick={() => setOpenLoginModal(true)}
          >
            Замовити консультацію
          </button>

          <label
            htmlFor="toggle"
            className="flex items-center justify-center h-full cursor-pointer transition-colors 1xl:hidden"
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="hidden"
            />
            <span className="relative flex w-12 h-0.5 bg-tangerine before:absolute before:top-3 before:w-full before:h-full before:bg-tangerine transition-transform duration-300 ease-in-out transform origin-center after:absolute after:-top-3 after:w-full after:h-full after:bg-tangerine"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
