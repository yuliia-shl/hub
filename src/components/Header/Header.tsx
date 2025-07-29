import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import BookModal from '../BookModal/BookModal';
import BurgerToggle from '../BurgerToggle/BurgerToggle';
import SmartButton from '../ui/Button/SmartButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-100 w-full mt-3.5 1xl:mt-10.5 3xl:mt-18 4xl:mt-17 mb-15">
        <div className="section flex gap-4 justify-between max-h-17 1xl:h-14 4xl:h-16 h-full items-center">
          <a href="/">
            <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
          </a>
          <nav className="hidden 1xl:block  1xl:px-15 4xl:px-14 1xl:border-1 4xl:border-1.29 border-woodsmoke-black rounded-full bg-woodsmoke-black/50 backdrop-blur-[4px] max-h-full h-full items-stretch">
            <ul className="flex 1xl:gap-x-31 1xl:text-xl/5 3xl:gap-38 4xl:gap-52 4xl:text-2xl/6 text-boulder-dust/77 font-bold items-center h-full tracking-[-0.02em]">
              <li className="hover:text-gallery-white transition-colors">
                <a href="#" className="py-3">
                  Інвестору
                </a>
              </li>
              <li className="hover:text-gallery-white transition-colors">
                <a href="#about" className="py-3">
                  Партнеру
                </a>
              </li>
              <li className="hover:text-gallery-white transition-colors">
                <a href="#contact" className="py-3">
                  Локації
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5.5">
            {/* Умовний рендеринг SmartButton */}
            {!isBurgerMenuOpen && ( // Показуємо кнопку, тільки якщо меню не відкрито
              <SmartButton
                type="button"
                onClick={() => setOpenBookModal(true)}
                label="Замовити консультацію"
                variant="primary"
                className="text-star-dust border-star-dust text-[18px]/[1] font-normal px-8 py-3"
              />
            )}
            {/* Передаємо стан та функцію для зміни стану в BurgerToggle */}
            <BurgerToggle
              isOpen={isBurgerMenuOpen}
              setIsOpen={setIsBurgerMenuOpen}
            />
          </div>
        </div>
      </header>

      {isBurgerMenuOpen && (
        <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
      )}

      <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
        <BookModal />
      </Modal>
    </>
  );
};

export default Header;
