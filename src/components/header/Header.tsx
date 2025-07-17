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
          <ul className="flex 1xl:gap-x-31 items-center h-full">
            <li>
              <a href="#">Інвестору</a>
            </li>
            <li>
              <a href="#about">Партнеру</a>
            </li>
            <li>
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
