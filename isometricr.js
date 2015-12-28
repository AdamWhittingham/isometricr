window.Isometricr = function() {
  var debuging = false;

  var debug = function(debug_enabled) {
    debuging = debug_enabled;
  };

  var debug_log = function(message) {
    if (debuging) {
      console.log(message);
    }
  };

  var create_cell = function(start_x, start_y, end_x, end_y, col_ref, row_ref) {
    debug_log('Creating cell at [' + start_x + ',' + start_y + '], [' + end_x + ',' + end_y + ']');
    var mid_x = Math.round(start_x + (end_x - start_x) / 2);
    var mid_y = Math.round(start_y + (end_y - start_y) / 2);
    var top_left = start_x + ' ' + start_y;
    var top_right = end_x + ' ' + start_y;
    var centre = mid_x + ' ' + mid_y;
    var bot_left = start_x + ' ' + end_y;
    var bot_right = end_x + ' ' + end_y;
    return '<g class="iso-cell iso-col-' + col_ref + ' iso-row-' + row_ref + '">' +
              '<path class="top-tri"     d="M' + top_left  + 'L' + top_right + 'L' + centre    + 'z' + '"/>' +
              '<path class="left-tri"    d="M' + top_left  + 'L' + centre    + 'L' + bot_left  + 'z' + '"/>' +
              '<path class="right-tri"   d="M' + top_right + 'L' + bot_right + 'L' + centre    + 'z' + '"/>' +
              '<path class="bottom-tri"  d="M' + bot_left  + 'L' + centre    + 'L' + bot_right + 'z' + '"/>' +
            '</g>'
  };

  var create_grid = function(width, height, cols, rows) {
    debug_log('Creating ' + cols + 'x' + rows + 'grid')
    var col_width = width / cols;
    var row_height = height / rows;
    debug_log('Cell size: ' + col_width + 'x' + row_height);
    var grid = [];
    for (var row = 0; row < rows; row++) {
      var row_cells = []
      for (var col = 0; col < cols; col++) {
        var start_x = Math.round(col * col_width);
        var end_x = Math.round((col + 1) * col_width);
        var start_y = Math.round(row * row_height);
        var end_y = Math.round((row + 1) * row_height);
        row_cells += create_cell(start_x, start_y, end_x, end_y, col, row);
      };
      grid += row_cells;
    };
    return '<svg class="iso-grid">' + grid + '</svg>';
  };

  var gridify = function(element, cols, rows) {
    cols = typeof cols !== 'undefined' ? cols : 10;
    rows = typeof rows !== 'undefined' ? rows : 10;
    var grid = create_grid(element.offsetWidth, element.offsetHeight, cols, rows);
    element.innerHTML = grid;
  };

  return {
    gridify: gridify,
    create_grid: create_grid,
    debug: debug
  };
}();