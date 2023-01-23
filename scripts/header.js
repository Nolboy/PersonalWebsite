function mobileCtr() {
    $('.bar-div').css({
        'display': 'none'
    });

    $('.mobile-header-ctr').css({
        'width': '100%',
        'opacity': '1',
        'transition': '0.5s'
    });

    $('.mobile-ul-ctr').css({
        'display': 'block',
        'opacity': '1',
        'transition': '0.5s'
    });

    $('.content-ctr').css({
        'display': 'none'
    });

    setTimeout(function () {
        $('.x-ctr').css({
            'opacity': '1',
            'transition': '1s'
        });
    }, 800);
}

function closeMobileNav() {
    $('.x-ctr').css({
        'opacity': '0',
        'transition': '0.5s'
    });

    setTimeout(() => {
        $('.mobile-ul-ctr').css({
            'opacity': '0',
            'transition': '0.5s'
        });
    }, 400);

    setTimeout(function () {
        $('.mobile-header-ctr').css({
            'width': '0',
            'opacity': '0',
            'transition': '0.5s'
        });

        $('.mobile-ul-ctr').css({
            'display': 'none'
        });

        $('.content-ctr').css({
            'display': 'block'
        });

        $('.bar-div').css({
            'display': 'block'
        });
    }, 800);

    // $('.mobile-header-ctr').css({
    //     'width': '0',
    //     'opacity': '0',
    //     'transition': '0.5s'
    // });

    // $('.mobile-ul-ctr').css({
    //     'opacity': '0',
    //     'transition': '0.5s'
    // });

    // $('.content-ctr').css({
    //     'display': 'block'
    // });

    // setTimeout(function () {
    //     $('.mobile-header-ctr').css({
    //         'display': 'none'
    //     });

    //     $('.bar-div').css({
    //         'display': 'block'
    //     });

    //     $('.mobile-ul-ctr').css({
    //         'display': 'none'
    //     });
    // }, 800);

    // All of these values still need changed

    // Still need to remove bullets from NAV

    // Make NAV look a little better
}