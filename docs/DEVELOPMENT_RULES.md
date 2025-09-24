# React Native Development Rules

This set of rules provides guidelines for React Native development, covering code organization, design patterns, performance optimization, security, testing, and tooling. It emphasizes using TypeScript, functional components, and a clear project structure. Also includes best practices for state management, API calls, and navigation, as well as strategies to avoid common pitfalls and ensure application security and performance.

## 1. Code Organization and Structure:

- **Directory Structure:**

  - Adopt a feature-based or component-based structure. For example:
    src/
    ├── components/
    │ ├── Button/
    │ │ ├── Button.tsx
    ├── Input/
    │ └── ...
    ├── screens/
    │ ├── Home/
    │ │ ├── HomeScreen.tsx
    │ │ ├── HomeScreen.styles.ts
    │ │ ├── HomeScreen.test.tsx
    │ ├── Profile/
    │ └── ...
    ├── navigation/
    ├── services/
    ├── utils/
    ├── types/
    └── App.tsx
  - Separate concerns into distinct directories (e.g., components, screens, navigation, services, utils, types).

- **File Naming Conventions:**

  - Use descriptive names for files and components (e.g., `HomeScreen.tsx`, `useUserData.ts`).
  - Follow a consistent naming convention (e.g., PascalCase for components, camelCase for functions and variables).
  - Use `.styles.ts` for style files and `.test.tsx` for test files to keep components readable and organized.

- **Module Organization:**

  - Group related components and modules into logical units.
  - Use absolute imports and module aliases to avoid long relative paths (e.g., `@components/Button` instead of `../../../components/Button`).
  - Configure module aliases in `tsconfig.json` or `jsconfig.json`.

- **Component Architecture:**

  - Favor small, reusable components with a single responsibility (Single Responsibility Principle).
  - Use composition over inheritance to create complex components.

- **Code Splitting Strategies:**
  - Implement lazy loading for screens or components that are not immediately needed.
  - Use `React.lazy` and `Suspense` to load components on demand.
  - Utilize dynamic imports for conditional loading of modules.

## 2. Common Patterns and Anti-patterns:

- **Design Patterns:**

  - **Higher-Order Components (HOCs):** Use HOCs for cross-cutting concerns like authentication or logging.
  - **Render Props:** Use render props to share code between React components.
  - **Hooks:** Use custom hooks to encapsulate logic and stateful behavior.

- **Recommended Approaches:**

  - **State Management:**
    - Use React Context for simple state management.
    - Use Redux toolkit for complex state management.
  - **API Calls:**
    - Use `axios` or `TanStack Query` for making API requests.
    - Create a service layer to handle API calls and data transformations.
  - **Navigation:**
    - Use React Navigation for managing app navigation.
    - Define navigation stacks and routes in a separate module.

- **Anti-patterns and Code Smells:**

  - **Long Component Files:** Break down large components into smaller, more manageable pieces.
  - **Deeply Nested Components:** Avoid excessive nesting, which can impact performance.
  - **Mutating State Directly:** Always use `setState` or a state management library to update state.
  - **Unnecessary Re-renders:** Optimize components to prevent unnecessary re-renders.
  - **Global Styles:** Avoid using global styles, as they can lead to conflicts and make it difficult to maintain the application.

- **State Management Best Practices:**

  - Choose a state management solution that fits the complexity of your application.
  - Keep state minimal and derive values when possible.
  - Use selectors to access state and memoize computed values.

- **Error Handling Patterns:**
  - Use `try...catch` blocks to handle errors gracefully.
  - Implement a global error handler to catch unhandled exceptions.
  - Log errors to a remote monitoring service.

## 3. Performance Considerations:

- **Optimization Techniques:**

  - **Memoization:** Use `React.memo` to memoize components and prevent unnecessary re-renders.
  - **Pure Components:** Extend `React.PureComponent` for components that only depend on props.
  - **Debouncing and Throttling:** Use debouncing and throttling to limit the frequency of function calls.
  - **Virtualization:** Use `FlatList` or `SectionList` for rendering large lists of data.

- **Memory Management:**

  - Avoid memory leaks by properly cleaning up event listeners and timers.
  - Use `useCallback` and `useMemo` to prevent creating new functions and objects on every render.

- **Rendering Optimization:**

  - Minimize the number of re-renders by optimizing component updates.
  - Use `shouldComponentUpdate` (for class components) or `React.memo` to control re-renders.
  - Avoid using inline styles, as they are re-created on every render.

