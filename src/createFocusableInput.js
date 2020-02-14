import uniqueId from 'lodash/uniqueId'

export default ({ FocusableContext, useContext, useRef, useMemo }) => ({ children, index }) => {
  const { focusInput, focusNextInput, addInput, removeInput } = useContext(FocusableContext)
  const { current: key } = useRef(uniqueId('react-input-focus-core-'))

  const props = useMemo(() => ({
    focusableInputRef: (input) => (input ? addInput(key, input, index) : removeInput(key)),
    focusNextInput: () => focusNextInput(key),
    focusInput,
  }), [])

  return children(props)
}
