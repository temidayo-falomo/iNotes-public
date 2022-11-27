# iNotes Mini

iNotes-mini is a Fullstack PWA re-design of Apple's iNotes i built using ReactJs, MongoDb, NodeJs & Expressjs.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Demo

Link to Live Site

https://inotes-mini.netlify.app

## Tech Stack

**Client:** ReactJs, Styled Components, AOS, React-Router

**Server:** Firebase, Express, Node, MongoDb

## Documentation

[Documentation]()
I, on most occassions atempt to write good code,and make it as clear as possible what i am attempting to do. I realize that that might not be possible everytime, especially with handling and keeping track of global states. Here are some important things to note while browsing through this code:

1. I focused on the "cards" view first, i.e the initial view that gets shown when the page is rendered. The view i've referred to as "row" multiple times through the code is the "display downwards" view, which in retrospect would have been better to name "column" (To be fair, it's a downwards row).

2. Some of the way i handled the api request functions are a bit... unconventional, e.g, the api request to save notes is only made when a user makes some specific actions(i.e Interact with something else) as opposed to being made onChange.

3. I prefer doing display logic inside my jsx as much as possible.

4. Monitor Local Storage to understand states saved.

## Feedback

If you have any feedback, please reach out to me at temmideee@gmail.com or send me a DM on Twitter!

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
