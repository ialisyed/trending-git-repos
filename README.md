# Trending Git Repos List

## Tech Stack

This project uses

- [Typescript](https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [React-Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Cypress](https://www.cypress.io/) for end to end testing
- [Styled Components](https://styled-components.com/)

## Folder description

The project is using folder architecture ["Feature folders" / "Domain"-style](https://redux.js.org/faq/code-structure).
Apart from that:

- All the UI strings are moved to `/src/locale` folder

- All generic components are under the `/src/components` folder.

- All the feature related components and files are in `/src/features/[feature]` folder.

- Folder `/src/utils` contains utility files/functions used in the projecct

- `/src/app/hooks` contains all the custom hooks used in project

- `/src/app/store` contains all the generic store related logic

- Folder `/src/layout` contains components for the overall layout

- Folder `/src/interface` contains generic interfaces for project

- Folder `/src/interface` contains generic interfaces for project

- Folder `/src/services/api` contains API layer communication files

## Code

- All the logical functions in project are kept separate from UI/Components files, and can be tested separately.

- Typescript is used to safely pass props to the components.

- Default performance optimization hooks are used to reduce multiple renders

## UI implemented

## Before running the project, install the dependencies

#### `$ yarn`

## Available Scripts

#### `$ yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Tests

### To run end to end tests

#### `yarn cypress:open`

Launches the cypress test runner in the interactive watch mode.

#### `yarn cypress:run`

Run the cypress tests in the terminal

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Hooks, check out the [Hooks documentation](https://reactjs.org/docs/hooks-intro.html)

To learn Redux-toolkit, check out the [Redux-Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)

To learn Typescript, check out the [Typescript Documentation](https://www.typescriptlang.org/docs/)

To learn Cypress, check out the [Cypress Documentation](https://docs.cypress.io/)

To learn Styled Components, check out the [Styled Components Documentation](https://styled-components.com/docs)
