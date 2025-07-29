import { useEffect } from 'react';
import SmartButton from '../ui/Button/SmartButton';

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  //   const [isOpen, setIsOpen] = useState(false);

  // Блокуємо scroll при відкритому меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
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
          className="text-lg/4.5 1xl:text-base/4 4xl:text-xl/5 1xl:font-semibold text-star-dust hover:border-tangerine transition-colors hover:text-tangerine hover:bg-fire hover:shadow-lg"
        ></SmartButton>
      </div>
    </div>
  );
}
