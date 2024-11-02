export default function CollapseModule() {
    const clBlock = document.querySelectorAll(".collapse-block");
    if (clBlock) {
        clBlock.forEach((item) => {
            const clBody = item.querySelectorAll('.collapse-body');
            const clItems = item.querySelectorAll('.collapse-item')
            if (clBody) {
                $(clBody[0]).slideDown();
                if (clBody[0]) {
                    clBody[0].closest('.collapse-item').classList.add("active");
                }
            }
            if (clItems) {
                clItems.forEach(item => {
                    if (item.classList.contains('active')) {
                        const body = item.querySelector(".collapse-body")
                        $(body).slideDown();
                    }
                })
            }
            const head = item.querySelectorAll('.collapse-head');
            head.forEach(item => {
                item.addEventListener('click', () => {
                    clBody.forEach(item => {
                        $(item).slideUp();
                    })
                    clItems.forEach(item => {
                        $(item).removeClass("active");
                    })
                    const body = item.parentElement.querySelector(".collapse-body")
                    if (body.style.display == "none" || body.style.display == "") {
                        $(body).slideDown();
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp();
                        $(item.parentElement).removeClass("active");
                    }
                })
            })
        });
    }

    $(document).ready(function () {
        // Optimalisation: Store the references outside the event handler:
        var $window = $(window);
        var $pane = $('#pane1');

        function checkWidth() {
            var windowsize = $window.width();
            if (windowsize <= 910) {
                $(".product-filter").remove("active");
                $(".product-filter-wr").hide();
            } else {
                $(".product-filter").add("active");
                // if ($(".product-filter").hasClass("active")) {
                // } else {
                // }

            }
        }
        // Execute on load
        checkWidth();
        // Bind event listener
        $(window).resize(checkWidth);
    });

    // check window size and hide filter when respon
    // $(window).resize(function () {
    //     var windowWidth = $(window).width();

    //     if (windowWidth <= 910) {
    //         $(".product-filter").remove("active");
    //         $(".product-filter-wr").hide();
    //     } else {
    //         if (!$(".product-filter").hasClass("active")) {
    //             $(".product-filter").addClass("active");
    //         }
    //     }
    // });

    // show hide - more content
    $(".js-show-hide").click(function () {
        $(this).toggleClass("is-active");

        // Get text
        let text = $(this).find("span.text");

        if ( $(this).hasClass("is-active") ) {
            text.text( text.data( 'textCollpase' ) );
        }
        else {
            text.text( text.data( 'textMore' ) );
        }

        $(this).closest(".show-hide-content").toggleClass("is-active");
    });
}