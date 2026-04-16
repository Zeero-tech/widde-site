const items = [
  { title: 'Somos Widde.', text: 'Humanizamos. Inovamos. Conectamos.' },
  { title: 'Somos o presente e o futuro do e-commerce.', text: 'Nosso compromisso é nunca parar de ouvir, de aprender e de melhorar. Estamos aqui para transformar o mundo do e-commerce com experiências memoráveis aos consumidores.' },
  { title: 'O que defendemos?', text: 'Defendemos um mundo onde e-commerces não sejam apenas catálogos digitais, deixando para trás a experiência tradicional e trazendo verdadeiras experiências de compra, cheias de identidade, conexão e credibilidade. Onde cada cliente encontre o que procura, com assertividade e confiança.' },
  { title: 'Usamos a força da inovação.', text: 'Com soluções pioneiras e tendências globais, desenvolvemos uma plataforma de Video Commerce intuitiva, com design marcante e recursos cruciais.' },
  { title: 'Estamos em um cenário desafiador.', text: 'Reconhecemos as dificuldades de gerar confiança e convencer o consumidor na loja on-line. Com o custo por aquisição cada vez maior, ajudamos o e-commerce a quebrar objeções através da interatividade e humanização para aumentar as conversões.' },
  { title: 'Nascemos para humanizar.', text: 'Nossa missão é dar vida aos e-commerces, criando conexões genuínas que transformam visitantes em clientes encantados. Sabemos que por trás de cada e-commerce tem um lojista visionário e que por trás de cada visitante na loja, existe um consumidor buscando identificação, clareza e acolhimento.' },
  { title: 'Somos a Widde.', text: 'Acreditamos que cada e-commerce tem o poder de encantar, conectar e transformar experiências. Em um cenário onde a falta de confiança e competitividade são obstáculos, e a distância digital pode separar, somos o elo que aproxima marcas de pessoas.' },
]

export default function QSManifesto() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

          <div className="md:sticky md:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
              Manifesto
            </h2>
          </div>

          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-10 border-b border-white/10 first:border-t first:border-white/10"
              >
                <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-white/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
