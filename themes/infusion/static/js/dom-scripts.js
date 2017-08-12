/* expandable sections */
(function () {
  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = !target.hidden;
  }

  var expanders = document.querySelectorAll('[data-expands]');

  Array.prototype.forEach.call(expanders, function (expander) {
    var target = document.getElementById(expander.getAttribute('data-expands'));

    expander.addEventListener('click', function () {
      toggle(expander, target);
    })
  })
}());

/* menu button */
(function () {
  var button = document.getElementById('menu-button');
  if (button) {
    var menu = document.getElementById('patterns-list');
    button.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    })
  }
}());

/* persist navigation scroll point */
(function () {
  window.onbeforeunload = function () {
    var patternsNav = document.getElementById('patterns-nav');
    if (patternsNav) {
      var scrollPoint = patternsNav.scrollTop;
      localStorage.setItem('scrollPoint', scrollPoint);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('patterns-nav')) {
      if (window.location.href.indexOf('patterns/') !== -1) {
        document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'));
      } else {
        document.getElementById('patterns-nav').scrollTop = 0;
      }
    }
  })
}());

/* Add "link here" links to <h2> headings */
(function () {
  var headings = document.querySelectorAll('main > h2');

  Array.prototype.forEach.call(headings, function (heading) {
    var id = heading.getAttribute('id');

    if (id) {
      var newHeading = heading.cloneNode(true);

      var container = document.createElement('div');
      container.setAttribute('class', 'h2-container');
      container.appendChild(newHeading);

      heading.parentNode.insertBefore(container, heading);

      var link = document.createElement('a');
      link.setAttribute('href', '#' + id);
      var headingText = heading.textContent;
      link.setAttribute('aria-label', 'To this ' + headingText + ' section');
      link.innerHTML = '<svg aria-hidden="true" viewBox="0 0 50 50" focusable="false"> <use xlink:href="#link"></use> </svg>';

      container.appendChild(link);

      heading.parentNode.removeChild(heading);
    }
  })
}());


/* SVG scaling fix for IE10-11 */
(function () {
  if (window.matchMedia('(-ms-high-contrast: none), (-ms-high-contrast: active)').matches) {
    // Get all the SVGs on the page except the symbol defs
    var svgs = document.querySelectorAll('a svg, button svg, h1 svg, .tags svg');
    // ... iterate over SVGs
    Array.prototype.forEach.call(svgs, function(svg) {
      // Set preserveAspectRatio to 'XMidYMin slice'
      svg.setAttribute('preserveAspectRatio', 'xMidYMin slice');

      // Turn the viewBox values into an array
      var viewBox = svg.getAttribute('viewBox').split(' ');

      // Calculate padding value needed (width/height x 100)
      var padding = (viewBox[2] / viewBox[3]) * 100;

      // Set inline styles
      svg.setAttribute('style', 'width: 100%; height: 1px; padding-bottom: ' + padding + '%; overflow: visible');

      // Create span wrapper
      var span = document.createElement('span');
      span.setAttribute('class', 'svg-outer');
      span.style.width = '0.75em';

      svg.parentNode.insertBefore(span, svg);
      span.appendChild(svg);
    })
  }
}());

/* Contrast calculation */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
    : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function ratio(hex1, hex2) {
  var rgb1 = hexToRgb(hex1);
  var rgb2 = hexToRgb(hex2);
  var luminance1 = luminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05;
  var luminance2 = luminance(rgb2[0], rgb2[1], rgb2[2]) + 0.05;
  var ratio = luminance1 > luminance2 ? luminance1 / luminance2 : luminance2 / luminance1;
  var level;
  if (ratio > 4.5) {
    level = ratio > 7 ? "AAA" : "AA";
  } else {
    level = "Fails";
  }
  return {
    ratio: ratio.toFixed(2)+':1',
    level: level
  }
}
