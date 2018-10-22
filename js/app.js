/* Theme Name: Landsay - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main Js file of the template
*/

! function($) {
    "use strict";

    var KivoxApp = function() {};

    KivoxApp.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },
    
    KivoxApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    KivoxApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({ offset: 70 });
    },

    KivoxApp.prototype.initTestiMonial = function() {
         $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    KivoxApp.prototype.initCounter = function() {
        // XXX_
        // var a = 0;
        // $(window).scroll(function() {
        //     var oTop = $('#counter').offset().top - window.innerHeight;
        //     if (a == 0 && $(window).scrollTop() > oTop) {
        //         $('.counter-value').each(function() {
        //             var $this = $(this),
        //                 countTo = $this.attr('data-count');
        //             $({
        //                 countNum: $this.text()
        //             }).animate({
        //                     countNum: countTo
        //                 },

        //                 {
        //                     duration: 2000,
        //                     easing: 'swing',
        //                     step: function() {
        //                         $this.text(Math.floor(this.countNum));
        //                     },
        //                     complete: function() {
        //                         $this.text(this.countNum);
        //                         //alert('finished');
        //                     }

        //                 });
        //         });
        //         a = 1;
        //     }
        // });
    },

    KivoxApp.prototype.initTestiMonial = function() {
         $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    KivoxApp.prototype.initMfpVideo = function() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    KivoxApp.prototype.initBacktoTop = function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    KivoxApp.prototype.initContact = function() {
         $('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .before('<img src="images/ajax-loader.gif" class="contact-loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;

        });
    },

    KivoxApp.prototype.initTickers = function() {
        let tickers = { 
            1: 'BTC',
            1027: 'ETH',
            //52: 'XRP',
            1831: 'BCH',
            1765: 'EOS',
            512: 'STELLAR',
            2: 'LTC',
            825: 'USDT',
            2010: 'ADA',
            // 1720: 'IOTA',
            1958: 'TRON',
            328: 'XMR',
            131: 'DASH',
            1376: 'NEO',
            1321: 'ETC',
            1839: 'BNB',
            873: 'NEM',
            3077: 'VET',
            2011: 'XTZ',
            1437: 'ZEC'
        }
        let urlData = 'https://widgets.coinmarketcap.com/v2/ticker/{}/?ref=widget&convert=USD';
        let urlImg = 'https://s2.coinmarketcap.com/static/img/coins/32x32/{}.png';
        
        function procData(body) {
            let mainData = body["data"];
            let data = mainData["quotes"]["USD"];
            let price = data["price"];
            let change = data["percent_change_24h"];
    
            return [data["price"], data["percent_change_24h"], mainData["name"], mainData["symbol"]];
        }

        function getData(url) {
            return fetch(url, {referrerPolicy: "no-referrer"})
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    return procData(myJson);
                });
        }

        let b = `
        <div class="ticker__item">
            <img src="{URL}" alt="">
            <a>{SYM} \${PRICE} </a><a class="{CHANGEDIFF}">{CHANGE}%</a>
        </div>
        `;

        Promise.all(Object.entries(tickers).map((thisData) => {
            return getData(urlData.replace("{}", thisData[0].toString()))
                .then(function (data) {
                    let image = urlImg.replace('{}', thisData[0].toString());
                    let change = data[1] < 0 ? "changedown" : "changeup";
                    let element = b.replace("{URL}", image)
                        .replace("{SYM}", data[3])
                        .replace("{PRICE}", data[0].toFixed(2).toString())
                        .replace("{CHANGEDIFF}", change)
                        .replace("{CHANGE}", data[1].toString());

                    //let htmlElement = $.parseHtml(element);
                    $("#ticker").append(element);
                })
        }))
    }

    KivoxApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTestiMonial();
        this.initMfpVideo();
        this.initCounter();
        this.initContact();
        this.initBacktoTop();
        this.initTickers();
    },
    //init
    $.KivoxApp = new KivoxApp, $.KivoxApp.Constructor = KivoxApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.KivoxApp.init();
}(window.jQuery);
