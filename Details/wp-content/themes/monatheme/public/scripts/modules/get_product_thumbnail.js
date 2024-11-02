/**
 * Lấy danh sách các ảnh khi click màu
 * 
 * @author MONA.Media / Website
 */

export function GetProductThumbnail() {
  jQuery(function ($) {
    if ( $('.tabThumbnail').length > 0 ) {
      const slideTo = ( index ) => {
        const swiper = $('.product-slider-main .swiper')[0].swiper;
        swiper.slideTo( index );
      };

      const activeImage = function (e) {
        const elColorContainer = $(this).parent().parent();

        // Xóa active các thẻ color
        $('.colors-item').removeClass( 'active' );
        
        // Thêm active vào thẻ color hiện tại
        elColorContainer.addClass('active');
        
        // Thêm active vào thẻ thumbnail hiện tại
        slideTo( $(this).data('imageId') );
      };

      $('.colors-item').on('click mouseover', '.tabThumbnail', activeImage);

      $('.product-slider-thumb').on('mouseover', '.swiper-slide', function (e) {
        // Thêm active vào thẻ thumbnail hiện tại
        slideTo( $(this).data('imageId') );
      });
    }
    
  });
}