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
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  function go(href: string) {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/8 bg-[#101412]/92 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            try {
              history.replaceState(null, "", "/");
            } catch {
              /* ignore */
            }
          }}
          className="flex items-center gap-2.5"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#ff5a36]">
            <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[14px] font-semibold tracking-tight text-[#faf9f5]">ПолимерКолор</p>
            <p className="text-[9px] uppercase tracking-wider text-[#7a847e]">Новосибирск</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] text-[#b8c0bb] sm:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="text-[#faf9f5] transition hover:text-[#ff5a36]">
            {PHONE}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
            className="btn-lift flex h-10 items-center gap-1.5 rounded-full bg-[#ff5a36] px-4 text-[12px] font-medium text-white"
          >
            Просчёт <Arrow className="size-3.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Меню"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white sm:hidden"
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
        <div className="border-t border-white/10 bg-[#101412] px-4 pb-5 pt-2 sm:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
              className="block rounded-xl px-3 py-3.5 text-[16px] text-[#cdd3cf]"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="block rounded-xl px-3 py-3.5 text-[16px] text-white">
            {PHONE}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#ff5a36] text-[15px] font-medium text-white"
          >
            Получить просчёт
          </a>
        </div>
      )}
    </header>
  );
}
