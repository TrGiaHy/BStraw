//import LoadMoreProductModule from './modules/load-more.js';

// /****************************/


//LoadMoreProductModule();

import { GetProductThumbnail } from "./modules/get_product_thumbnail.js";
import Product from "./modules/product.js";
import { ChangeTab } from "./modules/tab.js";

GetProductThumbnail();
Product();
ChangeTab();

jQuery(document).ready(function ($) {
    // Form mua hàng
    if ( $('.form-purchase').length > 0 ) {
        // Product info
        const product_info = $('.product-info');
        const product_title = product_info.find('h2.tt').text().trim();

        // Form
        const form_purchase_container = $('.form-purchase');
        const color_field = $('#your-color');
        const product_field = $('#your-product');
        product_field.val( product_title );

        // Color
        if ( $( '.colors-item' ).length > 0 ) {
            color_field.val( $( '.colors-item.active .tabThumbnail' ).text().trim() );

            $( '.colors-item' ).on('click mouseover', '.tabThumbnail', function (e) {
                color_field.val( $(this).text().trim() );
            });
        }
        else {
            color_field.val( 'Màu mặc định' );
        }

        // Popup thanks
        document.addEventListener( 'wpcf7mailsent', function (e) {
            $('.popup-thanks').addClass('open');
        } );

        $('.popup-thanks').on('click', '.popup-close', function (e) {
            $('.popup-thanks').removeClass('open');
            $('.popup-lienhe').removeClass('open');
            $('.wpcf7-response-output').text('');
        });

        // Reset form after submit
        form_purchase_container.on('reset', 'form.wpcf7-form', function (e) {
            e.preventDefault();

            const reset_fields = [
                'your-name',
                'your-email',
                'your-phone',
                'your-message',
            ];

            const form = e.currentTarget;
            
            for ( const field of reset_fields ) {
                form[field].value = '';
            }
        });
    }
});