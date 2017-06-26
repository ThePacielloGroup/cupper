/* expandable sections */
(function () {
  'use strict'

  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true' || false
    button.setAttribute('aria-expanded', !expanded)
    target.hidden = !target.hidden
  }

  var expanders = document.querySelectorAll('[data-expands]')

  Array.prototype.forEach.call(expanders, function (expander) {
    console.log(expander)
    var target = document.getElementById(expander.getAttribute('data-expands'))

    expander.addEventListener('click', function () {
      toggle(expander, target)
    })
  })

}())
