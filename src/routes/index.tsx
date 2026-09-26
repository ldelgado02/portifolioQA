import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import heroCover from "@/assets/hero-cover.jpg";
import workSuite from "@/assets/work-suite.jpg";
import workMobile from "@/assets/work-mobile.jpg";

const CONTACT = {
  email: "luisgustavo220602@gmail.com",
  linkedin: "https://www.linkedin.com/in/luis-gustavo-qa-automation",
  github: "https://github.com/DelgadoQA-sys",
};

const CV_URL = "/cv-luis-gustavo-delgado.pdf";

const METRICS = [
  {
    value: "−64%",
    label:
      "de bugs em produção em iGaming, Web desktop e mobile, levando a validação para antes do deploy.",
    meta: "stellar gaming · validação pré-deploy",
    tone: "pass" as const,
    tilt: "rotate-2",
  },
  {
    value: "12 devs",
    label: "atendidos por uma área de QA criada do zero: nada sobe sem aprovação do QA.",
    meta: "repediu · qase · jira · cypress",
    tone: "plain" as const,
    tilt: "-rotate-2",
  },
  {
    value: "12 URAs",
    label: "para a Sky: participei da implementação, do planejamento à homologação.",
    meta: "noovi · sky · ura",
    tone: "pass" as const,
    tilt: "rotate-1",
  },
  {
    value: "5+",
    label: "clientes atendidos, entre eles Grupo Casas Bahia, Cogna, Unimed e Espaço Laser.",
    meta: "mutant · ura e bots de whatsapp",
    tone: "plain" as const,
    tilt: "-rotate-1",
  },
];

const PROJECTS = [
  {
    image: workSuite,
    title: "QA do zero em um CRM — Repediu",
    problem: "Um time de 12 desenvolvedores entregando um CRM sem área de QA estruturada.",
    actions: [
      "Implantei o Qase para gestão de casos de teste, execuções e bugs, integrado ao fluxo de tasks no Jira.",
      "Criei cerca de 60 testes automatizados em Cypress, com Allure Reports, cobrindo os fluxos críticos.",
      "Mapeei cenários e casos de teste manuais em Gherkin/BDD, para o time de tecnologia entender a cobertura.",
      "Defini processos, ferramentas, metodologia de testes manuais, automatizados e de API, e a documentação de QA.",
      "Criei um dashboard de métricas de QA para o gerente de tecnologia.",
    ],
    result:
      "Nada sobe para produção sem aprovação do QA, e o dashboard mostrou a melhora das entregas após a entrada do QA.",
    tags: ["Cypress", "Allure", "BDD/Gherkin", "Qase", "Jira"],
    meta: "12 devs · ~60 testes automatizados · dashboard de métricas",
    tilt: "rotate-1",
  },
  {
    image: workMobile,
    title: "Qualidade em iGaming — Stellar Gaming",
    problem:
      "Bugs chegando à produção nas plataformas de apostas EstrelaBet e Vupi, em Web desktop e Web mobile (iOS e Android), em uma empresa AI First.",
    actions: [
      "Mapeei todo o fluxo de navegação do sistema, que virou a base da cobertura de testes e da regressão.",
      "Levei a validação para antes do deploy.",
      "Crio planos de teste por funcionalidade (por exemplo, 51 casos para a nova navegação lateral) e comparo o entregue com o Figma.",
      "Uso IA para criar planos e casos de teste e relatórios de qualidade.",
      "Estou criando um repositório centralizado de casos de teste no modelo do Qase.",
    ],
    result: "Redução de mais de 64% nos bugs encontrados em produção.",
    tags: ["IA aplicada a QA", "Jira", "Figma", "Web desktop e mobile"],
    meta: "estrelabet · vupi · bugs em produção −64%",
    tilt: "-rotate-1",
  },
];

