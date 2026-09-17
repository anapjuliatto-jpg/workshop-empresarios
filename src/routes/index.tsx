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
      { title: "A Virada da IA | Workshop ao vivo de IA aplicada" },
      {
        name: "description",
        content:
          "A Virada da IA: workshop online e ao vivo para aplicar a Inteligência Artificial no seu trabalho e no seu negócio — na prática, mesmo sem ser da área de tecnologia.",
      },
      { property: "og:title", content: "A Virada da IA | Workshop ao vivo de IA aplicada" },
      {
        property: "og:description",
        content: "Aprenda a aplicar a Inteligência Artificial no seu negócio e ganhe tempo — na prática, em uma única noite.",
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
const CHECKOUT_URL = "https://pay.hotmart.com/R107634757P";
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
  ["01", "ESCOLHA UMA TAREFA QUE ROUBA SEU TEMPO", "Identifique, no seu dia a dia, uma tarefa repetitiva — e-mail, proposta, relatório, atendimento — que a Inteligência Artificial pode assumir. Você sai com essa tarefa escolhida e mapeada."],
  ["02", "ENSINE A IA A TRABALHAR DO SEU JEITO", "Monte uma base com o contexto do seu negócio para a IA parar de dar respostas genéricas. Você sai com o seu Documento Mestre pronto."],
  ["03", "RESOLVA A TAREFA AO VIVO", "Execute essa tarefa real com a Inteligência Artificial, com orientação, durante o encontro. Você sai com uma entrega feita — não só com teoria."],
  ["04", "SAIA COM UM PLANO DO QUE APLICAR", "Defina as três próximas aplicações de IA no seu negócio. Você sai com um plano claro para a semana seguinte."],
];

const faqs = [
  ["Preciso saber usar Inteligência Artificial?", "Não. O conteúdo foi pensado para partir do essencial e avançar para aplicações práticas, com linguagem acessível."],
  ["Sou de uma geração que não cresceu com tecnologia. Consigo acompanhar?", "Com certeza. O workshop foi pensado para quem não é da área de tecnologia: cada passo é explicado em linguagem simples, no seu ritmo, e você aplica com orientação ao vivo. Sua experiência de negócio é justamente a sua maior vantagem aqui."],
  ["O workshop será ao vivo?", "Sim. É um encontro online e ao vivo, com três horas de aplicação prática — você acompanha, pergunta e coloca a mão na massa junto."],
  ["Qual é a data e o horário?", "No dia 14 de outubro de 2026, das 19h às 22h (horário de Brasília), online e ao vivo."],
  ["Haverá gravação?", "Sim. A gravação fica disponível por 7 dias após o encontro, para você rever as demonstrações com calma."],
  ["E se eu não puder assistir ao vivo no dia?", "Sem problema: a gravação fica disponível por 7 dias para você assistir e aplicar no seu tempo. Mas, se puder, participe ao vivo — é quando você tira dúvidas e faz junto."],
  ["Funciona para o meu tipo de negócio?", "Sim. Como o workshop parte de uma tarefa real do seu próprio dia a dia, ele se adapta a qualquer área — serviços, comércio, consultoria ou profissional autônomo."],
  ["Como receberei o acesso?", "Assim que a inscrição for confirmada, você recebe por e-mail o link de acesso ao encontro e ao portal do workshop. Perto da data, enviamos um lembrete."],
];

// Depoimentos reais de alunas da Ana (resultados aplicando IA no próprio negócio).
// ⚠️ Confirmar autorização de cada pessoa antes de publicar com nome.
const testimonials = [
  {
    quote: "Amei aprender algumas das técnicas com o GPT — e tivemos muitos resultados.",
    name: "Larissa",
    role: "Psicóloga",
    detail: "Criou a identidade e o material do próprio consultório com Inteligência Artificial.",
  },
  {
    name: "Andressa",
    role: "Caravela Pescados · comércio",
    detail: "Criou em minutos um post de divulgação para a rede social do próprio negócio.",
  },
];