- **Bundle Size Optimization:**

  - Use code splitting to reduce the initial bundle size.
  - Remove unused code and dependencies.
  - Use a bundler like Metro or Webpack with tree shaking enabled.
  - Compress images and other assets.

- **Lazy Loading Strategies:**
  - Implement lazy loading for images and other assets using `React.lazy` and `Suspense`.
  - Use dynamic imports to load modules on demand.

## 4. Security Best Practices:

- **Common Vulnerabilities:**

  - **Cross-Site Scripting (XSS):** Sanitize user input to prevent XSS attacks.
  - **SQL Injection:** Use parameterized queries to prevent SQL injection attacks.
  - **Cross-Site Request Forgery (CSRF):** Implement CSRF protection tokens.
  - **Man-in-the-Middle (MITM) Attacks:** Use HTTPS to encrypt communication.

- **Input Validation:**

  - Validate user input on both the client and server sides.
  - Use regular expressions or validation libraries to enforce input constraints.

- **Authentication and Authorization Patterns:**

  - Use a secure authentication protocol like OAuth 2.0 or JWT.
  - Implement role-based access control (RBAC) to restrict access to sensitive resources.

- **Data Protection Strategies:**

  - Encrypt sensitive data at rest and in transit.
  - Use secure storage mechanisms for storing API keys and other secrets.

- **Secure API Communication:**
  - Use HTTPS for all API communication.
  - Implement API rate limiting to prevent abuse.
  - Validate API responses to prevent data injection attacks.

## 5. Testing Approaches:

- **Unit Testing Strategies:**

  - Write unit tests for individual components and modules.
  - Use a testing framework like Jest.
  - Mock dependencies to isolate the component being tested.

- **Integration Testing:**

  - Write integration tests to verify the interaction between components and modules.
  - Test the integration with external APIs and services.

- **End-to-End Testing:**

  - Write end-to-end tests to verify the entire application flow.
  - Use a testing framework like Detox or Appium.

- **Mocking and Stubbing:**
  - Use mocking and stubbing to isolate components and control their behavior during testing.
  - Use a mocking library like Jest.

## 6. Common Pitfalls and Gotchas:

- **Frequent Mistakes:**

  - **Directly Mutating State:** Always use `setState` or a state management library to update state.
  - **Ignoring Platform Differences:** Test your application on both iOS and Android devices.
  - **Over-Optimizing:** Optimize only when necessary, as premature optimization can lead to complex code.
  - **Not Using a Debugger:** Utilize the React Native debugger for efficient debugging.

- **Edge Cases:**

  - **Handling Device Orientation Changes:** Implement logic to handle device orientation changes gracefully.
  - **Handling Network Connectivity Issues:** Implement error handling for network connectivity issues.
  - **Handling Different Screen Sizes and Densities:** Design your UI to adapt to different screen sizes and densities.

- **Version-Specific Issues:**

  - Be aware of breaking changes in React Native and its dependencies.
  - Test your application with different versions of React Native.

- **Compatibility Concerns:**

  - Ensure that your application is compatible with the target operating systems and devices.
  - Use polyfills to support older browsers and devices.

- **Debugging Strategies:**
  - Use the React Native debugger to inspect the component tree and state.
  - Use the console to log messages and debug code.
  - Use a remote debugging tool to debug on a physical device.

## 7. Tooling and Environment:

- **Recommended Development Tools:**

  - **React Native CLI:** Use the React Native CLI for creating and managing React Native projects.
  - **Android Studio:** Use Android Studio for building and debugging Android applications.
  - **Xcode:** Use Xcode for building and debugging iOS applications.

- **Build Configuration:**

  - Use a build system like Gradle (Android) or CocoaPods (iOS) to manage dependencies.
  - Configure build variants for different environments (e.g., development, staging, production).

- **Linting and Formatting:**
  - Use ESLint and Prettier to enforce code style and catch potential errors.
  - Configure ESLint and Prettier to automatically format code on save.

## 8. Project-Specific Guidelines:

### Current Project Structure

This project follows a component-based structure with the following organization:

```
src/
├── components/
│   ├── AppHeader.tsx
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   └── index.ts
├── TodoApp.tsx
└── App.tsx
```

### Component Guidelines for This Project:

#### File Organization:

- All components should be placed in the `src/components/` directory
- Each component should have a corresponding test file in `__tests__/`
- Use TypeScript for all component files with proper type definitions
- Export components through the `index.ts` file for clean imports
- Follow the existing naming convention (PascalCase for components)

