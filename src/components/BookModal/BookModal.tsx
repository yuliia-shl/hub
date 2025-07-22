import { useState } from 'react';
import SmartButton from '../ui/Button/SmartButton';

type BusinessRole = {
  role: 'Інвестор' | 'Партнер' | 'Локації';
  icon: string;
};

export const business: BusinessRole[] = [
  {
    role: 'Інвестор',
    icon: 'money',
  },
  {
    role: 'Партнер',
    icon: 'partner',
  },
  {
    role: 'Локації',
    icon: 'location',
  },
];

const BookModal = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputClass =
    'form-book w-full bg-transparent border-b-[2px] border-mine-shaft pt-7.5 pb-3 focus:outline-none focus:border-boulder-light text-xl/[100%] peer caret-tuatara';

  return (
    <div>
      <ul className="flex border border-masala-light rounded-full bg-cod-gray mb-5">
        {business.map((business, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={index} className="w-full">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-center p-4.5 border-masala-light rounded-full transition-colors duration-300 w-full h-full 1xl:min-h-32 4xl:min-h-41 
                     ${
                       isActive
                         ? 'bg-woodsmoke-light text-tangerine border border-x-masala-light '
                         : ' text-star-dust'
                     }`}
              >
                <span
                  className={`font-second tracking-[-0.02em] text-base/[100%] capitalize 
                      ${!isActive ? 'hidden 1xl:block' : ''}`}
                >
                  {business.role}
                </span>
                <svg
                  className={`w-8.5 h-8.5 fill-boulder-gray 1xl:hidden 
                      ${isActive ? 'hidden' : ''}`}
                >
                  <use href={`/images/svg/icons.svg#icon-${business.icon}`} />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      <form className="flex flex-col 1xl:flex-1 gap-12 ">
        <div className="">
          <div className="flex flex-col gap-5 mb-18">
            <label htmlFor="name" className="sr-only">
              Ім’я
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={inputClass}
              placeholder="Ім’я"
            />

            <label htmlFor="phone" className="sr-only">
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={inputClass}
              placeholder="Телефон"
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              placeholder="Email"
            />
          </div>

          {/* <div className="flex flex-col gap-3 text-xl/[100%] font-medium tracking-[-0.02em]"> */}
          <label htmlFor="question" className="text-mercury-white/50">
            Ваше питання
          </label>
          <textarea
            id="question"
            className="w-full bg-transparent border-[2px] border-mine-shaft rounded-md py-3 px-3.5 min-h-[166px] focus:outline-none focus:border-boulder-light peer caret-tuatara resize-none"
          />
          {/* </div> */}
        </div>

        {/* <button
          type="submit"
          className="self-center 1xl:self-end p-5.5 rounded-[45px] min-w-[280px] bg-tangerine text-cod-gray text-2xl/[100%] tracking-[-0.02em] whitespace-nowrap font-bold 1xl:hover:bg-chilean-fire 1xl:focus:bg-chilean-fire 1xl:focus:outline-none 1xl:focus-visible:ring-2 1xl:focus-visible:ring-chilean-fire transition-colors duration-300 "
        >
          Надіслати запит
        </button> */}
        <SmartButton
          label="Надіслати запит"
          variant="secondary"
          className="opacity-50 min-w-[280px] mx-auto py-5.5"
        />
      </form>
    </div>
  );
};

export default BookModal;
