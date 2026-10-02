"use client";

import { Arrow, PHONE, PHONE_TEL } from "../shared";

/** Экран 1: решение «мой / не мой» за 5 секунд */
export function HeroDecision() {
  return (
    <section className="bg-[#101412] px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-[72px] md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[960px]">
        <p className="mb-3 text-[12px] uppercase tracking-wide text-[#aab2ad]">
          Новосибирск · Переездная 1
        </p>
        <h1 className="text-[clamp(28px,7vw,52px)] font-medium leading-[1.08] text-[#faf9f5]">
          Полимерно-порошковое окрашивание металла
        </h1>
        <p className="mt-3 max-w-[560px] text-[15px] leading-[1.5] text-[#b8c0bb] sm:text-[17px]">
          Крупногабарит и длинномер — целиком, без разборки и порезки. Полимерная камера ППО.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: "до 12 м", l: "длина изделия" },
            { v: "3 × 3 м", l: "сечение камеры" },
            { v: "1,5 т", l: "грузоподъёмность" },
            { v: "от 2 дн.", l: "срок заказа" },
          ].map((x) => (
            <div
              key={x.l}
              className="rounded-[16px] border border-white/12 bg-white/[0.04] px-3 py-4 sm:rounded-[20px] sm:px-4"
            >
              <p className="text-[22px] font-medium leading-none text-[#ff5a36] sm:text-[26px]">{x.v}</p>
              <p className="mt-2 text-[11px] text-[#8a948e]">{x.l}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#contact"
            className="btn-lift flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff5a36] px-6 text-[14px] text-white sm:h-14"
          >
            Заявка на просчёт <Arrow />
          </a>
          <a
            href="#kamera"
            className="btn-lift flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-[14px] text-[#faf9f5] sm:h-14"
          >
            Характеристики камеры
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex h-12 items-center justify-center gap-2 rounded-full px-4 text-[14px] text-[#cdd3cf] sm:h-14"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
