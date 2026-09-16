import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Compass,
  FileText,
  LayoutDashboard,
  MonitorPlay,
  Presentation,
  Sparkles,
  Target,
} from "lucide-react";

import heroImageAsset from "@/assets/ana-juliatto-principal.jpg.asset.json";
import expertImageAsset from "@/assets/ana-juliatto-especialista.jpg.asset.json";
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

// 🔗 LINK DE CHECKOUT (pagamento)
// Cole aqui o link da Hotmart/Eduzz. Enquanto estiver "#inscricao",
// os botões apenas rolam até a seção de inscrição na própria página.
// Ex.: const CHECKOUT_URL = "https://pay.hotmart.com/XXXXXXX";
const CHECKOUT_URL = "#inscricao";
const isExternalCheckout = !CHECKOUT_URL.startsWith("#");
const checkoutLinkProps = isExternalCheckout
  ? { href: CHECKOUT_URL, target: "_blank", rel: "noopener noreferrer" }
  : { href: CHECKOUT_URL };

const painPoints = [
  "Você já usa IA para fazer perguntas, textos ou imagens — mas, na prática, sua rotina continua praticamente igual.",
  "Toda semana surge uma nova ferramenta, e você não tem tempo para descobrir qual realmente vale a pena.",
  "As respostas parecem genéricas, e você acaba revisando ou refazendo grande parte do trabalho.",
  "Você sabe que poderia ganhar tempo, mas ainda não sabe o que delegar à IA e o que precisa continuar sob sua decisão.",
];

const schedule = [
  ["01", "ESCOLHA UMA NECESSIDADE REAL", "Reconheça tarefas, gargalos e oportunidades em que a Inteligência Artificial pode gerar ganho real de tempo e produtividade."],
  ["02", "ORGANIZE O CONTEXTO PARA A IA", "Organize as informações e o contexto necessários para receber respostas mais úteis, personalizadas e aplicáveis."],
  ["03", "CONSTRUA UMA ENTREGA PRÁTICA", "Trabalhe uma situação verdadeira da sua rotina e acompanhe a construção de um resultado prático durante o encontro."],
  ["04", "DEFINA O PRÓXIMO PASSO", "Experimente novas possibilidades de criação e saia com prioridades definidas para continuar aplicando o conhecimento."],
];

const faqs = [
  ["Preciso saber usar Inteligência Artificial?", "Não. O conteúdo foi pensado para partir do essencial e avançar para aplicações práticas, com linguagem acessível."],
  ["O workshop será ao vivo?", "Sim. É um encontro online e ao vivo, com três horas de aplicação prática — você acompanha, pergunta e coloca a mão na massa junto."],
  ["Qual é a data e o horário?", "No dia 8 de outubro de 2026, das 19h às 22h (horário de Brasília), online e ao vivo."],
  ["Haverá gravação?", "Sim. A gravação fica disponível por 7 dias após o encontro, para você rever as demonstrações com calma."],
  ["Como receberei o acesso?", "Assim que a inscrição for confirmada, você recebe por e-mail o link de acesso ao encontro e ao portal do workshop. Perto da data, enviamos um lembrete."],
];

const includedBenefits = [
  {
    icon: Presentation,
    title: "ENCONTRO ONLINE E AO VIVO",
    text: "Três horas de orientação, demonstrações e aplicação prática, com espaço para acompanhar cada etapa.",
  },
  {
    icon: Compass,
    title: "PLANO DE APLICAÇÃO",
    text: "Ao final, você definirá os próximos usos da Inteligência Artificial que fazem sentido para sua rotina, seu negócio e suas prioridades.",
  },
  {
    icon: LayoutDashboard,
    title: "PORTAL EXCLUSIVO DO WORKSHOP",
    text: "Um ambiente organizado com instruções, perguntas e prompts para você executar os exercícios sem se perder.",
  },
  {
    icon: FileText,
    title: "DOCUMENTO MESTRE PERSONALIZADO",
    text: "Você criará uma base com informações sobre sua atividade, objetivos e contexto para obter respostas mais úteis da IA.",
  },
  {
    icon: Target,
    title: "EXERCÍCIO APLICADO À SUA REALIDADE",
    text: "Em vez de trabalhar apenas com exemplos genéricos, você desenvolverá uma entrega ligada a uma necessidade do seu próprio negócio ou trabalho.",
  },
  {
    icon: ClipboardCheck,
    title: "EXPERIÊNCIA COM PROTÓTIPO INTERATIVO",
    text: "Você acompanhará a transformação de uma ideia em uma experiência funcional e visualizará novas possibilidades para sua área.",
  },
];

