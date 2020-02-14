import findIndex from 'lodash/findIndex'
import pull from 'lodash/pull'
import sortBy from 'lodash/sortBy'
import find from 'lodash/find'

const createProps = () => {
  let inputs = []

  const addInput = (key, input, index = inputs.length) => {
    const el = find(inputs, { key })
    if (el) {
      el.input = input
    } else {
      inputs = [{ key, input, index }, ...inputs]
      inputs = sortBy(inputs, 'index')
    }
  }

  const removeInput = (key) => {
    pull(inputs, { key })
  }

  const focusInput = (index) => {
    const { input } = inputs[index] || {}
    if (input) {
      setImmediate(() => input.focus())
    }
  }

  const focusNextInput = (key) => {
    const index = findIndex(inputs, { key })
    focusInput(index + 1)
  }

  return { value: { addInput, removeInput, focusInput, focusNextInput } }
}

export default ({ FocusableContext, createElement, useRef }) => (
  ({ children }) => {
    const { current: props } = useRef(createProps())
    return createElement(FocusableContext.Provider, props, children)
  }
)
