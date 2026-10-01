"use client";

import { A, Marker, Reveal } from "./shared";

const icons = [
  // shield
  <svg key="s" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // target
  <svg key="t" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" /></svg>,
  // leaf
  <svg key="l" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19c8-1 12-7 14-14-7 2-13 6-14 14z" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 19c2-4 6-7 11-9" strokeLinecap="round" /></svg>,
  // layers
  <svg key="g" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export function Why() {
  const cards = [
    { n: "01", t: "Защита без компромиссов", d: "Стойкость к коррозии C5, ультрафиолету, реагентам и температурным циклам.", dark: true },
    { n: "02", t: "Повторяемость ΔE ≤ 0,5", d: "Спектрофотометрия каждой партии и архив рецептур для точного повторного заказа." },
    { n: "03", t: "Без растворителей", d: "До 99% порошка возвращается в цикл. Процесс без VOC и токсичных стоков." },
    { n: "04", t: "От 1 детали до серии", d: "Одинаково внимательно ведём архитектурный образец и поток в 18 000 деталей." },
  ];

  return (
    <section className="bg-[#faf9f5] px-6 py-20 md:px-[72px] md:py-24">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-12 lg:flex-row lg:gap-16">
        <Reveal className="flex w-full flex-col justify-between lg:w-[430px]">
          <div className="flex flex-col gap-5">
            <Marker label="Инженерная красота" />
            <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">Видимый результат. Невидимая дисциплина.</h2>
            <p className="text-[16px] leading-[1.55] text-[#69736d]">
              Мы управляем всем циклом внутри производства: подготовкой, полимеризацией и контролем качества. Поэтому отвечаем не за этап, а за готовую поверхность.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3.5">
            <div className="flex size-[58px] items-center justify-center rounded-[18px] bg-[#101412]">
              <svg className="size-7 text-[#ff5a36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-[#101412]">Производство в Новосибирске</p>
              <p className="text-[11px] text-[#69736d]">Переездная 1 · Сибирь</p>
            </div>
          </div>
        </Reveal>
        <div className="grid flex-1 grid-cols-1 gap-[18px] sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 80}>
              <div
                className={`card-lift group flex h-[205px] flex-col justify-between rounded-[28px] p-6 shadow-[0_18px_60px_-12px_rgba(16,20,18,0.13)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_24px_50px_-10px_rgba(16,20,18,0.2)] ${
                  c.dark
                    ? "bg-[#101412] hover:ring-2 hover:ring-[#ff5a36]/40"
                    : "bg-white hover:ring-2 hover:ring-[#ff5a36]/25"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                      c.dark ? "bg-white/10 text-[#faf9f5]" : "bg-[#f4f2ec] text-[#101412]"
                    }`}
                  >
                    {icons[i]}
                  </div>
                  <span className={`text-[11px] ${c.dark ? "text-[#818c85]" : "text-[#69736d]"}`}>{c.n}</span>
                </div>
                <div>
                  <p className={`mb-2 text-[21px] ${c.dark ? "text-[#faf9f5]" : "text-[#101412]"}`}>{c.t}</p>
                  <p className={`text-[12px] leading-[1.45] ${c.dark ? "text-[#aeb7b1]" : "text-[#69736d]"}`}>{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