// Conversa real (WhatsApp) com a Lucilene, participante da 1ª edição. Palavras mantidas fiéis.
const lucileneChat: { from: "ana" | "aluna"; text: string }[] = [
  { from: "ana", text: "Isso, você passa os dados e ele gera o relatório." },
  { from: "aluna", text: "Coloquei os dados... nossa, exageradamente mais fácil." },
  { from: "ana", text: "Quanto tempo a menos do que levava antes de usar a IA?" },
  { from: "aluna", text: "Dias a menos, kkkk 🙌" },
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
    <main className="overflow-hidden pb-24 min-[641px]:pb-0">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-border bg-background text-heading">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-5 py-3 min-[641px]:gap-4 min-[641px]:py-4 lg:px-10">
          <a href="#inicio" className="min-w-0 whitespace-nowrap font-display text-base font-semibold leading-none min-[641px]:text-xl">A Virada da IA</a>
          <Button asChild size="sm" className="h-8 shrink-0 rounded-full px-3 text-xs min-[641px]:h-9 min-[641px]:px-4 min-[641px]:text-sm">
            <a {...checkoutLinkProps}>Inscrever-me</a>
          </Button>
        </div>
      </nav>

      <section id="inicio" className="relative bg-background text-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-5 py-10 min-[641px]:px-10 min-[641px]:py-16 lg:px-14 lg:py-20">
            <p className="eyebrow mb-4">A Virada da IA · Workshop online e ao vivo</p>
            <h1 className="max-w-2xl text-balance font-display text-[38px] leading-[1.06] font-medium min-[641px]:text-5xl lg:text-[58px] lg:leading-[1.03]">
              Construa uma aplicação real de IA para o seu negócio em uma única noite.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.65] text-muted-foreground min-[641px]:text-lg min-[641px]:leading-8">
              Traga uma tarefa real do seu dia a dia — propostas, e-mails, relatórios, atendimento ou planejamento — e saia com ela sendo feita com Inteligência Artificial. Em três horas, com orientação e sem precisar programar — mesmo que você não seja da área de tecnologia.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 min-[360px]:gap-2 min-[641px]:mt-6 min-[641px]:gap-3">
              <div className="flex min-w-0 items-start gap-2 border-l-2 border-guarantee-detail pl-3 min-[641px]:gap-3 min-[641px]:pl-4">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary min-[641px]:size-5" />
                   <div className="min-w-0"><p className="text-[11px] font-semibold uppercase text-muted-foreground min-[641px]:text-xs">DATA</p><p className="mt-0.5 text-sm font-semibold min-[641px]:mt-1"><span className="min-[641px]:hidden">14 de outubro<br />de 2026</span><span className="hidden min-[641px]:inline">14 de outubro de 2026</span></p></div>
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
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Uma experiência para profissionais experientes que querem transformar a Inteligência Artificial em apoio real para o trabalho — mesmo sem ser da área de tecnologia e sem sentir que ficaram para trás.</p>
          </div>
           <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {["Empresários e empreendedores responsáveis pelas decisões, pela operação e pelo crescimento do negócio.", "Profissionais autônomos e prestadores de serviço que precisam aumentar sua capacidade de entrega sem perder qualidade.", "Gestores e líderes que desejam aplicar Inteligência Artificial na rotina e orientar suas equipes com mais critério.", "Quem já experimentou Inteligência Artificial de forma básica e quer avançar para aplicações ligadas à própria atividade."].map((item) => (
               <li key={item} className="flex gap-4 bg-card p-6"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span className="text-base leading-7">{item}</span></li>
            ))}
          </ul>
        </div>
        <div className="section-shell mt-12 border-t border-border pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">E para quem NÃO é</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "Quem quer virar programador ou especialista técnico em Inteligência Artificial.",
              "Quem busca resultado mágico sem colocar a mão na massa — aqui você aplica ao vivo.",
              "Quem ainda não tem uma atividade ou negócio para aplicar o que vai aprender.",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-l-2 border-guarantee-detail bg-secondary px-4 py-4 text-sm leading-6 text-muted-foreground [hyphens:none] [word-break:normal]">
                <span aria-hidden="true" className="font-display text-lg leading-none text-primary">–</span>
                {item}
              </li>
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

      <section className="section-space bg-background">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Resultados de quem já aplicou</p>
            <h2 className="section-title [hyphens:none] [word-break:normal]">Pessoas comuns, de áreas diferentes, aplicando de verdade.</h2>
          </div>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-secondary p-4 min-[641px]:mt-12">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block size-2 rounded-full bg-primary" />
              Conversa real com a Lucilene
            </p>
            <div className="space-y-2">
              {lucileneChat.map((m, i) => (
                <div key={i} className={m.from === "ana" ? "flex justify-end" : "flex justify-start"}>
                  <p className={`max-w-[82%] rounded-2xl px-4 py-2 text-sm leading-6 ${m.from === "ana" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-card text-foreground"}`}>
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-right text-xs text-muted-foreground">Lucilene · setor administrativo</p>
          </div>
          <div className="mx-auto mt-6 grid max-w-3xl gap-5 md:grid-cols-2">
            {testimonials.map(({ quote, name, role, detail }) => (
              <figure key={name} className="flex flex-col border border-border bg-card p-6 min-[641px]:p-8">
                {quote ? (
                  <blockquote className="font-display text-xl leading-snug text-heading [hyphens:none] [word-break:normal] min-[641px]:text-[22px]">“{quote}”</blockquote>
                ) : (
                  <p className="font-display text-xl leading-snug text-heading [hyphens:none] [word-break:normal] min-[641px]:text-[22px]">{detail}</p>
                )}
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-sm font-semibold text-primary">{role}</p>
                  {quote ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p> : null}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted-foreground [hyphens:none] [word-break:normal]">
            Profissionais de áreas como psicologia, comércio e serviços que já colocaram a Inteligência Artificial para trabalhar no próprio negócio.
          </p>
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
                  <div className="min-w-0"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground min-[641px]:text-offer-muted">Data</dt><dd className="mt-1 text-base font-medium">14 de outubro de 2026</dd></div>
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
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-primary-foreground/80">As inscrições encerram no dia 14 de outubro, quando o workshop começa. Garanta a sua enquanto ainda dá tempo.</p>
          <div className="mt-8"><Button asChild size="lg" variant="secondary" className="h-14 w-full rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90 sm:w-auto"><a {...checkoutLinkProps}>Quero garantir minha vaga <ArrowRight /></a></Button></div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        <p>© 2026 Ana Juliatto · A Virada da IA · Todos os direitos reservados.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-8px_24px_-20px_rgba(0,0,0,0.5)] backdrop-blur min-[641px]:hidden">
        <Button asChild size="lg" className="h-12 w-full rounded-full text-sm font-semibold">
          <a {...checkoutLinkProps}>QUERO GARANTIR MINHA VAGA</a>
        </Button>
      </div>
    </main>
  );
}
