function sortMeBy(arg, sel, elem, order) {
  var $selector = $(sel),
    $element = $selector.children(elem);

  $element.sort(function(a, b) {
    var an = parseInt(a.getAttribute(arg)),
      bn = parseInt(b.getAttribute(arg));

    if (order == 'asc') {
      if (an > bn)
        return 1;
      if (an < bn)
        return -1;
    } else if (order == 'desc') {
      if (an < bn)
        return 1;
      if (an > bn)
        return -1;
    }
    return 0;
  });

  $element.detach().appendTo($selector);
}


$(document).on('click', '.sort3', function() {
  sortMeBy('data-score', 'ul.sort-list', 'li', 'desc');
});
$(document).on('click', '.sort4', function() {
  sortMeBy('data-score', 'ul.sort-list', 'li', 'asc');
});