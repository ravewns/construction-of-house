$('.slider').slick({
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: '250px',
    slidesToShow: 1,
    speed: 500,
    dots: true,
});

//
// let swiper = new Swiper(".mySwiper", {
//     grabCursor: true,
//     effect: "creative",
//     slidesPerView: "auto",
//     centeredSlides: true,
//     slidesPerView: 3,
//     initialSlide: 1,
//     loop: true,
//     creativeEffect: {
//         prev: {
//             translate: ['-40%', 0, 0],
//             scale: 0.7
//         },
//         next: {
//             translate: ["40%", 0, 0],
//             scale: 0.7
//         }
//     }
// });


new WOW({
    animateClass: 'animate__animated',
}).init();

$(document).ready(function () {
    $('.image-link').magnificPopup({type: 'image'});
});

$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});


$( "#menuOpenButton" ).click(function() {
    $( "#menuOpen" ).fadeIn( "slow", function() {
        // Animation complete
    });
});

$( "#menuClose" ).click(function() {
    $( "#menuOpen" ).fadeOut( "slow", function() {
        // Animation complete.
    });
});


let headingElement = document.querySelector('#slick-slide-control00');
headingElement.style.display = 'none';

document.getElementById('menuOpenButton').onclick = function () {
    let menuOpen = document.getElementById('menuOpen');
    document.body.style.overflow = 'hidden'
}

document.getElementById('menuClose').onclick = function () {
    let menuClose = document.getElementById('menuOpen');
    document.body.style.overflow = 'auto'
}

document.getElementById('excurs-btn').onclick = function () {
    let popup = document.getElementById('excurs-popup');
    let popupback = document.getElementById('popup-back')
    popup.style.display = 'flex';
    popupback.style.display = 'block';
}

document.getElementById('popupClose').onclick = function () {
    let popup = document.getElementById('excurs-popup');
    let popupback = document.getElementById('popup-back')
    popup.style.display = 'none';
    popupback.style.display = 'none';
}


document.getElementById('dops-projects').onclick = function () {
    let dopsOpen = document.getElementById('project-dops');
    let dopsClose = document.getElementById('next-arrow')
    dopsOpen.style.display = 'block';
    dopsClose.style.display = 'none';
}


document.getElementById('call').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn2').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn3').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn1-1').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn1-2').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}

document.getElementById('mainbtn1-2').onclick = function () {
    const consult = document.getElementById('consult');
    consult.scrollIntoView({behavior: "smooth"});
}


$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let checkbox_cons = $('#checkbox-cons')
    let hasError = false;

    let element = document.getElementById("name");
    let element2 = document.getElementById("phone");
    let element3 = document.getElementById("checkbox-text");
    element.style.borderColor = "white";
    element2.style.borderColor = "white";
    element3.style.color = "white";
    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        hasError = true;
        let element = document.getElementById("name");
        element.style.borderColor = "red";
    }

    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        let element = document.getElementById("phone");
        element.style.borderColor = "red";
    }

    if (checkbox_cons.prop("checked") === false) {
        hasError = true;
        let element = document.getElementById("checkbox-text");
        element.style.color = "red";
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { name: name.val(), phone: phone.val() }
        })
            .done(function ( msg ) {
                if(msg.success) {
                    $('#name').val('');
                    $('#phone').val('');
                    alert('Возникла ошибка, попробуйте ещё раз через пару минут');
                } else {
                    let info = document.getElementById("cons-info")
                    let infoOk = document.getElementById("cons-info-ok")
                    info.style.display = 'none';
                    infoOk.style.display = 'block';
                }
            });
    }
})


$('#excurs-btn2').click(function () {
    let name2 = $('#name2');
    let phone2 = $('#phone2');
    let hasError = false;

    let element = document.getElementById("name2");
    let element2 = document.getElementById("phone2");
    element.style.borderColor = "white";
    element2.style.borderColor = "white";

    $('.error-input').hide();

    if (!name2.val()) {
        name2.next().show();
        hasError = true;
        let element = document.getElementById("name2");
        element.style.borderColor = "red";
    }

    if (!phone2.val()) {
        phone2.next().show();
        hasError = true;
        let element = document.getElementById("phone2");
        element.style.borderColor = "red";
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { name: name2.val(), phone: phone2.val() }
        })
            .done(function ( msg ) {
                if(msg.success) {
                    let inputs = document.getElementById("popup-info")
                    let popupok = document.getElementById("popup-ok")
                    inputs.style.display = 'none';
                    popupok.style.display = 'block';
                } else {
                    $('#name2').val('');
                    $('#phone2').val('');
                    alert('Возникла ошибка, попробуйте ещё раз через пару минут');
                }
            });
    }
})




