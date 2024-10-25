# Loem Heng Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Watching for Changes

Run `npm run watch` to build and watch for file changes in development mode.

## Styling

This project uses SCSS for styling. SCSS files are compiled automatically within the Angular build process.

## Running Unit Tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Linting

Run `npm run lint` to analyze code and catch any style or syntax errors.

## Variable Naming Convention

To maintain consistency and clarity throughout the codebase, all variable declarations must adhere to the following naming convention:

- **Format:** `lh_variableName`
- **Example:**
  - Data Variable: `lh_userName`
  - Style Variable: `lh_primaryColor`

This convention applies to all types of variable declarations, including style, data, and any other variables used within the project.

## Angular Coding Rules

1. **Component Structure**

   - Each component should have its own folder containing the `.ts`, `.html`, and `.scss` files.
   - Use a consistent naming pattern for files: `component-name.component.ts`, `component-name.component.html`, `component-name.component.scss`.

2. **Services**

   - Use Angular services for data management and business logic.
   - Name services using the suffix `Service`: e.g., `user.service.ts`.

3. **Modules**

   - Group related components, directives, and pipes into feature modules.
   - Use `SharedModule` for shared components and services.

4. **State Management**

   - Use a centralized state management approach (like NgRx or Akita) for managing complex state.
   - Avoid directly manipulating the state; always use actions and reducers.

5. **Observables and Subscriptions**

   - Use Observables for asynchronous data streams and to handle events.
   - Unsubscribe from Observables in `ngOnDestroy` to prevent memory leaks.

6. **Template Syntax**

   - Use Angular’s built-in directives like `*ngIf`, `*ngFor`, and `*ngSwitch` for conditional rendering.
   - Keep template logic simple; use component methods for complex logic.

7. **Styles**

   - Use SCSS for styles and follow a BEM (Block Element Modifier) naming convention.
   - Avoid using global styles; encapsulate styles within components.

8. **Code Formatting**

   - Use Prettier or ESLint for code formatting and linting.
   - Follow the Angular style guide for consistent coding practices.

9. **Documentation**
   - Document components, services, and complex logic using JSDoc or similar commenting styles.
   - Maintain an updated `README.md` for overall project documentation.

## Folder Structure

app
 ├── core # Contains constants, guards, interceptors, pipes, and services
 ├── data # Contains JS schema
 ├── layout # Layout components
 ├── math-tools # Important folder: includes basic calculator, loan calculator, and more
 ├── modules # Feature modules
 ├── page # Page components
 └── shared # Shared components and services

assets
 ├── API # API-related files
 ├── fonts # Font files
 ├── i18n # Internationalization files
 ├── img # Image assets
 ├── js # JavaScript files
 └── scss # SCSS files
environment # Environment-specific settings
styles # Global styles

## Math Tools

This project also includes various math tools that are designed to assist students, which are free to access.

## Sponsorship

This project is free to use. If you would like to support me, you can sponsor via:

- **ABA Bank:** 000336414 LOEM HENG
- **PayPal:** hengloem.pnc@gmail.com

## Project Dependencies

### Core Dependencies

- Angular (v15.2.10)
- Angular Material (v14.2.7)
- Bootstrap (v5.3.3)
- RxJS (v7.5.0)

### FontAwesome Integration

- FontAwesome packages for icons:
  - `@fortawesome/angular-fontawesome`
  - `@fortawesome/fontawesome-free`
  - `@fortawesome/fontawesome-svg-core`

### Additional Libraries

- NgRx Store for state management (`@ngrx/store` v14.3.0)
- Ngx-translate for internationalization (`@ngx-translate/core` v14.0.0)
- Masonry Layout (`masonry-layout` v4.2.2)
- JSON Server for mock backend (`json-server` v0.17.0)
- Nodemailer for email support (`nodemailer` v6.9.15)

## Dev Dependencies

- ESLint for linting (`eslint` v8.18.0)
- Angular ESLint Plugin
- TypeScript (v4.9.5)
- Karma and Jasmine for testing

## Repository

This project is free to use and open for contributions. You can clone the repository here:

```
git clone git@github.com:hengloem/loemhengproject.git
```

## Further help

To get more help on the Angular CLI, use `ng help` or refer to the [Angular CLI Documentation](https://angular.io/cli).
