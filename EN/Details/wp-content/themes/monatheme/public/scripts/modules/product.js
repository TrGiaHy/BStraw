export default function Product() {
    $(document).ready(function() {
        function ajaxFilterProduct(paged, style, sort, category) {
            $.ajax({
                type: 'POST',
                url: mona_ajax_url.ajaxURL,
                data: {
                    action: 'ajaxFilterProduct',
                    paged: paged,
                    sort: sort,
                    style: style,
                    category: category,
                },
                beforeSend: function() {
                    $('#product-list').addClass('processing');
                },
                success: function(response) {
                    $('#ajax-style').removeClass('product-list product-grid').addClass(style);
                    $('#product-list').html(response.product);
                    $('#product-list').removeClass('processing');
                    $('#ajax-pagination').html(response.pagination);
                }, 
                error: function(error) {
                    console.error('AJAX Error:', error);
                    $('#product-list').removeClass('processing');
                }
            });
        }

        function handlePaginationClick(event) {
            event.preventDefault();
            let paged = $(this).attr('data-href');
            $('#is_paged').val(paged);
            let style = $('#is_style').val() ?? null;
            let sort = $('.re-select-main').val();
            let category = $("#is_category").val() ?? null;
            ajaxFilterProduct(paged, style, sort, category);
        }
        function handleSelect2Click() {
            $('#is_paged').val(1);
            let paged = 1;
            let category = $("#is_category").val() ?? null;
            let style = $('#is_style').val() ?? null;
            let sort = $('.re-select-main').val();
            ajaxFilterProduct(paged, style, sort, category);
        }

        function handleProductStyleClick() {
            $('.product-sort-item').removeClass('active');
            $(this).addClass('active');
            let style = $(this).data('style') ?? null;
            $('#is_style').val(style);
            $('#ajax-style').removeClass('product-list product-grid').addClass(style);
        }
        $('#ajax-pagination').on('click', 'ul.page-numbers li a', handlePaginationClick);
        $('.re-select-main').on('change', handleSelect2Click);
        $('.product-sort-group').on('click', '.product-sort-item', handleProductStyleClick);
    });
}