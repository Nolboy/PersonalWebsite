const renderTxt = document.getElementById('p1-txt');
const renderGradeTxt = document.getElementById('gradeSystem-txt');
const renderSpaceTxt = document.getElementById('spacex-txt');
const renderCalc = document.getElementById('calculator-txt');
const renderResp = document.getElementById('responsive-txt');

const content = `Hello user, I made this Gameboy just to show off
my programming skills. I thought it would be a
cool idea to make a project navigation through a Gameboy.
If you don't like this view, Click Here to
go to the projects page.`;

const gradeSystemTxt = `This application is my biggest
project yet. This project shows off my true skills for being a
Full-Stack Developer.`;

const spacexTxt = `This is a clone of SpaceX's website.  I also made this application responsive friendly.`;

const calculatorTxt = `This was the first app that I made using vanilla JavaScript.  This calculator is capable of doing everything a basic calculator would do.  It's just missing a clear button...`;

const responsiveTxt = `I made this application to show off some more of my responsive skills.`

let i = 0;
let navState = 1;
let gameboyState = 0;
let optState = 1;
var check;

if (navState === 1) {
    $('.innerScreen-navBar1').toggleClass('navBarToggle');
    $('.innerScreen-navBar2').removeClass('navBarToggle');
    $('.innerScreen-navBar3').removeClass('navBarToggle');
    $('.innerScreen-navBar4').removeClass('navBarToggle');
}

if (optState === 1) {
    $('.gradeSystem-opt1').toggleClass('selectCtr-toggle');
    $('.spacex-opt1').toggleClass('selectCtr-toggle');
    $('.calculator-opt1').toggleClass('selectCtr-toggle');
    $('.responsive-opt1').toggleClass('selectCtr-toggle');
}

document.querySelector('#a-btn').disabled = true;
document.querySelector('#dpad-left').disabled = true;
document.querySelector('#dpad-right').disabled = true;
document.querySelector('#dpad-down').disabled = true;
document.querySelector('#dpad-up').disabled = true;
document.querySelector('#select-btn').disabled = false;
document.querySelector('#start-btn').disabled = false;

// Controls
function dpadLeft() {
    alert('Dpad Left');
};

