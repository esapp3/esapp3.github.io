$(document).ready(function() {
  var $grid = $('#grid');
      //$sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.item'
  //  sizer: $sizer
  });

$('#filter a').click(function (e) {
    e.preventDefault();
         
    // set active class
    $('#filter a').removeClass('active');
    $(this).addClass('active');
         
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
         
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
});

		});
// setupFilters = function() {
//   var $btns = $filterOptions.children();
//   $btns.on('click', function() {
//     var $this = $(this),
//         isActive = $this.hasClass( 'active' ),
//         group = isActive ? 'all' : $this.data('group');
// 
//     // Hide current label, show current label in title
//     if ( !isActive ) {
//       $('.filter-options .active').removeClass('active');
//     }
// 
//     $this.toggleClass('active');
// 
//     // Filter elements
//     $grid.shuffle( 'shuffle', group );
//   });
// 
//   $btns = null;
// },

// // Sorting options
// $('.sort-options').on('change', function() {
//   var sort = this.value,
//       opts = {};
// 
//   // We're given the element wrapped in jQuery
//   if ( sort === 'date-created' ) {
//     opts = {
//       reverse: true,
//       by: function($el) {
//         return $el.data('date-created');
//       }
//     };
//   } else if ( sort === 'title' ) {
//     opts = {
//       by: function($el) {
//         return $el.data('title').toLowerCase();
//       }
//     };
//   }
// 
//   // Filter elements
//   $grid.shuffle('sort', opts);
// });

// Filters elements with a data-title attribute with less than 10 characters
// $('#grid').shuffle('shuffle', function($el, shuffle) {
//   return $el.data('title').length < 10;
// });
// 
// // Advanced filtering
// $('.js-shuffle-search').on('keyup change', function() {
//   var val = this.value.toLowerCase();
//   $grid.shuffle('shuffle', function($el, shuffle) {
// 
//     // Only search elements in the current group
//     if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
//       return false;
//     }
// 
//     var text = $.trim( $el.find('.picture-item__title').text() ).toLowerCase();
//     return text.indexOf(val) !== -1;
//   });
// });
