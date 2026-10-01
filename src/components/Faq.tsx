"use client";
import { useState } from "react";
import { Marker, Arrow } from "./shared";

export function Faq() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { q: "Как быстро вы рассчитаете стоимость?", a: "Предварительный расчёт — в течение 4 рабочих часов. Точная цена — не позднее 24 часов." },
    { q: "Можно ли точно попасть в фирменный цвет?", a: "Да. Работаем по RAL, NCS и образцам заказчика. ΔE ≤ 0,5." },
    { q: "Какой минимальный объём заказа?", a: "От одной детали. Для серий — отдельный прайс." },
    { q: "Работаете ли вы с оцинкованной сталью и алюминием?", a: "Да. Подбираем конверсионный слой под сплав и среду." },
    { q: "Организуете ли вы забор и доставку по Европе?", a: "Да. От 24 часов по Польше до 5 дней по Европе." },
    { q: "Как упаковываются окрашенные детали?", a: "Индивидуальная защита кромок, антистатическая плёнка, паллетирование." },
  ];
  return (
    <section className="bg-[#faf9f5] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-12 lg:flex-row lg:gap-[100px]">
        <div className="flex w-full flex-col justify-between lg:w-[450px]">
          <div>
            <Marker label="FAQ" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">Ответы до первого письма</h2>
            <p className="mt-5 text-[16px] leading-[1.55] text-[#69736d]">Не нашли свой вопрос? Пришлите чертёж — технолог ответит в течение рабочего дня.</p>
          </div>
          <div className="mt-10 rounded-[28px] bg-[#bfe7d2] p-6">
            <p className="mb-1.5 text-[20px] text-[#101412]">Гид по порошковым покрытиям</p>
            <p className="mb-[18px] text-[11px] leading-[1.45] text-[#202824]">24 страницы: среды, подготовка, допуски и чек-лист ТЗ.</p>
            <a href="#" className="flex h-14 w-fit items-center gap-3.5 rounded-full bg-[#101412] px-6 text-[13px] text-[#faf9f5]">Скачать PDF · 4,8 МБ <Arrow /></a>
          </div>
        </div>
        <div className="flex-1">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-b border-[#ced4cf] py-[22px]">
              <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span className="text-[18px] text-[#101412] md:text-[20px]">{item.q}</span>
                <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-lg ${openFaq === i ? "bg-[#ff5a36] text-white" : "bg-[#f4f2ec]"}`}>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="mt-3.5 max-w-[650px] text-[13px] leading-[1.55] text-[#69736d]">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
