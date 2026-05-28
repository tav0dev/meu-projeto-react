# Meu Projeto React

Este é um projeto React desenvolvido como parte das atividades da disciplina de Programação Web (Aula 07). Ele contempla funcionalidades como To-Do List, Contador de Cliques, Jogo da Velha, Calculadora e Buscador de CEP.

## 🎨 Escolhas de Estilização e Elementos

A interface do projeto foi estilizada utilizando o **Tailwind CSS** com uma abordagem estética temática inspirada no estilo *Cyberpunk/Neo-brutalista* (foco em contrastes altos, elementos tecnológicos e referência visual a obras como *Akira*).

### 🛠️ Configurações do Tailwind (`tailwind.config.js`)
Para alcançar esse visual, o tema base do Tailwind foi estendido com as seguintes customizações:
- **Cores (Tema):** Foram criadas variáveis de cores exclusivas como o `akiraRed` (`#E22B29`) e o `akiraBlue` (`#3B82F6`), além de padronizar o `background` para um tom bem escuro (`#101010`).
- **Tipografia:** Uso da fonte monoespaçada **Space Mono** (`font-mono`) para fortalecer a identidade de interface sistêmica, e **Inter** (`font-sans`) para legibilidade.
- **Sombras Neo-brutalistas:** Sombras sólidas e sem desfoque (ex: `neo`, `neo-hover`, `neo-cyan`), que criam uma sensação de botões e cards saltando rígidos para fora da tela.

### 🎭 Efeitos Customizados (`index.css`)
Regras utilitárias personalizadas foram injetadas para construir a identidade visual complexa que o Tailwind padrão não cobriria:
- **Padrão de Fundo (Grid):** A tag `body` recebeu `radial-gradient` e `linear-gradient` para simular uma malha/grid sutil ao fundo.
- **Efeito Glitch (`.text-glitch`):** Textos com sombras duplas (`text-shadow` vermelho e ciano) e animações contínuas de `clip-path` para simular distorções visuais de hologramas.
- **Containers Chanfrados (`.neo-container`):** Uso de `clip-path: polygon(...)` para "cortar" as pontas de caixas e modais, saindo do formato puramente retangular.
- **Faixas de Sinalização (`.bg-caution` e `.bg-caution-red`):** Texturas listradas (preto e branco ou vermelho e escuro) remetendo a faixas de perigo industrial.
- **Scrollbar Personalizado:** A classe `.akira-scrollbar` sobrescreve a barra de rolagem do navegador para combinar com as cores `akiraRed` e fundo escuro.

Essa escolha de design (em contraste com componentes prontos, como Material UI ou Bootstrap) permitiu criar uma atmosfera imersiva, moderna e de alto impacto visual.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
