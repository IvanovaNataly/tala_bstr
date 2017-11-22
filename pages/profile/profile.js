// Ministry of Education - Tala

$(document).ready(function() {

	//status indication tooltip on hover
    $('.status-wrapper').on('mouseenter', '.status-index', function(event) {
        var status = $(this).data('tooltip');
        var tooltip = $('<div class="status-index-tooltip">' + status + '<div class="status-index-arrow"></div></div>');
        $(this).append(tooltip);
    });
    $('.status-wrapper').on('mouseleave', '.status-index', function(event) {
        $(".status-index-tooltip").remove();
    });

    //modal side bar expand and collapse
	$('.modal-side-item-expand').on('click', function(event) {
		$(this).parent().find('.collapsed, .expanded').toggleClass('collapsed').toggleClass('expanded');
		$(this).toggleClass('modal-side-item-expand modal-side-item-collapse');
	});
});