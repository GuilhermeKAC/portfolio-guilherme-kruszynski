<div align="center">

# ✦ Guilherme Kruszynski — Portfolio

**Portfólio pessoal e currículo online** desenvolvido com Vue 3, TypeScript e Tailwind CSS v4.  
Estilo editorial bold, bilíngue (PT/EN) e animações suaves com GSAP + Lenis.

[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Pinia](https://img.shields.io/badge/Pinia-3.0-FFD859?style=flat-square&logo=pinia&logoColor=black)](https://pinia.vuejs.org/)

</div>

---

## Visão Geral

Portfolio/currículo online com foco em clareza visual e performance. Construído do zero com uma stack moderna, sem dependências desnecessárias.

- **Bilíngue** — Português e Inglês com troca instantânea, sem vue-i18n (locale store customizado com Pinia)
- **Animações performáticas** — GSAP com ScrollTrigger para entradas de seção; microinterações apenas via CSS
- **Scroll suave** — Lenis para experiência de scroll fluida em toda a página
- **Tailwind v4** — Configuração 100% via `@theme` no CSS, sem `tailwind.config.js`
- **Sem over-engineering** — Composables simples, sem abstrações desnecessárias

---

## Stack

| Categoria        | Tecnologia                                   |
|------------------|----------------------------------------------|
| Framework        | Vue 3 `<script setup>` + TypeScript          |
| Build            | Vite 8                                       |
| Estilização      | Tailwind CSS v4 (tokens via `@theme`)        |
| Estado           | Pinia v3 (localeStore)                       |
| Animações        | GSAP 3 + ScrollTrigger + Lenis              |
| Testes           | Vitest + @vue/test-utils                     |
| Qualidade        | ESLint (oxlint + eslint-plugin-vue) + Prettier |

---

## Estrutura

```
src/
├── components/
│   ├── layout/          # AppHeader, AppFooter, LanguageSwitcher
│   ├── sections/        # Hero, TechStack, Experience, Achievements, Education, Contact
│   └── ui/              # SectionHeading, TimelineItem, ProgressBar, SkillBadge, AppButton
├── composables/         # useAnimation, useLocale, useScroll
├── locales/             # pt.json, en.json
├── stores/              # localeStore (Pinia)
├── types/               # index.ts
└── utils/               # constants.ts
```

---

## Rodando localmente

**Pré-requisitos:** Node.js 20+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

**Outros comandos:**

```bash
npm run test      # Rodar testes (Vitest)
npm run lint      # Lint com oxlint + eslint
npm run format    # Formatar com Prettier
```

---

## Seções

| # | Seção         | Descrição                                              |
|---|---------------|--------------------------------------------------------|
| 1 | **Hero**      | Apresentação, cargo e resumo profissional              |
| 2 | **Stack**     | Tecnologias organizadas por categoria                  |
| 3 | **Experiência** | Timeline de experiências profissionais              |
| 4 | **Conquistas** | Métricas e resultados de impacto                      |
| 5 | **Formação**  | Graduação e certificações                              |
| 6 | **Contato**   | Links e disponibilidade                                |

---

## Internacionalização

Implementação customizada sem vue-i18n. O `localeStore` (Pinia) carrega `pt.json` ou `en.json` e expõe uma função `t('dot.notation')` para todas as traduções. O idioma persiste via `localStorage`.

---

<div align="center">

Feito com Vue 3 por **Guilherme Kruszynski**

</div>