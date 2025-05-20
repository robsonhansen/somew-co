"use client";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="text-sm border-t border-gray-800 mt-8 pt-8 text-center color-red">
        <p className="mt-4">{t("copyright")}</p>
      </div>
    </footer>
  );
}
