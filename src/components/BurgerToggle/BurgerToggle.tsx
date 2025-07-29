import { useEffect } from 'react';
import SmartButton from '../ui/Button/SmartButton';

type BurgerToggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BurgerToggle({ isOpen, setIsOpen }: BurgerToggleProps) {
  // const [isOpen, setIsOpen] = useState(false);

  // Блокуємо scroll при відкритому меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col justify-center items-center w-12 h-12 1xl:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`bg-tangerine block h-0.5 w-12 transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          className={`bg-tangerine block h-0.5 w-12 my-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-tangerine block h-0.5 w-12 transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 -z-1 section bg-cod-black/90 flex flex-col  gap-13 text-4xl/[1] text-boulder-dust 1xl:hidden">
          <div className="flex flex-col items-center h-full mt-[35%] gap-[25%]">
            <div className="flex flex-col gap-13 text-center">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-tangerine transition-colors"
              >
                Інвестору
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-tangerine transition-colors"
              >
                Партнеру
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-tangerine transition-colors"
              >
                Локації
              </a>
            </div>
            <SmartButton
              onClick={() => setIsOpen(false)}
              label="Замовити консультацію"
              variant="secondary"
              className="py-5.5 text-xl/[100%]"
              href="#more-info"
            ></SmartButton>
          </div>
        </div>
      )}
    </>
  );
}
