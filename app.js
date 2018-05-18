(function ($) {

    $(document).ready(function ($) {
        
        $('.block-content.builder').sortable({
            placeholder: 'ui-state-highlight',
            over: function () {
                $('.placeholder').hide();
            },
            out: function() {
                $('.placeholder').hide();
            }
        });

        $('.builder-tools ul li.draggables').on('click', function () {
            $('.builder-tools ul li.draggables').find('.popsover').removeClass('toggled');
            $(this).find('.popsover').toggleClass('toggled');
        });

        $('.draggable').draggable({
            connectToSortable: '.block-content.builder',
            cursor: 'pointer',
            helper: 'clone',
            revert: 'invalid'
        });

    });

}(window.jQuery));