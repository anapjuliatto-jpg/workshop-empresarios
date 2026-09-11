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

import heroImage from "@/assets/workshop-hero.jpg";
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
  "Você sabe que precisa usar IA, mas não encontra tempo para acompanhar cada nova ferramenta.",
  "Já testou comandos prontos, mas ainda não conseguiu transformar isso em um processo consistente.",
  "Tem muitas ideias e tarefas, porém falta clareza sobre o que automatizar primeiro.",
  "Quer crescer com eficiência sem perder a qualidade, a estratégia ou a sua voz.",
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

function Cta({ label = "QUERO GARANTIR MINHA VAGA" }: { label?: string }) {
  return (
    <Button asChild size="lg" className="h-14 w-full rounded-full px-6 text-sm font-semibold sm:w-auto">
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
  return (
    <main className="overflow-hidden">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-10">
          <a href="#inicio" className="min-w-0 font-display text-sm font-semibold leading-tight text-foreground sm:text-xl">Inteligência Artificial para Empresários</a>
          <Button asChild size="sm" className="rounded-full px-4">
            <a href="#investimento">Inscrever-me</a>
          </Button>
        </div>
      </nav>

      <section id="inicio" className="relative border-b border-border/60">
        <div className="mx-auto grid max-w-7xl lg:min-h-[calc(100svh-61px)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-10 sm:py-14 lg:py-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">WORKSHOP ONLINE E AO VIVO</p>
            <h1 className="max-w-2xl text-balance font-display text-[40px] leading-[1.02] font-medium text-foreground sm:text-5xl lg:text-[60px]">
              Você sabe que precisa usar IA. Só não tem tempo para descobrir tudo sozinho.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Em uma única noite, saia do uso básico e aprenda a aplicar Inteligência Artificial em tarefas reais do seu trabalho ou negócio — com orientação, prática e sem precisar saber programação.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 border-l-2 border-primary pl-4">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" />
                 <div><p className="text-xs font-semibold uppercase text-muted-foreground">DATA</p><p className="mt-1 text-sm font-semibold">8 de outubro de 2026</p></div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-primary pl-4">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-primary" />
                 <div><p className="text-xs font-semibold uppercase text-muted-foreground">HORÁRIO</p><p className="mt-1 text-sm font-semibold">Das 19h às 22h</p></div>
              </div>
            </div>
            <div className="mt-7">
              <Cta />
              <p className="mt-3 max-w-xl text-xs leading-5 text-muted-foreground">Online e ao vivo • 3 horas de aplicação prática • Gravação disponível por 7 dias</p>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
            <img src={heroImage} alt="Empresária trabalhando concentrada em um notebook" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/65 to-transparent px-6 pb-8 pt-28 text-primary-foreground lg:px-10">
               <p className="max-w-sm font-display text-2xl leading-tight">Menos perguntas soltas. Mais tarefas executadas com Inteligência Artificial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-soft">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Isso parece familiar?</p>
            <h2 className="section-title">A IA promete economizar tempo. Mas aprender a usá-la virou mais uma tarefa.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {painPoints.map((pain, index) => (
              <article key={pain} className="card-elevated flex min-h-40 items-start gap-5 p-6 sm:p-8">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{index + 1}</span>
                <p className="pt-1 text-base leading-7 text-foreground">{pain}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">A transformação</p>
            <h2 className="section-title">Você não precisa dominar todas as ferramentas. Precisa saber o que pedir e onde aplicar.</h2>
          </div>
          <div className="border-l border-border pl-6 sm:pl-10">
            <p className="text-lg leading-8 text-muted-foreground">Neste workshop, a tecnologia sai do campo das possibilidades e entra na sua rotina. Você aprende a avaliar demandas, criar bons comandos e construir um uso consciente da IA para decisões, comunicação e operação.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Mais clareza", "Mais agilidade", "Aplicação consciente"].map((item) => <span key={item} className="rounded-full border border-primary/25 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">{item}</span>)}
            </div>
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