import TimelineCardComponent from "@/components/core/TimelineCardComponent";

const manifestoData = [
  {
    id: "1",
    title: "Somos Widde.",
    subtitle: "Humanizamos. Inovamos. Conectamos.",
    content:
      "Acreditamos que cada e-commerce tem o poder de encantar, conectar e transformar experiências. Em um cenário onde a falta de confiança e competitividade são obstáculos, e a distância digital pode separar, somos o elo que aproxima marcas de pessoas.",
  },
  {
    id: "2",
    title: "Somos o presente e o futuro do e-commerce.",
    subtitle: "Transformando experiências",
    content:
      "Nosso compromisso é nunca parar de ouvir, de aprender e de melhorar. Estamos aqui para transformar o mundo do e-commerce com experiências memoráveis aos consumidores.",
  },
  {
    id: "3",
    title: "O que defendemos?",
    subtitle: "Uma nova visão de comércio",
    content:
      "Defendemos um mundo onde e-commerces não sejam apenas catálogos digitais, deixando para trás a experiência tradicional e trazendo verdadeiras experiências de compra, cheias de identidade, conexão e credibilidade. Onde cada cliente encontre o que procura, com assertividade e confiança.",
  },
  {
    id: "4",
    title: "Usamos a força da inovação.",
    subtitle: "Tecnologia pioneira",
    content:
      "Com soluções pioneiras e tendências globais, desenvolvemos uma plataforma de Video Commerce intuitiva, com design marcante e recursos cruciais.",
  },
  {
    id: "5",
    title: "Estamos em um cenário desafiador.",
    subtitle: "Quebrando objeções",
    content:
      "Reconhecemos as dificuldades de gerar confiança e convencer o consumidor na loja on-line. Com o custo por aquisição cada vez maior, ajudamos o e-commerce a quebrar objeções através da interatividade e humanização para aumentar as conversões.",
  },
  {
    id: "6",
    title: "Nascemos para humanizar.",
    subtitle: "Conexões genuínas",
    content:
      "Nossa missão é dar vida aos e-commerces, criando conexões genuínas que transformam visitantes em clientes encantados. Sabemos que por trás de cada e-commerce tem um lojista visionário e que por trás de cada visitante na loja, existe um consumidor buscando identificação, clareza e acolhimento.",
  },
];

export default function QSManifesto() {
  return (
    <section className="bg-surface-dark py-8 md:py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <div data-reveal className="mb-8 md:mb-12">
          <h2 className="text-black tracking-[-0.03em] mt-5 mb-10 text-[2.5rem] font-normal leading-[1.2] block">
            Manifesto
          </h2>
        </div>
        <div data-reveal>
          <TimelineCardComponent items={manifestoData} animationDuration={400} />
        </div>
      </div>
    </section>
  );
}
