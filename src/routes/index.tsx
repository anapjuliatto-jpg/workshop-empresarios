import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Lightbulb,
  ListChecks,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import heroImageAsset from "@/assets/especialista-workshop.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inteligência Artificial para Empresários | Ao vivo" },
      {
        name: "description",
        content:
          "Workshop online e ao vivo para aplicar Inteligência Artificial ao trabalho e aos negócios com clareza e praticidade.",
      },
      { property: "og:title", content: "Inteligência Artificial para Empresários | Ao vivo" },
      {
        property: "og:description",
        content: "Aprenda a transformar IA em uma aliada prática para sua rotina e seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const painPoints = [
  "Você já usa IA para fazer perguntas, textos ou imagens — mas, na prática, sua rotina continua praticamente igual.",
  "Toda semana surge uma nova ferramenta, e você não tem tempo para descobrir qual realmente vale a pena.",
  "As respostas parecem genéricas, e você acaba revisando ou refazendo grande parte do trabalho.",
  "Você sabe que poderia ganhar tempo, mas ainda não sabe o que delegar à IA e o que precisa continuar sob sua decisão.",
];

const experiences = [
  { icon: Target, title: "Diagnóstico de rotina", text: "Identifique onde a IA pode liberar tempo e reduzir tarefas repetitivas." },
  { icon: Lightbulb, title: "Comandos que funcionam", text: "Estruture pedidos mais claros para obter respostas úteis e aplicáveis." },
  { icon: ListChecks, title: "Plano de aplicação", text: "Saia com prioridades definidas para levar o aprendizado à prática." },
];

const schedule = [
  ["01", "Fundamentos sem complicação", "Entenda como pensar com IA e escolher a ferramenta certa para cada objetivo."],
  ["02", "Produtividade e operação", "Organize processos, sintetize informações e ganhe agilidade nas tarefas do dia a dia."],
  ["03", "Comunicação e crescimento", "Use IA para apoiar conteúdo, vendas e decisões sem abrir mão da sua identidade."],
  ["04", "Próximos passos", "Monte um plano realista para continuar aplicando o método depois do encontro."],
];

const faqs = [
  ["Preciso saber usar Inteligência Artificial?", "Não. O conteúdo foi pensado para partir do essencial e avançar para aplicações práticas, com linguagem acessível."],
  ["O workshop será ao vivo?", "Sim. O encontro será online e ao vivo. A plataforma de transmissão ainda será informada."],
  ["Qual é a data e o horário?", "Informação provisória — data e horário a definir."],
  ["Haverá gravação?", "Informação provisória — disponibilidade e prazo de acesso à gravação a definir."],
  ["Como receberei o acesso?", "Informação provisória — os detalhes de acesso serão definidos antes da abertura das inscrições."],
];

