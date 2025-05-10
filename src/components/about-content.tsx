"use client";

import { useLanguage } from "@/components/language-provider";

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

          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
