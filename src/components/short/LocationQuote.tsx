"use client";

import { useState, type FormEvent } from "react";
import { Arrow, ADDRESS, EMAIL, PHONE, PHONE_TEL } from "../shared";

export function LocationQuote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const plain = `Заявка на просчёт — ПолимерКолор\nИмя/компания: ${name}\nТелефон: ${phone}\nЗадача: ${note || "—"}\n`;
    try {
      void navigator.clipboard?.writeText(plain);
    } catch {
      /* ignore */
    }
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Просчёт: ${name}`)}&body=${encodeURIComponent(plain)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#101412]">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#ff5a36]/10 blur-[80px]" />

      <div className="relative mx-auto grid max-w-[1100px] gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">Логистика</p>
          <h2 className="mt-2 text-[clamp(26px,4.5vw,40px)] font-semibold leading-[1.1] text-[#faf9f5]">
            Привезли — окрасили — забрали
          </h2>
          <p className="mt-4 text-[15px] leading-[1.55] text-[#9da7a1]">
            {ADDRESS}. Удобно для металлоконструкций по городу и области. Заезд фуры уточняйте в заявке.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="block text-[28px] font-semibold tracking-tight text-white hover:text-[#ff5a36]">
              {PHONE}
            </a>
            <p className="text-[14px] text-[#8a948e]">{EMAIL}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {[
              ["24 ч", "ответ по просчёту"],
              ["от 2 дн.", "срок в работе"],
              ["до 12 м", "без разборки"],
              ["1,5 т", "на крюке"],
            ].map(([a, b]) => (
              <div key={b} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[18px] font-semibold text-[#faf9f5]">{a}</p>
                <p className="text-[11px] text-[#7a847e]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-8">
          {sent ? (
            <div className="flex min-h-[280px] flex-col justify-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#d7ff55] text-xl text-[#101412]">
                ✓
              </div>
              <p className="text-[24px] font-semibold text-white">Заявка готова</p>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#aeb7b1]">
                Откроется почта с заполненным письмом. Текст скопирован в буфер. Можно сразу позвонить: {PHONE}
              </p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 text-left text-[13px] text-[#ff5a36] underline">
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div>
                <p className="text-[22px] font-semibold text-white">Просчёт за минуту</p>
                <p className="mt-1 text-[13px] text-[#8a948e]">Габарит, вес и срок — и мы ответим по возможности камеры</p>
              </div>
              <label className="block">
                <span className="text-[10px] uppercase tracking-wide text-[#6f7973]">Имя / компания</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ООО «Металл» / Иван"
                  className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#ff5a36]"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-wide text-[#6f7973]">Телефон</span>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 …"
                  className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#ff5a36]"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-wide text-[#6f7973]">Изделие, габарит, вес, срок</span>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Фермы 9 м, ~800 кг, нужно к 10-му"
                  className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#ff5a36]"
                />
              </label>
              <button
                type="submit"
                className="btn-lift mt-2 flex h-13 min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#ff5a36] text-[15px] font-medium text-white shadow-[0_12px_40px_-10px_rgba(255,90,54,0.5)]"
              >
                Отправить на просчёт <Arrow className="size-4" />
              </button>
              <p className="text-center text-[11px] text-[#5c6560]">Нажимая кнопку, вы соглашаетесь на связь по заявке</p>
            </form>
          )}
        </div>
      </div>

      <footer className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-4 py-6 text-[12px] text-[#5c6560] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>© {new Date().getFullYear()} ПолимерКолор</span>
          <span>{ADDRESS}</span>
          <a href={`tel:${PHONE_TEL}`} className="text-[#aeb7b1] hover:text-white">
            {PHONE}
          </a>
        </div>
      </footer>
    </section>
  );
}
