"use client";

import { A, Arrow, Marker, Reveal } from "./shared";

export function Projects() {
  const side = [
    {
      img: A.luma,
      tag: "Мебель · Новосибирск",
      t: "СибМебель · серия 8 200 шт.",
      m: "Снижение брака с 3,8% до 0,6% · matte ivory",
    },
    {
      img: A.energo,
      tag: "Оборудование · Сибирь",
      t: "СибЭнерго · корпуса шкафов",
      m: "C5-M · 1 000 часов salt spray · fine texture",
    },
  ];

  return (
    <section id="Проекты" className="bg-[#faf9f5] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <Reveal className="mb-12">
          <Marker label="Избранные проекты" />
          <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">
            Поверхности, которые работают в реальном мире
          </h2>
        </Reveal>
        <Reveal className="mb-[18px] flex flex-col gap-[18px] lg:flex-row">
          <div className="group relative h-[320px] overflow-hidden rounded-[40px] md:h-[480px] lg:w-[820px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.metro} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[40px] bg-[#355cff] p-8 text-white md:p-[34px]">
            <div className="flex justify-between text-[10px] text-[#c9d4ff]">
              <span className="uppercase">Инфраструктура · Новосибирск</span>
              <span>2025</span>
            </div>
            <div>
              <p className="mb-4 text-[32px] leading-[1.04] md:text-[42px]">Фасад ЖК «Сибирский»</p>
              <p className="text-[13px] leading-[1.5] text-[#dce4ff]">
                3 200 м² фасадных кассет и несущих элементов. Оттенок разработан по образцу архитектора и подтверждён натурным выкрасом.
              </p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-[27px]">14 дней</p>
                <p className="text-[10px] text-[#c9d4ff]">на всю партию</p>
              </div>
              <div>
                <p className="text-[27px]">ΔE 0,31</p>
                <p className="text-[10px] text-[#c9d4ff]">между партиями</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-[18px] md:grid-cols-2">
          {side.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <div className="group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-[40px] p-6 transition-transform duration-300 hover:scale-[1.02] md:h-[440px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="relative z-10 w-fit rounded-full border border-white/13 bg-white/5 px-4 py-2.5 text-[13px] text-[#faf9f5]">
                  {p.tag}
                </span>
                <div className="relative z-10 rounded-[28px] bg-[rgba(16,20,18,0.85)] p-[22px] backdrop-blur-sm">
                  <div className="mb-2.5 flex items-end justify-between gap-4">
                    <p className="text-[22px] leading-[1.12] text-[#faf9f5] md:text-[27px]">{p.t}</p>
                    <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ff5a36] text-white">
                      <Arrow className="size-[17px]" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#b5beb8]">{p.m}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
