"use client";
import { useState } from "react";
import { A, Arrow, Marker } from "./shared";

export function Palette() {
  const [activeColor, setActiveColor] = useState(0);
  const colors = [
    { code: "RAL 2004", hex: "#f43a22" },
    { code: "RAL 6021", hex: "#86a47c" },
    { code: "RAL 1015", hex: "#ead7b0" },
    { code: "RAL 5002", hex: "#243d8d" },
    { code: "RAL 7021", hex: "#252827" },
    { code: "RAL 1036", hex: "#b99855" },
  ];
  return (
    <>
      {/* PALETTE */}
      <section id="palette" className="bg-[#bfe7d2] px-6 py-20 md:px-[72px] md:py-28">
        <div className="mx-auto max-w-[1296px]">
          <div className="mb-10 flex flex-col gap-8 lg:mb-[54px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[700px]">
              <Marker label="Цвет как материал" />
              <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">240 оттенков. 9 фактур. Один точный характер.</h2>
              <p className="mt-5 text-[16px] leading-[1.55] text-[#69736d]">RAL Classic, NCS, фирменный цвет по образцу и специальные эффекты — металлик, муар, soft-touch, fine texture и сверхмат.</p>
            </div>
            <div className="flex max-w-[430px] flex-wrap gap-2">
              {["Гладкий мат", "Муар", "Металлик", "Fine texture", "Soft-touch"].map((f, i) => (
                <button key={f} className={`rounded-full border px-4 py-2.5 text-[13px] ${i === 0 ? "border-[#ff5a36] bg-[#ff5a36] text-white" : "border-[#ced4cf] bg-white text-[#101412]"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] lg:flex-row">
            <div className="relative flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-[40px] p-[26px] md:h-[490px] lg:w-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.texture} alt="" className="absolute inset-0 size-full object-cover" />
              <span className="relative z-10 w-fit rounded-full bg-[rgba(16,20,18,0.72)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">Fine texture · macro 40×</span>
              <div className="relative z-10 rounded-[28px] bg-white/91 p-[18px]">
                <p className="mb-2 text-[22px] text-[#101412]">Velora Coral 04</p>
                <div className="flex justify-between text-[10px] text-[#69736d]"><span>Gloss 8 ±2</span><span>UV class 2</span><span>70–90 μm</span></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-[40px] bg-[#faf9f5] p-6 md:p-7">
              <div>
                <p className="text-[26px] text-[#101412]">Подберите свою поверхность</p>
                <p className="text-[12px] text-[#69736d]">Выбранный цвет · Super Durable · гладкий мат</p>
              </div>
              <div className="my-6 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
                {colors.map((c, i) => (
                  <button key={c.code} onClick={() => setActiveColor(i)} className={`flex flex-col gap-2.5 rounded-[18px] p-2 ${i === activeColor ? "border border-[#101412] bg-white" : ""}`}>
                    <div className="h-[80px] w-full rounded-xl sm:h-[116px]" style={{ backgroundColor: c.hex }} />
                    <span className="text-center text-[9px] text-[#101412]">{c.code}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="max-w-[310px] text-[11px] leading-[1.35] text-[#69736d]">Физический набор из 12 образцов отправим по Европе за 48 часов.</p>
                <a href="#contact" className="flex h-14 items-center gap-3.5 rounded-full bg-[#101412] px-6 text-[13px] text-[#faf9f5]">Заказать образцы <Arrow /></a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
