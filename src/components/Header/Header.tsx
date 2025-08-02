import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import BookModal from '../BookModal/BookModal';
import BurgerToggle from '../BurgerToggle/BurgerToggle';
import SmartButton from '../ui/Button/SmartButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderNav from '../HeaderNav/HeaderNav';

type HeaderProps = {
  setActiveIndex: (index: number) => void;
};

const Header = ({ setActiveIndex }: HeaderProps) => {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-100 w-full mt-3.5 1xl:mt-10.5 3xl:mt-18 4xl:mt-17 mb-15">
        <div className="section flex gap-4 max-h-17 1xl:h-14 4xl:h-16 h-full items-center">
          <a href="/" className="w-1/3">
            <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
          </a>
          <HeaderNav
            setActiveIndex={setActiveIndex}
            className="w-1/3 mx-auto"
          />
          <div className="flex items-center gap-5.5 1xl:w-1/3 justify-end-safe">
            {/* Умовний рендеринг SmartButton */}
            {!isBurgerMenuOpen && ( // Показуємо кнопку, тільки якщо меню не відкрито
              <SmartButton
                type="button"
                onClick={() => setOpenBookModal(true)}
                label="Замовити консультацію"
                variant="primary"
                className="hidden [@media(min-width:440px)]:flex text-star-dust border-star-dust text-[18px]/[1] font-normal px-3 py-3 w-xl:text-[18px]"
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
        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          setIsOpen={setIsBurgerMenuOpen}
          setActiveIndex={setActiveIndex}
        />
      )}

      <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
        <BookModal />
      </Modal>
    </>
  );
};

export default Header;
