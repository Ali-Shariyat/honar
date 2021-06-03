$(window).on('ready load resize orientationchange', function (e) {
    if ($(window).width() <= 1260) {
        $(".bottom-header .search").on("click", $(this), function (e) {
            $(".search-small").stop().fadeToggle();
            e.stopPropagation();
        });
    }
    else {
    }
});
$(".register input").focus(function () {
    if ($(this).val() == "") {
        $(this).addClass("Errore").removeClass("Ok");
        $(this).siblings("p").addClass("active");
    } else {
        $(this).removeClass("Errore").addClass("Ok");
        $(this).siblings("p").removeClass("active");
    }
}).focusout(function () {
    if ($(this).val() == "") {
        $(this).addClass("Errore").removeClass("Ok");
        $(this).siblings("p").addClass("active");
    } else {
        $(this).removeClass("Errore").addClass("Ok");
        $(this).siblings("p").removeClass("active");
    }
});
$(".Register-forms li").on("click", "button", function () {
    var $this = $(this).attr("data-active");
    var ActiveChecked = true;
    if ($this == "active-form-four") {
        if ($(".rePass").val() !== $(".pass").val()) {
            ActiveChecked = false;
            $(".rePass").addClass("Errore").removeClass("Ok");
            $(".rePass").siblings("p").addClass("active");
        }
    }
    $(this).parents("li").find(".input-name-star").each(function () {
        if ($(this).val() == "") {
            ActiveChecked = false;
        }
    });
    if (ActiveChecked === false) {
        $(this).parents("li").find(".input-name-star").each(function () {
            if (!$(this).hasClass("Ok")) {
                $(this).addClass("Errore");
                $(this).siblings("p").addClass("active");
                $(this).parents("li").find(".danger span").addClass("active");
            }
        });
    } else {
        $("." + $this).siblings().removeClass("active");
        $("." + $this).addClass("active");
        if ($("." + $this).parent(".levels")) {
            $(".levels li.active").prevAll("li").addClass("active");
        }
    }
});
$(".register .visibility-icon").mousedown(function () {
    $(this).siblings("input").attr("type", "text")
}).mouseup(function () {
    $(this).siblings("input").attr("type", "password")
})
$(".browse-images  div").click(function () {
    var thisimg = $(this).css("background-image");
    $(".image-one").css("background-image", thisimg)
});


$(document).ready(function () {
    $('select').material_select();
});

$('.chips').material_chip();
$('.chips-initial').material_chip({
    data: [{
        tag: 'Apple',
    }, {
        tag: 'Microsoft',
    }, {
        tag: 'Google',
    }],
});
$('.chips-placeholder').material_chip({
    placeholder: ' وارد کردن برچسب ',
    secondaryPlaceholder: '+برچسب',
});
$('.chips-autocomplete').material_chip({
    autocompleteOptions: {
        data: {
            'Apple': null,
            'Microsoft': null,
            'Google': null
        },
        limit: Infinity,
        minLength: 1
    }

});

$(".visibility-icon").mousedown(function () {
    $(this).siblings("input").attr("type","text")
}).mouseup(function () {
    $(this).siblings("input").attr("type","password")
})

function body() {
    $("html,body").css({
        "overflow": "hidden",
        "width": $(window).width()
    });
}

$(".BlackPage").click(function () {
    $("html,body").css({
        "overflow": "",
        "width": ""
    });
    $(".BlackPage,.SearchBox").fadeOut();
    $(".MenuItems").css("right", "");
});
$(".ButtonCloseMenuS i").click(function () {
    $("html,body").css({
        "overflow": "",
        "width": ""
    });
    $(".MenuItems").css("right", "");
    $(".BlackPage").fadeOut();
});
$(".Menu-icon").click(function () {
    $(".MenuItems").css("right", "0");
    $(".BlackPage").fadeIn();
    body();
});

$(".MenuItems li > div i").click(function () {
    var $this = $(this);
    $this.parent("div").siblings("ul").stop().slideToggle();
    $this.parents("li").siblings("li").children("ul").slideUp();
    $this.parents("li").siblings("li").children("div").children("i").removeClass("OpenCloseMenuS");
    $this.toggleClass("OpenCloseMenuS");
});
$(".search-small").click(function (e) {
    e.stopPropagation();
});
$(".Search-l").on("click", $(this), function (e) {
    $(".search-small").stop().fadeToggle();
    e.stopPropagation();
});
$(window).click(function () {
    $(".search-small").stop().fadeOut();
});

