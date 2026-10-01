import { A } from "./shared";

export function Reviews() {
  return (
    <>
      <section className="bg-[#ff5a36]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-[72px] md:pb-[70px] md:pt-[86px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-[70px]">
            <div className="flex w-full flex-col justify-between lg:w-[760px]">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-1 text-white">{"★★★★★"}</div>
                <span className="text-[10px] uppercase text-[#ffe3dc]">Партнёрство · 7 лет</span>
              </div>
              <p className="mb-8 text-[clamp(24px,3.5vw,48px)] leading-[1.1] text-white">«Velora говорит с архитектором о цвете, а с инженером — о допусках. В результате мы получаем именно тот объект, который согласовали, и именно в тот день.»</p>
              <div className="flex items-center gap-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={A.review} alt="" className="size-[50px] rounded-full object-cover" />
                <div>
                  <p className="text-[13px] text-white">Марта Новак</p>
                  <p className="text-[11px] text-[#ffe0d8]">Design Director, Forma Studio</p>
                </div>
              </div>
            </div>
            <div className="relative flex h-[320px] flex-1 flex-col justify-between overflow-hidden rounded-[40px] p-6 md:h-[390px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.reviewPrj} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="relative z-10 mt-auto rounded-[18px] bg-[rgba(16,20,18,0.78)] p-4">
                <p className="text-[12px] text-white">Forma HQ · фасад 2 100 м²</p>
                <p className="text-[10px] text-[#bcc5bf]">Velora Coral · Super Durable</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/25 px-6 py-10 md:px-[72px]">
          <p className="max-w-[230px] text-[11px] leading-[1.4] text-[#ffe0d8]">Нам доверяют промышленные и архитектурные команды Европы</p>
          {["NORDHAUS", "FORM /A", "KONTUR", "STRØM", "METROLINE"].map((b) => (
            <span key={b} className="text-[18px] text-white">{b}</span>
          ))}
        </div>
      </section>
    </>
  );
}
