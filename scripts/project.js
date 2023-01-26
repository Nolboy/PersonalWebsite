function toggleCtr1() {
    $('.hidden-ctr1').css({ "display": "block" })
    $('.hidden-ctr2').css({ "display": "block" })
    $('.fa-1').toggleClass('arrow-toggle');
    setTimeout(function () {
        $('.hidden-ctr2').toggleClass('hidden-ctr-toggle');
        $('.hidden-ctr1').toggleClass('hidden-ctr-toggle');
    }, 10);
}

function toggleCtr2() {
    $('.hidden-ctr3').css({ "display": "block" })
    $('.hidden-ctr4').css({ "display": "block" })
    $('.fa-2').toggleClass('arrow-toggle');
    setTimeout(function () {
        $('.hidden-ctr3').toggleClass('hidden-ctr-toggle');
        $('.hidden-ctr4').toggleClass('hidden-ctr-toggle');
    }, 10);
}

function toggleCtr3() {
    $('.hidden-ctr5').css({ "display": "block" })
    $('.hidden-ctr6').css({ "display": "block" })
    $('.fa-3').toggleClass('arrow-toggle');
    setTimeout(function () {
        $('.hidden-ctr5').toggleClass('hidden-ctr-toggle');
        $('.hidden-ctr6').toggleClass('hidden-ctr-toggle');
    }, 10);
}

function toggleCtr4() {
    $('.hidden-ctr7').css({ "display": "block" })
    $('.hidden-ctr8').css({ "display": "block" })
    $('.fa-4').toggleClass('arrow-toggle');
    setTimeout(function () {
        $('.hidden-ctr7').toggleClass('hidden-ctr-toggle');
        $('.hidden-ctr8').toggleClass('hidden-ctr-toggle');
    }, 10);
}