function Cta({ label = "QUERO GARANTIR MINHA VAGA", compactMobile = false }: { label?: string; compactMobile?: boolean }) {
  return (
    <Button asChild size="lg" className={`${compactMobile ? "h-12 text-xs sm:h-14 sm:text-sm" : "h-14 text-sm"} w-full rounded-full px-6 font-semibold sm:w-auto`}>
      <a href="#investimento">
        {label}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function Provisional({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{children}</span>;
}

function Index() {
  const heroImage = heroImageAsset.url;

  return (
    <main className="overflow-hidden">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-5 py-2 min-[641px]:gap-4 min-[641px]:py-3 lg:px-10">
          <a href="#inicio" className="min-w-0 whitespace-nowrap font-display text-[13px] font-semibold leading-none text-foreground min-[641px]:text-xl"><span className="min-[641px]:hidden">IA para Empresários</span><span className="hidden min-[641px]:inline">Inteligência Artificial para Empresários</span></a>
          <Button asChild size="sm" className="h-8 shrink-0 rounded-full px-3 text-xs min-[641px]:h-9 min-[641px]:px-4 min-[641px]:text-sm">
            <a href="#investimento">Inscrever-me</a>
          </Button>
        </div>
      </nav>

      <section id="inicio" className="relative border-b border-border/60">
        <div className="mx-auto grid max-w-7xl lg:min-h-[calc(100svh-61px)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-5 py-7 min-[360px]:py-8 min-[641px]:px-10 min-[641px]:py-14 lg:py-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary min-[641px]:mb-4">WORKSHOP ONLINE E AO VIVO</p>
            <h1 className="max-w-2xl text-balance font-display text-[34px] leading-[1.02] font-medium text-foreground min-[360px]:text-[36px] min-[420px]:text-[40px] min-[641px]:text-5xl lg:text-[54px] lg:leading-none">
              Você sabe que precisa usar IA. Só não tem tempo para descobrir tudo sozinho.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-[1.45] text-muted-foreground min-[641px]:mt-4 min-[641px]:text-lg min-[641px]:leading-7">
              Em uma única noite, saia do uso básico e aprenda a aplicar Inteligência Artificial em tarefas reais do seu trabalho ou negócio — com orientação, prática e sem precisar saber programação.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 min-[360px]:gap-2 min-[641px]:mt-6 min-[641px]:gap-3">
              <div className="flex min-w-0 items-start gap-2 border-l-2 border-primary pl-3 min-[641px]:gap-3 min-[641px]:pl-4">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary min-[641px]:size-5" />
                  <div className="min-w-0"><p className="text-[11px] font-semibold uppercase text-muted-foreground min-[641px]:text-xs">DATA</p><p className="mt-0.5 text-xs font-semibold min-[641px]:mt-1 min-[641px]:text-sm"><span className="min-[641px]:hidden">8 de outubro<br />de 2026</span><span className="hidden min-[641px]:inline">8 de outubro de 2026</span></p></div>
              </div>
              <div className="flex min-w-0 items-start gap-2 border-l-2 border-primary pl-3 min-[641px]:gap-3 min-[641px]:pl-4">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-primary min-[641px]:size-5" />
                 <div className="min-w-0"><p className="text-[11px] font-semibold uppercase text-muted-foreground min-[641px]:text-xs">HORÁRIO</p><p className="mt-0.5 text-xs font-semibold min-[641px]:mt-1 min-[641px]:text-sm">Das 19h às 22h</p></div>
              </div>
            </div>
            <div className="mt-5 min-[641px]:mt-7">
              <Cta compactMobile />
              <p className="mx-auto mt-2 max-w-[350px] text-center text-[11px] leading-4 text-muted-foreground min-[641px]:mx-0 min-[641px]:mt-3 min-[641px]:max-w-xl min-[641px]:text-left min-[641px]:text-xs min-[641px]:leading-5">Online e ao vivo • 3 horas de aplicação prática • Gravação disponível por 7 dias</p>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden min-[641px]:aspect-auto min-[641px]:min-h-[520px] lg:min-h-full">
            <img src={heroImage} alt="Empresária trabalhando concentrada em um notebook" width={768} height={1024} className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-[center_32%]" />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/65 via-foreground/30 to-transparent px-6 pb-8 pt-24 text-primary-foreground min-[641px]:via-transparent min-[641px]:pt-28 lg:px-10">
                <p className="max-w-sm font-display text-[22px] leading-[1.2] min-[641px]:text-2xl min-[641px]:leading-tight">Menos perguntas soltas. Mais tarefas executadas com Inteligência Artificial.</p>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-surface-soft py-12 min-[641px]:py-[5.5rem] lg:py-32">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Isso parece familiar?</p>
             <h2 className="mt-3 font-display text-[34px] leading-[1.08] font-medium [hyphens:none] [word-break:normal] min-[641px]:text-5xl min-[641px]:leading-[1.12]">A IA deveria economizar seu tempo. Mas aprender a usá-la virou mais uma tarefa.</h2>
          </div>
           <div className="mt-10 grid gap-[14px] min-[641px]:mt-12 min-[641px]:gap-4 md:auto-rows-fr md:grid-cols-2">
            {painPoints.map((pain, index) => (
               <article key={pain} className="card-elevated flex h-auto items-start gap-4 p-[18px] min-[641px]:h-full min-[641px]:min-h-40 min-[641px]:gap-5 min-[641px]:p-8">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{index + 1}</span>
                 <p className="pt-0.5 text-base leading-[1.45] text-foreground [hyphens:none] [word-break:normal] min-[641px]:pt-1 min-[641px]:leading-7">{pain}</p>
              </article>
            ))}
          </div>
           <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-[1.55] text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:mt-10 min-[641px]:text-lg">
             Você não está atrasado. Só precisa de um caminho mais claro para transformar possibilidades em aplicações reais.
           </p>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">A transformação</p>
            <h2 className="mt-3 font-display text-[32px] leading-[1.08] font-medium [hyphens:none] [word-break:normal] min-[641px]:text-5xl min-[641px]:leading-[1.12]">
              Você não precisa aprender todas as ferramentas. Precisa aprender a fazer a IA trabalhar com você.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-[1.55] text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:mt-6 min-[641px]:text-lg min-[641px]:leading-8">
              Durante o workshop, você partirá de uma necessidade real do seu trabalho ou negócio. Com orientação, aprenderá a fornecer contexto, delegar uma tarefa à Inteligência Artificial e transformar uma ideia em uma experiência prática.
            </p>
          </div>

          <div className="mt-9 grid gap-[14px] min-[641px]:mt-12 lg:grid-cols-3 lg:auto-rows-fr">
            {[
              {
                title: "A IA entende o seu contexto",
                text: "Crie uma base com informações sobre você, sua atividade e seus objetivos para obter respostas mais úteis e personalizadas.",
              },
              {
                title: "Uma tarefa real é executada",
                text: "Use o ChatGPT para desenvolver uma entrega relacionada a uma necessidade verdadeira da sua rotina.",
              },
              {
                title: "Uma ideia vira protótipo",
                text: "Veja como transformar uma necessidade da sua área em uma solução interativa, mesmo sem saber programação.",
              },
            ].map(({ title, text }) => (
              <article key={title} className="h-auto rounded-lg border border-border bg-card p-5 min-[641px]:p-[22px] lg:h-full">
                <h3 className="font-display text-2xl leading-tight font-semibold [hyphens:none] [word-break:normal]">{title}</h3>
                <p className="mt-3 text-base leading-[1.45] text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:text-[17px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="section-shell">
          <p className="eyebrow">Experiências práticas</p>
          <h2 className="section-title max-w-3xl">Aprendizado pensado para virar ação ainda durante o encontro.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {experiences.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-border bg-card p-7">
                <div className="mb-8 grid size-12 place-items-center rounded-full bg-accent text-primary"><Icon /></div>
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Para quem é</p>
            <h2 className="section-title">Para quem lidera, decide e precisa fazer o tempo render.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Sem excesso de termos técnicos. Sem a pressão de testar tudo. O foco é reconhecer oportunidades reais para o seu contexto.</p>
          </div>
          <ul className="space-y-3">
            {["Empresários que querem modernizar a operação com critério.", "Empreendedores sobrecarregados por tarefas manuais e decisões.", "Profissionais autônomos que precisam produzir mais sem perder qualidade.", "Líderes que querem orientar suas equipes sobre o uso responsável da IA."].map((item) => (
              <li key={item} className="flex gap-4 rounded-lg border border-border bg-card p-5"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span className="leading-7">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-surface-soft">
        <div className="section-shell">
          <div className="max-w-3xl"><p className="eyebrow">Programação</p><h2 className="section-title">Uma jornada direta do entendimento à implementação.</h2></div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {schedule.map(([number, title, text]) => (
              <article key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-start sm:gap-8">
                <span className="font-display text-3xl text-primary">{number}</span><h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3><p className="leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[0.72fr_1.28fr]">
          <div className="expert-portrait min-h-80 lg:min-h-[520px]" role="img" aria-label="Espaço reservado para fotografia da especialista" />
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="eyebrow">Sua especialista</p>
            <h2 className="section-title">Conheça quem vai conduzir este encontro.</h2>
            <div className="mt-5"><Provisional>Nome e foto da especialista — a definir</Provisional></div>
            <p className="mt-6 leading-7 text-muted-foreground">Informação provisória — inserir aqui a trajetória profissional, a experiência prática com Inteligência Artificial e as credenciais relevantes da especialista.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Tudo que está incluído</p><h2 className="section-title">O essencial para aprender, praticar e continuar avançando.</h2></div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {["Encontro online e ao vivo", "Exercícios guiados", "Material de apoio — a definir", "Acesso à gravação — a definir", "Canal de suporte — a definir", "Certificado — a definir"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-card p-5 shadow-sm"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check className="size-4" /></span><span className="text-sm font-medium">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="investimento" className="section-space bg-offer text-offer-foreground">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow-light">Seu próximo passo</p>
            <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl lg:text-6xl">Reserve um espaço na agenda para trabalhar de forma mais inteligente.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-offer-muted">Uma experiência ao vivo, objetiva e conectada às decisões que você já precisa tomar todos os dias.</p>
            <div className="mt-8 flex items-center gap-3 text-sm"><MonitorPlay className="size-5 text-coral" /><span>Online e ao vivo</span></div>
          </div>
          <div className="rounded-lg bg-offer-card p-7 text-foreground sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Investimento</p>
            <p className="mt-4 font-display text-4xl font-semibold">Valor a definir</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Informação provisória — preço, condições de pagamento e link de inscrição ainda serão informados.</p>
            <div className="mt-7"><Cta label="Tenho interesse" /></div>
            <p className="mt-4 text-center text-xs text-muted-foreground">O botão será conectado ao canal de inscrição quando estiver definido.</p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell flex flex-col items-center text-center">
          <div className="grid size-16 place-items-center rounded-full bg-accent text-primary"><ShieldCheck className="size-8" /></div>
          <p className="eyebrow mt-7">Garantia</p>
          <h2 className="section-title max-w-3xl">Você poderá decidir com tranquilidade.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Informação provisória — prazo, critérios e condições da garantia a definir antes da abertura das inscrições.</p>
        </div>
      </section>

      <section className="section-space bg-surface-soft">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow">Perguntas frequentes</p><h2 className="section-title">Antes de reservar sua vaga.</h2></div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => (
              <AccordionItem key={question} value={`item-${index}`}>
                <AccordionTrigger className="py-6 text-left text-base hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl rounded-lg bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <Sparkles className="mx-auto size-7" />
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight font-medium sm:text-5xl">Comece a usar a IA com intenção, método e autonomia.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-primary-foreground/80">Inscrições e informações completas em breve.</p>
          <div className="mt-8"><Button asChild size="lg" variant="secondary" className="h-14 w-full rounded-full px-7 sm:w-auto"><a href="#investimento">Quero receber as informações <ArrowRight /></a></Button></div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        <p>Inteligência Artificial para Empresários · Informações comerciais e legais a definir.</p>
      </footer>
    </main>
  );
}