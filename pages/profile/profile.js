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
		$(this).attr('aria-expanded', function(_, attr){
			return !(attr == 'true')
		});
        $(this).parent().find('.collapsed, .expanded').toggleClass('collapsed').toggleClass('expanded');
        $(this).toggleClass('modal-side-item-expand modal-side-item-collapse');
    });

	//right sidebar profile card - expand and collapse students details
    $('.profile-card-expand').on('click', function(event) {
		$(this).attr('aria-expanded', function(_, attr){
			return !(attr == 'true')
		});
        $(this).closest('.profile-card').find('.collapsed, .expanded').toggleClass('collapsed').toggleClass('expanded');
        $(this).toggleClass('profile-card-expand profile-card-collapse');
    });

    //profile fields area - expand and collapse lines in the table
    $('.profile-fields-full').on('click', function(event) {
		$(this).attr('aria-expanded', function(_, attr){
			return !(attr == 'true')
		});
        $(this).closest('.profile-fields-line').find('.profile-fields-list').toggleClass('expanded');
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


});