"use client";

import { A, Arrow, Reveal } from "../shared";

const SPECS = [
  { k: "Длина", v: "12 м" },
  { k: "Ширина", v: "3 м" },
  { k: "Высота", v: "3 м" },
  { k: "Нагрузка", v: "до 3,5 т" },
];

const ITEMS = [
  { t: "Фермы и балки", img: A.arch },
  { t: "Ворота, калитки", img: A.urban },
  { t: "Каркасы", img: A.equipment },
  { t: "Ограждения", img: A.transport },
];

function FadeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`img-fade ${className ?? ""}`}
      onLoad={(e) => e.currentTarget.classList.add("loaded")}
      onError={(e) => {
        e.currentTarget.style.opacity = "0.2";
        e.currentTarget.classList.add("loaded");
      }}
    />
  );
}

export function Chamber() {
  return (
    <section id="kamera" className="bg-[#f4f2ec] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">
            Полимерная камера ППП
          </p>
          <h2 className="mt-2 text-[clamp(26px,4.5vw,40px)] font-semibold leading-[1.1] tracking-tight text-[#101412]">
            Характеристики
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.55] text-[#69736d]">
            Изделия длиной до 12&nbsp;м без разборки и резки. Параметры камеры: 12×3×3&nbsp;м,
            грузоподъёмность до 3,5&nbsp;т. Окрашиваем длинномер и крупногабарит целиком.
            Подготовка, полимеризация и контроль качества — на одной площадке.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-[#e0ddd6] bg-[#e8e6e0] sm:min-h-[340px]">
            <FadeImg
              src={A.capacity}
              alt="Схема камеры ППП"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101412]/70 to-transparent p-5">
              <p className="text-[12px] text-white/70">Чертёж / фото камеры</p>
              <p className="text-[15px] font-medium text-white">12 × 3 × 3 м · до 3,5 т</p>
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-3 content-start">
            {SPECS.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-[#e0ddd6] bg-white p-4 shadow-[0_8px_24px_-16px_rgba(16,20,18,0.12)] sm:p-5"
              >
                <p className="text-[12px] uppercase tracking-wide text-[#8a948e]">{s.k}</p>
                <p className="mt-1 text-[26px] font-semibold tracking-tight text-[#101412]">{s.v}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl border border-[#e0ddd6] bg-white p-4 sm:p-5">
              <p className="text-[13px] leading-[1.5] text-[#69736d]">
                Срок — от 2 дней при свободном слоте. Габарит и вес указывайте в заявке —
                проверим влезание до приёмки.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a948e]">Изделия</p>
          <h3 className="mt-1 text-[22px] font-semibold text-[#101412] sm:text-[26px]">
            Что окрашиваем
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal
                key={item.t}
                delay={i * 60}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#101412]"
              >
                <FadeImg
                  src={item.img}
                  alt={item.t}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-[13px] font-medium text-white sm:text-[14px]">
                  {item.t}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#e0ddd6] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-[15px] font-medium text-[#101412]">Расчёт под ваше изделие</p>
            <p className="mt-1 max-w-[480px] text-[13px] leading-[1.5] text-[#69736d]">
              Площадь, подготовка, цвет, объём партии. Ответ в рабочий день.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="btn-lift flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101412] px-6 text-[13px] text-white"
          >
            Запросить сумму <Arrow className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
