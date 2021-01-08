/* Add Custom Code Jquery
 ========================================================*/

jQuery(document).ready(function($) {
    var $demosPreview = $('.so-demos-preview'),
        $demoTabs = $('.so-demo-tabs'),
        demosLoad = false,
        demosShown = false,
        htmlResponse = '';
    $(document).on('click', '.so-show-demos', function(e) {
        e.preventDefault();
        $('body').addClass('so-demos-open');
		
	
        if (demosLoad && demosShown) {
            $demosPreview.addClass('so-preview-open');
            //so_init_nanoScroller();
            return;
        } else if (demosLoad && !demosShown) {
            $demosPreview.addClass('so-preview-open');
            $demoTabs.html(htmlResponse);
            tabs();
            lazyload('.so-demo-tab-item.active .so-lazy');
            //so_init_nanoScroller();
            demosShown = true;
            return;
        } else if (!demosLoad && !demosShown) {
            $demosPreview.addClass('so-preview-open');
            so_get_demos(showDemos = true);
        }
    });
	
    $(document).on('click', '.so-close-demos-preview', function() {
        $demosPreview.removeClass('so-preview-open');
        $('body').removeClass('so-demos-open');
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27) $('.so-close-demos-preview').click();
    });
    $(document).on('mouseenter mouseleave mousemove', '.so-hover-open', function(e) {
        lazyload('.so-demos-dropdown-wrapper .so-lazy');
    });
	
    $(document).on('click', '.so-category-list .so-category-item', function() {
        var categoryTabId = $(this).attr('id'),
            tab = $('.so-demo-tab-item[data-tab-id="' + categoryTabId + '"]');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        tab.siblings().removeClass('active');
        tab.addClass('active');
        //so_init_nanoScroller();
        lazyload('.so-demo-tab-item.active .so-lazy');
    });
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    function so_get_demos(showDemos) {
        $demosPreview.addClass('so-demos-loading');
        $.ajax({
            url: plugin_obj.ajax_url,
            data: {
                action: 'get_demos'
            },
            method: "POST",
            dataType: "html",
            success: function(response) {
                htmlResponse = response;
                demosLoad = true;
                if (showDemos) {
                    $demoTabs.html(htmlResponse);
                    tabs();
                    lazyload('.so-demo-tab-item.active .so-lazy');
                    demosShown = true;
                }
                setTimeout(function() {
                    //so_init_nanoScroller();
                }, 150);
                $demosPreview.removeClass('so-demos-loading');
                $demosPreview.addClass('so-demos-loaded');
            },
            error: function() {
                console.log('ajax error');
            }
        });
    }

    function so_init_nanoScroller() {
        if ($(window).width() < 1024) return;
        $('.so-scroll').nanoScroller({
            paneClass: 'so-scroll-pane',
            sliderClass: 'so-scroll-slider',
            contentClass: 'so-scroll-content',
            preventPageScrolling: false
        });
    }

    function tabs() {
        var $firstTabEl = $('.so-category-list .so-category-item').first(),
            firstTabEl_id = $firstTabEl.attr('id');
        $firstTabEl.addClass('active');
        $('.so-demo-tab-item[data-tab-id="' + firstTabEl_id + '"]').addClass('active');
    }

    function lazyload($selector) {
        var lazy = $($selector);
        lazy.each(function() {
            if (!$(this).parent().hasClass('so-image-loaded')) {
                var ImageSrc = $(this).data('lazy-original');
                $(this).attr('src', ImageSrc);
                $(this).parent().addClass('so-image-loading');
                $(this).on('load', function() {
                    $(this).parent().removeClass('so-image-loading');
                    $(this).parent().addClass('so-image-loaded');
                })
            }
        })
    }
    $('body').addClass('so-demos-ready');
});;