const EXPERIENCE = [
  {
    company: "Stellar Gaming (EstrelaBet e Vupi)",
    role: "Engenheiro de QA",
    period: "ago/2026 — atual · empresa AI First",
    context:
      "QA das plataformas de apostas EstrelaBet e Vupi em Web desktop e Web mobile (iOS e Android).",
    highlights: [
      "Reduzi em mais de 64% os bugs encontrados em produção, levando a validação para antes do deploy.",
      "Mapeei todo o fluxo de navegação do sistema, que virou a base da cobertura de testes e da regressão.",
      "Estou criando um repositório centralizado de casos de teste no modelo do Qase, organizado por funcionalidade, com status de execução, ambiente e bugs vinculados.",
      "Estou iniciando a automação dos fluxos críticos com Playwright, acompanhando a migração da plataforma para código próprio.",
      "Monitoro a performance diariamente com GTmetrix, Chrome DevTools e Core Web Vitals, comparando as duas plataformas.",
      "Crio planos de teste por funcionalidade (por exemplo, 51 casos para a nova navegação lateral) e comparo o entregue com o Figma.",
      "Faço a gestão de bugs e do fluxo de QA no Jira.",
    ],
  },
  {
    company: "Repediu",
    role: "Engenheiro de QA",
    period: "abr/2026 — jul/2026",
    context:
      "Responsável por criar a área de QA do zero em um CRM, com um time de 12 desenvolvedores.",
    highlights: [
      "Mudei o processo de entrega do time de desenvolvimento: “nada sobe para produção sem aprovação do QA”.",
      "Criei um dashboard de métricas de QA que mostrou ao gerente de tecnologia a melhora das entregas após a entrada do QA.",
      "Implantei o Qase para gestão de casos de teste, execuções e bugs, integrado ao fluxo de tasks no Jira.",
      "Criei cerca de 60 testes automatizados em Cypress, com Allure Reports, cobrindo os fluxos críticos.",
      "Mapeei cenários e casos de teste manuais usando Gherkin/BDD como padrão, para maior entendimento do time de tecnologia.",
      "Defini processos, ferramentas, metodologia de testes manuais, automatizados e de API, e a documentação de QA.",
    ],
  },
  {
    company: "Mutant",
    role: "Analista de Teste/QA",
    period: "jan/2025 — jan/2026",
    context:
      "QA de projetos de atendimento automatizado (URA e bots de WhatsApp) para mais de 5 clientes, entre eles Grupo Casas Bahia (Via Varejo), Cogna, Unimed e Espaço Laser.",
    highlights: [
      "Planejei e criei planos e casos de teste com cobertura funcional completa dos fluxos críticos, com gestão centralizada no Jira.",
      "Executei testes manuais em URA e bots de WhatsApp, com análise de logs no Genesys e no Grafana para identificar falhas e inconsistências.",
      "Validei APIs no Postman, incluindo APIs da plataforma Genesys, antecipando problemas de integração e de regras de negócio.",
      "Analisei, priorizei e reportei bugs com foco em causa raiz, impacto no negócio e severidade, reduzindo retrabalho do time de desenvolvimento.",
      "Elaborei a documentação de QA ao final dos projetos, com rastreabilidade entre testes e bugs.",
    ],
  },
  {
    company: "Noovi do Brasil",
    role: "Analista de Teste/QA",
    period: "abr/2021 — dez/2024",
    context: "QA de URAs dedicado ao cliente Sky.",
    highlights: [
      "Participei da implementação de 12 URAs para a Sky, do planejamento à homologação com o cliente.",
      "Planejei e criei casos de teste no Jira, Excel e TestLink, padronizando o processo e melhorando a rastreabilidade dos requisitos.",
      "Executei testes manuais em URA, com análise de logs no Avaya para identificar falhas antes da entrega ao cliente.",
      "Consultei e manipulei dados em SQL para preparar massas de teste e validar cenários complexos.",
      "Analisei e reportei bugs com foco em causa raiz, severidade e impacto no negócio.",
      "Conduzi a homologação com o cliente por meio de documentação estruturada dos testes executados.",
    ],
  },
];

