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

it(`simple #1`, () => {
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

it(`simple #2`, () => {
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

it(`without dimension #1`, () => {
  const receivedOrder = [
    'tv',
    'screen and (orientation: landscape)',
    'print',
    'screen and (orientation: portrait)'
  ]

  const expectedOrder = [
    'screen and (orientation: landscape)',
    'screen and (orientation: portrait)',
    'tv',
    'print'
  ]

  const expected = expectedOrder.join('\n')
  const received = receivedOrder.sort(sortCSSmq).join('\n')

  expect(received).toBe(expected)
})
