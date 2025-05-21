"use client";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-4">
      <p className="mt-4 flex justify-center">{t("copyright")}</p>
    </footer>
  );
}
