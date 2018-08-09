'use strict'

/**
 * @module
 */

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {string[]} array
 * @return {string[]}
 */
function randomize (array) {
  let newArray = array.concat([])

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]

    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = randomize
