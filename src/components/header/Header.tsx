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
          <ul className="flex 1xl:gap-x-31 1xl:text-xl/5 3xl:gap-38 4xl:gap-52 4xl:text-2xl/6 text-boulder-dust/77 font-bold items-center h-full tracking-[-0.02em]">
            <li className="hover:text-gallery-white hover:text-exstrabold">
              <a href="#">Інвестору</a>
            </li>
            <li className="hover:text-gallery-white hover:text-exstrabold">
              <a href="#about">Партнеру</a>
            </li>
            <li className="hover:text-gallery-white hover:text-exstrabold">
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
