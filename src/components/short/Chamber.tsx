"use client";

import { A, Arrow, Reveal } from "../shared";

const BENEFITS = [
  {
    t: "Целиком, без резки",
    d: "Длинномер и крупногабарит до 12 м окрашиваем без разборки — меньше стыков, ровнее покрытие.",
  },
  {
    t: "Прочная поверхность",
    d: "Порошковый полимер: стойкость к коррозии, ударам и ультрафиолету. Подбираем цвет RAL под задачу.",
  },
  {
    t: "Один цикл — одна ответственность",
    d: "Подготовка, полимеризация и контроль качества на нашей площадке. Отвечаем за результат, а не за этап.",
  },
  {
    t: "Срок под объект",
    d: "От 2 дней при свободном слоте. Для горящих поставок металлоконструкций — сразу в заявке указывайте дату.",
  },
];

const ITEMS = [
  { t: "Фермы и балки", img: A.arch },
  { t: "Ворота, калитки", img: A.urban },
  { t: "Каркасы", img: A.equipment },
  { t: "Ограждения", img: A.transport },
];

const SPECS = [
  { k: "Длина", v: "12 м" },
  { k: "Сечение", v: "3 × 3 м" },
  { k: "Нагрузка", v: "до 3,5 т" },
  { k: "Срок", v: "от 2 дн." },
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
    <section id="service" className="bg-[#f4f2ec] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">Услуга</p>
          <h2 className="mt-2 max-w-[640px] text-[clamp(26px,4.5vw,40px)] font-semibold leading-[1.12] tracking-tight text-[#101412]">
            Не печь ради печи — покрытие, которое держит металл в работе
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-[1.55] text-[#69736d]">
            Для заводов МК, стройки и сварки: привезли — окрасили — забрали. Вы получаете готовую
            поверхность под монтаж или отгрузку.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal
              key={b.t}
              delay={i * 60}
              className="rounded-2xl border border-[#e0ddd6] bg-white p-5 shadow-[0_8px_30px_-16px_rgba(16,20,18,0.1)] sm:p-6"
            >
              <p className="text-[16px] font-semibold text-[#101412]">{b.t}</p>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#69736d]">{b.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a948e]">Изделия</p>
              <h3 className="mt-1 text-[22px] font-semibold text-[#101412] sm:text-[26px]">Что отдаёте в работу</h3>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hidden text-[13px] font-medium text-[#ff5a36] transition hover:underline sm:inline"
            >
              Свой тип изделия →
            </a>
          </div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-[13px] font-medium text-white sm:text-[14px]">
                  {item.t}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14" as="div">
          <div
            id="kamera"
            className="overflow-hidden rounded-[24px] border border-[#e0ddd6] bg-[#101412] text-[#faf9f5]"
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              <div className="p-6 sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">
                  Параметры камеры ППП
                </p>
                <p className="mt-2 text-[20px] font-semibold leading-snug sm:text-[22px]">
                  Влезет ли ваша деталь — видно сразу
                </p>
                <p className="mt-3 text-[14px] leading-[1.5] text-[#9da7a1]">
                  Рабочая зона 12×3×3&nbsp;м, до 3,5&nbsp;т. Если габарит на грани — напишите в заявке,
                  проверим до приёмки.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {SPECS.map((s) => (
                    <div key={s.k} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
                      <p className="text-[10px] uppercase tracking-wide text-[#7a847e]">{s.k}</p>
                      <p className="mt-1 text-[18px] font-semibold tracking-tight">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[200px] border-t border-white/10 lg:border-l lg:border-t-0">
                <FadeImg src={A.capacity} alt="Камера ППП" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#101412]/40" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#e0ddd6] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-[15px] font-medium text-[#101412]">Нужен расчёт под ваше изделие</p>
            <p className="mt-1 max-w-[480px] text-[13px] leading-[1.5] text-[#69736d]">
              Площадь, подготовка, цвет и объём партии. Ответ в рабочий день.
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