//
// $(".tab-gallery li").click(function () {
//     $(this).addClass("bg-tabs");
//     $(this).siblings().removeClass("bg-tabs");
//     $(".tab-gallery") == $(".information li").attr("data-active")
// })
//




///test

// var header = $(".information > li")
// var $header_one = $(".tab-gallery  > li > span")
// var $header_two = $(".tab-gallery  > li")
// function activing(i) {
//     header.removeClass("active-one").eq(i).addClass("active-one")
//     $header_one.removeAttr("style").eq(i).css("display", "block")
//     $header_two.removeAttr("style").eq(i).css("color", "#68b4d7")
//     console.log(i)
// }
// $(".tab-gallery li").click(function () {
//     activing($(this).index());
// })

//Call the function on load and resize

// $(".select-Regester-2").on("click",$(this),function () {
//     setTimeout(function () {
//         $(".dropdown-content").niceScroll({
//             cursorcolor:"aquamarine",
//             cursorwidth:"16px"
//         });
//     },500);
//
// });



///test

var containerEl1 = document.querySelector('[data-ref]');
var config = {
    load: {filter: ".one"},
    "animation": {
        "duration": 350,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade translateY(20%)"
    },
    classNames: {
        elementFilter: 'bg-tabs'
    },
    controls: {
        scope: 'local'
    },

};

var mixer1 = mixitup(containerEl1, config);


$(".add-card-to-gallery-tab span").click(function () {
    var newElementHtml = $(".null").html();
    var mixDiv = $(newElementHtml).addClass("mix").addClass($(".mixitup-bg-tabs-active").attr("data-filter").replace(".",""));
    mixer1.append(mixDiv);
});
//
// $(".tab-gallery li").click(function () {
//     mixer1.forceRefresh();
//     mixer2.forceRefresh();
// });
$(document).on('click',".card-text-demo i",function (event) {
    $(this).parents(".card-text").find(".card-text-edit input").val($(this).siblings("p").text());
    $(this).parents(".card-text").find(".card-text-edit").fadeIn(100);
    $(this).parents(".card-text").siblings(".card-img").find(".upload-img").fadeIn(100);
    $(this).parents(".card-text").find(".card-text-edit input").focus();
    $(this).parents(".card-gallery").siblings().find(".card-text-edit").fadeOut(100);
    $(this).parents(".card-gallery").siblings().find(".upload-img").fadeOut(100);
    $(this).parents(".card-gallery").find(".card-img").removeClass("opacity-img");
    $(this).parents(".card-gallery").siblings().find(".card-img").addClass("opacity-img");
    event.stopPropagation();
});

$(document).on("keyup",".card-text-edit input",function( event ) {
    if ( event.which == 13 ) {
        $(this).parents(".card-text").find(".card-text-demo p").text($(this).val());
        $(this).parents(".card-text").find(".card-text-edit").fadeOut();
        $(this).parents(".card-gallery").find(".upload-img").fadeOut(100);
        $(this).parents(".card-gallery").siblings().find(".card-img").removeClass("opacity-img");
        event.preventDefault();
    }
});
$(document).on("click",".card-text-edit i",function (event) {
    $(this).parents(".card-text").find(".card-text-demo p").text($(this).siblings("input").val());
    $(this).parents(".card-text").find(".card-text-edit").fadeOut();
    $(this).parents(".card-gallery").find(".upload-img").fadeOut(100);
    $(this).parents(".card-gallery").siblings().find(".card-img").removeClass("opacity-img");

    event.stopPropagation();
});
$(window).click(function () {
    $(".card-text-demo i").parents(".card-text").find(".card-text-edit").fadeOut(100);
    $(".card-text-demo i").parents(".card-gallery").siblings().find(".upload-img").fadeOut(100);
    $(".card-text-demo i").parents(".card-gallery").siblings().find(".card-img").removeClass("opacity-img");
});





function handleImage(e) {
    var reader = new FileReader();

    if (e.target.files[0] !== undefined) {
        var TypeOfFile = e.target.files[0].type;
        if (!TypeOfFile.search("image")) {

            reader.onload = function (event) {
                var image = new Image();
                image.src = event.target.result;
                image.onload = function () {
                    console.log(e.currentTarget);
                    console.log($(e.currentTarget).parents(".card-img").find("img").attr("src",image.src));
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            Materialize.toast('please select image', 4000);
        }
    } else {
    }
}
$(document).on("change", ".upload-img input", function (event) {
    handleImage(event);
});