const SKILLS = [
  {
    area: "Estratégia de QA",
    items: [
      "Testes baseados em risco",
      "Métricas e dashboards de qualidade",
      "Homologação com cliente",
    ],
  },
  {
    area: "Automação",
    items: [
      "Cypress",
      "Playwright",
      "JavaScript",
      "Python",
      "Page Object Model",
      "BDD/Gherkin",
      "Allure Reports",
    ],
  },
  { area: "API e dados", items: ["Postman", "APIs REST", "SQL", "PostgreSQL"] },
  {
    area: "Performance",
    items: ["k6", "Lighthouse", "GTmetrix", "Chrome DevTools", "Core Web Vitals"],
  },
  { area: "CI/CD e versionamento", items: ["Git", "GitHub Actions"] },
  { area: "Gestão de testes e bugs", items: ["Jira", "Qase", "TestLink"] },
  {
    area: "Canais",
    items: [
      "Web desktop",
      "Web mobile (iOS e Android)",
      "URA",
      "Bots de WhatsApp",
      "Logs em Genesys, Grafana e Avaya",
    ],
  },
  {
    area: "IA aplicada a QA",
    items: [
      "Geração de cenários",
      "Análise de requisitos",
      "Automação de relatórios",
      "Integração Claude + Jira",
      "MCP",
    ],
  },
];

const EDUCATION = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    detail: "Faculdade Impacta Tecnologia · jul/2021 — jul/2024",
  },
];

