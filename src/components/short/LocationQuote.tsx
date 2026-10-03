"use client";

import { useState, type FormEvent } from "react";
import { Arrow, ADDRESS, EMAIL, PHONE, PHONE_TEL, Reveal } from "../shared";

/** Переездная 1, Новосибирск (OSM) */
const MAP_LAT = 55.1200291;
const MAP_LON = 83.0046284;
const MAP_SRC = `https://yandex.ru/map-widget/v1/?ll=${MAP_LON}%2C${MAP_LAT}&z=16&pt=${MAP_LON},${MAP_LAT},pm2rdm&l=map`;
const MAP_LINK = `https://yandex.ru/maps/?pt=${MAP_LON},${MAP_LAT}&z=16&l=map`;

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
      <div className="relative mx-auto grid max-w-[1100px] gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">Логистика</p>
          <h2 className="mt-2 whitespace-nowrap text-[clamp(17px,4.2vw,24px)] font-semibold leading-tight tracking-tight text-[#faf9f5]">
            Привезли — окрасили — забрали
          </h2>
          <p className="mt-3 text-[14px] leading-[1.55] text-[#9da7a1] sm:text-[15px]">
            {ADDRESS}. Удобно для металлоконструкций по городу и области. Заезд фуры уточняйте в заявке.
          </p>

          <div className="mt-6 space-y-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="block text-[24px] font-semibold tracking-tight text-white transition hover:text-[#ff5a36] sm:text-[26px]"
            >
              {PHONE}
            </a>
            <p className="text-[13px] text-[#8a948e]">{EMAIL}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            {[
              ["24 ч", "ответ по просчёту"],
              ["от 2 дн.", "срок в работе"],
              ["до 12 м", "без разборки"],
              ["1,5 т", "на крюке"],
            ].map(([a, b]) => (
              <div
                key={b}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <p className="text-[16px] font-semibold text-[#faf9f5] sm:text-[18px]">{a}</p>
                <p className="text-[10px] text-[#7a847e] sm:text-[11px]">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[16/11] w-full bg-[#151a17] sm:aspect-[16/10]">
              <iframe
                title="ПолимерКолор на карте — Переездная 1"
                src={MAP_SRC}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium text-[#faf9f5]">{ADDRESS}</p>
                <p className="text-[11px] text-[#7a847e]">Метка на карте</p>
              </div>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-white/15 px-3.5 py-2 text-[12px] text-[#e8ece9] transition hover:border-white/30 hover:bg-white/5"
              >
                Открыть карту
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
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
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-left text-[13px] text-[#ff5a36] underline"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div>
                  <p className="text-[22px] font-semibold text-white">Просчёт за минуту</p>
                  <p className="mt-1 text-[13px] text-[#8a948e]">
                    Габарит, вес и срок — и мы ответим по возможности камеры
                  </p>
                </div>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-wide text-[#6f7973]">Имя / компания</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ООО «Металл» / Иван"
                    className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none transition placeholder:text-white/30 focus:border-[#ff5a36]"
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
                    className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none transition placeholder:text-white/30 focus:border-[#ff5a36]"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-wide text-[#6f7973]">
                    Изделие, габарит, вес, срок
                  </span>
                  <input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Фермы 9 м, ~800 кг, нужно к 10-му"
                    className="mt-1.5 w-full border-b border-white/15 bg-transparent pb-2 text-[15px] text-white outline-none transition placeholder:text-white/30 focus:border-[#ff5a36]"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-lift mt-2 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#ff5a36] text-[15px] font-medium text-white shadow-[0_12px_40px_-10px_rgba(255,90,54,0.5)]"
                >
                  Отправить на просчёт <Arrow className="size-4" />
                </button>
                <p className="text-center text-[11px] text-[#5c6560]">
                  Нажимая кнопку, вы соглашаетесь на связь по заявке
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-4 py-6 text-[12px] text-[#5c6560] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>© {new Date().getFullYear()} ПолимерКолор</span>
          <span>{ADDRESS}</span>
          <a href={`tel:${PHONE_TEL}`} className="text-[#aeb7b1] transition hover:text-white">
            {PHONE}
          </a>
        </div>
      </footer>
    </section>
  );
}
