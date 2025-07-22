import SmartButton from '../ui/Button/SmartButton';

export default function Product() {
  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <h2 className="font-semibold font-second text-[44px]/[110%] hidden">
          Product Page
        </h2>
        <SmartButton
          label="Дізнатись більше"
          className="ml-auto 1xl:hidden gap-17 mr-6"
        />
      </div>
    </section>
  );
}
