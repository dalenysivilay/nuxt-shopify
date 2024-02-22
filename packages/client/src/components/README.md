# Components Folder Structure

This folder contains all the reusable Vue components used in the application. The structure is designed to organize components based on their functionality and reusability. The main folders are:

- **Base**: Contains common styling and logic for a component. These are foundational components that compose of all available elements that make up the entire component.
- **Template**: Contains reusable components that combine the elements of the base component. These templates are used to create more specific components.
- **Root Component Folder**: Contains final components that are used in sections and pages of the application. These components are usually specific variations of the template components.

## Example: InputField Component

The `InputField` component is an example of how this structure is applied:

- **BaseInput.vue**: A base component that provides common input text field functionality and styling.
- **InputLabel.vue**: A base component for input labels.
- **InputValidation.vue**: A base component for input validation messages.
- **TemplateInputField.vue**: A template component that combines the base components to create a reusable input field structure.
- **TextInputField.vue** (in the root `InputField` folder): A specific variation of the `TemplateInputField` for general use.
- **EmailInputField.vue** (in the root `InputField` folder): A specific variation of the `TemplateInputField` for email inputs.
- **PhoneInputField.vue** (in the root `InputField` folder): A specific variation of the `TemplateInputField` for phone number inputs.

## Usage

To use a component in a page or another component:

1. Nuxt 3 auto-imports the component:

   ```Vue
   <template>
    <EmailInputField />
  </template>
