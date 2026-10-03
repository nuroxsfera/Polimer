"use client";

import { PHONE_TEL } from "../shared";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
      <div className="mx-auto flex max-w-[960px] gap-2 rounded-2xl border border-white/10 bg-[#101412]/95 p-2 shadow-[0_-8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#ff5a36] text-[14px] font-semibold text-white"
        >
          Просчёт
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-white/15 text-[14px] font-medium text-[#faf9f5]"
        >
          Позвонить
        </a>
      </div>
    </div>
  );
}
