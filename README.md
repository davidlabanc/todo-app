# Homework
### `task #2`
app.tsx file - the issue in this file is that the useEffect doesn't have any dependencies so it runs every time a component changes state. Since in the useEffect there is a for cycle with setState, this useEffect will run every time we get to the new iteration of the for cycle and it will call API every time too. Also setState doesn't have to be in for cycle to update component. After every iteration of the for cycle the setState would create a new array which would cause rerender.

### `task #6`
Since I used react-router-dom package, it eliminated the need of using shouldComponentUpdate life cycle because in this aplication, Todo component is not updated on the page/view where it is used/shown. 

The shouldComponentUpdate would work as expected if the props were not derived data types. If props are objects and we used === comparison, it would only chceck if objects are the same instances. To get better comparison we could use lodash isEqual function or stringify props and compare strings. In functional component we could use react memo hook.

### `task #7`
In this case I don't really need any lifecycle methods because of structure of the aplication so I choose to use functional component.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
