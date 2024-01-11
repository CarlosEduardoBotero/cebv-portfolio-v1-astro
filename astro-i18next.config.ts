// import type { AstroI18nextConfig } from "astro-i18next";
// import type { AstroI18nextConfig } from "astro-i18next";

const config = {
  defaultLocale: "pt",
  locales: ["pt", "en", "es"],
  routes: {
    en: {
      projetos: "projects",
    },
    es: {
      projetos: "proyectos",
    },
  },
  i18nextServer: {
    debug: true,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
};

export default config;
