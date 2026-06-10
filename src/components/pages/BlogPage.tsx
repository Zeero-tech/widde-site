import { useState, useEffect } from "react";
import Nav from "@/components/core/Nav";
import VCCta from "@/components/VideoCommerce/VCCta";
import Newsletter from "@/components/core/Newsletter";
import Footer from "@/components/core/Footer";
import { useLenis } from "@/lib/useLenis";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type Post = {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  imageW: number;
  imageH: number;
};

const featuredPost = {
  slug: "alta-performance-em-e-commerce-o-que-realmente-funciona-em-qualquer-segmento",
  title:
    "Alta performance em e-commerce: o que realmente funciona em qualquer segmento",
  image:
    "/assets/blog/widde-pro/69bdb59cfdad17b6dc8d144e_Blog-artigo-FG.png",
};

const posts: Post[] = [
  {
    slug: "report-video-commerce-brasil-2025",
    category: "Dados no E-commerce",
    date: "02.03.2026",
    title: "Report Video Commerce Brasil 2025",
    description:
      "Dados reais de operações brasileiras, cases de marcas que já aplicam o Video Commerce na prática e projeções sobre o papel do vídeo na jornada de compra.",
    image:
      "/assets/blog/widde-pro/69a5dc73c9b53384264daa9a_Capa-do-blog-report.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "checklist-de-preparacao-5-ajustes-no-seu-e-commerce-ganhar-vantagem-competitiva",
    category: "Tendências e-commerce",
    date: "10.02.2026",
    title:
      "Checklist de preparação: 5 ajustes no seu e-commerce ganhar vantagem competitiva",
    description:
      "Em 2026, crescer não será apenas uma questão de tráfego, mas de experiência, narrativa e eficiência na conversão.",
    image:
      "/assets/blog/widde-pro/698b673c48ba63b42f2c37f6_Blog-Checklist-copiar.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-fidelizar-os-clientes-no-e-commerce",
    category: "Video Commerce",
    date: "23.01.2026",
    title: "Como fidelizar os clientes no e-commerce",
    description:
      "As pessoas não seguem mais um caminho previsível entre descobrir uma marca, avaliar opções e comprar.",
    image:
      "/assets/blog/widde-pro/69736a5d3653bac3dde3eef9_Blog-como-fidelizar-no-e-commerce.png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "shoppable-videos-a-estrategia-que-vai-invadir-o-video-commerce-em-2026",
    category: "Tendências e-commerce",
    date: "16.01.2026",
    title:
      "Shoppable videos: A estratégia que vai invadir o Video Commerce em 2026",
    description:
      "Em um cenário em que a atenção do consumidor é cada vez mais disputada e a jornada de compra se torna menos linear.",
    image:
      "/assets/blog/widde-pro/696a4136d272a14015d442ea_capa-shoppable-videos-2.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "guia-estrategico-do-video-commerce-as-tendencias-que-vao-permear-em-2026",
    category: "Tendências e-commerce",
    date: "09.01.2026",
    title:
      "Guia estratégico do Video Commerce: as tendências que vão permear em 2026",
    description:
      "O vídeo deixou de ser apenas um formato de comunicação para se consolidar como um canal relevante de descoberta, engajamento e conversão no e-commerce.",
    image:
      "/assets/blog/report-video-commerce-brasil-2025/696141384fe221769b9e530a_Thumbnail.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "as-5-principais-licoes-que-aprendemos-com-o-video-commerce-em-2025",
    category: "Tendências e-commerce",
    date: "23.12.2025",
    title: "As 5 principais lições que aprendemos com o Video Commerce em 2025",
    description:
      "A partir do que observamos em 2025, estas são as cinco principais lições que o Video Commerce nos deixou e que apontam diretamente para as tendências de 2026.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/694aa6a3f6d28247ae460cd4_5%20principais%20li%C3%A7%C3%B5es%20de%202025%20(2).png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "a-nova-era-das-compras-online-como-o-tiktok-shop-se-tornou-o-maior-canal-de-descoberta-do-e-commerce",
    category: "Tendências e-commerce",
    date: "05.12.2025",
    title:
      "A nova era das compras online: como o TikTok Shop se tornou o maior canal de descoberta do e-commerce",
    description:
      "Entenda por que o TikTok Shop está redefinindo o e-commerce. Um guia completo para quem deseja crescer utilizando o maior canal de descoberta da atualidade.",
    image:
      "/assets/blog/como-o-video-se-tornou-o-motor-das-conversoes-na-black-friday/6932f3e08775eaf14aea5fcf_Coolab-com-Flavio-B-1.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-o-video-se-tornou-o-motor-das-conversoes-na-black-friday",
    category: "Tendências e-commerce",
    date: "10.11.2025",
    title: "Como o vídeo se tornou o motor das conversões na Black Friday",
    description:
      "Em um cenário de anúncios disputados, carrinhos abandonados e consumidores indecisos, até mesmo lojas de segmentos diferentes se tornam competidoras.",
    image:
      "/assets/blog/impacto-dos-videos-na-black-friday-2024/69137f6f444d325befaefe49_Como-o-v-deo-se-tornou-o-motor-das-convers-es.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "sua-loja-online-esta-pronta-para-o-discovery-commerce-aprenda-com-o-tiktok-shop",
    category: "Tendências e-commerce",
    date: "08.10.2025",
    title:
      "Sua loja online está pronta para o Discovery Commerce? Aprenda com o TikTok Shop",
    description:
      "A lógica do Discovery Commerce virou o motor de plataformas como o TikTok Shop e começa a redefinir também o e-commerce tradicional.",
    image:
      "/assets/blog/como-o-video-se-tornou-o-motor-das-conversoes-na-black-friday/68e675e24e75460b85777d33_Blog_-Sua-loja-online-est-pronta-para-o-Discovery-Commerce.png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-usar-o-video-commerce-para-vender-mais-na-black-friday-estrategias-praticas-e-cases-reais",
    category: "Dados no E-commerce",
    date: "07.10.2025",
    title:
      "Como usar o Video Commerce para vender mais na Black Friday: estratégias práticas e cases reais",
    description:
      "Como utilizar a Widde como estratégia nas campanhas, estruturando e distribuindo os vídeos no site e integrando-os à jornada do cliente.",
    image:
      "/assets/blog/impacto-dos-videos-na-black-friday-2024/68ffb38b43f0c6c0cecd6986_Como-usar-o-Video-para-vender-mais-na-Blakc.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-fazer-uma-black-friday-lucrativa-com-video-estrategias-validadas-por-especialistas-e-cases-reais",
    category: "Video Commerce",
    date: "01.10.2025",
    title:
      "Como fazer uma Black Friday lucrativa com vídeo: estratégias validadas por especialistas e cases reais",
    description:
      "A Black Friday é, para muitas marcas, uma verdadeira corrida para se destacar da concorrência, por vezes oferecendo o maior desconto, e tentar bater metas.",
    image:
      "/assets/blog/impacto-dos-videos-na-black-friday-2024/68de6f277536e98cfc531e6e_Capa-blog-Como-fazer-uma-Black-Friday-lucrativa-com-v-deo.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "video-explicativo-de-produto-como-fazer-e-implementar",
    category: "Video Commerce",
    date: "26.09.2025",
    title: "Vídeo explicativo de produto: como fazer e implementar?",
    description:
      "Um vídeo explicativo de produto é criado para apresentar, demonstrar e esclarecer o funcionamento, as vantagens e os diferenciais de um produto.",
    image:
      "/assets/blog/videos-para-e-commerce-b2b/68d699f6dcb3f438b1cae87c_V-deo-explicativo-de-produto_-como-fazer-e-implementar_.png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "insights-para-criar-um-video-para-loja-on-line",
    category: "Video Commerce",
    date: "04.09.2025",
    title: "Insights para criar um vídeo para loja on-line",
    description:
      "Precisando de dicas para fazer um vídeo para o e-commerce? O vídeo é um dos formatos mais recomendados para atrair, engajar e converter clientes.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68bad74ae4345ad77e5e8e31_Blog_%20Insights%20para%20criar%20um%20v%C3%ADdeo%20para%20loja%20on-line%20(1).png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "por-que-investir-em-videos-profissionais-para-e-commerce",
    category: "Video Commerce",
    date: "27.08.2025",
    title: "Por que investir em vídeos profissionais para e-commerce?",
    description:
      "Afinal, por que investir em fotos e vídeos profissionais para e-commerce?",
    image:
      "/assets/blog/videos-para-e-commerce-b2b/68af0c75cff4353f2393c176_Blog_-Por-que-investir-em-v-deos-profissionais_.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "video-para-e-commerce-de-moda-como-fazer-2",
    category: "Tendências e-commerce",
    date: "19.08.2025",
    title: "Vídeo para e-commerce de moda: como fazer?",
    description:
      "Como fazer vídeo para e-commerce de roupa? A moda é um dos segmentos mais visuais e sensoriais do varejo.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68a488f476190fd295973d7d_Blog_%20V%C3%ADdeo%20para%20e-commerce%20de%20moda_%20como%20fazer_%20(3).png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "impacto-dos-videos-na-black-friday-2024",
    category: "Dados no E-commerce",
    date: "06.08.2025",
    title: "Impacto dos vídeos na Black Friday 2024 e estratégias para 2025",
    description:
      "Se em 2024 os vídeos já foram um dos grandes responsáveis por impulsionar as vendas no e-commerce, imagina o que vem por aí em 2025.",
    image:
      "/assets/blog/impacto-dos-videos-na-black-friday-2024/6893724a1859fac0f2cfc1b6_Artigo-Black-Friday-2025.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "videos-para-e-commerce-b2b",
    category: "Tendências e-commerce",
    date: "21.07.2025",
    title: "Vídeos para e-commerce B2B: como usar e implementar?",
    description:
      "Vídeos para e-commerce B2B: como usar e implementar? Um guia completo com tudo o que precisa saber.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/687e7aaae0fa3511417ae78b_V%C3%ADdeos%20para%20e-commerce%20B2B%20(1).png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-adicionar-video-de-produtos-no-woocommerce",
    category: "Tendências e-commerce",
    date: "11.07.2025",
    title: "Como adicionar vídeo de produtos no WooCommerce?",
    description:
      "Como adicionar vídeo de produtos no WooCommerce? Um guia completo com tudo o que precisa saber.",
    image:
      "/assets/blog/videos-para-e-commerce-b2b/6871206746bc57b16a1cb8fd_Como-adicionar-v-deos-na-woocommerce.png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-adicionar-video-de-produtos-no-magento",
    category: "Video Commerce",
    date: "30.06.2025",
    title: "Como adicionar vídeo de produtos no Magento?",
    description:
      "Como adicionar vídeo de produtos no Magento? Um guia completo para adicionar vídeos nas páginas de produtos etc.",
    image:
      "/assets/blog/videos-para-e-commerce-b2b/68628e467e5a7b11c65be81c_Como-adicionar-v-deo-no-Magento.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-otimizar-videos-no-e-commerce-para-seo",
    category: "Video Commerce",
    date: "23.06.2025",
    title: "Como otimizar vídeos no e-commerce para SEO?",
    description:
      "Como otimizar vídeos no e-commerce para SEO? Um guia completo com tudo o que precisa saber.",
    image:
      "/assets/blog/como-adicionar-video-de-produtos-no-magento/68595057fb551be3f2fd1ffa_Otimize-v-deos-no-e-commerce-para-SEO.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-reengajar-usuarios-na-loja-virtual",
    category: "Dados no E-commerce",
    date: "17.06.2025",
    title: "Como reengajar usuários na loja virtual | As 12 dicas",
    description:
      "Como reengajar usuários na loja virtual | As 12 dicas para começar a aplicar agora mesmo.",
    image:
      "/assets/blog/como-reengajar-usuarios-na-loja-virtual/68516655ad9c7c37d698f890_Reengaje-usuarios-na-loja-virtual.png",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "widde-forum-e-commerce-brasil",
    category: "Video Commerce",
    date: "10.06.2025",
    title:
      "Widde confirma presença no Fórum E-commerce Brasil 2025 com soluções inéditas em Video Commerce",
    description:
      "Widde confirma presença no Fórum E-commerce Brasil 2025 com soluções inéditas em Video Commerce.",
    image:
      "/assets/blog/widde-forum-e-commerce-brasil/6848554ca0eb76998d83728b_Widde-no-f-rum-e-commerce-brasil.png",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-converter-visitantes-em-clientes-no-e-commerce",
    category: "Tendências e-commerce",
    date: "27.05.2025",
    title: "Como converter visitantes em clientes no e-commerce?",
    description:
      "Como converter visitantes em clientes no e-commerce? Um guia completo.",
    image:
      "/assets/blog/insights-para-criar-um-video-para-loja-on-line/6835f16eb833c7821f92e564_Converta-visitantes-em-clientes-no-e-commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "a-widde-estara-no-vtex-day",
    category: "Dados no E-commerce",
    date: "20.05.2025",
    title: "A Widde estará no VTEX Day 2025",
    description:
      "A Widde estará no VTEX Day 2025. Confira tudo sobre o evento conosco.",
    image:
      "/assets/blog/a-widde-estara-no-vtex-day/682c7d31d90bd3f4ab5aa7a3_Widde-no-VTEX-Day-2025-1-.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "widde-pro",
    category: "Dados no E-commerce",
    date: "12.05.2025",
    title: "Widde Pro: o que é e como funciona?",
    description:
      "Widde Pro | Um guia completo sobre as principais soluções e diferenciais.",
    image:
      "/assets/blog/widde-pro/68226c9cc37dbc7c1406b50a_conhe-a-o-widde-pro.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "solucao-de-video-para-e-commerce-video-commerce",
    category: "Dados no E-commerce",
    date: "12.05.2025",
    title: "Solução de vídeo para e-commerce | Video Commerce",
    description:
      "Solução de vídeo para e-commerce | Um guia completo com tudo o que precisa saber sobre vídeo commerce.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68226b3bc37dbc7c14054d59_Solu%C3%A7%C3%A3o%20de%20v%C3%ADdeo%20para%20e-commerce%20(2).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "gestao-de-e-commerce",
    category: "Tendências e-commerce",
    date: "30.04.2025",
    title: "Gestão de e-commerce: como fazer e otimizar suas vendas?",
    description:
      "Confira um guia completo com tudo o que você precisa saber sobre gestão de e-commerce, o que é, como funciona e dicas para fazer.",
    image:
      "/assets/blog/gestao-de-e-commerce/68126eaf9dbe4f1f6708afa6_Gest-o-de-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "marketing-de-influencia-no-e-commerce",
    category: "Dados no E-commerce",
    date: "23.04.2025",
    title: "Marketing de influência no e-commerce | Guia completo",
    description:
      "Um guia completo com tudo o que você precisa saber sobre o marketing de influência para e-commerce. Vem com a Widde.",
    image:
      "/assets/blog/marketing-de-influencia-no-e-commerce/68090029d32c737a32f68cd7_Marketing-de-influ-ncia-no-e-commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-adicionar-video-de-produtos-na-wake",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como adicionar vídeo de produtos na Wake?",
    description:
      "Adicionar vídeos de produtos na Wake é uma forma de aumentar a interação do cliente e melhorar a experiência de compra. Veja como fazer com a Widde.",
    image:
      "/assets/blog/como-adicionar-video-de-produtos-na-wake/67fd4081885c2a48a6f766ae_adicionar-video-waje.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "impacto-das-redes-sociais-no-e-commerce",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Impacto das redes sociais no e-commerce",
    description:
      "As plataformas sociais transformam fundamentalmente o e-commerce, mudando a descoberta de produtos e os comportamentos de compra. Saiba como usar isso a seu favor.",
    image:
      "/assets/blog/impacto-das-redes-sociais-no-e-commerce/67fd3f6a05a2b256749e4a64_impacto-de-redes-sociais-ecommerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "evolucao-dos-comentarios-no-video",
    category: "Video Commerce",
    date: "12.05.2025",
    title:
      "Evolução dos comentários no vídeo: solução para tirar mais objeções de compra e vender mais",
    description:
      "A Widde agora permite responder comentários de clientes nos vídeos de produto. Saiba como essa funcionalidade ajuda a tirar objeções e aumentar as conversões.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/67fd10410088192a1ab696c5_Imagem%20do%20WhatsApp%20de%202025-04-07%20%C3%A0(s)%2017.35.50_3ea5ff71.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-adicionar-video-de-produtos-no-bagy",
    category: "Video Commerce",
    date: "07.04.2025",
    title: "Como adicionar vídeo de produtos no BAGY? Categoria, home +",
    description:
      "Adicionar vídeos de produtos no BAGY é uma estratégia para aumentar conversões e melhorar a experiência do consumidor. Veja o passo a passo com a Widde.",
    image:
      "/assets/blog/como-adicionar-video-de-produtos-no-bagy/67f3dc1390bbbc1638f02e9a_Como-adicionar-v-deo-na-bagy.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "experiencia-haptica-no-e-commerce",
    category: "Tendências e-commerce",
    date: "01.04.2025",
    title: "Experiência háptica no e-commerce",
    description:
      "A experiência háptica no e-commerce simula sensações táteis nas compras online. Saiba como essa tendência transforma a jornada do cliente e reduz devoluções.",
    image:
      "/assets/blog/experiencia-haptica-no-e-commerce/67ec536ad97c8dd90306b576_IMG_3256.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-adicionar-video-de-produtos-na-loja-integrada",
    category: "Video Commerce",
    date: "27.03.2025",
    title: "Como adicionar vídeo de produtos na Loja Integrada?",
    description:
      "Saiba como adicionar vídeos de produtos na Loja Integrada de forma simples e sem comprometer a performance do site com a Widde Video Commerce.",
    image:
      "/assets/blog/como-adicionar-video-de-produtos-na-loja-integrada/67e5878473e435b3211ba082_Como-adicionar-v-deo-loja-integrada.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "tendencias-do-e-commerce",
    category: "Tendências e-commerce",
    date: "24.03.2025",
    title: "Tendências do e-commerce para os próximos anos no Brasil",
    description:
      "O mercado brasileiro de e-commerce está em constante transformação. Descubra as principais tendências para os próximos anos e como se manter competitivo.",
    image:
      "/assets/blog/tendencias-do-e-commerce/67e19ebe63e73c18552da636_Tend-ncias-do-e-commerce-para-os-pr-ximos-anos.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "videos-na-home-formatos-e-beneficios",
    category: "Video Commerce",
    date: "18.03.2025",
    title: "Vídeos na Home: Formatos e benefícios",
    description:
      "Incorporar vídeos na homepage do e-commerce melhora o engajamento, aumenta as conversões e fortalece a presença da marca. Conheça os formatos e benefícios.",
    image:
      "/assets/blog/videos-na-home-formatos-e-beneficios/67d98d9e7ca3d36cdc09bedb_Conhe-a-os-v-deos-na-Home.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-diminuir-trocas-e-devolucoes-no-e-commerce",
    category: "Tendências e-commerce",
    date: "12.03.2025",
    title: "Como diminuir trocas e devoluções no e-commerce?",
    description:
      "Devoluções e trocas são desafios operacionais significativos no e-commerce. Descubra estratégias práticas para reduzir esse problema e melhorar a satisfação do cliente.",
    image:
      "/assets/blog/como-diminuir-trocas-e-devolucoes-no-e-commerce/67d1b19b542d1b9da2ec4559_Diminua-trocas-e-devoluc-o-es-no-e-commercev.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-colocar-video-na-nuvemsho",
    category: "Video Commerce",
    date: "25.02.2025",
    title:
      "Como colocar vídeo na Nuvemshop? Página de produto, home e categorias",
    description:
      "Vídeos na Nuvemshop aumentam a visibilidade da loja e impulsionam as vendas. Veja como adicionar em páginas de produto, home e categorias com a Widde.",
    image:
      "/assets/blog/como-colocar-video-na-nuvemsho/67bdd8dc0e0e7364b212f296_como-adicionar-vi-deo-de-produtos-na-nuvemshop.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "videos-para-as-redes-sociais-e-commerce",
    category: "Video Commerce",
    date: "17.02.2025",
    title: "Vídeos para as redes sociais: como utilizá-los no seu e-commerce?",
    description:
      "A Widde permite reutilizar vídeos das redes sociais diretamente no e-commerce, convertendo-os em ferramentas de venda nas páginas de produtos e categorias.",
    image:
      "/assets/blog/videos-para-as-redes-sociais-e-commerce/67b363c9448bc97111f958bd_Vi-deos-das-redes-sociais-no-seu-e-commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-adicionar-video-de-produtos-na-tray",
    category: "Video Commerce",
    date: "10.02.2025",
    title: "Como adicionar vídeo de produtos na TRAY?",
    description:
      "Adicionar vídeos nas páginas de produtos, home e categorias da TRAY oferece um diferencial para aumentar conversões e engajamento. Veja o passo a passo com a Widde.",
    image:
      "/assets/blog/como-adicionar-video-de-produtos-na-tray/67aa2e1820a39d2beb042d0e_como-adicionar-vi-deo-de-produtos-na-tray.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "qual-o-impacto-dos-videos-no-e-commerce-e-como-analisar",
    category: "Dados no E-commerce",
    date: "03.02.2025",
    title: "Qual o impacto dos vídeos no e-commerce e como analisar?",
    description:
      "O Video Commerce pode aumentar a taxa de conversão em até 4 vezes. Saiba como medir o impacto dos vídeos no seu e-commerce com as métricas certas.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/67a143e7dd41f078e4db0bf3_Impacto%20e%20an%C3%A1lise%20dos%20v%C3%ADdeos%20(1).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "formato-e-personalizacao-do-video-commerce",
    category: "Video Commerce",
    date: "28.01.2025",
    title: "Formato e personalização do Video Commerce",
    description:
      "O Video Commerce está mudando a forma como os consumidores interagem com produtos no e-commerce. Conheça os formatos e opções de personalização disponíveis na Widde.",
    image:
      "/assets/blog/formato-e-personalizacao-do-video-commerce/6798dce37777b8c419262fb1_Formatos-e-personaliza-o-dos-v-deos.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "beneficios-do-video-commerce",
    category: "Video Commerce",
    date: "21.01.2025",
    title: "Os 9 maiores benefícios do Video Commerce",
    description:
      "Descubra os 9 maiores benefícios do Video Commerce para o seu e-commerce: mais conversão, maior retenção, menos devoluções e uma experiência humanizada.",
    image:
      "/assets/blog/beneficios-do-video-commerce/678f9758461fdc7d4733fb6b_Maiores-benef-cios-do-Video-Commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "formatos-de-videos-para-seu-e-commerce",
    category: "Video Commerce",
    date: "13.01.2025",
    title: "Os 04 formatos de vídeos para seu e-commerce",
    description:
      "Conheça os 4 principais formatos de vídeo para o seu e-commerce: bastidores, comparativos, unboxing e demonstrativos. Veja como cada um contribui para as vendas.",
    image:
      "/assets/blog/formatos-de-videos-para-seu-e-commerce/678537faf754913ec29091a0_formatos-de-v-deos-para-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-colocar-video-no-shopify",
    category: "Video Commerce",
    date: "06.01.2025",
    title: "Como colocar vídeo no Shopify?",
    description:
      "Adicionar vídeos no Shopify aumenta a confiança do consumidor, reduz dúvidas e diminui as taxas de devolução. Veja o passo a passo com a Widde.",
    image:
      "/assets/blog/como-colocar-video-no-shopify/677c46504cee25d6d4933403_Como-adicionar-v-deos-na-shopify.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "praticas-para-melhorar-os-videos-no-seu-e-commerce",
    category: "Video Commerce",
    date: "06.01.2025",
    title: "7 práticas para melhorar os vídeos no seu e-commerce",
    description:
      "O Video Commerce é uma estratégia indispensável para engajar clientes e aumentar vendas. Conheça as 7 práticas para melhorar os seus vídeos no e-commerce.",
    image:
      "/assets/blog/praticas-para-melhorar-os-videos-no-seu-e-commerce/676973a03facb734dd83c9a9_pr-ticas-para-v-deos-no-e-commerce-.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-adicionar-video-de-produtos-no-vtex",
    category: "Video Commerce",
    date: "30.12.2024",
    title: "Como adicionar vídeo de produtos no VTEX?",
    description:
      "Integrar vídeos de produtos no VTEX melhora a experiência de compra e aumenta a taxa de conversão. Veja o passo a passo com a Widde.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/676972ad82055732c84c4ddb_Como%20adicionar%20v%C3%ADdeos%20na%20vtex%20(1).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-passar-mais-confianca-no-e-commerce",
    category: "Tendências e-commerce",
    date: "23.12.2024",
    title: "Como passar mais confiança no e-commerce?",
    description:
      "Construir confiança no e-commerce é essencial para o crescimento de vendas e a fidelização de clientes. Descubra 9 estratégias comprovadas para transmitir mais segurança.",
    image:
      "/assets/blog/como-passar-mais-confianca-no-e-commerce/6762d0d26a07c8b25506d020_Como-passar-mais-confian-a-no-e-commerce_.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "descricao-e-videos-do-produto",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Descrição e vídeos do produto | Como fazer para e-commerce?",
    description:
      "Adicionar descrições e vídeos aos produtos no e-commerce melhora a experiência do cliente e aumenta as vendas. Veja 11 dicas práticas com a Widde.",
    image:
      "/assets/blog/descricao-e-videos-do-produto/675731a95e6b121c8b63ad90_Descri-es-e-v-deos-dos-produtos.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-converter-mais-vendas-usando-videos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como converter mais vendas usando vídeos? Dicas criativas",
    description:
      "Aprenda a aumentar as vendas no e-commerce com vídeos. Conheça as melhores estratégias de Video Commerce para converter mais clientes e aumentar o engajamento.",
    image:
      "/assets/blog/como-converter-mais-vendas-usando-videos/6744a9f607317c15f40f9424_Converta-mais-vendas-usando-v-deos-no-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "feed-de-videos-no-e-commerce",
    category: "Video Commerce",
    date: "12.05.2025",
    title:
      "Feed de Vídeos no e-commerce: O que é e como funciona a novidade de Video Commerce",
    description:
      "O Feed de Vídeos da Widde traz o formato de scroll infinito do TikTok para o e-commerce. Saiba como aumentar retenção, engajamento e conversão na sua loja.",
    image:
      "/assets/blog/feed-de-videos-no-e-commerce/673f7859716e425bdee537b2_Feed-de-V-deos.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "estrategias-de-marketing-para-e-commerce",
    category: "Marketing",
    date: "12.05.2025",
    title: "Estratégias de marketing para e-commerce: As 08 melhores",
    description:
      "Conheça as 8 melhores estratégias de marketing para e-commerce: Video Commerce, SEO, email marketing, influenciadores e mais. Aumente vendas e engajamento.",
    image:
      "/assets/blog/estrategias-de-marketing-para-e-commerce/67326ddc5a4b9f310b1d38fd_8-estrat-gias-de-marketing-para-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-diferenciar-seu-e-commerce-na-experiencia-do-cliente",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Como diferenciar seu e-commerce na experiência do cliente",
    description:
      "Descubra 8 estratégias para diferenciar seu e-commerce pela experiência do cliente: personalização, vídeos, checkout simplificado, frete rápido e muito mais.",
    image:
      "/assets/blog/como-diferenciar-seu-e-commerce-na-experiencia-do-cliente/6729213f5bfa90e4e787f40a_Diferencie-o-seu-e-commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "vantagens-de-usar-videos-no-e-commerce",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "As 07 vantagens de usar vídeos no e-commerce",
    description:
      "Descubra as 7 vantagens de usar vídeos no e-commerce: mais engajamento, conversão, retenção, confiança e SEO. Conheça o Video Commerce com a Widde.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6720d2a4d1870477e35df5ea_7%20vantagens%20de%20usar%20v%C3%ADdeos%20no%20e-commerce%20(1).avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "ideias-e-estrategias-de-marketing-para-black-friday",
    category: "Marketing",
    date: "12.05.2025",
    title: "Ideias e estratégias de marketing para Black Friday 2024",
    description:
      "Prepare seu e-commerce para a Black Friday com as melhores estratégias: promoções personalizadas, Video Commerce, remarketing e muito mais.",
    image:
      "/assets/blog/ideias-e-estrategias-de-marketing-para-black-friday/6716bcb17a861750ea2a2f9b_Estrat-gias-para-a-Black-Friday.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-colocar-video-no-e-commerce-sem-pesar-no-site",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como colocar vídeo no e-commerce sem pesar no site",
    description:
      "Aprenda como adicionar vídeos ao seu e-commerce sem comprometer a velocidade do site. Conheça a solução da Widde para Video Commerce com alta performance.",
    image:
      "/assets/blog/como-colocar-video-no-e-commerce-sem-pesar-no-site/670d623cdaadc6b5b6694159_Como-adicionar-v-deos-no-e-commerce-sem-pesar.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "report-de-video-commerce-do-brasil",
    category: "Video Commerce",
    date: "15.05.2025",
    title: "Tendências de Video Commerce Brasil 2025",
    description:
      "Conheça as tendências de Video Commerce no Brasil: dados, casos de sucesso e estratégias para impulsionar vendas com vídeos interativos no e-commerce.",
    image:
      "/assets/blog/report-de-video-commerce-do-brasil/67057f68532f408663d7ea83_Tend-ncias-de-Video-Commerce-Brasil.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "black-friday-como-diferenciar-a-experiencia-do-cliente",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Black Friday 2024 | Como diferenciar a experiência do cliente",
    description:
      "Saiba como diferenciar a experiência do cliente na Black Friday com Video Commerce, prova social, análise de dados e estratégias que aumentam conversão e confiança.",
    image:
      "/assets/blog/black-friday-como-diferenciar-a-experiencia-do-cliente/670434f95b6d840f6c461653_Como-vender-mais-e-diferenciar-a-experi-ncia-do-cliente.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "performance-para-e-commerces-na-black-friday",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Performance para e-commerces na Black Friday 2024",
    description:
      "Prepare seu e-commerce para a Black Friday com estratégias de performance: definição de metas, cupons, remarketing, vídeos e otimização de estoque.",
    image:
      "/assets/blog/performance-para-e-commerces-na-black-friday/66fd841aa501540934b7c8c6_Performance-para-e-commerces-na-Black-Friday-2024.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-diversificar-seus-videos-para-vender-mais",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como diversificar seus vídeos para vender mais?",
    description:
      "Aprenda a diversificar os tipos de vídeos no seu e-commerce: demonstrações, depoimentos, tutoriais, unboxing, bastidores, comparativos e animações para vender mais.",
    image:
      "/assets/blog/como-diversificar-seus-videos-para-vender-mais/66f1dfdb0ee5a9e9bcf41af1_Como-diversificar-seus-v-deos-para-vender-mais_.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "ideias-criativas-de-videos-para-divulgacao-de-produtos",
    category: "Video Commerce",
    date: "22.10.2025",
    title: "Ideias criativas de vídeos para divulgação de produtos",
    description:
      "Descubra ideias criativas de vídeos para divulgar seus produtos no e-commerce: demonstrações, depoimentos, tutoriais, unboxing, comparativos e colaborações.",
    image:
      "/assets/blog/ideias-criativas-de-videos-para-divulgacao-de-produtos/66e86b894c2433b39166cd4f_Ideias-criativas-para-v-deos-de-produtos.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "erros-de-video-commerce",
    category: "Video Commerce",
    date: "15.05.2025",
    title: "Os 08 erros de Video Commerce que você deve evitar",
    description:
      "Conheça os 8 erros mais comuns no Video Commerce e saiba como evitá-los: iluminação ruim, áudio de baixa qualidade, falta de roteiro, vídeos longos e mais.",
    image:
      "/assets/blog/erros-de-video-commerce/66df2871f132d504b0b062a4_8-erros-com-o-Video-Commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "tecnicas-de-persuasao-e-gravacao-para-videos-que-vendem",
    category: "Video Commerce",
    date: "22.10.2025",
    title: "Técnicas de persuasão e gravação para vídeos que vendem",
    description:
      "Aprenda as melhores técnicas de persuasão e gravação para criar vídeos que vendem no e-commerce: gatilhos emocionais, storytelling, CTA e qualidade de produção.",
    image:
      "/assets/blog/tecnicas-de-persuasao-e-gravacao-para-videos-que-vendem/66d5d71fdd59a9a3fdd4982c_T-cnicas-de-persuas-o-e-grava-o-para-v-deos-que-vendem.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "conteudo-para-e-commerce",
    category: "Marketing",
    date: "12.05.2025",
    title: "Conteúdo para e-commerce | Guia completo para produzir",
    description:
      "Guia completo de produção de conteúdo para e-commerce: palavras-chave, descrições, visuais, blog, tutoriais, depoimentos e UGC para atrair e converter mais clientes.",
    image:
      "/assets/blog/conteudo-para-e-commerce/66ccb54fc18e6b3010fde95c_Conte-do-para-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "conteudo-gerado-pelo-usuario-nos-canais-da-marca",
    category: "Marketing",
    date: "12.05.2025",
    title: "Conteúdo gerado pelo usuário nos canais da marca",
    description:
      "Saiba como usar o conteúdo gerado pelo usuário (UGC) nos canais da sua marca para aumentar a autenticidade, o engajamento e as conversões no e-commerce.",
    image:
      "/assets/blog/conteudo-gerado-pelo-usuario-nos-canais-da-marca/66c37d62066fa45ddee0609e_Conte-do-do-usu-rio-nos-canais-da-marca.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-fazer-um-video-review-de-produtos",
    category: "Video Commerce",
    date: "22.10.2025",
    title:
      "Como fazer um vídeo review de produtos? As 11 dicas para e-commerce",
    description:
      "Aprenda a fazer vídeo reviews de produtos que aumentam conversão e retenção no e-commerce. 11 dicas sobre roteiro, equipamento, gravação, edição e publicação.",
    image:
      "/assets/blog/como-fazer-um-video-review-de-produtos/66ba1d24a8afaac491151981_11-dicas-para-v-deo-review.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "retencao-de-cliente",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Retenção de clientes: o que é e dicas para melhorar a taxa!",
    description:
      "Entenda o que é retenção de clientes no e-commerce e aprenda estratégias práticas: programas de fidelidade, personalização, vídeos, atendimento e comunicação.",
    image:
      "/assets/blog/retencao-de-cliente/66b220c9a19de38e7a2598c5_Reten-o-de-clientes.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "ugc-e-commerce",
    category: "Marketing",
    date: "12.05.2025",
    title: "O que é UGC e como implementar no e-commerce?",
    description:
      "Entenda o que é UGC (conteúdo gerado pelo usuário) e como implementar no e-commerce para aumentar autenticidade, engajamento, SEO e conversões.",
    image:
      "/assets/blog/ugc-e-commerce/66a8146ea28bd9c550c8d719_Conte-do-UGC-no-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-ter-videos-e-fotos-de-roupas-que-vendem-mais-na-loja-on-line",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como ter vídeos e fotos de roupas que vendem mais na loja on-line",
    description:
      "23 dicas para criar vídeos e fotos de roupas que vendem mais: iluminação, modelos reais, ângulos, prova d'água, CTA e muito mais para lojas de moda online.",
    image:
      "/assets/blog/como-ter-videos-e-fotos-de-roupas-que-vendem-mais-na-loja-on-line/669fc8baa76fbcde4c2b1e91_Como-ter-v-deos-e-fotos-de-roupas-para-vender-mais-na-loja-online.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "marketing-para-e-commerce",
    category: "Marketing",
    date: "12.05.2025",
    title: "As 28 dicas de marketing para e-commerce para vender mais",
    description:
      "28 dicas de marketing para e-commerce: vídeos, SEO, redes sociais, email marketing, influenciadores, remarketing, programa de fidelidade e muito mais.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/669910d7b4d4836669c86302_29%20dicas%20para%20vender%20mais%20no%20e-commerce%20(2).avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-fazer-video-para-e-commerce",
    category: "Video Commerce",
    date: "22.10.2025",
    title: "Como fazer vídeo para e-commerce? As 14 dicas para gravar!",
    description:
      "Aprenda como fazer vídeos para e-commerce com 14 dicas práticas: depoimentos, áudio, iluminação, storytelling, CTA, A/B testing e integração com a Widde.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/669910b64575a0fb15facfbd_8%20dicas%20para%20gravar%20v%C3%ADdeos%20no%20e-commerce%20(4).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-elaborar-uma-pagina-de-produto-de-alta-conversao",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Como elaborar uma página de produto de alta conversão",
    description:
      "Aprenda os 7 pilares de uma página de produto de alta conversão: nomenclatura, imagens, variações, prova virtual, descrições, depoimentos e vídeos.",
    image:
      "/assets/blog/como-elaborar-uma-pagina-de-produto-de-alta-conversao/6672db5abd3718b21562ec32_P-gina-de-produtos-de-alta-convers-o.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "videos-para-beachwear-e-acessorios",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Vídeos para Beachwear e Acessórios",
    description:
      "Guia prático de Video Commerce para beachwear e acessórios: como filmar biquínis, maiôs, joias e bolsas para aumentar conversão e confiança na compra.",
    image:
      "/assets/blog/videos-para-beachwear-e-acessorios/6661c67e8971405057739e30_Video-Commerce-Beachwear-e-Acess-rios.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "estrategias-para-ter-bons-videos-no-seu-e-commerce",
    category: "Video Commerce",
    date: "26.02.2026",
    title: "Estratégias para ter bons vídeos no seu e-commerce",
    description:
      "Estratégias práticas para melhorar os vídeos do seu e-commerce: mostrar o que os clientes querem ver, criar identificação, iluminação e humanizar a marca.",
    image:
      "/assets/blog/estrategias-para-ter-bons-videos-no-seu-e-commerce/6654f0bc75826213c844ac6c_Tenha-bons-v-deos-no-seu-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "videos-no-e-commerce-com-influenciadores",
    category: "Video Commerce",
    date: "26.02.2026",
    title: "Vídeos no e-commerce com influenciadores",
    description:
      "Saiba como usar influenciadores e sua própria voz para criar vídeos autênticos no e-commerce. Cases práticos de como humanizar e aumentar as conversões.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/664bbb799f1adca241b97c33_V%C3%ADdeos%20no%20e-commerce%20com%20influenciadores%20(1).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "integracao-facilitada-resultados-do-video-commerce-e-interatividade",
    category: "Video Commerce",
    date: "15.05.2025",
    title:
      "Integração facilitada, resultados do Video Commerce e interatividade",
    description:
      "Conheça a integração facilitada da Widde, os resultados mensuráveis do Video Commerce e como a interatividade dos vídeos transforma a experiência de compra.",
    image:
      "/assets/blog/integracao-facilitada-resultados-do-video-commerce-e-interatividade/6644f6b6a5060320c7f29dff_Integra-o-facilitada-resultados-do-Video-Commerce-e-interatividade.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "erros-comuns-nos-videos-para-e-commerce",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Erros comuns nos vídeos para e-commerce",
    description:
      "Conheça os erros mais comuns nos vídeos de e-commerce: mostrar pouco do produto, não capturar a atenção e não responder as dúvidas dos clientes.",
    image:
      "/assets/blog/erros-comuns-nos-videos-para-e-commerce/663be2502198d8dcc35223b5_Erros-comuns-nos-v-deos-para-e-commerce.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "dicas-para-gravar-seus-videos-sozinho-para-o-e-commerce",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Dicas para gravar seus vídeos sozinho para o e-commerce",
    description:
      "Aprenda a gravar vídeos para o e-commerce sozinho com dicas de planejamento, iluminação, equipamento, edição e legendas para criar conteúdo de qualidade.",
    image:
      "/assets/blog/dicas-para-gravar-seus-videos-sozinho-para-o-e-commerce/663bb5ea97cb93cf47bc9bae_Dicas-para-gravar-seus-v-deos-sozinho-para-o-e-commerce.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "como-fazer-videos-que-vendem-para-lojas-de-moda",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Como fazer vídeos que vendem para lojas de Moda",
    description:
      "Guia prático para criar vídeos que vendem em lojas de moda online: como abordar dúvidas dos clientes, humanizar o conteúdo e mostrar diferentes tipos de corpo.",
    image:
      "/assets/blog/como-fazer-videos-que-vendem-para-lojas-de-moda/663151f051c5468bf97512fb_Como-fazer-v-deos-que-vendem-para-lojas-de-Moda.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "video-commerce-para-vender-sapatos-e-bolsas",
    category: "Video Commerce",
    date: "13.05.2025",
    title: "Video Commerce para vender Sapatos e Bolsas",
    description:
      "Guia de Video Commerce para sapatos e bolsas: como filmar conforto, caimento, capacidade e detalhes que eliminam dúvidas e aumentam conversão no e-commerce.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6632346488db562548ee081c_sapato-bolsas%20(1).avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "vtex-day-2024-tendencias-da-producao-de-conteudo-retencao-e-atencao",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title:
      "Vtex Day 2024: Tendências da produção de conteúdo, retenção e atenção",
    description:
      "Insights do Vtex Day 2024: vídeo representa 82% do consumo de internet, UGC é tendência, atenção humana cai para 8 segundos e como adaptar seu e-commerce.",
    image:
      "/assets/blog/vtex-day-2024-tendencias-da-producao-de-conteudo-retencao-e-atencao/6627f39b8fd5d9dde68760f1_vtex-day.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "dia-do-frete-gratis-como-vender-mais-com-videos-na-experiencia-do-cliente",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title:
      "Dia do Frete Grátis: Como vender mais com vídeos na experiência do cliente",
    description:
      "Estratégias para o Dia do Frete Grátis: planejamento, comunicação com vídeos, clareza sobre os produtos e como documentar resultados para crescer mais.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6627d4f55f9e5a130585cb2c_frete%20(1).avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "o-guia-definitivo-do-video-commerce-em-2024",
    category: "Video Commerce",
    date: "15.05.2025",
    title: "O Guia definitivo do Video Commerce em 2024",
    description:
      "O guia definitivo do Video Commerce em 2024: o que é, benefícios, como funciona, cases de sucesso, melhores práticas e como medir resultados com a Widde.",
    image:
      "/assets/blog/o-guia-definitivo-do-video-commerce-em-2024/66202315047334ba57bd646f_guia.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "case-lv-store",
    category: "Cases",
    date: "12.05.2025",
    title: "Case LV Store - As redes sociais dentro do e-commerce",
    description:
      "Como a LV Store usou Video Commerce para aumentar 2,5x a conversão e 300% o tempo de retenção em uma semana, integrando conteúdo das redes sociais no e-commerce.",
    image:
      "/assets/cases/lv-store/682f79295c6f9c8a6fa9eeaa_lvstore.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "case-not-me-shoes",
    category: "Cases",
    date: "28.05.2025",
    title: "Case Not-me Shoes - Video Commerce em Calçados",
    description:
      "Como a Not-me Shoes aumentou 188% a conversão e gerou quase R$2 milhões com Video Commerce em apenas 8 meses usando a plataforma Widde.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/660202bab280f05b2e3e3221_not-me-shoes-case-2%20(1).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "case-jj-modas",
    category: "Cases",
    date: "12.05.2025",
    title: "Case JJ Modas - As donas da loja como influenciadoras",
    description:
      "Como a JJ Modas aumentou 300% a conversão e 354% a retenção em 3 meses usando as próprias fundadoras como influenciadoras no Video Commerce com a Widde.",
    image:
      "/assets/blog/case-jj-modas/657509d47f832e848a0359af_case-jj.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "5-dicas-valiosas-de-lojas-que-vendem-mais-no-ecommerce-com-videos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "5 Dicas valiosas de lojas que vendem mais no Ecommerce com Vídeos",
    description:
      "5 dicas práticas de lojistas reais que vendem mais com vídeos no e-commerce: como se comunicar, simplificar a produção, organizar demonstrações e posicionar os vídeos.",
    image:
      "/assets/blog/5-dicas-valiosas-de-lojas-que-vendem-mais-no-ecommerce-com-videos/655d0641db995befe3302f36_post-4-1.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "como-configurar-o-google-analytics-4-no-seu-ecommerce",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Como configurar o Google Analytics 4 no seu ecommerce",
    description:
      "Guia de configuração do Google Analytics 4 no e-commerce para Nuvemshop, Shopify, VTEX, Tray, Loja Integrada e mais, com integração à Widde para medir Video Commerce.",
    image:
      "/assets/blog/como-configurar-o-google-analytics-4-no-seu-ecommerce/655d01aa066b57aefdb5e75c_ga4.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "widdetalks-sara-lanzini",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Widde Talks com Sara Lanzini",
    description:
      "Widde Talks com Sara Lanzini, cofundadora da Vinci Shoes: estratégias de inovação em e-commerce, modelo sem estoque, experiência de unboxing e Video Commerce.",
    image:
      "/assets/blog/widdetalks-sara-lanzini/655d00ebfac62d0e3c5535a0_LIVE-SARA.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "widdetalks-leticia-vaz",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Widde Talks com Letícia Vaz",
    description:
      "Widde Talks com Letícia Vaz, fundadora da LV Store: estratégias de e-commerce, Video Commerce, conteúdo, tráfego pago e como crescer vendas online.",
    image:
      "/assets/blog/widdetalks-leticia-vaz/655d009e8a48dfd0cadfe99f_LIVE-LETICIA-1.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "construcao-de-marca-estrategias-de-venda-e-ecommerce",
    category: "Tendências e-commerce",
    date: "12.05.2025",
    title: "Construção de marca, estratégias de venda e e-commerce",
    description:
      "Widde Talks com Luísa Morato, fundadora da Camys Brand: posicionamento de marca, construção de comunidade, Video Commerce e controle de estoque no e-commerce.",
    image:
      "/assets/blog/construcao-de-marca-estrategias-de-venda-e-ecommerce/655d001cc986ee07dd37872d_LIVE-LUISA-2.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "entenda-se-seus-videos-estao-sendo-efetivos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Entenda se seus vídeos estão sendo efetivos",
    description:
      "Saiba como avaliar se seus vídeos de e-commerce estão sendo efetivos: o que funciona, o que melhorar e como criar conexão real com os clientes.",
    image:
      "/assets/blog/entenda-se-seus-videos-estao-sendo-efetivos/655cff93abf528f373d104c7_post-5-1.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "por-que-e-importante-ter-videos-dos-produtos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Por que é importante ter vídeos dos produtos?",
    description:
      "Entenda por que ter vídeos dos produtos é fundamental para o e-commerce: conexão emocional, personalidade de marca e como começar sem grandes produções.",
    image:
      "/assets/blog/por-que-e-importante-ter-videos-dos-produtos/655cfeb2afd625fe728b4aaf_post-4.avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "3-dicas-para-conquistar-clientes-com-seus-videos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "3 dicas para conquistar clientes com seus vídeos",
    description:
      "3 dicas práticas para conquistar clientes com vídeos no e-commerce: esqueça as grandes produções, mostre todos os detalhes e humanize com opiniões reais.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/655cfde65a0cffbf09468026_post-3%20(1)-1.avif",
    imageW: 363,
    imageH: 234,
  },
  {
    slug: "entenda-como-extrair-estrategias-dados-feedbacks-dos-videos",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "Entenda como extrair estratégias dos dados e feedbacks dos vídeos",
    description:
      "Aprenda a extrair estratégias dos dados e feedbacks dos vídeos no e-commerce: monitorar visualizações, agir nos comentários e analisar métricas de performance.",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/655cfcc7d46f2bde130ba0fc_post-2%20(1).avif",
    imageW: 361,
    imageH: 233,
  },
  {
    slug: "principais-dicas-para-alavancar-suas-vendas-com-videos-2024",
    category: "Video Commerce",
    date: "12.05.2025",
    title: "As principais dicas para alavancar suas vendas com vídeos em 2024!",
    description:
      "5 dicas principais para alavancar vendas com vídeos no e-commerce em 2024: planejar tópicos, múltiplos ângulos, feedbacks, interatividade e vídeos curtos.",
    image:
      "/assets/blog/principais-dicas-para-alavancar-suas-vendas-com-videos-2024/65b28b0f5b5a0f4becfbbcbd_2024.avif",
    imageW: 363,
    imageH: 234,
  },
];

