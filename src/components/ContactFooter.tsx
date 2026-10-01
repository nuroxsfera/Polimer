"use client";

import { A, Arrow, Marker } from "./shared";

export function ContactFooter() {
  return (
    <>
      {/* CONTACT + FOOTER */}
      <section id="contact" className="bg-[#101412]">
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-12 overflow-hidden px-6 py-16 md:gap-[70px] md:px-[72px] md:py-[90px] lg:flex-row">
          <div className="relative z-10 flex w-full flex-col justify-between lg:w-[590px]">
            <Marker label="Начнём с вашей детали" light />
            <div className="my-8">
              <h2 className="mb-6 text-[clamp(32px,5vw,64px)] leading-[1.02] text-[#faf9f5]">Покажите нам металл. Мы покажем его лучшую версию.</h2>
              <p className="max-w-[500px] text-[16px] leading-[1.5] text-[#aeb7b1]">Прикрепите чертёж, укажите тираж и желаемый цвет. Инженер предложит систему покрытия, срок и фиксированную стоимость.</p>
            </div>
            <div className="flex gap-6">
              {[["24 ч", "точный расчёт"], ["48 ч", "образец цвета"], ["NDA", "по запросу"]].map(([v, l]) => (
                <div key={v}><p className="text-[22px] text-[#ff5a36]">{v}</p><p className="text-[10px] text-[#8c9690]">{l}</p></div>
              ))}
            </div>
          </div>
          <form className="relative z-10 flex flex-1 flex-col gap-6 rounded-[40px] border border-white/9 bg-white/4 p-6 md:p-[34px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between">
              <p className="text-[26px] text-[#faf9f5]">Рассчитать покрытие</p>
              <span className="text-[10px] text-[#87918b]">01 / 02</span>
            </div>
            {[["Имя и компания", "Как к вам обращаться"], ["Рабочий e-mail", "name@company.eu"], ["Проект", "Материал, габариты, тираж, срок"]].map(([label, ph]) => (
              <label key={label} className="block border-b border-white/17 pb-3">
                <span className="mb-1.5 block text-[9px] uppercase text-[#909b94]">{label}</span>
                <input type="text" placeholder={ph} className="w-full bg-transparent text-[13px] text-[#faf9f5] outline-none placeholder:text-[#faf9f5]/50" />
              </label>
            ))}
            <div className="flex items-center gap-3 rounded-[18px] border border-dashed border-white/21 p-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-white/6 text-[#faf9f5]">📎</div>
              <div>
                <p className="text-[11px] text-[#faf9f5]">Добавить чертёж или фото</p>
                <p className="text-[9px] text-[#849089]">PDF, STEP, DWG, JPG · до 50 МБ</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="max-w-[250px] text-[9px] leading-[1.4] text-[#7e8982]">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
              <button type="submit" className="flex h-14 items-center gap-3.5 rounded-full bg-[#ff5a36] px-6 text-[13px] text-white">Продолжить <Arrow /></button>
            </div>
          </form>
        </div>

        <div className="flex flex-wrap justify-between gap-8 border-y border-white/11 px-6 py-12 md:px-[72px] md:py-[58px]">
          {[["Продажи", "hello@velora-coating.eu", "+48 22 307 41 80"], ["Производство", "Wrocław, Poland", "ul. Przemysłowa 24 · 54-611"], ["Часы работы", "Пн–Пт · 07:00–18:00", "CET · отгрузка по записи"]].map(([label, a, b]) => (
            <div key={label}>
              <p className="mb-1.5 text-[9px] uppercase text-[#78827c]">{label}</p>
              <p className="text-[19px] text-[#faf9f5]">{a}</p>
              <p className="text-[11px] text-[#a6b0aa]">{b}</p>
            </div>
          ))}
        </div>

        <footer className="px-6 pb-8 pt-12 md:px-[72px] md:pb-[34px] md:pt-[58px]">
          <div className="mb-12 flex flex-wrap justify-between gap-10 md:mb-[70px]">
            <div className="max-w-[420px]">
              <div className="mb-3.5 flex items-center gap-3">
                <div className="flex size-[38px] items-center justify-center rounded-[13px] bg-[#ff5a36]">
                  <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="text-[22px] text-[#faf9f5]">VELORA</span>
              </div>
              <p className="max-w-[340px] text-[11px] leading-[1.5] text-[#849089]">Полимерно-порошковые покрытия для архитектуры, промышленности и предметного дизайна. Работаем по всей Европе.</p>
            </div>
            {[
              { title: "Решения", links: ["Архитектура", "Промышленность", "Мебель", "Спецпокрытия"] },
              { title: "Компания", links: ["О производстве", "Проекты", "Качество", "Карьера"] },
              { title: "Ресурсы", links: ["Каталог RAL", "Технический гид", "FAQ", "Документы"] },
            ].map((col) => (
              <div key={col.title} className="w-[140px] md:w-[160px]">
                <p className="mb-3.5 text-[10px] uppercase text-[#faf9f5]">{col.title}</p>
                <ul className="space-y-2 text-[11px] text-[#8f9993]">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="hover:text-[#faf9f5]">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-[9px] text-[#69736d]">
            <span>© 2026 Velora Coating Sp. z o.o.</span>
            <div className="flex gap-6"><a href="#">Конфиденциальность</a><a href="#">Cookies</a><a href="#">Imprint</a></div>
            <span>ISO 9001 · REACH · RoHS</span>
          </div>
        </footer>
      </section>

    </>
  );
}
