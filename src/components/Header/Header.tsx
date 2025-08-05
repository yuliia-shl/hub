import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import BookModal from '../BookModal/BookModal';
import BurgerToggle from '../BurgerToggle/BurgerToggle';
import SmartButton from '../ui/Button/SmartButton';
import HeaderNav from '../HeaderNav/HeaderNav';


type HeaderProps = {
  setActiveIndex: (index: number) => void;
  hideNav?: boolean;
};

const Header = ({ setActiveIndex, hideNav = false, }: HeaderProps) => {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);


  return (
    <>
      <header className="bg-cod-gray 1xl:bg-transparent relative z-100 w-full  1xl:mt-10.5 3xl:mt-18 4xl:mt-17">
        <div  className="section flex gap-4 py-3.5 1xl:py-0 bg-cod-gray/60 1xl:bg-transparent
    max-h-17 1xl:h-14 4xl:h-16 h-full items-center justify-between"
  >
          <a href="/" className="w-1/3">
            <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
          </a>
          {/* Покажемо навігацію лише якщо hideNav === false */}
          { !hideNav && (
            <HeaderNav
            setActiveIndex={setActiveIndex}
            className="w-1/3 mx-auto"
          />
          )}
          <div className="flex items-center gap-5.5 1xl:w-1/3 justify-between 1xl:justify-end-safe">
            {/* Умовний рендеринг SmartButton */}
            {!isBurgerMenuOpen && ( // Показуємо кнопку, тільки якщо меню не відкрито
              <SmartButton
                type="button"
                onClick={() => setOpenBookModal(true)}
                label="Отримати консультацію"
                variant="primary"
                className="hidden xs:flex text-star-dust border-star-dust text-[18px]/[1] font-normal px-3 py-3"
              />
            )}
            {/* Передаємо стан та функцію для зміни стану в BurgerToggle */}
            <BurgerToggle
              isOpen={isBurgerMenuOpen}
              setIsOpen={setIsBurgerMenuOpen}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </header>

      <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
        <BookModal />
      </Modal>
    </>
  );
};

export default Header;
