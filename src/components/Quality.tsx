"use client";

import { A, Marker, Reveal } from "./shared";

export function Quality() {
  const rows = [
    ["Толщина слоя", "ISO 2360 · 5 точек на деталь"],
    ["Адгезия", "ISO 2409 · класс 0–1"],
    ["Цвет и блеск", "ΔE ≤ 0,5 · ISO 2813"],
    ["Термопрофиль", "Запись каждой загрузки"],
  ];

  return (
    <section id="Качество" className="bg-[#101412] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-12 lg:flex-row lg:gap-[58px]">
        <Reveal className="flex w-full flex-col gap-8 lg:w-[560px]">
          <div>
            <Marker label="Качество в цифрах" light />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#faf9f5]">
              Не обещаем стойкость. Доказываем протоколом.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.55] text-[#c9d0cb]">
              Для каждой партии формируем паспорт покрытия: сырьё, термопрофиль, толщина, цвет, адгезия и фото перед упаковкой. Документ остаётся доступным в архиве 10 лет.
            </p>
          </div>
          <div>
            {rows.map(([n, s], i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="flex items-center gap-3.5 border-b border-white/9 py-4 transition-colors hover:bg-white/5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#d7ff55] text-[12px] font-bold text-[#101412]">
                    ✓
                  </div>
                  <span className="w-[140px] text-[13px] text-[#faf9f5] md:w-[180px]">{n}</span>
                  <span className="flex-1 text-[12px] text-[#9ea8a2]">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["ISO 9001", "ISO 12944", "Qualicoat", "RoHS / REACH"].map((s) => (
              <span key={s} className="rounded-full border border-white/11 bg-white/4 px-3.5 py-2.5 text-[10px] text-[#faf9f5]">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="relative min-h-[400px] flex-1 overflow-hidden rounded-[40px] p-[26px] md:min-h-[590px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.lab} alt="" className="absolute inset-0 size-full object-cover" />
          <span className="relative z-10 rounded-full bg-[rgba(16,20,18,0.78)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">
            QC Lab · партия VLR–2684
          </span>
          <div className="absolute bottom-[26px] left-[26px] z-10 w-[240px] rounded-[28px] bg-white/93 p-5 backdrop-blur-sm md:w-[270px]">
            <div className="mb-3 flex justify-between text-[10px]">
              <span className="text-[#69736d]">Цветовое отклонение</span>
              <span className="text-[#247452]">PASS</span>
            </div>
            <p className="text-[44px] text-[#101412]">ΔE 0,28</p>
            <p className="text-[10px] text-[#69736d]">Допуск проекта: ≤ 0,50</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
