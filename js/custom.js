$(window).on('load', function () {
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });

    // Filter button click handler
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({ filter: data });
    });

    // 👉 Trigger click on the first filter item to show it on page load
    $('.filters_menu li:first-child').trigger('click');
});
