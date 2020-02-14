import { createContext, createElement, useRef, useContext, useMemo } from 'react'
import { createFocusableContext, createFocusableProvider, createFocusableInput } from '../../../src'

const FocusableContext = createFocusableContext({ createContext })

export const FocusableProvider = createFocusableProvider({
  FocusableContext, createElement, useRef,
})

export const FocusableInput = createFocusableInput({
  FocusableContext, useContext, useRef, useMemo,
})
