/* expandable sections */
(function () {
  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true'
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
}());

/* menu button */
(function () {
  var button = document.getElementById('menu-button')
  var menu = document.getElementById('patterns-list')
  button.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', !expanded)
  })
}());

/* persist navigation scroll point */
(function () {
  window.addEventListener('unload', function() {
    var scrollPoint = document.getElementById('patterns-nav').scrollTop
    localStorage.setItem('scrollPoint', scrollPoint)
  })

  window.addEventListener('load', function() {
    document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'))
  })
}());
