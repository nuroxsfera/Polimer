import type { Metadata } from "next";
import Link from "next/link";
import { ADDRESS, EMAIL, PHONE } from "@/components/assets";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description: "Политика обработки персональных данных ПолимерКолор",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#101412]">
      <div className="mx-auto max-w-[720px] px-4 py-16 sm:px-6">
        <Link href="/" className="text-[13px] text-[#ff5a36] hover:underline">
          ← На главную
        </Link>
        <h1 className="mt-6 text-[28px] font-semibold leading-tight sm:text-[34px]">
          Политика обработки персональных данных
        </h1>
        <p className="mt-2 text-[13px] text-[#69736d]">ПолимерКолор · {ADDRESS}</p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.65] text-[#3a423d]">
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">1. Общие положения</h2>
            <p className="mt-2">
              Настоящая политика определяет порядок обработки персональных данных, которые вы
              передаёте через сайт при отправке заявки на расчёт (имя/название компании, телефон,
              описание задачи).
            </p>
          </section>
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">2. Цели обработки</h2>
            <p className="mt-2">
              Данные используются только для связи по заявке: уточнения габаритов, сроков и
              стоимости порошкового покрытия, а также для обратной связи по телефону или e-mail.
            </p>
          </section>
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">3. Состав данных</h2>
            <p className="mt-2">
              Имя или название организации, номер телефона, текст заявки (изделие, габарит, вес,
              желаемый срок). Иные данные не запрашиваются.
            </p>
          </section>
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">4. Хранение и передача</h2>
            <p className="mt-2">
              Данные не продаются и не передаются третьим лицам, за исключением случаев,
              предусмотренных законодательством РФ. Срок хранения — до достижения цели обработки
              или отзыва согласия.
            </p>
          </section>
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">5. Права субъекта</h2>
            <p className="mt-2">
              Вы можете запросить уточнение, блокирование или удаление данных, направив обращение
              на {EMAIL} или по телефону {PHONE}.
            </p>
          </section>
          <section>
            <h2 className="text-[17px] font-semibold text-[#101412]">6. Контакты оператора</h2>
            <p className="mt-2">
              ПолимерКолор
              <br />
              {ADDRESS}
              <br />
              {PHONE}
              <br />
              {EMAIL}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
