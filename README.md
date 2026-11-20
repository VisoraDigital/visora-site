# VISORA DIGITAL — Site

Site institucional da VISORA DIGITAL: Perfil da Empresa no Google, avaliações com QR Code, automação de WhatsApp e criação de sites.

É um site **estático** (HTML, CSS e JavaScript puros). Não precisa instalar nada nem fazer build, e todos os caminhos são relativos, então funciona em qualquer hospedagem de arquivos estáticos (GitHub Pages e similares).

## Estrutura

```
visora-site/
├── index.html              página principal
├── privacidade.html        Política de Privacidade (inclui canal LGPD)
├── termos.html             Termos de Uso
├── 404.html                página de erro
├── robots.txt
├── .nojekyll               evita processamento do Jekyll no GitHub Pages
├── .gitignore
└── assets/
    ├── css/style.css       estilos
    ├── js/main.js          animações e formulário
    └── img/
        ├── visora-mark.svg símbolo da Visora
        └── favicon.svg     ícone da aba
```

## Ver no seu computador (Windows + VS Code)

1. Abra a pasta `visora-site` no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server** (Ctrl+Shift+X e busque por "Live Server").
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

## Enviar para o GitHub

Crie um repositório vazio no GitHub (ex.: `visora-site`). Depois, no terminal do VS Code (Ctrl+'), dentro da pasta do projeto:

```
git init
git add .
git commit -m "Primeira versão do site Visora"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/visora-site.git
git push -u origin main
```

Para publicar no GitHub Pages: no repositório, vá em **Settings > Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.

## Onde editar

- **WhatsApp:** número na primeira linha de `assets/js/main.js` (`var N="5549988874571"`).
- **Instagram:** link em `index.html`, na seção "Seu próximo passo".
- **Textos:** direto em `index.html`.
- **Cores:** variáveis no topo de `assets/css/style.css` (`:root`).

## Regras do site

- O WhatsApp só é aberto pelo formulário "Vamos conversar sobre seu projeto?".
- Nenhum dado é salvo: o formulário apenas monta a mensagem no aparelho do visitante.

## Páginas legais

- Os links para `privacidade.html` e `termos.html` ficam sempre visíveis no rodapé.
- O canal oficial da LGPD hoje é o WhatsApp da Visora (seção 6 de `privacidade.html`). Se a Visora criar um e-mail de privacidade ou nomear um encarregado (DPO), adicione no comentário indicado nessa seção.
- Recomenda-se revisão dos textos por um profissional jurídico.
