import { useState } from 'react';
import SmartButton from '../ui/Button/SmartButton';
import { businessForModal } from '../../data/bookModal';
import { useForm } from 'react-hook-form';
import {
  bookModalSchema,
  type BookModalSchemaType,
} from '../../validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';

const BookModal = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const inputClass =
    'form-book w-full bg-transparent border-b-[2px] border-mine-shaft pt-6.5 pb-3 focus:outline-none focus:border-boulder-light text-xl/[100%] peer caret-tuatara';
  const errorClass =
    'text-persian-red text-sm/[100%] tracking-[-0.02em] font-medium mt-2';

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<BookModalSchemaType>({
    resolver: zodResolver(bookModalSchema),
    mode: 'onChange',
    defaultValues: {
      role: 'Партнер',
    },
  });

  const onSubmit = (data: BookModalSchemaType) => {
    const finalData = {
      ...data,
      role: data.role,
      name: data.name.replace(/\s+/g, ' ').trim(), //It replaces all sequences of whitespace characters (including spaces, tabs, newlines, etc.) with a single space.
      phone: data.phone,
      email: data.email.toLowerCase(),
      question: data.question.trim(),
    };

    console.log('Sending data:', finalData);
  };

  return (
    <div>
      <ul className="mx-auto flex border border-masala-light rounded-full bg-cod-gray mb-5 1xl:max-w-[600px]">
        {businessForModal.map((business, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={index} className="w-full">
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setValue('role', business.role, { shouldValidate: true });
                }}
                className={`flex items-center justify-center p-4.5 border-masala-light rounded-full transition-colors duration-300 w-full h-full
                     ${
                       isActive
                         ? 'bg-woodsmoke-light text-tangerine border border-x-masala-light '
                         : ' text-star-dust'
                     }`}
              >
                <span
                  className={`font-second tracking-[-0.02em] text-base/[100%] capitalize 
                      ${!isActive ? 'hidden 1xl:block' : ''}`}
                  {...register('role')}
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col 1xl:flex-1 gap-12 1xl:gap-10 4xl:gap-12"
      >
        <div className="flex flex-col w-full 1xl:flex-row 1xl:gap-3 4xl:gap-5">
          <div className="flex flex-col gap-5 4xl:gap-14 mb-18 1xl:mb-0 1xl:w-full">
            <div>
              <label htmlFor="name" className="sr-only">
                Ім’я
              </label>
              <input
                id="name"
                autoComplete="given-name"
                type="text"
                className={inputClass}
                placeholder="Ім’я"
                {...register('name')}
              />
              {errors.name && (
                <p className={errorClass}>*{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Телефон
              </label>
              <input
                id="phone"
                autoComplete="phone"
                type="tel"
                className={inputClass}
                placeholder="Телефон"
                {...register('phone')}
              />
              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                autoComplete="email"
                type="email"
                className={inputClass}
                placeholder="Email"
                {...register('email')}
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xl/[100%] font-medium tracking-[-0.02em] 1xl:w-full 1xl:pt-6 1xl:gap-4">
            <label htmlFor="question" className="text-mercury-white/50">
              Ваше питання
            </label>
            <div>
              <textarea
                id="question"
                className="w-full border-[2px] border-mine-shaft bg-woodsmoke-bright rounded-md py-3 px-3.5 min-h-[166px] focus:outline-none focus:border-boulder-light peer caret-tuatara resize-none 4xl:min-h-[244px]"
                {...register('question')}
              />
              {errors.question && (
                <p className={errorClass}>{errors.question.message}</p>
              )}
            </div>
          </div>
        </div>

        <SmartButton
          label="Надіслати запит"
          type="submit"
          variant="secondary"
          className={twMerge(
            'min-w-[280px] mx-auto py-5.5 text-2xl/[100%]',
            isValid ? 'opacity-100' : 'opacity-50'
          )}
        />
      </form>
    </div>
  );
};

export default BookModal;
