Isometricr
==========

A tiny bit of JS for creating isometric grids inside DOM elements.

See [example.html](example.html) for a commented example.


Quick Tour
----------

Call the `gridify` function, passing a DOM element and the number of columns & rows to divide into:

```
// Draw a 18x15 grid in '#grid-area'
var gridArea = document.querySelectorAll('#grid-area')[0];
window.Isometricr.gridify(gridArea, 18, 15)
```

This will create an SVG with the following properties:
- Group elements (`<g>`) for a cell in each row & column combination
- Cells have the css classes of:
  - `.iso-row-n` for the row they sit in
  - `.iso-col-n` for the column they sit in
- Path elements (`<path>`) for 4 triangles in each cell
- Triangles all meet in the centre of the cell
- Triangles have a CSS class indicating their position in the cell (`top-tri`, `left-tri`, `right-tri` or `bottom-tri`)

All of this should make it easier to work through which parts of your CSS you want to `fill` or `stroke` to draw something. Take a look [at the example](example.html) to see this being done.
