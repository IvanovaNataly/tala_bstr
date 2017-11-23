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

    //toggle collapse istructions list on the left side
    $('.instructions').find('.flag').on('click', function(event) {
        var $this = $(this);
        $this.attr('aria-expanded', function(_, attr){
            return !(attr == 'true')
        });
        $this.closest('.instructions').toggleClass('expanded');
        if ( $this.hasClass('ready-to-open') ) {
            $this.removeClass('ready-to-open');
        }
        else {
            setTimeout(function () {
                $this.addClass('ready-to-open');
            }, 800)
        }
    });
});