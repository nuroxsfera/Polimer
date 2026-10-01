import { A, Marker } from "./shared";

export function Why() {
  return (
    <>
      <section className="bg-[#faf9f5] px-6 py-20 md:px-[72px] md:py-24">
        <div className="mx-auto flex max-w-[1296px] flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col justify-between lg:w-[430px]">
            <div className="flex flex-col gap-5">
              <Marker label="Инженерная красота" />
              <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">Видимый результат. Невидимая дисциплина.</h2>
              <p className="text-[16px] leading-[1.55] text-[#69736d]">Мы управляем всем циклом внутри производства: подготовкой, окраской, полимеризацией и лабораторным контролем. Поэтому отвечаем не за этап, а за готовую поверхность.</p>
            </div>
            <div className="mt-10 flex items-center gap-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.eu} alt="" className="size-[58px] rounded-[18px] object-cover" />
              <div>
                <p className="text-[12px] text-[#101412]">Сделано в ЕС</p>
                <p className="text-[11px] text-[#69736d]">Вроцлав · логистика по Европе</p>
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-[18px] sm:grid-cols-2">
            {[
              { n: "01", t: "Защита без компромиссов", d: "Стойкость к коррозии C5, ультрафиолету, реагентам и температурным циклам.", dark: true },
              { n: "02", t: "Повторяемость ΔE ≤ 0,5", d: "Спектрофотометрия каждой партии и архив рецептур для точного повторного заказа." },
              { n: "03", t: "Без растворителей", d: "До 99% порошка возвращается в цикл. Процесс без VOC и токсичных стоков." },
              { n: "04", t: "От 1 детали до серии", d: "Одинаково внимательно ведём архитектурный образец и поток в 18 000 деталей." },
            ].map((c) => (
              <div key={c.n} className={`flex h-[205px] flex-col justify-between rounded-[28px] p-6 shadow-[0_18px_60px_-12px_rgba(16,20,18,0.13)] ${c.dark ? "bg-[#101412]" : "bg-white"}`}>
                <div className="flex items-center justify-between">
                  <div className={`flex size-11 items-center justify-center rounded-full ${c.dark ? "bg-white/10" : "bg-[#f4f2ec]"}`}>
                    <span className={`text-sm ${c.dark ? "text-[#faf9f5]" : "text-[#101412]"}`}>◆</span>
                  </div>
                  <span className={`text-[11px] ${c.dark ? "text-[#818c85]" : "text-[#69736d]"}`}>{c.n}</span>
                </div>
                <div>
                  <p className={`mb-2 text-[21px] ${c.dark ? "text-[#faf9f5]" : "text-[#101412]"}`}>{c.t}</p>
                  <p className={`text-[12px] leading-[1.45] ${c.dark ? "text-[#aeb7b1]" : "text-[#69736d]"}`}>{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
