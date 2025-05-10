"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Logo } from "@/components/logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="h-10 w-auto mb-4" />
            <p className="max-w-xs">{t("companyDescription").substring(0, 120)}...</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("contactUs")}</h3>
            <address className="not-italic">
              <p className="mb-2">Rio de Janeiro, Brasil</p>
              <p className="mb-2">somew.co@gmail.com</p>
              <p className="mb-2">+55 (11) 93079-7469</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-sm border-t border-gray-800 mt-8 pt-8 text-center color-red">
          <p className="mt-4">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
