import { lazy, Suspense } from 'react'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'

export interface CaseArticleData {
  // Hero
  heroImage: string
  heroImageAlt?: string
  tag?: string
  title: string
  representanteNome: string
  representanteCargo: string
  cliente: string
  youtubeUrl?: string

  // Conheça
  conhecaLogo: string
  conhecaLogoAlt?: string
  conhecaTitle: string
  conhecaBody: string
  conhecaNumbers: { value: string; label: string }[]

  // Depoimento 1
  depoimento1Img: string
  depoimento1Quote: string
  depoimento1Nome: string
  depoimento1Cargo: string

  // Desafio
  desafioGif: string
  desafioBody: string

  // Números
  numeros: { value: string; label: string }[]

  // Resultados
  resultadosBody: string
  resultadosGif?: string

  // Depoimento 2 — dark
  depoimento2Quote: string
  depoimento2Nome: string
  depoimento2Cargo: string
  depoimento2ImgVertical: string
  depoimento2YoutubeUrl?: string

  // Grey sticky section
  greyStickyBody: string
  greyStickyYoutubeUrl?: string
  outrosCases: { href: string; img: string; title: string }[]
}

function lazyWithRetry(factory: () => Promise<any>) {
  return lazy(() =>
    factory().catch(() => {
      if (!sessionStorage.getItem("chunk-reloaded")) {
        sessionStorage.setItem("chunk-reloaded", "1");
        window.location.reload();
      }
      return { default: () => null };
    })
  );
}

const VCCta = lazyWithRetry(() => import('@/components/VideoCommerce/VCCta'))
const Newsletter = lazyWithRetry(() => import('@/components/Newsletter'))
const Footer = lazyWithRetry(() => import('@/components/Footer'))

interface Props {
  data: CaseArticleData
}

