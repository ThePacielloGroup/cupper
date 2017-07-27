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
  window.onunload = function () {
    var scrollPoint = document.getElementById('patterns-nav').scrollTop
    localStorage.setItem('scrollPoint', scrollPoint)
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.indexOf('patterns/') !== -1) {
      document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'))
    } else {
      document.getElementById('patterns-nav').scrollTop = 0
    }
  })
}());

/* Add "link here" links to <h2> headings */
(function () {
  var headings = document.querySelectorAll('main > h2')

  Array.prototype.forEach.call(headings, function (heading) {
    var id = heading.getAttribute('id')

    if (id) {
      var newHeading = heading.cloneNode(true)

      var container = document.createElement('div')
      container.setAttribute('class', 'h2-container')
      container.appendChild(newHeading)

      heading.parentNode.insertBefore(container, heading)

      var link = document.createElement('a')
      link.setAttribute('href', '#' + id)
      link.setAttribute('aria-label', 'link for this section')
      link.innerHTML = '<svg aria-hidden="true" viewBox="0 0 50 50"><use xlink:href="#link"></use></svg>'

      container.appendChild(link)

      heading.parentNode.removeChild(heading);
    }
  })
}());
