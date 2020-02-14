import React from 'react'
import { FocusableProvider, FocusableInput } from '../src'

const Input = ({ index, ...rest }) => (
  <FocusableInput index={index}>
    { ({ focusableInputRef, focusNextInput }) => (
      <input
        {...rest}
        style={{ width: '100%' }}
        ref={focusableInputRef}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') focusNextInput()
        }}
      />
    ) }
  </FocusableInput>
)

export default () => (
  <FocusableProvider>
    <div style={{ width: 300, maxWidth: '100%', margin: '0 auto' }}>
      <Input placeholder="#1. Focus #4 on Enter" />
      <br />
      <Input placeholder="#2. Focus #3 on Enter" />
      <br />
      <Input placeholder="#3. Focus #5 on Enter" />
      <br />
      <Input placeholder="#4. Focus #2 on Enter" index={1} />
      <br />
      <Input placeholder="#5." />
    </div>
  </FocusableProvider>
)
