"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar",
    contactUs: "Entre em contato",
    contactForm: "Formulário de contato",
    whatsapp: "Contato via WhatsApp",
    address: "Endereço",
    phone: "Telefone",
    generalInquiries: "Informações gerais",
    companyDescription:
      "A Somew.Co é uma produtora audiovisual que transforma ideias em narrativas visuais com profundidade. O olhar da marca parte da fotografia, mas avança com direção, estética e verdade. Cada imagem é construída com um propósito sensorial: fazer sentir.",
    latestWorks: "Trabalhos recentes",
    allProjects: "Todos os projetos",
    viewMore: "Ver mais",
    followUs: "Siga-nos",
    messagePlaceholder: "Escreva sua mensagem",
    copyright: "© 2025 Somew.co. Todos os direitos reservados.",
    slogan: "Histórias sentidas. Imagens pensadas",
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    contactUs: "Contact us",
    contactForm: "Contact form",
    whatsapp: "WhatsApp contact",
    address: "Address",
    phone: "Phone",
    generalInquiries: "General inquiries",
    companyDescription:
      "Somew.Co is an audiovisual production company that turns ideas into visual narratives with depth. The brand’s vision begins with photography but evolves through direction, aesthetics, and authenticity. Every image is crafted with a sensory purpose: to make you feel.",
    latestWorks: "Latest works",
    allProjects: "All projects",
    viewMore: "View more",
    followUs: "Follow us",
    messagePlaceholder: "Write your message",
    copyright: "© 2025 Somew.co. All rights reserved.",
    slogan: "Stories felt. Images crafted.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
