# react-input-focus / preact-input-focus

[![npm](https://img.shields.io/npm/v/react-input-focus.svg)](https://www.npmjs.com/package/react-input-focus)

Focus switcher for React and Preact input components.

### Installation
  
For React
```
yarn add react-input-focus
```
  
For Preact
```
yarn add preact-input-focus
```

### Demo

[Demo](https://fakundo.github.io/react-input-focus/react/)
/
[Source](https://github.com/fakundo/react-input-focus/tree/master/packages/react-input-focus/examples)

### Usage

```javascript
import { FocusableProvider, FocusableInput } from 'react-input-focus' // or from 'preact-input-focus'

const Input = props => (
  <FocusableInput>
    { ({ focusableInputRef, focusNextInput }) => (
      <input
        {...props}
        ref={focusableInputRef}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            focusNextInput()
          }
        }}
      />
    ) }
  </FocusableInput>
)

export default () => (
  <FocusableProvider>
    <Fragment>
      <Input placeholder="#1 Focus next input on Enter" />
      <Input placeholder="#2 Focus next input on Enter" />
      <Input placeholder="#3" />
    </Fragment>
  </FocusableProvider>
)
```

### API

#### `FocusableInput` props

- `children(focusableValue)`
- `index` - overrides input index and changes focus order

#### `focusableValue` has the following structure

- `focusableInputRef()`
- `focusInput(index)`
- `focusNextInput()`
