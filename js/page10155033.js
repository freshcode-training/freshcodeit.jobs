$(document).ready(function() {
});; var div=$("#html5video285478903"); var height=div.width() * 0.5625; div.height(height); var height = div.height(); div.parent().height(height);;$( document ).ready(function() { t396_init('174291083');
});;$(document).ready(function(){setTimeout(function(){if($(window).width()>=980){var e=$(".meetups-swiper .arrow-right"),i=new Swiper(".meetups-swiper",{pagination:{el:".meetups-swiper .progressbar",type:"progressbar"},on:{slideNextTransitionStart:function(){e.addClass("animate-right"),setTimeout(function(){e.removeClass("animate-right")},700)}},grabCursor:!0,centeredSlides:!0,spaceBetween:100});e.on("click",function(){i.isEnd?i.slideTo(0,1e3,!0):i.slideNext(1e3)})}},0)});;$( document ).ready(function() { t396_init('193981925');
});;$( document ).ready(function() { t396_init('193978903');
});;$( document ).ready(function() { t396_init('193980592');
});;$( document ).ready(function() { t396_init('193983111');
});;$( document ).ready(function() { t396_init('193984353');
});;$( document ).ready(function() { t396_init('193984374');
});;$( document ).ready(function() { t396_init('193984978');
});;$(document).ready(function(){ setTimeout(function(){ t702_initPopup('204761444'); }, 500); /* hack for Android */ var ua = navigator.userAgent.toLowerCase(); var isAndroid = ua.indexOf("android") > -1; if(isAndroid) { $('.t-body').addClass('t-body_scrollable-hack-for-android'); $('head').append("<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-hack-for-android {\noverflow: visible !important;\n}\n}\n</style>"); console.log('Android css hack was inited'); }
});;$(document).ready(function() {
});;$(document).ready(function() { setTimeout(function() { $(window).bind('scroll', t_throttle(function(){t354_checkPosition('221666603')})); }, 500);
});;$( document ).ready(function() { t396_init('221312653');
});;function formOpen(e){if($(".form-container, .backdrop").removeClass("close"),$("body, #t-header #rec162445357, #rec168341874").addClass("scroll-lock"),e)$(".main-form .select-form").hide(),$(".main-form form.active").removeClass("active").hide(),$(e).addClass("active").show();else{$(".main-form .select-form").show(),$(".main-form form.active").removeClass("active").hide();var t=$(".main-form .select-form > select").val();$(t).addClass("active").show()}}function formClose(){$(".form-container, .backdrop").addClass("close"),setTimeout(function(){$("body, #t-header #rec162445357, #rec168341874").removeClass("scroll-lock")},500)}function prepareForms(){var e=$("#rec177305317"),t=e.find("form"),o=t.find(".t-select__wrapper");t.addClass("mui-form");t.find(".t-form__submit").addClass("btn");t.find("button").attr("id","main-form-submit"),t.find(".t-input-block").addClass("mui-textfield").last(),t.each(function(){var e=$(this);e.find(".t-input-group_em, .t-input-group_em+.t-input-group_in").wrapAll('<div class="mui-form-half"/>'),e.find(".t-input-block").last().addClass("last-field")}),o.addClass("mui-select"),o.find("select").prop("required",!0),o.find("select>option:first-child").prop({hidden:!0}),$(".mui-select").on("click",function(){$(this).addClass("topAuto"),setTimeout(function(e){var t=$(e).find(".mui-select__menu");if(0!==t.length){var o=t.offset().top+t.height(),s=$(window).scrollTop()+$(window).height();s<o&&(t.offset({top:s-t.height()}),$(e).removeClass("topAuto"))}},0,this)}),t.appendTo(".main-form"),t.hide(),e.remove(),$(".form-container .form-close, .backdrop, #thanks .link").on("click",function(){formClose()}),$(".main-form .t-form__submit").on("click",function(e){var t=$(this);setTimeout(function(){0===t.parents("form").find(".js-error-control-box").length&&(t.addClass("send"),t.find("input").attr("disabled",!0))},0)})}function circleAnimation(){const e=t=>{let r=$(".animstep-element");if(0===t)setTimeout(()=>{$(".animstep-element").addClass("active1 start1")},0),setTimeout(()=>{s[t].webProgress=o.done,s[t+1].webProgress===o.ready&&e(t+1)},1500);else{$(".animstep");setTimeout(()=>{r.addClass(`start${t+1}`),2!==t&&3!==t||gsap.to(".animstep",{attr:{viewBox:2===t?"-170 0 943 660":"0 0 943 660"},duration:1,ease:"power2"})},0),setTimeout(()=>{r.removeClass(`active${t}`),r.addClass(`active${t+1}`)},1200),setTimeout(()=>{s[t].webProgress=o.done,3===t?r.addClass("done"):s[t+1].webProgress===o.ready&&e(t+1)},2500)}},t=e=>{s[e].mobileProgress=o.progress;let r=$(".mobile-animate-container");0!==e&&setTimeout(()=>{r.removeClass(`start${e}`)},10),r.addClass(`start${e+1}`),setTimeout(()=>{s[e].mobileProgress=o.done,3!==e&&s[e+1].mobileProgress===o.ready&&t(e+1)},1300)},o={prepared:"prepared",ready:"ready",progress:"progress",done:"done"},s=[{webProgress:o.prepared,mobileProgress:o.prepared,decreased:!0},{webProgress:o.prepared,mobileProgress:o.prepared,decreased:!1},{webProgress:o.prepared,mobileProgress:o.prepared,decreased:!1},{webProgress:o.prepared,mobileProgress:o.prepared,decreased:!1}],r=({isWeb:r})=>{if(r)for(let t=0;t<s.length;t++){if(0===t&&s[t].webProgress===o.prepared){s[t].webProgress=o.progress,e(t);break}if(0!==t&&s[t].webProgress===o.prepared&&s[t-1].webProgress===o.done){s[t].webProgress=o.progress,e(t);break}if(0!==t&&s[t].webProgress===o.prepared&&s[t-1].webProgress!==o.done){s[t].webProgress=o.ready;break}}else for(let e=0;e<s.length;e++){if(0===e&&s[e].mobileProgress===o.prepared){s[e].mobileProgress=o.progress,t(e);break}if(0!==e&&s[e].mobileProgress===o.prepared&&s[e-1].mobileProgress===o.done){s[e].mobileProgress=o.progress,t(e);break}if(0!==e&&s[e].mobileProgress===o.prepared&&s[e-1].mobileProgress!==o.done){s[e].mobileProgress=o.ready;break}}};document.onreadystatechange=(()=>{if("complete"===document.readyState){const e=$(".animstep-container");let t=$(".web-container"),i=$(".mobile-container"),a=t.offset().top+70,n=0;$(window).scroll(function(){if($(window).width()>640&&!s[3].decreased){if($(window).scrollTop()+300>t.offset().top&&s[0].webProgress===o.prepared)r({isWeb:!0});else if(s[3].webProgress===o.done&&!s[3].decreased&&e.offset().top>=t.offset().top+70&&e.offset().top<=t.offset().top+80){let e=t.height()-900;t.css("height",e),s[3].decreased=!0}else e.offset().top===t.offset().top+70||a>e.offset().top?a=e.offset().top:e.offset().top>t.offset().top+80&&(s[3].webProgress!==o.done||!s[3].decreased)&&(s[1].webProgress===o.prepared&&r({isWeb:!0}),n+=e.offset().top-a,a=e.offset().top);if(n>250&&s[3].webProgress===o.prepared)for(;n>250&&s[3].webProgress===o.prepared;)r({isWeb:!0}),n-=250}else s[3].mobileProgress===o.prepared&&($(window).scrollTop()>i.offset().top-150&&s[0].mobileProgress===o.prepared?r({isWeb:!1}):($(window).scrollTop()>i.offset().top+100&&s[1].mobileProgress===o.prepared||$(window).scrollTop()>i.offset().top+400&&s[2].mobileProgress===o.prepared||$(window).scrollTop()>i.offset().top+700&&s[3].mobileProgress===o.prepared)&&r({isWeb:!1}))}),$(".cursor").click(function(){if($(".done").length){let e=$(".animstep-element"),t=$(this)[0].attributes["data-stage"].value;$(`.${t}`).length||(e.removeClass("active1 active2 active3 active4"),e.addClass(t))}})}})}function trainingFormat(){$("#switch-button").on("click",function(){var e=$(this).find("div");e.toggleClass("left"),e.toggleClass("right"),$(".switch").find("span").toggleClass("active"),setTimeout(function(){e.position().left<32?($(".morning").show(),$(".afternoon .btn").data("select-group",1),$(".evening .btn").data("select-group",2),$(".afternoon .when, .evening .when").text("Пн, Вт, Ср, Чт, Пт"),$(".afternoon .time").text("14:00 - 17:00"),$(".evening .time").text("17:45 - 20:45"),$(".afternoon .duration, .evening .duration").text("6 месяцев"),$(".afternoon .lessons, .evening .lessons").text("63 часа в месяц"),$(".afternoon .price").text("4500 грн в месяц/71 грн в час"),$(".evening .price").text("4900 грн в месяц/78 грн в час")):($(".morning").hide(),$(".afternoon .btn").data("select-group",3),$(".evening .btn").data("select-group",4),$(".afternoon .when, .evening .when").text("Сб, Вс + дз + онлайн консультации"),$(".afternoon .time").text("9:30 - 14:00"),$(".evening .time").text("15:00 - 19:30"),$(".afternoon .duration, .evening .duration").text("8 месяцев"),$(".afternoon .lessons, .evening .lessons").text("48 часов в месяц"),$(".afternoon .price, .evening .price").text("4100 грн в месяц/85 грн в час"))},500)}),$(".daytime .btn").on("click",function(){formOpen("#form177305317")})}function skills(){$(".img-container").mouseover(function(){if($(window).width()>640&&!$(this).hasClass("active")){$(".img-container").removeClass("active"),$(".skills-text").removeClass("active"),$(".skills-text").addClass("disable"),$(this).addClass("active");let e=$(this)[0].attributes["data-img-index"].value,t=$(".skills-text[data-text-index="+e+"]");t.removeClass("disable"),setTimeout(()=>{t.addClass("active")},20)}}),$(".img-container").mouseleave(function(){if($(window).width()>640&&$(this).hasClass("active")){$(".img-container").removeClass("active"),$(".skills-text").removeClass("active"),$(".skills-text").addClass("disable");let e=$(".skills-text[data-text-index=0]");e.removeClass("disable"),setTimeout(()=>{e.addClass("active")},20)}})}function initPage(){var e=$('#rec171942056 .tn-elem[data-elem-type="button"] .tn-atom');e.first().addClass("active"),$("#t-header .menu-courses-web-development").addClass("active"),$("#main-block__education .btn, .countdown-button, #rec221312653 .btn").on("click",function(){formOpen($(this).data("form-id"))}),e.on("click",function(){var t=$(this);e.filter(".active").removeClass("active"),t.addClass("active")})}function initReviewsSlider(){setTimeout(function(){var e=$(".reviews-swiper .swiper-wrapper"),t=$("#rec193978903, #rec193980592, #rec193981925, #rec193983111, #rec193984353, #rec193984374, #rec193984978");e.empty(),t.appendTo(e),t.wrap('<div class="swiper-slide"></div>');new Swiper(".reviews-swiper",{allowTouchMove:!1,loop:!0,effect:"fade",navigation:{nextEl:".reviews .arrow-right"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}},on:{slideNextTransitionStart:function(){var e=$(this.navigation.nextEl);e.addClass("animate-right"),setTimeout(function(){e.removeClass("animate-right")},1e3)}}});setTimeout(function(){$('.reviews-swiper .tn-elem[data-elem-id="1585239585659"]').mCustomScrollbar({theme:"my-theme",autoExpandScrollbar:!0,mouseWheel:{scrollAmount:75},scrollInertia:300})},0)},0)}$(document).ready(function(){if(initPage(),$(window).width()>=980){setTimeout(function(){setTimeout(function(){$(".education-social").removeClass("hidden")},1e3)},2500);var e=document.createElement("script");e.type="text/javascript",e.src="",document.getElementsByTagName("head")[0].appendChild(e)}setTimeout(function(){$(".education-social").removeClass("hidden")},500);prepareForms(),circleAnimation(),skills(),trainingFormat(),initReviewsSlider()});;var WIDTH=$(window).width();function showPage(){$("#loader").css("height","0px"),$("body").removeClass("scroll-lock"),$("#loader img").addClass("hidden"),$(window).scrollTop(0)}WIDTH>=980&&$("body").addClass("scroll-lock"),$(document).ready(function(){var o=window.location.pathname;"/thank-you-page"===o||"/program-sent"===o?($("#loader").css("display","none"),showPage()):WIDTH>=980&&setTimeout(showPage,1500),$(".menu-link-item").on("click",function(o){$(".menu-list_item").removeClass("active"),$(o.target.parentNode).addClass("active")}),$(".menu__burger, .menu__close").on("click",function(o){o.preventDefault();const e=$(".menu__content");"-490px"===e.css("top")?e.css("top","0"):e.css("top","-490px")})});function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}$(document).ready(function(){var o=0;$(window).scroll(function(){var s=$(this).scrollTop(),c=$("#btn-scroll"),e=$("#t-footer .footer");s>2500?s<=o?c.addClass("show"):c.removeClass("show"):s<500&&c.removeClass("show"),s+$(this).height()>$("body").height()-e.height()?e.css("opacity","1"):e.css("opacity","0"),c.on("click",scrollToTop),s+$(window).height()===$(document).height()?$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").addClass("without-shadow"):$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").removeClass("without-shadow"),o=s})});