#### Component Patterns:

- **Props Interface**: Always define TypeScript interfaces for component props (e.g., `TodoInputProps`, `TodoItemProps`)
- **Default Props**: Use default parameter values for optional props (e.g., `placeholder = 'Add a new todo'`)
- **Prop Validation**: Use TypeScript for compile-time prop validation
- **Component Composition**: Keep components small and focused (e.g., `TodoItem` handles individual items, `TodoList` handles the collection)

#### State Management Patterns:

- Use `useState` for local component state
- Lift state up to the nearest common parent when multiple components need access
- Use immutable state updates (e.g., `setTodos([...todos, newTodo])`)
- Validate input before state updates (e.g., `if (text.trim())`)

#### Styling Guidelines:

- Use `StyleSheet.create()` for all styles
- Define styles at the bottom of each component file
- Use consistent naming for style objects (e.g., `styles.container`, `styles.input`)
- Apply conditional styles using array syntax (e.g., `[styles.todoItem, completed && styles.completedTodo]`)

### TypeScript Best Practices:

#### Type Definitions:

- Define interfaces for all data structures (e.g., `Todo` interface)
- Use proper typing for function parameters and return values
- Export types that are used across multiple files
- Use optional properties with `?` when appropriate (e.g., `onPress?: () => void`)

#### Code Organization:

- Place type definitions near the top of files or in separate `.types.ts` files
- Use descriptive names for interfaces (e.g., `TodoInputProps` instead of `Props`)
- Leverage TypeScript's strict mode for better type safety

### Testing Requirements:

#### Test Structure:

- Write unit tests for all components using Jest and React Native Testing Library
- Test files should be placed in `__tests__/` directory
- Use descriptive test names that explain the expected behavior
- Group related tests using `describe` blocks

#### Test Coverage:

- Test both happy path and edge cases
- Test user interactions (button presses, text input)
- Test conditional rendering and state changes
- Maintain test coverage above 80%
- Test component props and their effects

#### Testing Patterns:

- Use `render()` to mount components
- Use `fireEvent` to simulate user interactions
- Use `screen.getBy*` methods to find elements
- Test state changes and side effects
- Mock external dependencies when necessary

### Code Quality Standards:

#### Linting and Formatting:

- Use ESLint with React Native configuration
- Use Prettier for consistent code formatting
- Run `npm run lint` before committing
- Fix all linting errors before merging

#### Code Comments:

- Add comments for complex logic or business rules
- Use JSDoc comments for public APIs
- Include test-related comments when they clarify test intent
- Keep comments up-to-date with code changes

#### Git Workflow:

- Write meaningful commit messages following conventional commits
- Use feature branches for new functionality
- Review code before merging to main branch
- Keep commits atomic and focused

### Performance Considerations for This Project:

#### State Management:

- Use `useCallback` for event handlers passed as props
- Use `useMemo` for expensive computations
- Avoid unnecessary re-renders by optimizing state updates
- Consider using `React.memo` for pure components

#### List Rendering:

- Use `FlatList` instead of `map()` for large lists of todos
- Implement virtualization for better performance
- Use `key` prop correctly for list items

#### Memory Management:

- Clean up event listeners and timers
- Avoid memory leaks in long-running components
- Use proper dependency arrays in hooks

### Security Guidelines:

#### Input Validation:

- Validate user input on both client and server side
- Sanitize text input to prevent XSS attacks
- Use proper validation for todo text (length limits, character restrictions)
- Implement proper error handling for invalid inputs

#### Data Storage:

- Use secure storage for sensitive data
- Implement proper data persistence strategies
- Consider encryption for sensitive todo data

### Accessibility Guidelines:

#### Screen Reader Support:

- Add proper accessibility labels to interactive elements
- Use semantic HTML elements where possible
- Test with screen readers on both platforms
- Provide meaningful feedback for user actions

#### Visual Accessibility:

- Ensure sufficient color contrast
- Support different text sizes
- Provide alternative text for images
- Test with accessibility tools

### Platform-Specific Considerations:

#### iOS Guidelines:

- Follow iOS Human Interface Guidelines
- Test on different iOS versions
- Handle safe areas properly
- Use appropriate iOS-specific components

#### Android Guidelines:

- Follow Material Design principles
- Test on different Android versions
- Handle different screen densities
- Use appropriate Android-specific components

### Development Workflow:

