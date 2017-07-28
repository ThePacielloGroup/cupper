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


// SVG scaling fix for IE10-11
(function () {
  if (window.matchMedia('(-ms-high-contrast: none), (-ms-high-contrast: active)').matches) {
  // Get all the SVGs on the page except the symbol defs
    var svgs = document.querySelectorAll('a svg, button svg, h1 svg')
    // ... iterate over SVGs
    Array.prototype.forEach.call(svgs, function(svg) {
      // Set preserveAspectRatio to 'XMidYMin slice'
      svg.setAttribute('preserveAspectRatio', 'xMidYMin slice')

      // Turn the viewBox values into an array
      var viewBox = svg.getAttribute('viewBox').split(' ')

      // Calculate padding value needed (width/height x 100)
      var padding = (viewBox[2] / viewBox[3]) * 100

      // Set inline styles
      svg.setAttribute('style', 'width: 100%; padding-bottom: ' + padding + '%; height: 1px; overflow: visible')

      // Create span wrapper
      var span = document.createElement('span')
      span.setAttribute('class', 'svg-outer')
      span.style.width = '0.75em'

      svg.parentNode.insertBefore(span, svg)
      span.appendChild(svg)
    })
  }
}());
