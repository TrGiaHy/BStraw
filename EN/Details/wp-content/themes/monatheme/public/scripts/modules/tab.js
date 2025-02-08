export function ChangeTab() {
    jQuery(document).ready(function ($) {
        if ( $('.tablinks').length > 0 ) {
            $('.tablinks').on('click', function (e) {
                $('.tablinks').removeClass('active');
                $('.tabcontent').removeClass('active');

                $(this).addClass('active');
                $('#' + $(this).data('id')).addClass('active');
            });
        }
    });
}