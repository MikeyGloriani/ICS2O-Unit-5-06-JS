// Created by: Mikey Gloriani
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-JS/sw.js", {
    scope: "/ICS2O-Unit5-06-JS/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numberA = parseFloat(document.getElementById("variable-a").value)
  var numberB = parseFloat(document.getElementById("variable-b").value)
  var product = 0
  var counter = 0

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numA)
  }

  if ((numA < 0 && numB > 0) || (numB < 0 && numA > 0))
    document.getElementById("hello-world").innerHTML =
      "Both numbers multiply to -" + product + "."
  else
    document.getElementById("hello-world").innerHTML =
      "Both numbers multiply to " + product + "."
}

