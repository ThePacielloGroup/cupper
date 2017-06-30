/* expandable sections */
(function () {
  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true' || false
    button.setAttribute('aria-expanded', !expanded)
    target.hidden = !target.hidden
  }

  var expanders = document.querySelectorAll('[data-expands]')

  Array.prototype.forEach.call(expanders, function (expander) {
    var target = document.getElementById(expander.getAttribute('data-expands'))

    expander.addEventListener('click', function () {
      toggle(expander, target)
    })
  })

}())

/* persist navigation scroll point */
window.addEventListener('unload', function() {
  var scrollPoint = document.getElementById('patterns-nav').scrollTop
  localStorage.setItem('scrollPoint', scrollPoint)
  console.log('scrollPoint:', localStorage.getItem('scrollPoint'))
})

window.addEventListener('load', function() {
  document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'))
})
