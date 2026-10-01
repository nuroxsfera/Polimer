import { A, Marker } from "./shared";

export function Technology() {
  return (
    <>
      <section id="Технология" className="bg-[#101412] px-6 py-20 md:px-[72px] md:py-28">
        <div className="mx-auto max-w-[1296px]">
          <div className="mb-12 flex flex-col gap-8 lg:mb-[68px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[700px]">
              <Marker label="Система покрытия" light />
              <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#faf9f5]">Не краска поверх металла. Новая поверхность.</h2>
            </div>
            <p className="max-w-[400px] text-[16px] leading-[1.55] text-[#aeb7b1]">Электростатическое нанесение и контролируемая полимеризация создают молекулярно связанную оболочку — плотную, эластичную и одинаковую на плоскостях, кромках и сложной геометрии.</p>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="relative h-[360px] overflow-hidden rounded-[40px] bg-[#171e1a] p-7 lg:h-[600px] lg:w-[720px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.tech} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="w-fit rounded-full border border-white/13 bg-[rgba(16,20,18,0.73)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">Разнесённая структура · 120×</span>
                <div className="flex flex-wrap gap-2.5">
                  {["60–120 μm", "Δt ±3°C", "Faraday-safe"].map((t) => (
                    <span key={t} className="rounded-full border border-white/13 bg-white/5 px-4 py-2.5 text-[13px] text-[#faf9f5]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              {[
                { n: "01", t: "Подготовленный металл", d: "Обезжиривание, травление и конверсионный слой." },
                { n: "02", t: "Порошковая матрица", d: "Заряженные частицы равномерно покрывают геометрию." },
                { n: "03", t: "Полимерная оболочка", d: "При 180–200 °C слой сшивается в монолитную плёнку.", a: true },
              ].map((l) => (
                <div key={l.n} className={`flex flex-1 items-center gap-5 rounded-[28px] border p-6 ${l.a ? "border-[#ff5a36] bg-[#ff5a36]" : "border-white/8 bg-white/4"}`}>
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[11px] ${l.a ? "bg-white text-[#ff5a36]" : "bg-white/5 text-[#faf9f5]"}`}>{l.n}</div>
                  <div>
                    <p className={`text-[21px] ${l.a ? "text-white" : "text-[#faf9f5]"}`}>{l.t}</p>
                    <p className={`text-[12px] leading-[1.45] ${l.a ? "text-[#ffe3dc]" : "text-[#9ea8a2]"}`}>{l.d}</p>
                  </div>
                </div>
              ))}
              <div className="flex h-[116px] items-center justify-between rounded-[28px] bg-[#bfe7d2] p-[22px]">
                <div>
                  <p className="text-[30px] text-[#101412]">1,5×</p>
                  <p className="text-[11px] text-[#202824]">эластичнее жидких покрытий</p>
                </div>
                <div className="size-[62px] rounded-full border-[6px] border-[#101412]/20 border-t-[#101412]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