#### Local Development:

- Use `npm start` to start Metro bundler
- Use `npm run android` for Android development
- Use `npm run ios` for iOS development
- Use `npm test` to run tests

#### Debugging:

- Use React Native Debugger for debugging
- Use console.log for quick debugging
- Use Flipper for advanced debugging
- Test on both simulators and physical devices

#### Code Review Checklist:

- [ ] TypeScript types are properly defined
- [ ] Components are properly tested
- [ ] Code follows project conventions
- [ ] No console.log statements in production code
- [ ] Performance considerations are addressed
- [ ] Accessibility requirements are met
- [ ] Platform-specific considerations are handled

### Specific Implementation Guidelines:

#### Todo App Specific Patterns:

##### State Management for Todos:

- Use `useState<Todo[]>([])` for todo list state
- Implement immutable updates: `setTodos([...todos, newTodo])`
- Use `Date.now().toString()` for unique IDs (consider using UUID for production)
- Validate input before adding todos: `if (text.trim())`
- Clear input after successful todo addition

##### Component Communication:

- Pass state setters as props (e.g., `onChangeText={setText}`)
- Use callback functions for user interactions (e.g., `onAdd={addTodo}`)
- Implement proper prop drilling for deeply nested components
- Consider using Context API for complex state sharing

##### Event Handling Patterns:

- Use `fireEvent.changeText()` for text input testing
- Use `fireEvent.press()` for button press testing
- Test both positive and negative scenarios
- Verify state changes after user interactions

#### Error Handling Best Practices:

##### Input Validation:

- Always validate user input before processing
- Provide clear error messages for invalid inputs
- Handle edge cases (empty strings, whitespace-only input)
- Implement proper error boundaries for component errors

##### Testing Error Scenarios:

- Test empty input submission
- Test whitespace-only input
- Test maximum length limits
- Test special characters and edge cases

#### Code Organization Improvements:

##### Future Enhancements:

- Consider adding a `types/` directory for shared type definitions
- Add a `hooks/` directory for custom hooks
- Create a `utils/` directory for helper functions
- Add a `constants/` directory for app-wide constants

##### Scalability Considerations:

- Plan for data persistence (AsyncStorage, SQLite, or backend API)
- Consider implementing undo/redo functionality
- Plan for todo categories or tags
- Design for offline functionality

### Common Anti-patterns to Avoid:

#### State Management Anti-patterns:

- ❌ Mutating state directly: `todos.push(newTodo)`
- ❌ Not validating input before state updates
- ❌ Using array index as key in lists
- ❌ Not cleaning up event listeners

#### Component Anti-patterns:

- ❌ Creating components that are too large
- ❌ Not using TypeScript interfaces for props
- ❌ Mixing business logic with presentation logic
- ❌ Not handling loading and error states

#### Testing Anti-patterns:

- ❌ Testing implementation details instead of behavior
- ❌ Not testing edge cases and error scenarios
- ❌ Using brittle selectors that break easily
- ❌ Not mocking external dependencies properly

### Performance Optimization Checklist:

#### For Todo Lists:

- [ ] Use `FlatList` for large todo lists (>100 items)
- [ ] Implement `getItemLayout` for better performance
- [ ] Use `keyExtractor` for efficient list updates
- [ ] Consider implementing pagination for very large lists

#### For State Updates:

- [ ] Use `useCallback` for event handlers
- [ ] Use `useMemo` for expensive computations
- [ ] Avoid creating objects in render methods
- [ ] Implement proper dependency arrays in hooks

### Security Checklist for Todo Apps:

#### Data Protection:

- [ ] Sanitize user input to prevent XSS
- [ ] Implement proper data validation
- [ ] Use secure storage for sensitive data
- [ ] Consider data encryption for sensitive todos

#### Input Validation:

- [ ] Limit todo text length
- [ ] Validate special characters
- [ ] Implement proper error handling
- [ ] Test with malicious input

### Accessibility Checklist:

#### Screen Reader Support:

- [ ] Add `accessibilityLabel` to interactive elements
- [ ] Use `accessibilityRole` for proper element identification
- [ ] Implement `accessibilityHint` for complex interactions
- [ ] Test with VoiceOver (iOS) and TalkBack (Android)

#### Visual Accessibility:

- [ ] Ensure sufficient color contrast (4.5:1 ratio)
- [ ] Support dynamic type sizes
- [ ] Provide alternative text for images
- [ ] Test with high contrast mode