export default function CaseArticle({ data }: Props) {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className="section-hero_case hero-padding">
          <div className="hero-cases_background hide-mobile-landscape">
            <div className="div-space-holder is-cases"></div>
            <div className="cases_img-blur-wrapper">
              <img
                src={data.heroImage}
                loading="lazy"
                style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                alt=""
                className="cases_img-blur"
              />
              <div
                style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                className="cases_img-blur-overlay"
              />
            </div>
          </div>
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-large">
                <div className="hero-cases_content">
                  <div className="cases_title">
                    <div className="margin-bottom margin-xsmall">
                      <div className="tag-planos">{data.tag ?? "Case de Sucesso"}</div>
                    </div>
                    <h1 className="heading-style-hero">{data.title}</h1>
                    <div className="cases_heading">
                      <div className="cases_representante-nome">{data.representanteNome}</div>
                      <div className="cases_representante-cargo">{data.representanteCargo}</div>
                      <div className="cases_cliente">{data.cliente}</div>
                    </div>
                    {data.youtubeUrl && (
                      <div className="margin-top margin-small">
                        <a
                          aria-label="staggering button"
                          href={data.youtubeUrl}
                          className="btn-animate-chars widde-lp resultados-mam w-inline-block is--small"
                        >
                          <div className="btn-animate-chars__bg is--blue"></div>
                          <span className="btn-animate-chars__text">Assistir case completo</span>
                          <div className="staggering-btn-css w-embed"></div>
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="cases_image-wrapper">
                    <img
                      loading="eager"
                      src={data.heroImage}
                      alt={data.heroImageAlt ?? ""}
                      className="cases_img-capa"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conheça */}
        <section className="section-case_intro">
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-medium">
                <div className="case_grid">
                  <img
                    src={data.conhecaLogo}
                    loading="lazy"
                    alt={data.conhecaLogoAlt ?? ""}
                    className="cases_imagem-conheca"
                  />
                  <div
                    className="richt-text_cases w-richtext"
                    dangerouslySetInnerHTML={{ __html: `<h2>${data.conhecaTitle}</h2>${data.conhecaBody}` }}
                  />
                  <div className="hide-mobile-landscape"></div>
                  <div className="cases_numbers-grid align-left">
                    {data.conhecaNumbers.map((n, i) => (
                      <div key={i} className="numeros-rich-text is--conheca w-richtext">
                        <h3>{n.value}</h3>
                        <p>{n.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimento 1 */}
        <section className="section-case_depoimento">
          <div className="padding-section-medium">
            <div className="padding-global">
              <div className="container-medium">
                <div className="case_depoimento-wrapper">
                  <img
                    src={data.depoimento1Img}
                    loading="lazy"
                    alt=""
                    className="depoimento_imagem is--desktop"
                  />
                  <div className="depoimento_profile">
                    <div className="rich-text-depoimento w-richtext">
                      <p>"{data.depoimento1Quote}"</p>
                    </div>
                    <div className="depoimento_persona">
                      <img
                        src={data.depoimento1Img}
                        loading="lazy"
                        alt=""
                        className="depoimento_imagem is--mobile"
                      />
                      <div className="case_depoimento-nome">{data.depoimento1Nome}</div>
                      <div className="case_depoimento-empresa">{data.depoimento1Cargo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafio */}
        <section className="section-case_intro">
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-medium">
                <div className="case_grid">
                  <div className="case_side-image-wrapper">
                    <img
                      src={data.desafioGif}
                      loading="lazy"
                      alt=""
                      className="case_side-image"
                    />
                  </div>
                  <div
                    className="richt-text_cases w-richtext"
                    dangerouslySetInnerHTML={{ __html: `<h2>O Desafio</h2>${data.desafioBody}` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="section-case_numeros">
          <div className="padding-section-small">
            <div className="padding-global">
              <div className="container-small">
                <div className="cases_numbers-grid">
                  {data.numeros.map((n, i) => (
                    <div key={i} className="numeros-rich-text w-richtext">
                      <h4>{n.value}</h4>
                      <p>{n.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="section-case_intro">
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-medium">
                <div className="case_grid is-reverse">
                  <div>
                    <div
                      className="richt-text_cases w-richtext"
                      dangerouslySetInnerHTML={{ __html: data.resultadosBody }}
                    />
                    <div className="case_button-wrapper align-left case-de-sucesso">
                      <a
                        aria-label="staggering button"
                        href="https://widde.io/quero-comecar?"
                        className="btn-animate-chars widde-lp resultados-mam w-inline-block"
                      >
                        <div className="btn-animate-chars__bg is--blue"></div>
                        <span className="btn-animate-chars__text">Começar agora com a Widde</span>
                        <div className="staggering-btn-css w-embed"></div>
                      </a>
                      <a
                        aria-label="staggering button"
                        href="https://widde.io/contato-vendas?"
                        className="btn-animate-chars widde-lp resultados-mam w-inline-block"
                      >
                        <div className="btn-animate-chars__bg"></div>
                        <span className="btn-animate-chars__text">Falar com Vendas</span>
                        <div className="staggering-btn-css w-embed"></div>
                      </a>
                    </div>
                  </div>
                  <div className="case_side-image-wrapper">
                    {/* GIF placeholder — set via data if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimento 2 — dark */}
        <section className="section-case_depoimento is--black">
          <div className="padding-global">
            <div className="container-medium">
              <div className="case_depoimento-wrapper is--reverse">
                <div className="padding-section-medium">
                  <div className="depoimento_profile">
                    <div className="rich-text-depoimento branco w-richtext">
                      <p>"{data.depoimento2Quote}"</p>
                    </div>
                    <div>
                      <div className="case_depoimento-nome branco">{data.depoimento2Nome}</div>
                      <div className="case_depoimento-empresa branco">{data.depoimento2Cargo}</div>
                    </div>
                    {data.depoimento2YoutubeUrl && (
                      <div className="margin-top margin-small">
                        <a
                          aria-label="staggering button"
                          href={data.depoimento2YoutubeUrl}
                          className="btn-animate-chars widde-lp resultados-mam w-inline-block is--small"
                        >
                          <div className="btn-animate-chars__bg is--blue"></div>
                          <span className="btn-animate-chars__text">Assistir case completo</span>
                          <div className="staggering-btn-css w-embed"></div>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <img
                  src={data.depoimento2ImgVertical}
                  loading="lazy"
                  style={{ clipPath: "polygon(25% 0%, 100% 0%, 90% 100%, 10% 100%)" }}
                  alt=""
                  className="depoimento_imagem2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grey — sticky aside */}
        <section className="section-case_intro is--grey">
          <div className="padding-section-large">
            <div className="padding-global">
              <div className="container-medium">
                <div className="case_grid is--sticky">
                  <div>
                    <div
                      className="richt-text_cases w-richtext"
                      dangerouslySetInnerHTML={{ __html: data.greyStickyBody }}
                    />
                    <div className="case_button-wrapper">
                      {data.greyStickyYoutubeUrl && (
                        <a
                          aria-label="staggering button"
                          href={data.greyStickyYoutubeUrl}
                          className="btn-animate-chars widde-lp resultados-mam w-inline-block"
                        >
                          <div className="btn-animate-chars__bg"></div>
                          <span className="btn-animate-chars__text">Assistir case completo</span>
                          <div className="staggering-btn-css w-embed"></div>
                        </a>
                      )}
                    </div>
                  </div>
                  <aside className="blog-post_aside is--cases">
                    <h3 className="heading-style-h5">Veja outros cases</h3>
                    <div className="w-dyn-list">
                      <div role="list" className="blog-post_list-recentes w-dyn-items">
                        {data.outrosCases.map((c) => (
                          <div key={c.href} role="listitem" className="blog-post_list-item w-dyn-item">
                            <a href={c.href} className="blog-post_recentes w-inline-block">
                              <img
                                alt=""
                                loading="lazy"
                                src={c.img}
                                className="blog-post_image-recentes"
                              />
                              <div>{c.title}</div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <a
                      aria-label="staggering button"
                      href="https://widde.io/quero-comecar?"
                      className="btn-animate-chars is--blog w-inline-block"
                    >
                      <span className="btn-animate-chars__text">Começar agora com a Widde</span>
                      <div className="icon-embed-xsmall-2 w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                        </svg>
                      </div>
                    </a>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Suspense><VCCta /></Suspense>
      <Suspense><div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div></Suspense>
      <Suspense><Footer /></Suspense>
    </>
  )
}
