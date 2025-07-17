const Header = () => {
  return (
    <header>
      <div className="section flex justify-between max-h-14.5">
        <a href="">
          <svg>
            <use></use>
          </svg>
        </a>
        <nav className="xs:hidden 1xl:block">
          <ul className="flex 1xl:gap-x-31 1xl:text-xl 3xl:gap-38 4xl:gap-52 4xl:text-2xl font-bold text-boulder-dust/77 items-center h-full">
            <li className="hover:text-gallery-white">
              <a href="#">Інвестору</a>
            </li>
            <li className="hover:text-gallery-white">
              <a href="#about">Партнеру</a>
            </li>
            <li className="hover:text-gallery-white">
              <a href="#contact">Локації</a>
            </li>
          </ul>
        </nav>
        <button>Замовити консультацію</button>
      </div>
    </header>
  );
};

export default Header;
