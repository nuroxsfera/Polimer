"use client";

import { useEffect, useRef, useState } from "react";
import { A, Marker, Reveal, CountUp } from "./shared";

function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setW(pct);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-[10px]">
        <span className="text-[11px] text-[#101412]">{label}</span>
        <span className="text-[#69736d]">{pct}% загрузки</span>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[#dde2dd]">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${w}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function Capacity() {
  return (
    <section className="bg-[#f4f2ec] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <Reveal className="mb-12 flex flex-col gap-8 lg:mb-[58px] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <Marker label="Печь ППО · крупногабарит" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">
              Длинномер и крупногабарит — без разборки и порезки
            </h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.55] text-[#69736d]">
            Окрашиваем длинномерные и крупногабаритные металлоизделия целиком. Качественная полимеризация, прочное покрытие, сроки от 2 дней.
          </p>
        </Reveal>
        <div className="flex flex-col gap-[18px] lg:flex-row">
          <Reveal className="flex w-full flex-col justify-between rounded-[40px] bg-white p-6 shadow-[0_18px_60px_-12px_rgba(16,20,18,0.13)] md:p-[30px] lg:w-[620px]">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[36px] text-[#101412] md:text-[44px]">8–12 м</p>
                <p className="text-[13px] text-[#69736d]">длина печи ППО</p>
              </div>
              <div>
                <p className="text-[36px] text-[#ff5a36] md:text-[44px]">3 × 3 м</p>
                <p className="text-[13px] text-[#69736d]">ширина × высота</p>
              </div>
              <div>
                <p className="text-[36px] text-[#101412] md:text-[44px]">
                  <CountUp end={1.5} decimals={1} suffix=" т" />
                </p>
                <p className="text-[13px] text-[#69736d]">грузоподъёмность</p>
              </div>
              <div>
                <p className="text-[36px] text-[#101412] md:text-[44px]">от 2 дней</p>
                <p className="text-[13px] text-[#69736d]">срок выполнения</p>
              </div>
            </div>
            <div className="my-4 h-px bg-[#ced4cf]" />
            <div className="flex flex-col gap-3.5">
              <Bar label="Линия 01 · автомат" pct={74} color="#ff5a36" />
              <Bar label="Линия 02 · автомат" pct={61} color="#355cff" />
              <Bar label="Пост крупногабарита" pct={42} color="#bfe7d2" />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[18px] bg-[#f4f2ec] p-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#d7ff55] text-sm">📅</div>
              <div>
                <p className="text-[12px] text-[#101412]">Ближайший слот — по запросу</p>
                <p className="text-[10px] text-[#69736d]">Экспресс и серия · от 2 рабочих дней</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative min-h-[320px] flex-1 overflow-hidden rounded-[40px] p-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.capacity} alt="" className="absolute inset-0 size-full object-cover" />
            <span className="relative z-10 rounded-full bg-[rgba(16,20,18,0.72)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">
              Печь ППО · до 1,5 т
            </span>
            <p className="absolute bottom-7 left-7 z-10 max-w-[380px] text-[28px] leading-[1.08] text-white md:text-[31px]">
              Целиком. Без разборки и порезки
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
