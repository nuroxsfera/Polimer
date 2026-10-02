"use client";

import { PHONE_TEL } from "../shared";

/** Липкая полоска на мобиле: просчёт + звонок */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#101412]/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-[960px] gap-2">
        <a
          href="#contact"
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#ff5a36] text-[14px] font-medium text-white"
        >
          Просчёт
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-white/25 text-[14px] text-[#faf9f5]"
        >
          Звонок
        </a>
      </div>
    </div>
  );
}
