import { A, Marker } from "./shared";

export function Capacity() {
  return (
    <section className="bg-[#f4f2ec] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <Marker label="Производство без пауз" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">Масштаб серии. Скорость проектной команды.</h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.55] text-[#69736d]">Три независимые линии, отдельный пост крупногабарита и резерв мощности 20%.</p>
        </div>
        <div className="flex flex-col gap-[18px] lg:flex-row">
          <div className="flex w-full flex-col justify-between rounded-[40px] bg-white p-6 shadow-[0_18px_60px_-12px_rgba(16,20,18,0.13)] md:p-[30px] lg:w-[620px]">
            <div className="flex gap-6">
              <div className="flex-1"><p className="text-[40px] text-[#101412] md:text-[48px]">18 000</p><p className="text-[13px] text-[#69736d]">деталей в сутки</p></div>
              <div className="flex-1"><p className="text-[40px] text-[#ff5a36] md:text-[48px]">12 × 2,8 м</p><p className="text-[13px] text-[#69736d]">габарит камеры</p></div>
            </div>
            <div className="my-4 h-px bg-[#ced4cf]" />
            <div className="flex flex-col gap-3.5">
              {[["Линия 01 · автомат", "74%", "74%", "#ff5a36"], ["Линия 02 · автомат", "61%", "61%", "#355cff"], ["Пост крупногабарита", "42%", "42%", "#bfe7d2"]].map(([label, pct, w, color]) => (
                <div key={label as string}>
                  <div className="mb-1.5 flex justify-between text-[10px]"><span className="text-[11px] text-[#101412]">{label}</span><span className="text-[#69736d]">{pct} загрузки</span></div>
                  <div className="h-[7px] overflow-hidden rounded-full bg-[#dde2dd]"><div className="h-full rounded-full" style={{ width: w as string, backgroundColor: color as string }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[18px] bg-[#f4f2ec] p-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#d7ff55] text-sm">📅</div>
              <div>
                <p className="text-[12px] text-[#101412]">Ближайший серийный слот — 8 октября</p>
                <p className="text-[10px] text-[#69736d]">Экспресс-партия до 50 м² — от 72 часов</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[40px] p-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.capacity} alt="" className="absolute inset-0 size-full object-cover" />
            <span className="relative z-10 rounded-full bg-[rgba(16,20,18,0.72)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">8 400 м² производства</span>
            <p className="absolute bottom-7 left-7 z-10 max-w-[380px] text-[28px] leading-[1.08] text-white md:text-[31px]">Поток без контакта детали с руками</p>
          </div>
        </div>
      </div>
    </section>
  );
}
