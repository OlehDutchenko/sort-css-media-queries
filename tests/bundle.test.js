'use strict'

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const sortCSSmq = require('../index')
// const randomize = require('./randomize')

// ----------------------------------------
// Tests
// ----------------------------------------

it(`simple #1. mobile-first`, () => {
  const receivedOrder = [
    'screen and (max-width: 640px)',
    'screen and (min-width: 980px)',
    'screen and (max-width: 980px)',
    'screen and (max-width: 768px)',
    'screen and (min-width: 640px)',
    'screen and (min-width: 1280px)',
    'screen and (min-width: 768px)',
    'screen and (max-width: 1280px)'
  ]

  const expectedOrder = [
    'screen and (min-width: 640px)',
    'screen and (min-width: 768px)',
    'screen and (min-width: 980px)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 1280px)',
    'screen and (max-width: 980px)',
    'screen and (max-width: 768px)',
    'screen and (max-width: 640px)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq).join('\n')

  expect(received).toBe(expected)
})

it(`simple #1. desktop-first`, () => {
  const receivedOrder = [
    'screen and (max-width: 640px)',
    'screen and (min-width: 980px)',
    'screen and (max-width: 980px)',
    'screen and (max-width: 768px)',
    'screen and (min-width: 640px)',
    'screen and (min-width: 1280px)',
    'screen and (min-width: 768px)',
    'screen and (max-width: 1280px)'
  ]

  const expectedOrder = [
    'screen and (max-width: 1280px)',
    'screen and (max-width: 980px)',
    'screen and (max-width: 768px)',
    'screen and (max-width: 640px)',
    'screen and (min-width: 640px)',
    'screen and (min-width: 768px)',
    'screen and (min-width: 980px)',
    'screen and (min-width: 1280px)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n')

  expect(received).toBe(expected)
})

it(`simple #2. mobile-first`, () => {
  const receivedOrder = [
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 640px)'
  ]

  const expectedOrder = [
    'screen and (min-width: 1280px)',
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq).join('\n')

  expect(received).toBe(expected)
})

it(`simple #2. desktop-first`, () => {
  const receivedOrder = [
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 640px)'
  ]

  const expectedOrder = [
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)',
    'screen and (max-width: 640px)',
    'screen and (min-width: 1280px)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n')

  expect(received).toBe(expected)
})

it(`without dimension #1. mobile-first`, () => {
  const receivedOrder = [
    'tv',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)',
    'screen and (orientation: landscape)',
    'print',
    'screen and (orientation: portrait)',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)'
  ]

  const expectedOrder = [
    'screen and (orientation: landscape)',
    'screen and (orientation: portrait)',
    'tv',
    'print',
    'print and (orientation: landscape)',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq).join('\n')

  expect(received).toBe(expected)
})

it(`without dimension #1. desktop-first`, () => {
  const receivedOrder = [
    'tv',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)',
    'screen and (orientation: landscape)',
    'print',
    'screen and (orientation: portrait)',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)'
  ]

  const expectedOrder = [
    'screen and (orientation: landscape)',
    'screen and (orientation: portrait)',
    'tv',
    'print',
    'print and (orientation: landscape)',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)',
    'print and (orientation: portrait)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n')

  expect(received).toBe(expected)
})

it(`mixed #1. mobile-first`, () => {
  const receivedOrder = [
    'tv',
    'print and (orientation: landscape)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 640px)',
    'screen and (orientation: landscape)',
    'print',
    'screen and (orientation: portrait)',
    'screen and (min-width: 768px)',
    'screen and (max-width: 1280px)',
    'print and (orientation: portrait)'
  ]

  const expectedOrder = [
    'screen and (min-width: 768px)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 1280px)',
    'screen and (max-width: 640px)',
    'screen and (orientation: landscape)',
    'screen and (orientation: portrait)',
    'tv',
    'print',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq).join('\n')

  expect(received).toBe(expected)
})

it(`mixed #1. desktop-first`, () => {
  const receivedOrder = [
    'tv',
    'print and (orientation: landscape)',
    'screen and (min-width: 1280px)',
    'screen and (max-width: 640px)',
    'screen and (orientation: landscape)',
    'print',
    'screen and (orientation: portrait)',
    'screen and (min-width: 768px)',
    'screen and (max-width: 1280px)',
    'print and (orientation: portrait)'
  ]

  const expectedOrder = [
    'screen and (max-width: 1280px)',
    'screen and (max-width: 640px)',
    'screen and (min-width: 768px)',
    'screen and (min-width: 1280px)',
    'screen and (orientation: landscape)',
    'screen and (orientation: portrait)',
    'tv',
    'print',
    'print and (orientation: landscape)',
    'print and (orientation: portrait)'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq.desktopFirst).join('\n')

  expect(received).toBe(expected)
})
