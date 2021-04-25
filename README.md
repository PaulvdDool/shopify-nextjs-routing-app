# Shopify NextJs Routing App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
Small example Shopify embedded app with React and NextJS and routing that is visible in the top level domain.

## Shopify CLI
The Shopify CLI was used to create the boiler template.

## JWT: Json Web Token
Uses JWT session token for authentication.

## RoutePropagator
Has multiple routes, both static and dynamic and nested, and uses the RoutePropagator to expose the routing in the top level domain.

---

## Installation
The following steps require a Shopify Partner account and access to a dev store.
1. Clone this repo to a local directory.
2. Run `npm install` to install all dependencies.
3. Run `shopify serve` or `npm run serve` (as seen in the package.json file) to start the ngrok tunnel on which the app will run.
4. Fill in the name of the Shopify dev store when required.
5. Follow the link in the command tool to install the app on your dev store.
6. Visit your dev store and launch the app.

## Credits
**Shopify CLI** by [Shopify](https://shopify.dev/tools/cli)  
**CustomLink Component** by [Leigh Barnes](https://github.com/leighs-hammer/shopify-app-boilerplate-nextjs-redux-nosql/blob/master/components/CustomLink.tsx)   
**RoutePropagator** as created by [Gil Greenberg](https://github.com/Shopify/shopify-app-node/issues/148)
