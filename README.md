# JENG Engine
Flexible graphics engine written on TypeScript.

## Samples
- Hello World [Code](https://github.com/AntonovSergey2211/jeng/blob/master/samples/hello-world/src/index.ts) / [Build](https://antonovsergey2211.github.io/jeng/samples/hello-world/build/)

- Image simple [Code](https://github.com/AntonovSergey2211/jeng/blob/master/samples/image-simple/src/index.ts) / [Build](https://antonovsergey2211.github.io/jeng/samples/image-simple/build/)

- Image color sample [Code](https://github.com/AntonovSergey2211/jeng/blob/master/samples/image-color/src/index.ts) / [Build](https://antonovsergey2211.github.io/jeng/samples/image-color/build/)

- Image transform sample [Code](https://github.com/AntonovSergey2211/jeng/blob/master/samples/image-transform/src/index.ts) / [Build](https://antonovsergey2211.github.io/jeng/samples/image-transform/build/)

## Usage
Install
```shell
npm i @jeng/canvas-engine @jeng/text
```
Import
```typescript
import { CanvasTextExtension, Text } from '@jeng/text';
import { CanvasEngine } from '@jeng/canvas-engine';
```
Init engine
```typescript
// create engine
const engine = new CanvasEngine();
// add text extension
CanvasTextExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();

// setup page
document.body.style.margin = '0';
document.body.style.padding = '0';
// add engine view to page
document.body.appendChild(engine.platform.view);
```
Create application
```typescript
engine.root = { type: 'text', text: 'Hello World!' } as Text;
```

## Development
Build all packages
```shell
yarn build
```

Test all packages
```shell
yarn test`
```

Lint all packages
```shell
yarn lint
```

Clean all packages
```shell
yarn clean
```

## CI / CD
[![jeng](https://circleci.com/gh/AntonovSergey2211/jeng.svg?style=shield)](https://app.circleci.com/pipelines/github/AntonovSergey2211/jeng)
