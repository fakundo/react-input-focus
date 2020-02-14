import { createElement } from 'preact'
import { createContext, useRef, useContext, useMemo } from 'preact/compat'
import { createFocusableContext, createFocusableProvider, createFocusableInput } from '../../../src'

const FocusableContext = createFocusableContext({ createContext })

export const FocusableProvider = createFocusableProvider({
  FocusableContext, createElement, useRef,
})

export const FocusableInput = createFocusableInput({
  FocusableContext, useContext, useRef, useMemo,
})
