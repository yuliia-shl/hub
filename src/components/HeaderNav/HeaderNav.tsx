type HeaderNavProps = {
  setActiveIndex: (index: number) => void;
  className?: string;
};

export default function HeaderNav({ setActiveIndex }: HeaderNavProps) {
  const scrollToBusiness = (index: number) => {
    setActiveIndex(index);
    const section = document.getElementById('business');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="hidden 1xl:block 1xl:border-1 4xl:border-1.29 border-woodsmoke-black rounded-full bg-woodsmoke-black/50 backdrop-blur-[4px] max-h-full h-full items-stretch">
        <ul className="flex 1xl:gap-x-31 1xl:text-xl/5 3xl:gap-38 4xl:gap-52 4xl:text-2xl/6 text-boulder-dust/77 font-bold items-center h-full tracking-[-0.02em]">
          <li className="hover:text-gallery-white transition-colors">
            <button
              type="button"
              onClick={() => scrollToBusiness(0)}
              className="py-3"
            >
              Інвестору
            </button>
          </li>
          <li className="hover:text-gallery-white transition-colors">
            <button
              type="button"
              onClick={() => scrollToBusiness(1)}
              className="py-3"
            >
              Партнеру
            </button>
          </li>
          <li className="hover:text-gallery-white transition-colors">
            <button
              type="button"
              onClick={() => scrollToBusiness(2)}
              className="py-3"
            >
              Локаціям
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
