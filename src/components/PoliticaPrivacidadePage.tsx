import { lazy, Suspense } from "react";
import { useLenis } from "@/lib/useLenis";
import Nav from "@/components/Nav";

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

const Footer = lazyWithRetry(() => import("@/components/Footer"));

export default function PoliticaPrivacidadePage() {
  useLenis();

  return (
    <>
      <Nav />
      <main>
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f6f6f6" }}>
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-normal text-black mb-10 leading-tight">
                Política de Privacidade
              </h1>

              <div className="prose prose-neutral max-w-none text-[#373739] leading-relaxed space-y-8">

                <p>
                  O aplicativo Widde fornece a publicação de vídeos dentro do site de forma atrativa e leve, com a finalidade de melhor demonstração e divulgação de seus produtos e serviços, realizando a captura dos dados de engajamento e interação dos usuários com os vídeos ("o Serviço") para lojistas potencializarem suas lojas. Esta Política de Privacidade descreve como as informações pessoais são coletadas, usadas e compartilhadas quando você instala ou usa o App em conexão com sua loja.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold text-black mb-4">
                    Informações pessoais que o aplicativo coleta
                  </h2>
                  <p>
                    Quando você instala a Widde, coletamos os seguintes tipos de informações sobre indivíduos que visitam sua loja, depois de instalar o aplicativo: fluxo de navegação no site, endereço IP, detalhes do navegador da web, tipo de dispositivo, fuso horário e informações sobre os cookies instalados no dispositivo específico.
                  </p>
                  <p className="mt-4">
                    Coletamos as informações diretamente do indivíduo relevante, usando as seguintes tecnologias:
                  </p>
                  <ul className="mt-3 space-y-3 list-none pl-0">
                    <li>
                      <strong>"Cookies"</strong> são arquivos de dados que são colocados em seu dispositivo ou computador e geralmente incluem um identificador exclusivo anônimo. Para obter mais informações sobre cookies e como desativá-los, visite{" "}
                      <a
                        href="http://www.allaboutcookies.org"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand underline"
                      >
                        http://www.allaboutcookies.org
                      </a>
                      .
                    </li>
                    <li>
                      <strong>"Arquivos de log"</strong> rastreiam as ações que ocorrem no Site e coletam dados, incluindo seu endereço IP, tipo de navegador, provedor de serviços de Internet, páginas de referência/saída e carimbos de data/hora.
                    </li>
                    <li>
                      <strong>"Web beacons", "tags" e "pixels"</strong> são arquivos eletrônicos usados para registrar informações sobre como você navega no Site.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-black mb-4">
                    Como usamos suas informações pessoais?
                  </h2>
                  <p>
                    Usamos as informações pessoais que coletamos de você e de seus clientes para fornecer o Serviço e operar o Aplicativo. Além disso, usamos essas informações pessoais para:
                  </p>
                  <ul className="mt-3 space-y-2 list-disc pl-6">
                    <li>Nos comunicar com você;</li>
                    <li>Otimizar ou melhorar o App;</li>
                    <li>Fornecer a você informações relacionadas aos nossos produtos ou serviços.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-black mb-4">
                    Compartilhando suas informações pessoais
                  </h2>
                  <p>
                    Por fim, também podemos compartilhar suas informações pessoais para cumprir as leis e regulamentos aplicáveis, para responder a uma intimação, mandado de busca ou outra solicitação legal de informações que recebemos ou para proteger nossos direitos.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-black mb-4">
                    Alterações
                  </h2>
                  <p>
                    Podemos atualizar esta política de privacidade de tempos em tempos para refletir, por exemplo, alterações em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
                  </p>
                  <p className="mt-4">
                    Fale conosco para obter mais informações sobre nossas práticas de privacidade. Se você tiver dúvidas ou quiser fazer uma reclamação, entre em contato conosco por e-mail em{" "}
                    <a
                      href="mailto:privacidade@widde.io"
                      className="text-brand underline"
                    >
                      privacidade@widde.io
                    </a>
                    .
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
