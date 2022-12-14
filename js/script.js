// Created by: Mikey Gloriani
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06-JS/sw.js", {
    scope: "/ICS2O-Unit-5-06-JS/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  let numberA = parseFloat(document.getElementById("variable-a").value)
  let numberB = parseFloat(document.getElementById("variable-b").value)
  let product = 0
  let counter = 0

  while (counter < numberB) {
    counter++
    product = product + numberA
  }
  document.getElementById("hello-world").innerHTML =
    numberA + " x " + numberB + " = " + product
}
