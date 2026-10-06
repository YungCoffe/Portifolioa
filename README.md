# Portfolio pessoal

Site pessoal simples, responsivo e com tema claro/escuro.

## Como abrir localmente

1. Baixe e extraia o arquivo `.zip`.
2. Abra a pasta `portfolio`.
3. Abra o arquivo `index.html` no navegador.

## Como trocar a foto

Coloque sua imagem em:

```txt
assets/profile.jpg
```

Se quiser usar outro nome de arquivo, altere no `index.html` o caminho:

```html
<img src="assets/profile.jpg" alt="Foto de perfil de coffe" class="profile-photo" />
```

## Como editar nome, cargo, bio e localização

No `index.html`, altere:

- nome em `<h1>coffe</h1>`
- cargo em `<p class="role">dev em desenvolvimento</p>`
- bio em `<p class="bio">cafe e programação melhor combinação</p>`
- localização em `<p class="eyebrow">Brasil · São Paulo</p>`

## Como editar tecnologias

As tecnologias estão na seção `#tecnologias` no `index.html`.
Cada item é um `<article class="tech-card">...</article>`.

## Como editar links

O link do Instagram aparece nos botões:

```html
<a href="https://www.instagram.com/joao.xyl" ...>
```

Troque pela URL desejada.

## Como editar cores

As cores ficam em `css/style.css` dentro de `:root` e `[data-theme="light"]`.

## Recursos externos carregados por CDN

- Google Fonts: Inter

## Observação

Este projeto não usa contador de visitas.
