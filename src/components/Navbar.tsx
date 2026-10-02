"use client";

import { useEffect, useState } from "react";
import { Arrow, PHONE, PHONE_TEL } from "./shared";

const NAV = [
  { label: "Камера", href: "#kamera" },
  { label: "Просчёт", href: "#contact" },
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
          : "bg-[#101412]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-4 sm:h-16 sm:px-6 md:px-[72px]">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#ff5a36] sm:size-9">
            <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[15px] font-medium text-[#faf9f5]">ПолимерКолор</p>
            <p className="text-[7px] uppercase tracking-wider text-[#aab2ad]">Новосибирск</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-[13px] text-[#cdd3cf] sm:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#faf9f5]">
              {item.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="text-[#faf9f5]">
            {PHONE}
          </a>
          <a
            href="#contact"
            className="btn-lift flex h-10 items-center gap-2 rounded-full bg-[#ff5a36] px-4 text-[12px] text-white"
          >
            Просчёт <Arrow className="size-3.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-white/25 text-[#faf9f5] sm:hidden"
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

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101412] px-4 pb-4 pt-2 sm:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-3 text-[15px] text-[#cdd3cf]"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="block rounded-xl px-3 py-3 text-[15px] text-[#faf9f5]">
            {PHONE}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#ff5a36] text-[14px] text-white"
          >
            Заявка на просчёт
          </a>
        </div>
      )}
    </header>
  );
}
