// Ministry of Education - Tala

$(document).ready(function() {
    $('.status-wrapper').on('mouseenter', '.status-index', function(event) {
        var status = $(this).data('tooltip');
        var tooltip = $('<div class="status-index-tooltip">' + status + '<div class="status-index-arrow"></div></div>');
        $(this).append(tooltip);
    });
    $('.status-wrapper').on('mouseleave', '.status-index', function(event) {
        $(".status-index-tooltip").remove();
    });
});