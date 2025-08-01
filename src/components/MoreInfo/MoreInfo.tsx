import { useForm } from 'react-hook-form';
import SmartButton from '../ui/Button/SmartButton';
import {
  writeUsSchema,
  type WriteUsSchemaType,
} from '../../validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';

const MoreInfo = () => {
  const inputClass =
    'form-write-us w-full bg-transparent border-b-[2px] border-mine-shaft pt-[30px] pb-3 focus:outline-none focus:border-boulder-light text-xl/[100%] peer caret-boulder-dark';
  const errorClass =
    'text-persian-red text-sm/[100%] tracking-[-0.02em] font-medium mt-2';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteUsSchemaType>({
    resolver: zodResolver(writeUsSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: WriteUsSchemaType) => {
    const finalData = {
      ...data,
      name: data.name,
      phone: data.phone,
      email: data.email,
    };

    console.log('Sending data:', finalData);
  };

  return (
    <section id="more-info" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <div className="pt-10.5 pb-14 px-6 1xl:py-12.5 1xl:px-12 3xl:pr-25 3xl:pl-19 4xl:px-30 4xl:py-28.5 bg-cod-dark rounded-[26px] gap-18 1xl:gap-0 3xl:gap-x-75 4xl:gap-x-81 flex flex-col 1xl:flex-row">
          {/* Ліва колонка: заголовок + опис */}
          <div className="flex flex-col 1xl:flex-1 3xl:max-w-[498px] 4xl:max-w-[680px] 1xl:pt-[34px] 4xl:pt-[6px] justify-start gap-y-3.5 1xl:gap-y-7 3xl:gap-y-11">
            <h2 className="text-[32px]/[119%] 1xl:text-[42px]/[110%] 3xl:text-5xl tracking-[-0.02em] font-medium font-second">
              Потрібно більше <span className="block">інформації?</span>
            </h2>
            <p className="text-lg/[133%] 1xl:text-xl/[120%] text-boulder-dust">
              Отримайте детальну презентацію{' '}
              <span className="block">
                про компанію та 40+ реалізованих проєктів
              </span>
            </p>
          </div>

          {/* Права колонка: форма */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col 1xl:flex-1 3xl:max-w-[764px] 4xl:max-w-[996px] gap-18 1xl:gap-12.5"
          >
            <div className="flex flex-col gap-7 1xl:gap-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Ім’я
                </label>
                <input
                  id="name"
                  type="text"
                  className={inputClass}
                  placeholder="Ім’я"
                  autoComplete="given-name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className={errorClass}>
                    *{errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={inputClass}
                  placeholder="Телефон"
                  autoComplete="tel"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className={errorClass}>
                    *{errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="Email"
                  autoComplete="email"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className={errorClass}>
                    *{errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Кнопка: ліворуч на моб, праворуч на десктопі */}
            <SmartButton
              label="Напишіть нам"
              type="submit"
              variant="secondary"
              className="self-center 1xl:self-end p-5.5 min-w-[280px] text-2xl/[100%] font-bold"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
