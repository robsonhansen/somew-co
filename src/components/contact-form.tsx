"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/robhansen.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Erro ao enviar o formulário.");
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("contactForm")}</h2>

        <div className="max-w-md mx-auto">
          {isSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="pb-2 ml-1" htmlFor="name">
                {t("name")}
              </Label>
              <Input
                className="bg-white"
                placeholder={t("namePlaceholder")}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="pb-2 ml-1" htmlFor="email">
                {t("email")}
              </Label>
              <Input
                className="bg-white"
                placeholder={t("emailPlaceholder")}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="pb-2 ml-1" htmlFor="message">
                {t("message")}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("messagePlaceholder")}
                className="resize-none bg-white"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <Button variant="black" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : t("send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
