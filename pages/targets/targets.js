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

    //right sidebar profile card - expand and collapse students details
    $('.profile-card-expand').on('click', function(event) {
		$(this).attr('aria-expanded', function(_, attr){
			return !(attr == 'true')
		});
        $(this).closest('.profile-card').find('.collapsed, .expanded').toggleClass('collapsed').toggleClass('expanded');
        $(this).toggleClass('profile-card-expand profile-card-collapse');
    });

    //toggle collapse instructions list on the left side
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

    //fields list - opened vertically
    $('.target-view').on('click', function(event) {
        var $details = $(this).closest('.target-details').find('.target-fields');
        $(this).attr('aria-expanded', function(_, attr){
            return !(attr == 'true')
        });
        // $('.target-fields').addClass('collapsed', 'overflow-hidden');
        $details.toggleClass('collapsed');

        if ( !$details.hasClass('overflow-hidden') ) {
            $details.toggleClass('overflow-hidden');
        }
        else {
            setTimeout(function () {
                $details.toggleClass('overflow-hidden');
            }, 1000) //transition's duration
        }
    });

    //tooltip on hover on filled cell
    $('.target-calendar-cell-link').on('focus', function(event) {
        $(this).closest('.filled').find('.target-note').attr('aria-hidden', 'false');
    });
    $('.target-calendar-cell-link').on('focusout', function(event) {
        $(this).closest('.filled').find('.target-note').attr('aria-hidden', 'true');
    })

});