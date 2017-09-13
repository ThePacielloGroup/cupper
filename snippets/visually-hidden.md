The `visually-hidden` utility class uses a set of special properties to hide content visually without making it unavailable to screen readers and other non-visual user agents. The class is defined like this:

```CSS
.visually-hidden {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  padding:0 !important;
  border:0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden !important;
}
```

Use it sparingly since, in most cases, what is identified non-visually should also be presented visually. Bear in mind that not all screen reader users are blind users.
