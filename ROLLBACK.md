# Откат на длинный лендинг (v1)

1. Открыть `src/app/page-long.tsx.archive` — там полная сборка из 12 блоков.
2. Скопировать импорты и JSX в `src/app/page.tsx`.
3. Задеплоить.

Старые компоненты (`Why`, `Process`, `Technology`…) **не удалялись** — лежат в `src/components/`.

Короткая главная (v2): `page.tsx` + `src/components/short/`.