const LANGUAGES = [
  { name: "Português", level: "nativo" },
  {
    name: "Inglês",
    level: "profissional (leitura e escrita: avançado; conversação: intermediário)",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luis Gustavo Delgado · Engenheiro QA — Portfólio" },
      {
        name: "description",
        content:
          "Portfólio de Luis Gustavo Delgado, Engenheiro QA em São Paulo com mais de 4 anos em Web, APIs, CRM, URA e chatbots: −64% de bugs em produção em iGaming, área de QA criada do zero para 12 devs, automação com Cypress e Playwright e IA aplicada a QA.",
      },
      { property: "og:title", content: "Luis Gustavo Delgado · Engenheiro QA" },
      {
        property: "og:description",
        content:
          "Encontro o bug antes do seu usuário. −64% de bugs em produção em iGaming e uma área de QA criada do zero para 12 devs.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    document.documentElement.classList.add("reveal-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div aria-hidden className="decor pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-x-0 top-0 h-[820px] opacity-60" />
        <div className="absolute -top-32 -left-28 h-[26rem] w-[26rem] rounded-full bg-pass/10 blur-[120px]" />
        <div className="absolute top-[38%] -right-24 h-[22rem] w-[22rem] rounded-full bg-rim/10 blur-[120px]" />
        <div className="drift-a absolute top-36 right-[10%] hidden h-40 w-60 rounded-3xl pane lg:block" />
      </div>

      <header className="no-print relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            LD
          </span>
          <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap">
            Luis Gustavo Delgado
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          <a className="transition-colors hover:text-foreground" href="#metricas">
            Métricas
          </a>
          <a className="transition-colors hover:text-foreground" href="#trabalho">
            Trabalho
          </a>
          <a className="transition-colors hover:text-foreground" href="#experiencia">
            Experiência
          </a>
          <a className="transition-colors hover:text-foreground" href="#competencias">
            Competências
          </a>
          <a className="transition-colors hover:text-foreground" href="#contato">
            Contato
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-input px-4 py-1.5 text-foreground transition-colors hover:bg-secondary"
          >
            Currículo
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <section id="top" className="grid items-center gap-10 py-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass-soft px-3 py-1 font-mono text-xs font-medium tracking-[0.14em] text-pass uppercase">
              <span className="size-1.5 rounded-full bg-pass" />
              Engenheiro QA · Automação
            </span>
            <h1 className="mt-6 max-w-[16ch] font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Encontro o bug <span className="text-pass">antes</span> do seu usuário.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
              Mais de 4 anos em aplicações Web desktop e mobile, APIs, CRM, URA e chatbots, nos
              setores de iGaming, varejo, educação, saúde e telecom. Estruturo QA do zero e coloco a
              qualidade dentro do processo de entrega, não só no final dele.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
              Atuo em uma empresa AI First e uso IA no dia a dia de QA: na criação de planos e casos
              de teste, nos relatórios de qualidade e na análise de performance, liberando tempo
              para teste exploratório e automação.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#trabalho"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver meu trabalho
              </a>
              <a
                href={CV_URL}
                download
                className="rounded-full border border-input px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
              >
                Baixar currículo
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="pane -rotate-2 rounded-3xl p-5 transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-hairline">
                <img
                  src={heroCover}
                  alt="Ilustração abstrata de uma suíte de testes em execução, com marcações de aprovação em verde"
                  width={1024}
                  height={1280}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold">Luis Gustavo Delgado</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Engenheiro QA · São Paulo, SP
                  </p>
                </div>
                <span className="rounded-full bg-pass-soft px-2.5 py-1 font-mono text-xs font-medium text-pass">
                  −64% bugs
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="metricas"
          data-reveal
          className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((metric) => (
            <div
              key={metric.value}
              className={`${metric.tilt} pane rounded-2xl p-6 transition-transform duration-500 hover:rotate-0`}
            >
              <p
                className={`font-display text-4xl font-bold ${
                  metric.tone === "pass" ? "text-pass" : "text-foreground"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {metric.label}
              </p>
              <p className="mt-4 font-mono text-[11px] tracking-wide text-muted-foreground">
                {metric.meta}
              </p>
            </div>
          ))}
        </section>

        <section id="trabalho" data-reveal className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Trabalhos selecionados
            </h2>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              02 estudos de caso · 2026
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`${project.tilt} pane rounded-2xl p-6 transition-transform duration-500 hover:rotate-0`}
              >
                <div className="overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-hairline">
                  <img
                    src={project.image}
                    alt=""
                    width={1280}
                    height={768}
                    loading="lazy"
                    className="aspect-16/9 w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{project.title}</h3>
                <dl className="mt-3 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                      Problema
                    </dt>
                    <dd className="mt-1 text-muted-foreground text-pretty">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                      O que fiz
                    </dt>
                    <dd className="mt-1">
                      <ul className="list-disc space-y-1 pl-5 text-muted-foreground marker:text-rim">
                        {project.actions.map((action) => (
                          <li key={action} className="text-pretty">
                            {action}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.14em] text-pass uppercase">
                      Resultado
                    </dt>
                    <dd className="mt-1 font-medium text-foreground text-pretty">
                      {project.result}
                    </dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-t border-hairline pt-3 font-mono text-[11px] text-muted-foreground">
                  {project.meta}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" data-reveal className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Experiência</h2>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              abr/2021 — atual
            </span>
          </div>
          <ol className="grid gap-6 md:grid-cols-2">
            {EXPERIENCE.map((job) => (
              <li key={job.company} className="pane rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">{job.company}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                </div>
                <p className="mt-1 font-mono text-xs tracking-wide text-pass">{job.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground text-pretty">
                  {job.context}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-rim">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="text-pretty">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="competencias" data-reveal className="grid gap-6 py-10 md:grid-cols-3">
          <div className="pane rounded-2xl p-6 md:col-span-2">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Competências técnicas
            </h2>
            <dl className="mt-5 space-y-4">
              {SKILLS.map((group) => (
                <div
                  key={group.area}
                  className="border-t border-hairline pt-4 first:border-t-0 first:pt-0"
                >
                  <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {group.area}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="formacao" className="pane rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Formação e idiomas
            </h2>
            <ul className="mt-5 space-y-4">
              {EDUCATION.map((course) => (
                <li key={course.title}>
                  <p className="font-display text-base font-semibold text-pretty">{course.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{course.detail}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-3 border-t border-hairline pt-5">
              {LANGUAGES.map((language) => (
                <li key={language.name} className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">{language.name}:</span>{" "}
                  <span className="text-muted-foreground">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" data-reveal className="py-10">
          <div className="pane-strong relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ background: "var(--gradient-panel)" }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
                Vamos falar sobre qualidade.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
                {CONTACT.email} · São Paulo, SP
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-6 inline-block rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="no-print relative z-10 mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 md:flex-row">
          <p>© 2026 Luis Gustavo Delgado — Engenheiro QA</p>
          <div className="flex gap-6 font-mono text-xs">
            <a href={CONTACT.github} className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href={CONTACT.linkedin} className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-foreground">
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
