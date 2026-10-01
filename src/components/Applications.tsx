import { A, Arrow, Marker } from "./shared";

export function Applications() {
  const items = [
    { img: A.furniture, tag: "Тактильные фактуры", t: "Мебель и свет" },
    { img: A.transport, tag: "C4–C5 защита", t: "Транспорт" },
    { img: A.equipment, tag: "Серийный выпуск", t: "Оборудование" },
    { img: A.urban, tag: "Anti-graffiti", t: "Городская среда" },
  ];
  return (
    <section id="Возможности" className="bg-[#faf9f5] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <Marker label="Материал в контексте" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">От городской среды до точной механики</h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.55] text-[#69736d]">Подбираем химию подготовки и класс порошка под конкретную нагрузку.</p>
        </div>
        <div className="flex flex-col gap-[18px] lg:flex-row">
          <div className="relative flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-[28px] p-7 md:h-[560px] lg:w-[630px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.arch} alt="" className="absolute inset-0 size-full object-cover" />
            <span className="relative z-10 w-fit rounded-full bg-[rgba(16,20,18,0.67)] px-3 py-2 text-[10px] uppercase text-[#faf9f5]">Qualicoat class 2</span>
            <div className="relative z-10 flex items-end justify-between gap-4">
              <p className="max-w-[410px] text-[28px] leading-[1.08] text-white md:text-[38px]">Архитектура и фасадные системы</p>
              <button className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#ff5a36] text-white"><Arrow className="size-[17px]" /></button>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-[18px] sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.t} className="relative flex h-[240px] flex-col justify-between overflow-hidden rounded-[28px] p-5 md:h-[271px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt="" className="absolute inset-0 size-full object-cover" />
                <span className="relative z-10 w-fit rounded-full bg-[rgba(16,20,18,0.67)] px-3 py-2 text-[10px] uppercase text-[#faf9f5]">{item.tag}</span>
                <div className="relative z-10 flex items-end justify-between">
                  <p className="max-w-[220px] text-[23px] leading-[1.08] text-white">{item.t}</p>
                  <button className="flex size-[42px] items-center justify-center rounded-full bg-[#ff5a36] text-white"><Arrow className="size-[17px]" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
