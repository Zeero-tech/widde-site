---
title: "Bem-vindo ao Blog da Widde"
description: "Este é um post de exemplo que demonstra como criar conteúdo no novo blog estático em Markdown."
category: "Novidades"
publishedAt: 2026-04-24
author: "Widde"
cover: "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/69a5dc73c9b53384264daa9a_Capa%20do%20blog%20report.png"
coverAlt: "Capa do post"
draft: false
---

Este é um post de **exemplo** para validar o novo blog construído com Astro. Páginas como esta são geradas estaticamente em HTML — elas carregam sem JavaScript, o que é ideal para SEO.

## Como criar um novo post

Para publicar um artigo, basta criar um arquivo `.md` dentro de `src/content/blog/`. O nome do arquivo vira o slug da URL.

Por exemplo, `src/content/blog/como-vender-mais-com-video.md` resulta em `https://widde.io/blog/como-vender-mais-com-video`.

### Frontmatter obrigatório

Todo post precisa começar com este bloco no topo:

```yaml
---
title: "Título do post"
description: "Resumo curto que aparece nos cards e nas meta tags."
category: "Categoria"
publishedAt: 2026-04-24
cover: "https://exemplo.com/imagem.jpg"
---
```

### Campos opcionais

- `coverAlt`: texto alternativo da imagem de capa
- `updatedAt`: data de atualização
- `author`: nome do autor (padrão: Widde)
- `draft`: defina como `true` para esconder o post

## O que dá pra usar dentro do post

Você escreve em **Markdown** normal:

- Listas como esta
- Links: [acesse a Widde](https://widde.io)
- Imagens: `![alt](url)`
- Código `inline` e blocos de código
- Citações:

> Vídeo é a linguagem nativa da decisão de compra moderna.

## E aí?

Salvou o arquivo, faz commit, faz push — e o post está no ar.