function dpadUp() {
    if (gameboyState === 3) {
        optState--;
        if (check === 'GradeSystem') {
            if (optState === 1) {
                $('.gradeSystem-opt1').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.gradeSystem-opt2').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt1').removeClass('selectCtr-toggle');
            }

            if (optState === 0) {
                optState = 2
                $('.gradeSystem-opt2').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt1').removeClass('selectCtr-toggle');
            }
        };

        if (check === 'SpaceX Clone (Responsive)') {
            if (optState === 1) {
                $('.spacex-opt1').toggleClass('selectCtr-toggle');
                $('.spacex-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.spacex-opt2').toggleClass('selectCtr-toggle');
                $('.spacex-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 0) {
                optState = 2
                $('.spacex-opt2').toggleClass('selectCtr-toggle');
                $('.spacex-opt1').removeClass('selectCtr-toggle');
            };
        };

        if (check === 'Calculator') {
            if (optState === 1) {
                $('.calculator-opt1').toggleClass('selectCtr-toggle');
                $('.calculator-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.calculator-opt2').toggleClass('selectCtr-toggle');
                $('.calculator-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 0) {
                optState = 2
                $('.calculator-opt2').toggleClass('selectCtr-toggle');
                $('.calculator-opt1').removeClass('selectCtr-toggle');
            };
        };

        if (check === 'Responsive Web Clone') {
            if (optState === 1) {
                $('.responsive-opt1').toggleClass('selectCtr-toggle');
                $('.responsive-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.responsive-opt2').toggleClass('selectCtr-toggle');
                $('.responsive-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 0) {
                optState = 2
                $('.responsive-opt2').toggleClass('selectCtr-toggle');
                $('.responsive-opt1').removeClass('selectCtr-toggle');
            };
        };
    };

    if (gameboyState === 2) {
        navState--;
        if (navState === 1) {
            $('.innerScreen-navBar1').toggleClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
        }
        if (navState === 2) {
            $('.innerScreen-navBar2').toggleClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
        }
        if (navState === 3) {
            $('.innerScreen-navBar3').toggleClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
        }
        if (navState === 4) {
            $('.innerScreen-navBar4').toggleClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
        }

        if (navState === 0) {
            navState = 4;
            $('.innerScreen-navBar4').toggleClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
        }
    };
};

function dpadRight() {
    alert('Dpad right');
};

function dpadDown() {
    if (gameboyState === 3) {
        optState++;
        if (check === 'GradeSystem') {
            if (optState === 1) {
                $('.gradeSystem-opt1').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.gradeSystem-opt2').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 3) {
                optState = 1;
                $('.gradeSystem-opt1').toggleClass('selectCtr-toggle');
                $('.gradeSystem-opt2').removeClass('selectCtr-toggle');
            };
        };

        if (check === 'SpaceX Clone (Responsive)') {
            if (optState === 1) {
                $('.spacex-opt1').toggleClass('selectCtr-toggle');
                $('.spacex-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.spacex-opt2').toggleClass('selectCtr-toggle');
                $('.spacex-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 3) {
                optState = 1;
                $('.spacex-opt1').toggleClass('selectCtr-toggle');
                $('.spacex-opt2').removeClass('selectCtr-toggle');
            };
        };

        if (check === 'Calculator') {
            if (optState === 1) {
                $('.calculator-opt1').toggleClass('selectCtr-toggle');
                $('.calculator-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.calculator-opt2').toggleClass('selectCtr-toggle');
                $('.calculator-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 3) {
                optState = 1;
                $('.calculator-opt1').toggleClass('selectCtr-toggle');
                $('.calculator-opt2').removeClass('selectCtr-toggle');
            };
        };

        if (check === 'Responsive Web Clone') {
            if (optState === 1) {
                $('.responsive-opt1').toggleClass('selectCtr-toggle');
                $('.responsive-opt2').removeClass('selectCtr-toggle');
            };

            if (optState === 2) {
                $('.responsive-opt2').toggleClass('selectCtr-toggle');
                $('.responsive-opt1').removeClass('selectCtr-toggle');
            };

            if (optState === 3) {
                optState = 1;
                $('.responsive-opt1').toggleClass('selectCtr-toggle');
                $('.responsive-opt2').removeClass('selectCtr-toggle');
            };
        };
    };

    if (gameboyState === 2) {
        navState++;
        if (navState === 1) {
            $('.innerScreen-navBar1').toggleClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
        };

        if (navState === 2) {
            $('.innerScreen-navBar2').toggleClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
        };

        if (navState === 3) {
            $('.innerScreen-navBar3').toggleClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
        };

        if (navState === 4) {
            $('.innerScreen-navBar4').toggleClass('navBarToggle');
            $('.innerScreen-navBar1').removeClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
        };

        if (navState === 5) {
            navState = 1;
            $('.innerScreen-navBar1').toggleClass('navBarToggle');
            $('.innerScreen-navBar2').removeClass('navBarToggle');
            $('.innerScreen-navBar3').removeClass('navBarToggle');
            $('.innerScreen-navBar4').removeClass('navBarToggle');
        };
    };
};

function bBtn() {
    if (gameboyState === 3) {
        if (check === 'GradeSystem') {
            $('.allProjects-ctr').hide();
            $('.gradeSystem-select-ctr').hide();
            $('.innerScreen-navigation').show();
            gameboyState = 2;
            renderGradeTxt.innerHTML = "";
            return;
        } else if (check === 'SpaceX Clone (Responsive)') {
            $('.allProjects-ctr').hide();
            $('.spacex-select-ctr').hide();
            $('.innerScreen-navigation').show();
            gameboyState = 2;
            renderSpaceTxt.innerHTML = "";
            return;
        } else if (check === 'Calculator') {
            $('.gradeSystem-txt').remove();
            $('.allProjects-ctr').hide();
            $('.gradeSystem-select-ctr').hide();
            $('.innerScreen-navigation').show();
            gameboyState = 2;
            renderCalc.innerHTML = "";
            return;
        } else if (check === 'Responsive Web Clone') {
            $('.gradeSystem-txt').remove();
            $('.allProjects-ctr').hide();
            $('.gradeSystem-select-ctr').hide();
            $('.innerScreen-navigation').show();
            gameboyState = 2;
            renderResp.innerHTML = "";
            return;
        };
    };
};

function aBtn() {
    if (gameboyState === 3) {
        if (check === 'GradeSystem') {
            const optValue = document.getElementById(`gradeOpt-${optState}`).innerHTML;
            if (optValue === 'OPEN APP') {
                window.open('https://github.com/Nolboy/GradeSystem');
            };

            if (optValue === 'BACK') {
                // $('.gradeSystem-txt').remove();
                $('.allProjects-ctr').hide();
                $('.gradeSystem-select-ctr').hide();
                $('.innerScreen-navigation').show();
                gameboyState = 2;
                renderGradeTxt.innerHTML = "";
                return;
            };
        };

        if (check === 'SpaceX Clone (Responsive)') {
            const optValue = document.getElementById(`gradeOpt-${optState}`).innerHTML;  //Change gradeOpt id
            if (optValue === 'OPEN APP') {
                window.open('https://github.com/Nolboy/ResponsiveWebsite01');
            };

            if (optValue === 'BACK') {
                // $('.spacex-txt').remove();
                $('.allProjects-ctr').hide();
                $('.spacex-select-ctr').hide();
                $('.innerScreen-navigation').show();
                gameboyState = 2;
                renderSpaceTxt.innerHTML = "";
                return;
            };
        };

        if (check === 'Calculator') {
            const optValue = document.getElementById(`gradeOpt-${optState}`).innerHTML; //Change gradeOpt id
            if (optValue === 'OPEN APP') {
                window.open('https://github.com/Nolboy/calculator');
            };

            if (optValue === 'BACK') {
                $('.gradeSystem-txt').remove();
                $('.allProjects-ctr').hide();
                $('.gradeSystem-select-ctr').hide();
                $('.innerScreen-navigation').show();
                gameboyState = 2;
                renderCalc.innerHTML = "";
                return;
            };
        };

        if (check === 'Responsive Web Clone') {
            const optValue = document.getElementById(`gradeOpt-${optState}`).innerHTML; //Change gradeOpt id
            if (optValue === 'OPEN APP') {
                window.open('https://github.com/Nolboy/Nolboy_web_copy');
            };

            if (optValue === 'BACK') {
                $('.gradeSystem-txt').remove();
                $('.allProjects-ctr').hide();
                $('.gradeSystem-select-ctr').hide();
                $('.innerScreen-navigation').show();
                gameboyState = 2;
                renderResp.innerHTML = "";
                return;
            };
        };
    };

    if (gameboyState === 2) {
        //Need to check if navBarToggle is true
        check = document.getElementById(`nav${navState}`).innerHTML;

        if (check === 'GradeSystem') {

            gameboyState = 3;
            alert('Gameboy State: ' + gameboyState);

            $('.innerScreen-navigation').hide();
            $('.allProjects-ctr').css({
                'display': 'block'
            });

            $('.description-ctr').css({
                'display': 'block'
            });

            const intervalId2 = setInterval(function () {
                renderGradeTxt.innerHTML += gradeSystemTxt[i];
                i++;

                if (i === gradeSystemTxt.length) {
                    clearInterval(intervalId2);
                    $('.hideMenu-p2').css({
                        "display": "block",
                        "border": "solid black 1px",
                        "border-style": "dotted",
                        "width": "80%",
                        "margin": "auto",
                        "margin-top": "10px"
                    });
                    $('.gradeSystem-select-ctr').css({
                        'display': 'block'
                    });
                }
            }, 10);
        };

        if (check === 'SpaceX Clone (Responsive)') {

            gameboyState = 3;
            alert('Gameboy State: ' + gameboyState);

            $('.innerScreen-navigation').hide();
            $('.allProjects-ctr').css({
                'display': 'block'
            });

            $('.description-ctr').css({
                'display': 'block'
            });

            const intervalId3 = setInterval(function () {
                renderSpaceTxt.innerHTML += spacexTxt[i];
                i++;

                if (i === spacexTxt.length) {
                    clearInterval(intervalId3);
                    $('.hideMenu-p2').css({
                        "display": "block",
                        "border": "solid black 1px",
                        "border-style": "dotted",
                        "width": "80%",
                        "margin": "auto",
                        "margin-top": "10px"
                    });
                    $('.spacex-select-ctr').css({
                        'display': 'block'
                    });
                }
            }, 10);
        };

        if (check === 'Calculator') {

            gameboyState = 3;
            alert('Gameboy State: ' + gameboyState);

            $('.innerScreen-navigation').hide();
            $('.allProjects-ctr').css({
                'display': 'block'
            });

            $('.description-ctr').css({
                'display': 'block'
            });

            const intervalId4 = setInterval(function () {
                renderCalc.innerHTML += calculatorTxt[i];
                i++;

                if (i === calculatorTxt.length) {
                    clearInterval(intervalId4);
                    $('.hideMenu-p2').css({
                        "display": "block",
                        "border": "solid black 1px",
                        "border-style": "dotted",
                        "width": "80%",
                        "margin": "auto",
                        "margin-top": "10px"
                    });
                    $('.calculator-select-ctr').css({
                        'display': 'block'
                    });
                }
            }, 10);
        };

        if (check === 'Responsive Web Clone') {

            gameboyState = 3;
            alert('Gameboy State: ' + gameboyState);

            $('.innerScreen-navigation').hide();
            $('.allProjects-ctr').css({
                'display': 'block'
            });

            $('.description-ctr').css({
                'display': 'block'
            });
            const intervalId5 = setInterval(function () {
                renderResp.innerHTML += responsiveTxt[i];
                i++;

                if (i === responsiveTxt.length) {
                    clearInterval(intervalId5);
                    $('.hideMenu-p2').css({
                        "display": "block",
                        "border": "solid black 1px",
                        "border-style": "dotted",
                        "width": "80%",
                        "margin": "auto",
                        "margin-top": "10px"
                    });
                    $('.responsive-select-ctr').css({
                        'display': 'block'
                    });
                }
            }, 10);
        };
    };

    if (gameboyState === 1) {
        $(".innerScreen-hideMenu").remove();
        $(".innerScreen-navigation").css({
            "display": "block"
        });

        document.querySelector('#select-btn').disabled = true;
        document.querySelector('#start-btn').disabled = true;
        document.querySelector('#dpad-down').disabled = false;
        document.querySelector('#dpad-up').disabled = false;

        gameboyState = 2;
        alert('Gameboy State: ' + gameboyState);
    };

    i = 0;
};

function startBtn() {
    if (gameboyState === 0) {
        document.querySelector('#start-btn').disabled = true

        $('#start-btn').css({
            'border': 'solid black 2px'
        });

        $('#select-btn').css({
            'border': 'solid black 2px'
        });

        $(".innerScreen-pressStart-ctr").remove();
        $(".innerScreen-welcome-ctr").remove();
        $(".innerScreen-hideMenu").css({
            "display": "block"
        });

        const intervalId = setInterval(function () {
            renderTxt.innerHTML += content[i];
            i++;

            if (i === content.length) {
                clearInterval(intervalId);
                $('.hideMenu-p2').css({
                    "display": "block",
                    "border": "solid black 1px",
                    "border-style": "dotted",
                    "width": "80%",
                    "margin": "auto",
                    "margin-top": "10px"
                });
                document.querySelector('#a-btn').disabled = false;
            }
        }, 10);

        gameboyState = 1;
        alert('Gameboy State: ' + gameboyState);
    };
};