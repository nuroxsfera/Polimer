"use client";

import { A, Arrow, Marker, CountUp, PHONE, PHONE_TEL } from "./shared";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101412]">
      <div className="relative mx-auto max-w-[1440px]">
        <header className="sticky top-0 z-40 flex h-24 items-center justify-between bg-[#101412]/95 px-6 backdrop-blur-md md:px-[72px]">
          <div className="flex items-center gap-3">
            <div className="flex size-[38px] items-center justify-center rounded-[13px] bg-[#ff5a36]">
              <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-[17px] font-medium tracking-tight text-[#faf9f5]">ПолимерКолор</p>
              <p className="text-[8px] uppercase tracking-wider text-[#aab2ad]">Новосибирск</p>
            </div>
          </div>
          <nav className="hidden gap-[30px] text-[12px] text-[#cdd3cf] lg:flex">
            {[
              { label: "Технология", href: "#Технология" },
              { label: "Возможности", href: "#Возможности" },
              { label: "Проекты", href: "#Проекты" },
              { label: "Качество", href: "#Качество" },
              { label: "Контакты", href: "#contact" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#faf9f5]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE_TEL}`} className="hidden text-[12px] text-[#faf9f5] sm:block">
              {PHONE}
            </a>
            <a href="#contact" className="btn-lift flex h-12 items-center gap-3 rounded-full border border-white/30 px-5 text-[13px] text-[#faf9f5] md:h-14 md:px-6">
              Запросить расчёт <Arrow />
            </a>
          </div>
        </header>

        <div className="pointer-events-none absolute right-0 top-[120px] z-10 hidden size-[min(680px,44vw)] rounded-[40px] opacity-95 lg:block animate-float">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.hero} alt="" className="size-full rounded-[40px] object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(255,90,54,0.18),transparent_60%)] animate-glow" />
        </div>

        <div className="relative z-20 flex gap-16 px-6 pb-10 pt-16 md:px-[72px] md:pt-[60px]">
          <div className="flex w-full max-w-[680px] flex-col gap-6 md:gap-[30px]">
            <Marker label="Полимерно-порошковое окрашивание металла в Новосибирске" light />
            <h1 className="animate-reveal text-[clamp(34px,5.5vw,72px)] font-normal leading-[1.02] text-[#faf9f5]">
              Длинномер и крупногабарит — целиком
            </h1>
            <p className="animate-reveal delay-200 max-w-[560px] text-[17px] leading-[1.5] text-[#b8c0bb] md:text-[19px]">
              Печь ППО до 12&nbsp;м · 3×3&nbsp;м · до 1,5&nbsp;т. Окрашиваем металлоизделия без разборки и порезки. Качественная полимеризация, прочное покрытие, сроки от 2 дней.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#contact" className="btn-lift flex h-12 items-center gap-3 rounded-full bg-[#ff5a36] px-6 text-[13px] text-white md:h-14">
                Рассчитать проект <Arrow />
              </a>
              <a href="#palette" className="btn-lift flex h-12 items-center gap-3 rounded-full bg-[#faf9f5] px-6 text-[13px] text-[#101412] md:h-14">
                Смотреть покрытия <Arrow />
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="size-2 animate-pulse rounded-full bg-[#d7ff55]" />
              <span className="text-[12px] text-[#9da7a1]">Инженерный расчёт и образец цвета — за 24 часа</span>
            </div>
          </div>
          <div className="relative hidden flex-1 flex-col items-end justify-between lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/13 bg-white/5 px-3.5 py-2.5">
              <span className="text-[10px] uppercase text-[#faf9f5]">Печь ППО · 8–12 м</span>
            </div>
            <div className="animate-soft-float w-[260px] rounded-[28px] border border-white/12 bg-[rgba(21,27,24,0.8)] p-5 backdrop-blur-sm">
              <div className="mb-3 flex justify-between text-[11px]">
                <span className="text-[#98a29c]">Покрытие</span>
                <span className="text-[#faf9f5]">RAL 2004</span>
              </div>
              <div className="mb-3 h-[54px] rounded-xl bg-[#ff5a36]" />
              <div className="flex justify-between text-[10px] text-[#98a29c]">
                <span>70–90 μm</span>
                <span>Super Durable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 grid grid-cols-2 border-t border-white/9 px-6 py-7 md:grid-cols-4 md:px-[72px]">
          {[
            { end: 12, suffix: " м", label: "длина печи ППО", decimals: 0 },
            { end: 3, suffix: " м", label: "ширина и высота камеры", decimals: 0 },
            { end: 1.5, suffix: " т", label: "грузоподъёмность", decimals: 1 },
            { end: 2, suffix: " дня", label: "минимальный срок заказа", decimals: 0 },
          ].map((s) => (
            <div key={s.label} className="border-l border-white/9 pl-4 first:border-l-0 first:pl-0 md:pl-6 md:first:border-l md:first:pl-6">
              <p className="text-[28px] text-[#faf9f5] md:text-[32px]">
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="text-[11px] text-[#98a29c]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
