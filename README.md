# Alitu Interview Task

Welcome! Here's a simple and relatively bare React app where you can take some initiative to add some more features to the app.

Feel free to add any node modules and tools that help you get the job done.

## Getting started

1. Fork this repo
2. Clone it to your machine
3. Run `yarn install`
4. Run `yarn start`
5. Get creating!

## [Mock Service Worker (msw)](https://mswjs.io/)

This repo is frontend only and does not rely on any external servers. You can see where the data for api calls is mocked in the `handlers.ts` file.

If your work requires some more api calls/CRUD operations that are not included, feel free to add as many handlers as you like. You can find the documentation [here](https://mswjs.io/docs/getting-started/mocks/rest-api) for mocking REST api calls.

## Tests

This repository currently includes one test using Jest and React Testing Library. These tests also rely on the MSW (Mock
Service Worker). You can see the setup for the service worker in the `setupTests.ts` file.

Run `yarn test` to run them. Extra points for including more tests in your work!

## TypeScript

If you are unfamiliar with TypeScript, you're welcome to change the file extension to `.js` and remove any TS code.

## [Chakra UI](https://chakra-ui.com/)

We have included this package to help save you time. There are a lot of great components in there, so you don't have to spend much time with custom buttons/modals/inputs etc.
