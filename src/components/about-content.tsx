"use client";

import { useLanguage } from "@/components/language-provider";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("about")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Somew.co</h2>
            <p className="text-lg mb-6">{t("companyDescription")}</p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">{t("address")}</h3>
              <address className="not-italic">
                <p>Rio de Janeiro - RJ</p>
                <p>São Paulo - SP</p>
                <p>Brasil</p>
              </address>
            </div>
          </div>

          <div className="mt-1 ml-9">
            <h3 className="text-xl font-bold mb-4">{t("generalInquiries")}</h3>
            <p className="mb-2">somew.co@gmail.com</p>
            <p className="mb-6">+55 (11) 93079-7469</p>

            <h3 className="text-xl font-bold mb-4">{t("whatsapp")}</h3>
            <a
              href="https://wa.me/5511930797469"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <div className="mt-5">
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
        </div>
      </div>
    </section>
  );
}