function Cta({ label = "QUERO GARANTIR MINHA VAGA", compactMobile = false }: { label?: string; compactMobile?: boolean }) {
  return (
    <Button asChild size="lg" className={`${compactMobile ? "h-12 text-xs sm:h-14 sm:text-sm" : "h-14 text-sm"} w-full rounded-full px-6 font-semibold sm:w-auto`}>
      <a {...checkoutLinkProps}>
        {label}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function Index() {
  const heroImage = heroImageAsset.url;
  const expertImage = expertImageAsset.url;

  return (
    <main className="overflow-hidden">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-border bg-background text-heading">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-5 py-3 min-[641px]:gap-4 min-[641px]:py-4 lg:px-10">
          <a href="#inicio" className="min-w-0 whitespace-nowrap font-display text-base font-semibold leading-none min-[641px]:text-xl">IA para Empresários</a>
          <Button asChild size="sm" className="h-8 shrink-0 rounded-full px-3 text-xs min-[641px]:h-9 min-[641px]:px-4 min-[641px]:text-sm">
            <a {...checkoutLinkProps}>Inscrever-me</a>
          </Button>
        </div>
      </nav>

      <section id="inicio" className="relative bg-background text-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-5 py-10 min-[641px]:px-10 min-[641px]:py-16 lg:px-14 lg:py-20">
            <h1 className="max-w-2xl text-balance font-display text-[38px] leading-[1.06] font-medium min-[641px]:text-5xl lg:text-[58px] lg:leading-[1.03]">
              Construa uma aplicação real de IA para o seu negócio em uma única noite.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.65] text-muted-foreground min-[641px]:text-lg min-[641px]:leading-8">
              Traga uma necessidade do seu trabalho e transforme-a em uma entrega prática com Inteligência Artificial. Em três horas, você organiza o contexto, executa uma tarefa e visualiza o próximo passo — com orientação e sem precisar programar.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 min-[360px]:gap-2 min-[641px]:mt-6 min-[641px]:gap-3">
              <div className="flex min-w-0 items-start gap-2 border-l-2 border-guarantee-detail pl-3 min-[641px]:gap-3 min-[641px]:pl-4">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary min-[641px]:size-5" />
                   <div className="min-w-0"><p className="text-[11px] font-semibold uppercase text-muted-foreground min-[641px]:text-xs">DATA</p><p className="mt-0.5 text-sm font-semibold min-[641px]:mt-1"><span className="min-[641px]:hidden">8 de outubro<br />de 2026</span><span className="hidden min-[641px]:inline">8 de outubro de 2026</span></p></div>
              </div>
               <div className="flex min-w-0 items-start gap-2 border-l-2 border-guarantee-detail pl-3 min-[641px]:gap-3 min-[641px]:pl-4">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-primary min-[641px]:size-5" />
                   <div className="min-w-0"><p className="text-[11px] font-semibold uppercase text-muted-foreground min-[641px]:text-xs">HORÁRIO</p><p className="mt-0.5 text-sm font-semibold min-[641px]:mt-1">Das 19h às 22h</p></div>
              </div>
            </div>
            <div className="mt-5 min-[641px]:mt-7">
              <Cta compactMobile />
                <p className="mx-auto mt-3 max-w-[350px] text-center text-xs leading-5 text-muted-foreground min-[641px]:mx-0 min-[641px]:max-w-xl min-[641px]:text-left">Online e ao vivo • 3 horas de aplicação prática • Gravação disponível por 7 dias</p>
            </div>
          </div>
          <div className="flex flex-col border-t border-border min-[641px]:border-t-0 lg:border-l">
            <div className="relative aspect-[4/5] min-h-0 flex-1 overflow-hidden lg:aspect-auto lg:min-h-[690px]">
             <img src={heroImage} alt="Ana Juliatto em seu ambiente de trabalho" width={768} height={1024} className="absolute inset-0 h-full w-full object-cover object-[center_30%]" />
            </div>
            <p className="border-t border-border bg-secondary px-6 py-5 font-display text-xl leading-snug text-heading lg:px-10 lg:text-2xl">Menos perguntas soltas. Mais tarefas executadas com Inteligência Artificial.</p>
          </div>
        </div>
      </section>

       <section className="bg-secondary py-14 min-[641px]:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">A oportunidade</p>
            <h2 className="section-title">O valor da IA aparece quando uma tarefa real sai do papel.</h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              ["Contexto", "Organize as informações do seu negócio para orientar a IA."],
              ["Execução", "Use a IA em uma necessidade concreta da sua rotina."],
              ["Continuidade", "Defina onde aplicar o resultado depois do encontro."],
            ].map(([title, text]) => (
              <article key={title} className="bg-card p-6">
                <h3 className="font-display text-2xl font-semibold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-16 min-[641px]:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Isso parece familiar?</p>
             <h2 className="mt-3 font-display text-[34px] leading-[1.08] font-medium [hyphens:none] [word-break:normal] min-[641px]:text-5xl min-[641px]:leading-[1.12]">A IA deveria economizar seu tempo. Mas aprender a usá-la virou mais uma tarefa.</h2>
          </div>
           <div className="mt-10 space-y-3 min-[641px]:mt-14">
            {painPoints.map((pain, index) => (
                <article key={pain} className={`flex items-start gap-4 border-y border-border bg-background px-5 py-5 min-[641px]:w-[86%] min-[641px]:items-center min-[641px]:gap-8 min-[641px]:px-8 min-[641px]:py-6 ${index % 2 ? "min-[641px]:ml-auto" : ""}`}>
                 <span className="font-display text-3xl text-primary min-[641px]:text-4xl">0{index + 1}</span>
                  <p className="text-base leading-[1.6] text-foreground [hyphens:none] [word-break:normal] min-[641px]:text-lg min-[641px]:leading-8">{pain}</p>
              </article>
            ))}
          </div>
           <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-[1.55] text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:mt-10 min-[641px]:text-lg">
             Você não está atrasado. Só precisa de um caminho mais claro para transformar possibilidades em aplicações reais.
           </p>
        </div>
      </section>

      <section className="bg-offer py-16 text-offer-foreground min-[641px]:py-24">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">A transformação</p>
            <h2 className="mt-3 font-display text-[32px] leading-[1.08] font-medium [hyphens:none] [word-break:normal] min-[641px]:text-5xl min-[641px]:leading-[1.12]">
              Você não precisa aprender todas as ferramentas. Precisa aprender a fazer a IA trabalhar com você.
            </h2>
             <p className="mt-5 max-w-3xl text-base leading-[1.65] text-offer-muted [hyphens:none] [word-break:normal] min-[641px]:mt-6 min-[641px]:text-lg min-[641px]:leading-8">
              Durante o workshop, você partirá de uma necessidade real do seu trabalho ou negócio. Com orientação, organizará o contexto, executará uma tarefa com Inteligência Artificial e transformará uma ideia em uma experiência prática.
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
                text: "Desenvolva uma entrega relacionada a uma necessidade verdadeira da sua rotina, com orientação e aplicação prática.",
              },
              {
                title: "Uma ideia vira protótipo",
                text: "Veja como transformar uma necessidade da sua área em uma solução interativa, mesmo sem saber programação.",
              },
            ].map(({ title, text }) => (
               <article key={title} className="h-auto border-t border-guarantee-detail/70 py-6 min-[641px]:px-5 lg:h-full">
                <h3 className="font-display text-2xl leading-tight font-semibold [hyphens:none] [word-break:normal]">{title}</h3>
                 <p className="mt-3 text-base leading-[1.6] text-offer-muted [hyphens:none] [word-break:normal] min-[641px]:text-[17px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-16 min-[641px]:py-24">
        <div className="section-shell">
          <div className="max-w-3xl"><p className="eyebrow">Programação</p><h2 className="section-title">Quatro etapas para construir uma entrega prática em uma noite.</h2></div>
          <div className="relative mt-12 border-l border-primary/40 pl-6 min-[641px]:ml-5 min-[641px]:pl-12">
            {schedule.map(([number, title, text]) => (
               <article key={number} className="relative grid gap-3 border-b border-border py-7 min-[641px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[641px]:gap-10">
                 <span className="absolute -left-[45px] top-7 grid size-10 place-items-center rounded-full bg-primary font-display text-base text-primary-foreground min-[641px]:-left-[69px]">{number}</span><h3 className="font-display text-xl font-semibold min-[641px]:text-2xl">{title}</h3><p className="text-base leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 min-[641px]:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Para quem é</p>
            <h2 className="section-title">Para quem lidera, decide e precisa fazer o tempo render.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Uma experiência para profissionais que querem transformar a Inteligência Artificial em apoio real para o trabalho, mesmo sem formação técnica.</p>
          </div>
           <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {["Empresários e empreendedores responsáveis pelas decisões, pela operação e pelo crescimento do negócio.", "Profissionais autônomos e prestadores de serviço que precisam aumentar sua capacidade de entrega sem perder qualidade.", "Gestores e líderes que desejam aplicar Inteligência Artificial na rotina e orientar suas equipes com mais critério.", "Quem já experimentou Inteligência Artificial de forma básica e quer avançar para aplicações ligadas à própria atividade."].map((item) => (
               <li key={item} className="flex gap-4 bg-card p-6"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span className="text-base leading-7">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 min-[641px]:py-24">
         <div className="section-shell grid lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="relative h-[340px] w-full overflow-hidden min-[641px]:h-auto min-[641px]:aspect-[4/5] min-[641px]:max-h-[470px] lg:aspect-auto lg:max-h-none lg:min-h-[680px]">
            <img
               src={expertImage}
              alt="Ana Juliatto, consultora de Inteligência Comercial e IA para Negócios"
              width={768}
              height={1024}
              loading="lazy"
               className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
            />
          </div>
           <div className="flex flex-col justify-center bg-offer px-5 py-8 text-offer-foreground min-[641px]:p-10 lg:p-14">
            <p className="eyebrow">Sua especialista</p>
            <h2 className="mt-2 font-display text-[36px] leading-[1.07] font-medium [hyphens:none] [word-break:normal] min-[641px]:mt-3 min-[641px]:text-5xl min-[641px]:leading-[1.12]">
              Experiência de negócio para ensinar Inteligência Artificial com aplicação real.
            </h2>
            <div className="mt-5 border-l-2 border-primary pl-4 min-[641px]:mt-7">
              <h3 className="font-display text-2xl font-semibold [hyphens:none] [word-break:normal] min-[641px]:text-3xl">Ana Juliatto</h3>
              <p className="mt-1 text-sm font-semibold leading-6 text-primary [hyphens:none] [word-break:normal] min-[641px]:text-base">
                Consultora de Inteligência Comercial e IA para Negócios
              </p>
            </div>
             <div className="mt-4 text-base leading-[1.65] text-offer-muted [hyphens:none] [word-break:normal] min-[641px]:mt-6">
              <p className="min-[641px]:hidden">Com 17 anos de experiência nas áreas comercial e de gestão, Ana Juliatto vivenciou em grandes empresas os desafios de metas, processos, clientes, equipes e decisões. Hoje, une essa experiência à Inteligência Artificial para transformar possibilidades tecnológicas em aplicações úteis para o trabalho e os negócios.</p>
              <div className="hidden space-y-4 min-[641px]:block">
                <p>Com 17 anos de experiência nas áreas comercial e de gestão, Ana Juliatto atuou em grandes empresas e vivenciou de perto os desafios de metas, processos, clientes, equipes e decisões.</p>
                <p>Hoje, une essa experiência à Inteligência Artificial para ajudar empresários, empreendedores e profissionais a transformar possibilidades tecnológicas em aplicações úteis para o trabalho e para os negócios.</p>
              </div>
            </div>
             <blockquote className="mt-4 border-y border-offer-foreground/20 py-3 font-display text-xl leading-snug [hyphens:none] [word-break:normal] min-[641px]:mt-6 min-[641px]:py-4 min-[641px]:text-2xl">
              “A Inteligência Artificial só gera valor quando melhora algo real.”
            </blockquote>
            <ul className="mt-4 grid gap-1.5 min-[641px]:mt-6 min-[641px]:grid-cols-3 min-[641px]:gap-2">
              {["17 anos de experiência empresarial", "Inteligência Comercial + IA", "Workshops, treinamentos e consultorias"].map((indicator) => (
                 <li key={indicator} className="flex min-h-11 items-center border-l-2 border-guarantee-detail bg-offer-foreground/5 px-3 py-1.5 text-sm font-semibold leading-5 [hyphens:none] [word-break:normal] min-[641px]:min-h-12 min-[641px]:py-2">
                  {indicator}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Tudo que está incluído</p>
            <h2 className="section-title [hyphens:none] [word-break:normal]">Você não vai apenas assistir. Vai construir e aplicar.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:text-lg">
              Uma experiência guiada para transformar uma necessidade real do seu trabalho ou negócio em uma aplicação prática de Inteligência Artificial.
            </p>
          </div>

           <div className="mt-10 border-y border-border lg:mt-12">
            {includedBenefits.map(({ icon: Icon, title, text }) => (
               <article key={title} className="grid gap-4 border-b border-border py-6 last:border-b-0 min-[641px]:grid-cols-[56px_minmax(220px,0.75fr)_minmax(0,1.25fr)] min-[641px]:items-center min-[641px]:gap-8 min-[641px]:py-7">
                 <span className="grid size-10 shrink-0 place-items-center border border-primary/40 text-primary" aria-hidden="true">
                  <Icon className="size-5" />
                </span>
                 <h3 className="font-display text-xl leading-tight font-semibold [hyphens:none] [word-break:normal] min-[641px]:text-2xl">{title}</h3>
                 <p className="text-base leading-[1.6] text-muted-foreground [hyphens:none] [word-break:normal] min-[641px]:text-[17px]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-y border-primary/30 bg-background/55 px-5 py-6 min-[641px]:mt-10 min-[641px]:px-8 min-[641px]:py-7">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 min-[641px]:flex-row min-[641px]:items-center min-[641px]:gap-8">
              <div className="flex shrink-0 items-center gap-3 text-primary">
                <MonitorPlay className="size-6" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold leading-tight [hyphens:none] [word-break:normal] min-[641px]:text-2xl">GRAVAÇÃO DISPONÍVEL POR 7 DIAS</h3>
              </div>
              <p className="text-base leading-[1.55] text-muted-foreground [hyphens:none] [word-break:normal]">
                Você poderá rever as demonstrações e retomar os principais aprendizados com mais tranquilidade durante os sete dias seguintes ao encontro.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center min-[641px]:mt-10">
            <Cta />
          </div>
        </div>
      </section>

      <section id="inscricao" className="section-space bg-surface-soft text-foreground max-[640px]:py-0 min-[641px]:bg-offer min-[641px]:text-offer-foreground">
        <div className="section-shell max-[640px]:px-5 max-[640px]:pt-14 max-[640px]:pb-12">
          <div className="max-w-3xl">
            <p className="eyebrow-light max-[640px]:text-primary">Seu próximo passo</p>
            <h2 className="font-display text-[38px] leading-[1.07] font-medium min-[641px]:text-5xl min-[641px]:leading-[1.08] lg:text-6xl">Uma noite para transformar intenção em aplicação.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground min-[641px]:text-offer-muted">Reserve este momento para aprender a usar a Inteligência Artificial com mais clareza, critério e conexão com as necessidades reais do seu trabalho ou negócio.</p>
          </div>

          <div className="mt-8 grid gap-8 min-[641px]:mt-10 lg:mt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-12">
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-coral">Workshop online e ao vivo</p>
              <dl className="mt-4 overflow-hidden rounded-lg border border-border bg-card px-5 shadow-sm min-[641px]:mt-6 min-[641px]:grid min-[641px]:grid-cols-2 min-[641px]:gap-5 min-[641px]:overflow-visible min-[641px]:rounded-none min-[641px]:border-0 min-[641px]:bg-transparent min-[641px]:px-0 min-[641px]:shadow-none">
                <div className="flex min-w-0 gap-3 py-5 min-[641px]:py-0">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                  <div className="min-w-0"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground min-[641px]:text-offer-muted">Data</dt><dd className="mt-1 text-base font-medium">8 de outubro de 2026</dd></div>
                </div>
                <div className="flex min-w-0 gap-3 border-t border-border py-5 min-[641px]:border-0 min-[641px]:py-0">
                  <Clock3 className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                  <div className="min-w-0"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground min-[641px]:text-offer-muted">Horário</dt><dd className="mt-1 text-base font-medium">Das 19h às 22h</dd></div>
                </div>
                <div className="flex min-w-0 gap-3 border-t border-border py-5 min-[641px]:border-0 min-[641px]:py-0">
                  <MonitorPlay className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                  <div className="min-w-0"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground min-[641px]:text-offer-muted">Duração</dt><dd className="mt-1 text-base font-medium">3 horas de aplicação prática</dd></div>
                </div>
                <div className="flex min-w-0 gap-3 border-t border-border py-5 min-[641px]:border-0 min-[641px]:py-0">
                  <FileText className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                  <div className="min-w-0"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground min-[641px]:text-offer-muted">Acesso posterior</dt><dd className="mt-1 text-base font-medium">Gravação disponível por 7 dias</dd></div>
                </div>
              </dl>
              <p className="mt-8 rounded-lg bg-accent px-5 py-5 font-display text-xl leading-snug text-foreground min-[641px]:rounded-none min-[641px]:border-l-2 min-[641px]:border-coral min-[641px]:bg-transparent min-[641px]:py-0 min-[641px]:pl-4 min-[641px]:text-offer-foreground sm:text-2xl">Você não precisa chegar sabendo. Precisa apenas trazer uma necessidade real que deseja melhorar.</p>
            </div>

            <div className="flex flex-col rounded-lg border border-primary/35 bg-offer-card p-7 text-foreground shadow-sm min-[641px]:border-0 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Investimento</p>
              <p className="mt-4 font-display text-6xl leading-none font-semibold text-primary sm:text-7xl">R$ 147</p>
              <p className="mt-3 text-sm font-medium text-foreground">Pagamento único</p>
              <p className="mt-6 text-sm leading-6 text-muted-foreground">Sua inscrição inclui o encontro ao vivo, os exercícios guiados, o acesso ao portal durante o workshop e a gravação por sete dias.</p>
              <div className="mt-7">
                <Button asChild size="lg" className="h-14 w-full rounded-full px-6 text-sm font-semibold">
                  <a {...checkoutLinkProps}>QUERO GARANTIR MINHA VAGA <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">Inscrição individual para o workshop online e ao vivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary px-5 py-16 text-foreground sm:px-10 sm:py-20">
        <span aria-hidden="true" className="pointer-events-none absolute -left-8 top-0 font-display text-[20rem] leading-none text-primary/5 sm:text-[28rem]">7</span>
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          <div className="mx-auto grid size-56 place-items-center rounded-full border-[3px] border-primary bg-gradient-to-br from-accent via-secondary to-primary p-2 shadow-xl md:size-64" aria-label="Selo: 7 dias de garantia">
            <div className="relative grid size-full place-items-center rounded-full border-[6px] border-accent bg-offer text-offer-foreground shadow-inner">
              <svg aria-hidden="true" className="absolute inset-0 size-full fill-accent" viewBox="0 0 220 220">
                <defs><path id="garantia-arco" d="M 110,110 m -83,0 a 83,83 0 1,1 166,0 a 83,83 0 1,1 -166,0" /></defs>
                <text className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em]"><textPath href="#garantia-arco" startOffset="50%" textAnchor="middle">7 DIAS DE GARANTIA • 7 DIAS DE GARANTIA •</textPath></text>
              </svg>
              <strong className="font-display text-8xl leading-none text-offer-foreground">7</strong>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="eyebrow">Compra segura</p>
            <h2 className="mt-3 max-w-3xl font-display text-[34px] leading-[1.08] font-medium text-heading md:text-5xl">7 dias de garantia para decidir com tranquilidade.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7">Se mudar de ideia, você poderá solicitar o cancelamento e o reembolso integral em até 7 dias corridos após a confirmação da compra.</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">A solicitação não exige justificativa e seguirá as condições previstas para compras realizadas online.</p>
            <div className="mt-7 grid gap-3 min-[380px]:grid-cols-2">
              <div className="flex min-h-14 items-center justify-center border border-primary/30 bg-card px-4 py-3 text-center text-sm font-semibold">7 dias corridos após a compra</div>
              <div className="flex min-h-14 items-center justify-center border border-primary/30 bg-card px-4 py-3 text-center text-sm font-semibold">Reembolso integral</div>
            </div>
          </div>
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

      <section className="bg-background px-5 py-16 sm:px-10 sm:py-20">
         <div className="mx-auto max-w-5xl border-y border-primary bg-offer px-6 py-12 text-center text-offer-foreground sm:px-12 sm:py-16">
          <Sparkles className="mx-auto size-7" />
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight font-medium sm:text-5xl">Comece a usar a IA com intenção, método e autonomia.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-primary-foreground/80">As vagas são limitadas. Garanta a sua enquanto o lote atual estiver aberto.</p>
          <div className="mt-8"><Button asChild size="lg" variant="secondary" className="h-14 w-full rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90 sm:w-auto"><a {...checkoutLinkProps}>Quero garantir minha vaga <ArrowRight /></a></Button></div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        <p>© 2026 Ana Juliatto · Inteligência Artificial para Empresários · Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
