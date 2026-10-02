"use client";

import { useState, type FormEvent } from "react";
import { Arrow, ADDRESS, EMAIL, PHONE, PHONE_TEL } from "../shared";

/** Экран 3: логистика + заявка на просчёт */
export function LocationQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const plain = `Заявка на просчёт (ПолимерКолор)\nИмя: ${name}\nТелефон: ${phone}\nЗадача: ${note || "—"}\n`;
    try {
      void navigator.clipboard?.writeText(plain);
    } catch {
      /* ignore */
    }
    const body = encodeURIComponent(plain);
    const subject = encodeURIComponent(`Просчёт: ${name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-[#101412] px-4 py-12 sm:px-6 sm:py-16 md:px-[72px]">
      <div className="mx-auto grid max-w-[960px] gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-[#8a948e]">Логистика</p>
          <h2 className="mt-2 text-[clamp(24px,5vw,36px)] leading-[1.15] text-[#faf9f5]">Где мы</h2>
          <p className="mt-4 text-[16px] text-[#faf9f5]">{ADDRESS}</p>
          <p className="mt-2 text-[14px] text-[#aeb7b1]">
            Удобно для заводов и стройки по Новосибирску и области. Уточняйте заезд фуры при заявке.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-6 inline-flex text-[20px] text-[#ff5a36] hover:underline"
          >
            {PHONE}
          </a>
          <p className="mt-2 text-[13px] text-[#8a948e]">{EMAIL}</p>
          <p className="mt-6 text-[13px] text-[#8a948e]">
            Расчёт — обычно в течение рабочего дня. Цены зависят от площади, сложности и объёма партии.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          {sent ? (
            <div>
              <p className="text-[22px] text-[#faf9f5]">Заявка подготовлена</p>
              <p className="mt-2 text-[14px] text-[#aeb7b1]">
                Откроется почта с текстом. Текст также скопирован в буфер. Или позвоните {PHONE}.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 text-[13px] text-[#ff5a36] underline"
              >
                Ещё заявка
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <p className="text-[18px] text-[#faf9f5]">Заявка на просчёт</p>
              <label className="block border-b border-white/15 pb-2">
                <span className="text-[10px] uppercase text-[#8a948e]">Имя / компания</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full bg-transparent text-[14px] text-[#faf9f5] outline-none placeholder:text-white/40"
                  placeholder="Как обращаться"
                />
              </label>
              <label className="block border-b border-white/15 pb-2">
                <span className="text-[10px] uppercase text-[#8a948e]">Телефон</span>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full bg-transparent text-[14px] text-[#faf9f5] outline-none placeholder:text-white/40"
                  placeholder="+7 …"
                />
              </label>
              <label className="block border-b border-white/15 pb-2">
                <span className="text-[10px] uppercase text-[#8a948e]">Что красим (габарит, вес, срок)</span>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1 w-full bg-transparent text-[14px] text-[#faf9f5] outline-none placeholder:text-white/40"
                  placeholder="Например: фермы 9 м, 800 кг, нужно к пятнице"
                />
              </label>
              <button
                type="submit"
                className="btn-lift mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff5a36] text-[14px] text-white"
              >
                Отправить на просчёт <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="mx-auto mt-12 max-w-[960px] border-t border-white/10 pt-6 text-[12px] text-[#69736d]">
        © {new Date().getFullYear()} ПолимерКолор · {ADDRESS}
      </footer>
    </section>
  );
}
