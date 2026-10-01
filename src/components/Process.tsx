import { A, Marker } from "./shared";

export function Process() {
  const steps = [
    { n: "01", t: "Аудит", d: "Материал, геометрия, среда эксплуатации." },
    { n: "02", t: "Подготовка", d: "Дробеструй, фосфатирование или пассивация." },
    { n: "03", t: "Сушка", d: "Полное удаление влаги из полостей и швов." },
    { n: "04", t: "Нанесение", d: "Автомат + ручная проработка сложных зон.", a: true },
    { n: "05", t: "Полимеризация", d: "Термопрофиль фиксируется для каждой загрузки." },
    { n: "06", t: "Контроль", d: "Толщина, цвет, адгезия и упаковка." },
  ];
  return (
    <section className="bg-[#f4f2ec] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            <Marker label="От металла до отгрузки" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">Шесть контролируемых состояний одной детали</h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.55] text-[#69736d]">Один технолог ведёт заказ через все посты. Параметры фиксируются в цифровом маршруте.</p>
        </div>
        <div className="mb-10 grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <div key={s.n} className={`flex h-[200px] flex-col justify-between rounded-[28px] border p-5 ${s.a ? "border-[#ff5a36] bg-[#ff5a36]" : "border-[#ced4cf] bg-white"}`}>
              <span className={`text-[10px] ${s.a ? "text-[#ffe3dc]" : "text-[#69736d]"}`}>{s.n}</span>
              <div>
                <p className={`mb-2 text-[19px] ${s.a ? "text-white" : "text-[#101412]"}`}>{s.t}</p>
                <p className={`text-[11px] ${s.a ? "text-[#ffe1d9]" : "text-[#69736d]"}`}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex h-[300px] items-end overflow-hidden rounded-[40px] p-6 md:h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.factory} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="relative z-10 flex items-center gap-2.5 rounded-full bg-[rgba(16,20,18,0.85)] px-4 py-3">
            <span className="size-2 animate-pulse rounded-full bg-[#d7ff55]" />
            <span className="text-[11px] text-[#faf9f5]">Линия 02 · партия VLR–2684 · полимеризация</span>
          </div>
        </div>
      </div>
    </section>
  );
}
