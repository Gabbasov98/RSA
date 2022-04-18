function worksSlider() {
    var swiper = new Swiper('.works .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        navigation: {
            nextEl: '.works .swiper-button-next',
            prevEl: '.works .swiper-button-prev',
        },
    })
}

function profiSlider() {
    var swiper = new Swiper('.profi .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 38,
        navigation: {
            nextEl: '.profi .swiper-button-next',
            prevEl: '.profi .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 38
            },
        }
    })
}

function gallerySlider() {
    var swiper = new Swiper('.gallery .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    })
}

function brandsSlider() {
    var swiper = new Swiper('.brands .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
            nextEl: '.brands .swiper-button-next',
            prevEl: '.brands .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 0
            },
        }
    })
}

function yurSlider() {
    var swiper = new Swiper('.yur .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
            nextEl: '.yur .swiper-button-next',
            prevEl: '.yur .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            1350: {
                slidesPerView: 6,
                spaceBetween: 0
            },
            1500: {
                slidesPerView: 7,
                spaceBetween: 0
            },
        }
    })
}

function saleSlider() {
    var swiper = new Swiper('.sale .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.sale .swiper-button-next',
            prevEl: '.sale .swiper-button-prev',
        },
    })
}

$(document).ready(function() {
    worksSlider()
    profiSlider()
    gallerySlider()
    brandsSlider()
    yurSlider()
    saleSlider()

    $("select").niceSelect()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
    })

    $(".services__tab").click(function() {
        setTab($(this), "services__tab", "services__content")
    })


    $(".works__example").twentytwenty();


    $(".select-brand").change(function() {
        let models = $(this).val().split(',');
        let options = `<option selected hidden>Выберите модель</option>`
        let options2 = `<li data-value="Выберите модель" class="option selected focus">Выберите модель</li>`

        for (let i = 0; i < models.length; i++) {
            options = options + `<option value="">${models[i]}</option>`
        }

        for (let i = 0; i < models.length; i++) {
            options2 = options2 + `<li data-value="" class="option">${models[i]}</li>`
        }
        $(this).parents(".parent-selects").find("select.select-model").html(options)
        $(this).parents(".parent-selects").find(".select-model .list").html(options2)
        $("select").niceSelect()
    })

    $(".seo__btn").click(function() {
        $(this).siblings(".seo__p-hidden").removeClass("seo__p-hidden")
        $(this).hide()
    })

    $(".services__item").click(function() {
        $(this).toggleClass("services__item--active")
    })
});


function setTab(el, tab, tabContent) {
    let path = $(el).attr("data-tab-path")
    $(`.${tab}`).removeClass(`${tab}--active`)
    $(`.${tab}[data-tab-path="${path}"]`).addClass(`${tab}--active`)
    $(`.${tabContent}`).removeClass(`${tabContent}--active`)
    $(`.${tabContent}[data-tab-path="${path}"]`).addClass(`${tabContent}--active`)
}