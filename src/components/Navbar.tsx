"use client";

import { useEffect, useState } from "react";
import { Arrow, PHONE, PHONE_TEL } from "./shared";

const NAV = [
  { label: "Технология", href: "#Технология" },
  { label: "Возможности", href: "#Возможности" },
  { label: "Проекты", href: "#Проекты" },
  { label: "Качество", href: "#Качество" },
  { label: "Контакты", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#101412]/95 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md"
          : "bg-[#101412]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-20 sm:px-6 md:h-24 md:px-[72px]">
        <a href="#" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-[#ff5a36] sm:size-[38px] sm:rounded-[13px]">
            <svg className="size-4 text-white sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[15px] font-medium tracking-tight text-[#faf9f5] sm:text-[17px]">ПолимерКолор</p>
            <p className="text-[7px] uppercase tracking-wider text-[#aab2ad] sm:text-[8px]">Новосибирск</p>
          </div>
        </a>

        <nav className="hidden gap-[30px] text-[12px] text-[#cdd3cf] lg:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#faf9f5]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href={`tel:${PHONE_TEL}`} className="hidden text-[12px] text-[#faf9f5] md:block">
            {PHONE}
          </a>
          <a
            href="#contact"
            className="btn-lift hidden h-11 items-center gap-2 rounded-full border border-white/30 px-4 text-[12px] text-[#faf9f5] sm:flex md:h-14 md:gap-3 md:px-6 md:text-[13px]"
          >
            <span className="hidden md:inline">Запросить расчёт</span>
            <span className="md:hidden">Расчёт</span>
            <Arrow className="size-3.5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-[#faf9f5] lg:hidden"
          >
            {menuOpen ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101412] px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] text-[#cdd3cf] active:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
            <a href={`tel:${PHONE_TEL}`} className="rounded-xl px-3 py-3 text-[15px] text-[#faf9f5]">
              {PHONE}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-lift flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff5a36] text-[14px] text-white"
            >
              Запросить расчёт <Arrow />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
