# VueJs Project

# Data Management App Documentation

Welcome to the documentation for the Data Management App! This documentation provides an overview of the app's architecture, components, and usage instructions.

## Table of Contents

1. [Introduction](#introduction)
2. [Overview of Single File Components (SFCs)](#overview-of-single-file-components-sfcs)
3. [Advantages of Using SFCs](#advantages-of-using-sfcs)
4. [App Structure](#app-structure)
5. [Components](#components)
   - [App.vue](#appvue)
   - [FormComponent.vue](#formcomponentvue)
   - [TableComponent.vue](#tablecomponentvue)
6. [Usage](#usage)
   - [Adding Data](#adding-data)
   - [Deleting Data](#deleting-data)
   - [Exporting Data](#exporting-data)

## Introduction

The Data Management App is designed to allow users to input data, view it in a table, and export it in JSON format. The app utilizes Vue.js and Vuetify for its development, offering a clean and user-friendly interface for data management tasks.

## Overview of Single File Components (SFCs)

In Vue.js, Single File Components (SFCs) are a recommended way to structure your application. An SFC combines the template, script, and style of a component into a single file, enhancing code organization and readability.

SFCs consist of three main parts:

1. **Template**: The HTML-like structure that defines the component's layout and presentation.
2. **Script**: The JavaScript logic that defines the component's behavior, data, methods, and lifecycle hooks.
3. **Style**: The CSS that defines the component's visual styling, with the option to scope styles to the component.

## Advantages of Using SFCs

1. **Component Isolation**: SFCs encapsulate each component's structure, logic, and style in a single file, improving maintainability.
2. **Readability**: Each component's code is organized in a single file, enhancing readability and understanding.
3. **Scoped Styles**: CSS styles are scoped to components, reducing global styling conflicts.
4. **Separation of Concerns**: SFCs separate template, script, and style, following best practices for clean architecture.
5. **Reusability**: Components can be reused throughout the app, promoting code reusability.
6. **Ease of Collaboration**: SFCs support parallel development by providing clear boundaries between components.
7. **Enhanced Tooling**: Vue.js tools and IDE plugins are optimized for SFCs, improving development experience.
8. **Scoped CSS Variables**: Scoped CSS variables within components enhance styling consistency.
9. **Improved Build Process**: Precompiled SFCs optimize performance and bundle sizes during the build process.
10. **Custom Blocks**: SFCs support advanced features like `<script setup>`, streamlining component definitions.

## App Structure

The Data Management App is structured using Single File Components (SFCs) for each major part of the application. These components are:

- `App.vue`: The main component that holds the app's structure.
- `FormComponent.vue`: Responsible for rendering the data input form.
- `TableComponent.vue`: Displays the data in a table and handles deletion and export functionalities.

## Components

### App.vue

This component serves as the root of the application. It imports and renders the `FormComponent` and `TableComponent`, allowing users to input data and manage it through the table.

### FormComponent.vue

The `FormComponent` displays a form for users to input data, including name, surname, email, age, favorite color, and contact preferences. When the form is submitted, the data is emitted to the parent component (`App.vue`) using the `add` event.

### TableComponent.vue

The `TableComponent` displays the input data in a table format. Users can delete entries, and the data can be exported as JSON. It listens for the `delete` event to remove data entries from the table.

## Usage

### Adding Data

1. Fill out the form fields in the `FormComponent`.
2. Click the "Submit" button to add the data to the table.

### Deleting Data

1. In the `TableComponent`, locate the entry you want to delete.
2. Click the delete icon (trash can).
3. Confirm the deletion in the prompt.

### Exporting Data

1. In the `TableComponent`, click the "Export JSON" button.
2. A modal dialog will display the JSON-formatted data.
3. Click the "Close" button to close the dialog.

---

Thank you for using the Data Management App. We hope this documentation helps you understand the app's structure, components, and usage. If you have any further questions or need assistance, feel free to reach out to us. Happy data managing!


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
