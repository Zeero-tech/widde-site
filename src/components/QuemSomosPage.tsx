import { lazy, Suspense } from "react";
import { useLenis } from "@/lib/useLenis";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import Nav from "@/components/Nav";
import TimelineCardComponent from "@/components/TimelineCardComponent";

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

function lazyWithRetry(factory: () => Promise<any>) {
  return lazy(() =>
    factory().catch(() => {
      if (!sessionStorage.getItem("chunk-reloaded")) {
        sessionStorage.setItem("chunk-reloaded", "1");
        window.location.reload();
      }
      return { default: () => null };
    }),
  );
}

const Newsletter = lazyWithRetry(() => import("@/components/Newsletter"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));

export default function QuemSomosPage() {
  useLenis();
  useRevealOnScroll();

  return (
    <>
      <Nav />
      <main className="main-wrapper">
        {/* Hero */}
        <section className="section-hero_quem-somos hero-padding">
          <div className="nav-scroll-animation"></div>
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
            <div className="padding-section-large">
              <div className="quem-somos_wrapper">
                <img
                  src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/681ca182c50c42c2115d5905_3f73365573698d2d21a17349832dc53c_fundadores-widde.avif"
                  loading="eager"
                  alt=""
                  className="founders-image"
                />
                <div className="quem-somos_content">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-hero">Conheça a Widde</h1>
                  </div>
                  <p className="text-subheading">
                    Raísa Bresolin e Pedro Ferreira fundaram a Widde em 2021,
                    após vivenciarem de perto os desafios do varejo on-line.{" "}
                    <br />
                  </p>
                  <p>
                    Em meio à pandemia de Covid-19, quando o distanciamento
                    social transformou a forma como as pessoas compravam, ficou
                    evidente a necessidade de uma experiência digital mais
                    humana, fluida e envolvente.
                    <br />
                  </p>
                  <p>
                    Foi nesse contexto que a Widde trouxe o Video Commerce para
                    o Brasil, uma tecnologia criada para tornar a jornada de
                    compra online mais interativa, imersiva e eficaz. Desde
                    então, a Widde tem ajudado marcas a se conectarem com seus
                    consumidores de forma mais autêntica e engajadora,
                    reinventando o modo de navegar e comprar no e-commerce.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-section-large">
              <div className="quem-somos_cards-intro">
                <div className="quem-somos_cards-content">
                  <span className="stat-number">+10 mil</span>
                  <span className="stat-label">
                    Lojas impactadas pelas soluções da Widde
                  </span>
                </div>
                <div className="quem-somos_cards-content">
                  <span className="stat-number">1ª</span>
                  <span className="stat-label">
                    Solução de Video Commerce do Brasil
                  </span>
                </div>
                <div className="quem-somos_cards-content">
                  <span className="stat-number">+1.19MM</span>
                  <span className="stat-label">Consumidores impactados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova era do e-commerce */}
        <section id="cases" className="section_videos">
          <div className="pb-16">
            <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
              <div className="heading-wrapper max-width-large">
                <h2 className="heading-style-h2">Nova era do e-commerce</h2>
                <p className="text-subheading max-width-medium">
                  Na Widde, nosso propósito é dar vida ao e-commerce, criando
                  experiências que aproximam marcas e pessoas.
                </p>
              </div>
              <div className="grid_videos">
                <div className="video_sobre-container">
                  <div className="video_sobre-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/ILBUjeEbyL0?si=47TDwjgpyH_3ikE0&controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="video_sobre-content">
                    <h3 className="heading-style-h3">Video Commerce</h3>
                    <p>
                      Até pouco tempo, todos os e-commerces seguiam o mesmo
                      padrão: fotos, textos e pouca interação.
                    </p>
                    <p>
                      A Widde chegou para mudar isso. Com o Video Commerce,{" "}
                      <strong>
                        transformamos a experiência de compra online com
                        humanização
                      </strong>
                      , criando conexões reais entre marcas e consumidores.
                    </p>
                    <p>
                      Hoje,{" "}
                      <strong>
                        milhares de lojas já adotaram esse novo formato
                      </strong>{" "}
                      e estão deixando o modelo tradicional para trás.{" "}
                      <strong>O futuro do e-commerce é criar conexão</strong>, e
                      a Widde já está nele.
                    </p>
                  </div>
                </div>
                <div className="video_sobre-container">
                  <div className="video_sobre-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/xTXuUuKT-do?si=3HJyZ0UsQkzHk9yO&controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="video_sobre-content">
                    <h3 className="heading-style-h3">Quem somos</h3>
                    <p>
                      O e-commerce evoluiu, mas a experiência de compra ainda
                      precisa de mais{" "}
                      <strong>conexão, clareza e confiança</strong>.
                    </p>
                    <p>
                      Na Widde, acreditamos que cada{" "}
                      <strong>
                        loja on-line pode ser mais do que um catálogo digital
                      </strong>
                      .
                    </p>
                    <p>
                      Somos uma plataforma de Video Commerce criada para
                      humanizar e transformar a jornada de compra. Com{" "}
                      <strong>tecnologia, design e propósito</strong>, ajudamos{" "}
                      <strong>
                        marcas a se conectarem de forma autêntica com seus
                        consumidores
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="bg-surface-dark py-8 md:py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
            <div className="mb-8 md:mb-12">
              <h2 className="heading-style-h2">Manifesto Widde</h2>
            </div>
            <TimelineCardComponent items={manifestoData} animationDuration={400} />
          </div>
        </section>

        {/* Veja mais */}
        <section className="py-8 md:py-12 lg:py-20 bg-surface">
          <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="heading-style-h2 mb-4">Veja mais conteúdos</h2>
              <p className="text-subheading max-w-xl mx-auto">
                Acompanhe semanalmente nossos conteúdos no blog e no YouTube
                para se manter atualizado sobre experiências e tendências no
                e-commerce.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@widde.videocommerce"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden rounded-2xl flex flex-col justify-between p-6 lg:p-8 min-h-[420px] group"
                style={{ background: "#1a1a1a" }}
              >
                {/* bg image desfocada */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-60"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/682df2efad48b0def4f7206e_widde-youtube.avif')",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <h3 className="text-white text-xl font-semibold text-center">
                    Widde no YouTube
                  </h3>
                  <img
                    src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/682df2efad48b0def4f7206e_widde-youtube.avif"
                    alt="Widde no YouTube"
                    loading="lazy"
                    className="rounded-xl w-[75%] mx-auto my-4 object-cover aspect-[4/3]"
                  />
                  <p className="text-white font-semibold text-center text-lg">
                    Nosso canal no YouTube &nbsp;→
                  </p>
                </div>
              </a>
              {/* Blog */}
              <a
                href="/blog"
                className="relative overflow-hidden rounded-2xl flex flex-col justify-between p-6 lg:p-8 min-h-[420px] group"
                style={{ background: "#1a1a1a" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-60"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/682df2ef3ac13dad2197206f_84047ca2255bb7ac52e62eae0892e17a_widde-blog.avif')",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <h3 className="text-white text-xl font-semibold text-center">
                    Conheça o Blog da Widde
                  </h3>
                  <img
                    src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/682df2ef3ac13dad2197206f_84047ca2255bb7ac52e62eae0892e17a_widde-blog.avif"
                    alt="Blog da Widde"
                    loading="lazy"
                    className="rounded-xl w-[75%] mx-auto my-4 object-cover aspect-[4/3]"
                  />
                  <p className="text-white font-semibold text-center text-lg">
                    Ir para o blog &nbsp;→
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Suspense>
        <VCCta />
      </Suspense>
      <Suspense>
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink">
          <Newsletter />
        </div>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
