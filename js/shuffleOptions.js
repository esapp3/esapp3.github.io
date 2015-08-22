
// Overrideable options
// Shuffle.options = {
//   group: ALL_ITEMS, // Initial filter group.
//   speed: 250, // Transition/animation speed (milliseconds).
//   easing: 'ease-out', // CSS easing function to use.
//   itemSelector: '', // e.g. '.picture-item'.
//   sizer: null, // Sizer element. Use an element to determine the size of columns and gutters.
//   gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
//   columnWidth: 0, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
//   delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
//   buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
//   columnThreshold: HAS_COMPUTED_STYLE ? 0.01 : 0.1, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
//   initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
//   throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
//   throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
//   sequentialFadeDelay: 150, // Delay between each item that fades in when adding items.
//   supported: CAN_TRANSITION_TRANSFORMS // Whether to use transforms or absolute positioning.
// };

$(document).ready(function() {
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.picture-item',
    sizer: $sizer
  });
});

// Sorting options
$('.sort-options').on('change', function() {
  var sort = this.value,
      opts = {};

  // We're given the element wrapped in jQuery
  if ( sort === 'date-created' ) {
    opts = {
      reverse: true,
      by: function($el) {
        return $el.data('date-created');
      }
    };
  } else if ( sort === 'title' ) {
    opts = {
      by: function($el) {
        return $el.data('title').toLowerCase();
      }
    };
  }

  // Filter elements
  $grid.shuffle('sort', opts);
});

// Filters elements with a data-title attribute with less than 10 characters
$('#grid').shuffle('shuffle', function($el, shuffle) {
  return $el.data('title').length < 10;
});

// Advanced filtering
$('.js-shuffle-search').on('keyup change', function() {
  var val = this.value.toLowerCase();
  $grid.shuffle('shuffle', function($el, shuffle) {

    // Only search elements in the current group
    if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
      return false;
    }

    var text = $.trim( $el.find('.picture-item__title').text() ).toLowerCase();
    return text.indexOf(val) !== -1;
  });
});
