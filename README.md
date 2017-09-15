# Readable App

[Project overview](https://classroom.udacity.com/nanodegrees/nd019/parts/7b1b9b53-cd0c-49c9-ae6d-7d03d020d672/modules/66bc9ba3-7fda-4d49-b032-d885da838499/lessons/7367dda1-ee03-4032-8f2d-16e238ce7c04/concepts/701c627c-d73a-4b31-bd58-024ada7669e2)
| [Rubric](https://review.udacity.com/#!/rubrics/1017/view)

## Installing and running the app

1. Clone the repo
````
git clone https://github.com/ldgarcia/reactnd-project-readable
cd reactnd-project-readable
````

2. Install and start the API server:
````
cd api-server
npm install
node server
````

3. In another terminal window, install and start the frontend:
````
cd frontend
npm install
npm start
````

## Future improvements

### State tree design
I think it would be better to have the tree as shown in figure B in order to simplify the update logic in the reducers. Originally, I gave preference to the design in figure A, because it allowed me to update all necessary state for an action in a single reducer (i.e. update in a single place comments state and ui state when adding a new comment) and also because it was _apparently simpler_ for imports and for binding the action creators (i.e. `bindActionCreators(postsActionCreators, dispatch)` instead of `bindActionCreators({...postsActionCreators, ...formsActionCreators, ...uiActionCreators }, dispatch)`).

Figure A:
````
{
  categories: [],
  comments: {
    comments: [],
    forms: {},
    ui: {}
  }
}
````

Figure B:
````
{
  categories: [],
  posts: [],
  comments: [],
  ui: {},
  forms: {}
}
````

### Redirections
Redirect invalid paths for the category and post views either to the root view or to a custom 404 view.

## Bibliography

* [Async Action Creators](http://redux.js.org/docs/recipes/ReducingBoilerplate.html#async-action-creators) - The pattern (request, success, failure) for defining actions for async requests was learned here.

* [Presentational and Container Components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components) - The pattern of separating components into _presentational components_ and _containers_ was learned here.

* [Redux: Refactoring the entry point](https://egghead.io/lessons/javascript-redux-refactoring-the-entry-point) - The pattern of having a function to generate the store was learned here. Also the idea of having a `Root` component to simplify `index.js`.

* [Blocked Updates](https://reacttraining.com/react-router/core/guides/redux-integration/blocked-updates) - `NavLink` components weren't updating, so I had to wrap in various container components with `withRouter`.

* [Programmatically navigate using react router](https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router) - Learned how to use the `history` api.
