"use client";

import { useState, type ReactNode } from "react";

export const A = {
  hero: "https://www.figma.com/api/mcp/asset/aada5297-f9f0-4c8f-b590-75e10ddc44f4/42244.png",
  eu: "https://www.figma.com/api/mcp/asset/a4793e55-7080-44e6-9523-5c0072d1ff7a/f36f4.png",
  tech: "https://www.figma.com/api/mcp/asset/0cef556b-71a9-4b50-a45e-2171f5c1071a/329ff.png",
  factory: "https://www.figma.com/api/mcp/asset/35af915e-b692-42ab-8510-feb8ffed16dd/be0a6.png",
  arch: "https://www.figma.com/api/mcp/asset/d1d8db0c-5fbf-4edd-abbd-6993e2c7175a/1ca35.png",
  furniture: "https://www.figma.com/api/mcp/asset/d1d8db0c-5fbf-4edd-abbd-6993e2c7175a/65016.png",
  transport: "https://www.figma.com/api/mcp/asset/d1d8db0c-5fbf-4edd-abbd-6993e2c7175a/5be46.png",
  equipment: "https://www.figma.com/api/mcp/asset/d1d8db0c-5fbf-4edd-abbd-6993e2c7175a/326e2.png",
  urban: "https://www.figma.com/api/mcp/asset/d1d8db0c-5fbf-4edd-abbd-6993e2c7175a/2ce2e.png",
  texture: "https://www.figma.com/api/mcp/asset/4f24e4e7-758a-4e94-8040-8f43a39a5d07/eb122.png",
  metro: "https://www.figma.com/api/mcp/asset/b257d86f-02c8-4239-84fe-5829f5c83fba/8a9a9.png",
  luma: "https://www.figma.com/api/mcp/asset/b257d86f-02c8-4239-84fe-5829f5c83fba/7a1ed.png",
  energo: "https://www.figma.com/api/mcp/asset/b257d86f-02c8-4239-84fe-5829f5c83fba/5778a.png",
  lab: "https://www.figma.com/api/mcp/asset/1f614a92-3c3f-454e-9f56-2c639505e5da/b03b5.png",
  capacity: "https://www.figma.com/api/mcp/asset/22e7eafa-c0d3-427e-b999-0989e3744d7b/707d8.png",
  review: "https://www.figma.com/api/mcp/asset/bde7f76e-4b40-4cb0-9f1e-c3f2c78e9f10/3668c.png",
  reviewPrj: "https://www.figma.com/api/mcp/asset/bde7f76e-4b40-4cb0-9f1e-c3f2c78e9f10/e583e.png",
};

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Marker({ label, light }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="size-[7px] animate-pulse rounded-full bg-[#ff5a36]" />
      <span className={`text-[11px] uppercase tracking-wide ${light ? "text-[#faf9f5]" : "text-[#101412]"}`}>{label}</span>
    </div>
  );
}
