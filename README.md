# Team Neon Riot

http://outrun.2017.reactriot.com

## Neon Riot

@TODO

## Team Members

@TODO

## Dev

Dev:

```sh
yarn dev
```

Build for production:

```sh
yarn build
```

Run the server on production:

```sh
yarn start
```

## Component Structure

```
├── components
│   ├── effects
│   ├── bg
│   ├── horizon
│   ├── floor
│   ├── secondary
│   ├── primary
│   └── ui
│       ├── Button
│       └── SeedInput
└── pages
     └── index.js
```

The components are listed in layered order.

`bg` will be rendered on the lowest layer.

`horizon` will be rendered above bg, etc.

