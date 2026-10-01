"use client";

import { A, Reveal } from "./shared";

const BRANDS = ["СИБСТРОЙ", "МЕТАЛЛПРОМ", "АРХСИБ", "НОВОТЕХ", "ТРАНСМАШ", "СИБЭНЕРГО", "СКБ-НСК", "ФОРМА"];

export function Reviews() {
  return (
    <section className="bg-[#ff5a36]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-[72px] md:pb-[70px] md:pt-[86px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[70px]">
          <Reveal className="flex w-full flex-col justify-between lg:w-[760px]">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-1 text-white">★★★★★</div>
              <span className="text-[10px] uppercase text-[#ffe3dc]">Партнёрство · 5 лет</span>
            </div>
            <p className="mb-8 text-[clamp(24px,3.5vw,48px)] leading-[1.1] text-white">
              «ПолимерКолор держит сроки и цвет: длинномер ушёл целиком, без разборки. Покрытие ровное, паспорт партии на руках в день отгрузки.»
            </p>
            <div className="flex items-center gap-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.review} alt="" className="size-[50px] rounded-full object-cover" />
              <div>
                <p className="text-[13px] text-white">Алексей Морозов</p>
                <p className="text-[11px] text-[#ffe0d8]">Главный инженер, АрхСиб</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative flex h-[320px] flex-1 flex-col justify-between overflow-hidden rounded-[40px] p-6 md:h-[390px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.reviewPrj} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="relative z-10 mt-auto rounded-[18px] bg-[rgba(16,20,18,0.78)] p-4 backdrop-blur-sm">
              <p className="text-[12px] text-white">ЖК «Сибирский» · фасад 3 200 м²</p>
              <p className="text-[10px] text-[#bcc5bf]">RAL · Super Durable</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/25 px-6 pt-8 md:px-[72px]">
        <p className="text-[13px] font-medium uppercase tracking-wide text-white md:text-[15px]">
          Нам доверяют промышленные и архитектурные команды
        </p>
      </div>

      <div className="overflow-hidden py-8">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={`${b}-${i}`} className="text-[18px] font-medium text-white/90 md:text-[22px]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