const CATEGORIES = [
  "Ver Todos",
  "Dados no E-commerce",
  "Tendências e-commerce",
  "Video Commerce",
  "Marketing",
  "Cases",
];

export default function BlogPage() {
  useLenis();
  useRevealOnScroll();
  const [activeCategory, setActiveCategory] = useState("Ver Todos");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [mobileLimit, setMobileLimit] = useState(6);

  useEffect(() => {
    const update = () => setMobileLimit(window.innerWidth < 768 ? 2 : 6);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat =
      activeCategory === "Ver Todos" ||
      p.category.toLowerCase() === activeCategory.toLowerCase();
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const visible = showAll ? filtered : filtered.slice(0, mobileLimit);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-surface pt-16 pb-0 md:pt-20 lg:pt-24">
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
            <h1
              data-reveal
              className="font-normal text-black text-center leading-[1.15]"
              style={{ fontSize: "3rem", marginBottom: "12px" }}
            >
              Blog de Video Commerce
            </h1>
            <h2
              data-reveal
              className="font-normal text-center text-[#888] mb-8"
              style={{ fontSize: "1.05rem" }}
            >
              Dicas, tendências e estratégias de Video Commerce, Live Commerce e e-commerce para vender mais.
            </h2>

            {/* Featured post card — two halves, no gap */}
            <a
              data-reveal
              href={`/blog/${featuredPost.slug}`}
              className="no-underline flex flex-col md:flex-row overflow-hidden rounded-2xl"
              style={{ minHeight: 520 }}
            >
              {/* Left — #f2f2f2 content */}
              <div
                className="flex flex-col justify-center px-10 py-12 md:py-16"
                style={{ flex: "0 0 50%", backgroundColor: "#e5e5e5" }}
              >
                <span
                  className="inline-block border text-xs font-normal px-3 py-1 rounded-full mb-5 w-fit"
                  style={{ color: "#2667f8", borderColor: "#2667f8" }}
                >
                  Em Destaque
                </span>
                <h2
                  className="font-normal text-black leading-[1.2] mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
                >
                  {featuredPost.title}
                </h2>
                <span className="inline-flex items-center justify-center bg-brand text-white font-bold text-base px-7 py-[13px] rounded-full w-fit">
                  Saiba mais
                </span>
              </div>

              {/* Right — blurred bg + centered image with padding */}
              <div
                className="relative overflow-hidden group"
                style={{ flex: "0 0 50%", minHeight: 320 }}
              >
                {/* Blurred background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  style={{
                    backgroundImage: `url("${featuredPost.image}")`,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "blur(10px)",
                    transform: "scale(1.05)",
                  }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#0000004d", zIndex: 1 }}
                />
                {/* Padded container for the main image */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ padding: "2rem", zIndex: 2 }}
                >
                  <img
                    loading="lazy"
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    style={{
                      aspectRatio: "16 / 9",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      borderRadius: "1rem",
                      width: "100%",
                      position: "relative",
                    }}
                  />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* All posts */}
        <section className="bg-surface pb-20 pt-14 md:pt-16 lg:pt-20">
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto ">
            <h2
              data-reveal
              className="text-black text-center mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                marginTop: "20px",
              }}
            >
              Veja mais conteúdos
            </h2>
            <p
              data-reveal
              className="text-[#666] text-center mb-10"
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              Artigos com insights, dicas e tendências sobre e-commerce para
              ajudar você a vender mais e se destacar nesse mercado.
            </p>

            {/* Filters */}
            <div data-reveal className="flex flex-wrap items-center gap-2 md:gap-3 mb-10 md:mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`text-sm font-semibold px-4 py-[7px] rounded-full border transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-black/20 hover:border-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <input
                type="text"
                placeholder="Faça sua busca"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                }}
                className="ml-auto text-sm border border-black/20 rounded-full px-4 py-[7px] outline-none focus:border-black transition-colors bg-transparent w-full md:w-auto md:min-w-[220px]"
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {visible.map((post) => (
                <article
                  key={post.slug}
                  data-reveal
                  className="flex flex-col md:bg-transparent md:rounded-none bg-[#e5e5e5] rounded-2xl overflow-hidden"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="block rounded-xl overflow-hidden no-underline mb-0 md:mb-4 aspect-[361/233] relative"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      width={post.imageW}
                      height={post.imageH}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </a>
                  <div className="flex flex-col flex-1 p-4 md:p-0">
                    <p className="text-xs text-[#888] mb-2">{post.date}</p>
                    <h3 className="text-base md:text-lg font-bold text-black leading-[1.3] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#666] leading-[1.6] mb-4 flex-1">
                      {post.description}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-black no-underline hover:text-brand transition-colors"
                    >
                      Saiba mais →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {!showAll && filtered.length > mobileLimit && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold text-base px-8 py-4 rounded-full cursor-pointer border-none hover:opacity-90 transition-opacity"
                >
                  Ver todos os posts
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-[#888] py-20 text-lg">
                Nenhum post encontrado.
              </p>
            )}
          </div>
        </section>
      </main>
      <VCCta />
      <Newsletter />
      <Footer />
    </>
  );
}
