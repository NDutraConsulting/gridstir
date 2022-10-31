# Architecture Decision Records

## Outline the frontend Architecture design

* [x] MVVM: (Model - View - ViewModel) -> Chosen for TDD.

    * Why:
        * The MVVM pattern is chosen to enable unit testing and decoupling.\
        The model, view and view-model layers can each be tested to automatically\ verify correctness of the system.  This also simplifies refactoring and\ enables overlapping integration testing.
        * Note: One should ONLY extend the finalized model\ 
        and view-model layers  (don't change the existing code).\
        It is important to follow the open/closed principal from\
        SOLID because it reduces regression testing.\

    * Layer Roles: 
        * Model: The model controls backend connections and local data storage.
        * View-Model: The view-model controls the business logic for\
          specific views or components as needed.
        * View: The view layer contains layout and selects styling logic\ 
          from a local or global source as needed.
          
    * [External Resource](https://paulallies.medium.com/clean-mvvm-with-react-and-react-hooks-ebc37b22542f)

* [ ] MVVM Framework encapsulation, extration, and package management

   * Why: 
      * We need to extract the MVVM from the Strings and Brand style to support many different business customer brands.

* [ ] Styling:

    * Design system follows: Atoms -> Elements -> Molecules -> Organisms 
        * Why: To enable fast A/B testing and white label support.

    * Three layers
        * Global (Atoms): Color Scheme, Button Size, Input Size, Fonts...
            * Why: Allows for fast color pallet and style changes.
        * Workflow View (Organisms): Overriding styles that are specific to an entire Workflow view.
            * Why: Allows for workflow specific sizing and styling.
        * Component Layer (Molecules): When a component requires layout definitions.
            * Why: Creates ready to go reusable components that are easy to modify.


* [x] Components:

    * Navigation Components:
        * These components should follow Liskov Substitution Principle so that we can easily change the navigation style.

    * Shared Components (Molecules):
        * This includes components that may be shared by any view .

    * Workflow view components (Organism-Molecules): These components are specific to a workflow layer (AKA Organism).

* [x] Components:

    * Shared Components (Molecules):
        * This includes components that may be shared by any view.

    * Workflow view components (Organism-Molecules): 
        * These components are specific to a workflow layer (AKA Organism).


* [x] Pure JS Event Bridge:

    * Why:
        * So that we can decouple code and reduce dependecies. 
    * Alternative: Redux (https://redux.js.org/)
