 var div=$("#html5video285478011"); var height=div.width() * 0.5625; div.height(height); var height = div.height(); div.parent().height(height);;$(document).ready(function() {
});;$(document).ready(function() {
});;$(document).ready(function() {
});;$( document ).ready(function() { t396_init('165803597');
});;$( document ).ready(function() { t396_init('166115190');
});;$( document ).ready(function() { t396_init('172962379');
});;var width=$(window).width();$(document).ready(function(){var a=$(".meetups .swiper-wrapper"),e=$("#rec166115190, #rec172962379");if(0!=e.length){a.empty();var t=e.find('.tn-elem[data-elem-id="1582730664411"]');width<=1200?t.attr("data-swiper-parallax-x","50"):width<=1400?t.attr("data-swiper-parallax-x","75"):width<=1600?t.attr("data-swiper-parallax-x","100"):t.attr("data-swiper-parallax-x","150"),e.appendTo(a),e.wrap('<div class="swiper-slide"><div class="slide-content"></div><div class="bg-gray"></div></div>');new Swiper(".meetups-swiper",{grabCursor:!0,spaceBetween:30,parallax:width>=980,breakpoints:{980:{spaceBetween:0}}})}else $("meetups").hide()});;$( document ).ready(function() { t396_init('166147657');
});;function initPage(){$("#t-header .menu-home").addClass("active"),$(".menu__container, .main-title span, .main-description, .main-block .btn").removeClass("start-pos"),setTimeout(function(){$(".main-bottom").removeClass("hidden")},1e3),$(".main-block .btn, #rec166147657 .btn").on("click",function(){formOpen($(this).data("form-id"))})}function formOpen(t){if($(".form-container, .backdrop").removeClass("close"),$("body, #t-header #rec162445357, #rec168341874").addClass("scroll-lock"),$(".main-form").show(),$("#thanks").hide(),t)$(".main-form .select-form").hide(),$(".main-form form.active").removeClass("active").hide(),$(t).addClass("active").show();else{$(".main-form .select-form").show(),$(".main-form form.active").removeClass("active").hide();var e=$(".main-form .select-form > select").val();$(e).addClass("active").show()}}function formClose(){$(".form-container, .backdrop").addClass("close"),setTimeout(function(){$("body, #t-header #rec162445357, #rec168341874").removeClass("scroll-lock")},500)}function formChange(t,e){$(".main-form form.active").fadeOut(e,function(){$(this).removeClass("active"),$(t).fadeIn(e).addClass("active")})}function formSubmit(t){var e=t.find(".btn");t.hasClass("js-send-form-success")&&(e.removeClass("send"),e.find("input").attr("disabled",!1),t.parent().fadeOut(1e3,function(){t.parent().next("#thanks").fadeIn(1e3)}))}function upWidgetClick(){var t=$(this).parents(".t-upwidget-container");setTimeout(function(){t.find("input:file").unbind().change(function(e){var i=t.find(".t-upwidget-container__data table");t.find(".t-upwidget-container__button").hide(),setTimeout(function(){var e=t.find(".t-upwidget-container__data");e.addClass("upwidget__show-files"),e.find("table").slice(i.length).each(function(t,e){var i=$(e).find(".t-upwidget-container__data_table_fileinfo"),n=$(e).find(".t-upwidget-container__data_table_actions"),a=i.parent();n.on("click",removeFileClick),n.parent().prepend(i),a.remove()})},0)})},0)}function removeFileClick(){0==$(this).find(".t-upwidget-container__data_progress").length&&($(".t-upwidget-container__data_table").length<=1&&setTimeout(function(){$(".t-upwidget-container__data").removeClass("upwidget__show-files"),$(".t-upwidget-container__button").show().text("Не забудь о резюме")},400))}function prepareForms(){var t=$("#rec170673452, #rec170852898, #rec170853045"),e=t.find("form"),i=e.find(".t-select__wrapper");e.addClass("mui-form"),e.find(".t-form__submit").addClass("btn").find("button").attr("id","main-form-submit"),e.find(".t-input-block").addClass("mui-textfield"),setTimeout(function(){var t=e.find(".t-upwidget-container__button, .t-upwidget-container__button-indiv");t.filter(".t-upwidget-container__button").css({color:"#8C8E9288",backgroundColor:"transparent",fontSize:"18px",textAlign:"left",width:"100%",maxWidth:"100%",padding:0}).text("Не забудь о резюме"),t.on("click",upWidgetClick)}),e.each(function(){var t=$(this);t.find(".t-input-group_em, .t-input-group_em+.t-input-group_in").wrapAll('<div class="mui-form-half"/>'),t.find(".t-input-block").last().addClass("last-field"),t.removeAttr("data-success-callback"),"form170853045"!==t.attr("id")&&t.data("success-callback","formSubmit")}),i.addClass("mui-select"),i.find("select").prop("required",!0),i.find("select>option:first-child").prop({hidden:!0}),$(".mui-select").on("click",function(){$(this).addClass("topAuto"),setTimeout(function(t){var e=$(t).find(".mui-select__menu");if(0!==e.length){var i=e.offset().top+e.height();$(window).scrollTop()+$(window).height()<i&&e.css({top:"",bottom:"100%"})}},0,this)}),e.appendTo(".form-container .main-form"),e.hide(),t.remove(),$(".form-container .form-close, .backdrop, #thanks .link").on("click",function(){formClose()}),$(".main-form .btn").on("click",function(t){var e=$(this),i=e.parents("form");i.find(".t-form__submit button").click(),setTimeout(function(){0===i.find(".js-error-control-box").length&&(e.addClass("send"),e.find("input").attr("disabled",!0))},0)}),$(".main-form .select-form > select").on("change",function(t){formChange($(this).val(),500)})}function initPortfolioSlider(){var t=$(window).width(),e={imagesLoaded:!0,prevNextButtons:!1,pageDots:!1,rightToLeft:t>980,cellAlign:"left",draggable:t<=980,wrapAround:!0,autoPlay:15e3},i=$(".carousel").flickity(e),n=$(".app-info").flickity({prevNextButtons:!1,pageDots:!1,draggable:!1}),a=i.find(".carousel-cell .slide-inner"),o="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",s=i.data("flickity"),r=100/s.slides.length;$(".progressbar > span").width(r+"%"),$(window).resize(function(){$(window).width()<=980?s.options.draggable=!0:s.options.draggable=!1,s.updateDraggable()}),i.on("scroll.flickity",function(){$(window).width()<980||s.slides.forEach(function(t,e){var i=a[e],n=0;n=0===e?Math.abs(s.x)>s.slidesWidth?s.slidesWidth+s.x+s.slides[s.slides.length-1].outerWidth+t.target:t.target+s.x:e===s.slides.length-1&&Math.abs(s.x)+s.slides[e].outerWidth<s.slidesWidth?t.target-s.slidesWidth+s.x-s.slides[e].outerWidth:t.target+s.x,i.style[o]="translateX("+n*(-1/-1.1)+"px)"})}),i.on("change.flickity",function(t,e){var i=100/s.slides.length,a=e+1;n.flickity("select",e),$(".progressbar > span").width(a*i+"%"),$(".app-number").text(a<10?"0"+a:a)}),$(".arrow-right").on("click",function(){var t=$(this);i.flickity("next",!0),t.addClass("animate-right"),setTimeout(function(){t.removeClass("animate-right")},1e3)})}function initReasonsSlider(){var t=$(".reasons-swiper");$(".arrow-right").on("click",function(){var e=$(".reasons .reasons-slider"),i=e.find(".reasons-slide.active"),n=$(this);n.addClass("animate-right"),setTimeout(function(){n.removeClass("animate-right")},1e3),i.removeClass("active"),i.next().addClass("active"),setTimeout(function(){e.append(i)},500),t.each(function(t,e){var i=$(e),n=i.find(".swiper-slide.active");n.addClass("prev").removeClass("active"),n.prev().addClass("active"),setTimeout(function(){i.prepend(n.removeClass("prev"))},500)})}),$(".arrow-left").on("click",function(){var e=$(".reasons .reasons-slider"),i=e.find(".reasons-slide.active"),n=$(this);n.addClass("animate-left"),setTimeout(function(){n.removeClass("animate-left")},1e3),e.prepend(e.children().last()),setTimeout(function(){i.removeClass("active"),i.prev().addClass("active")},0),t.each(function(t,e){var i=$(e),n=i.find(".swiper-slide.active");i.append(i.children().first().addClass("prev")),setTimeout(function(){n.next().removeClass("prev"),n.removeClass("active"),n.next().addClass("active")},0)})});$(".reasons-mobile-swiper").flickity({imagesLoaded:!0,prevNextButtons:!1,pageDots:!1,cellAlign:"center"})}$(document).ready(function(){$(window).width()>=980?setTimeout(initPage,2000):initPage(),prepareForms(),$(".advantages h3 span").hover(function(){var t=$(this).data("subject");$(".advantages ."+t).css({color:"#2D91F2"})},function(){var t=$(this).data("subject");$(".advantages ."+t).css({color:"#031323"})}),initPortfolioSlider(),initReasonsSlider()});;var CLIENT_ID="598798259125-r73h54804ftfi29dlejvmcaf6dh96m3l.apps.googleusercontent.com",API_KEY="AIzaSyC3lZg1-B-e8XLvN7TtCkL6SmO1lzJ9sic",DISCOVERY_DOCS=["https://sheets.googleapis.com/$discovery/rest?version=v4"],SCOPES="https://www.googleapis.com/auth/spreadsheets.readonly",SPREADSHEET_ID="1xkUZ7BMztcHbmpEOYmjYXmZGj0QCQZZLKfJZXFiDpY0";function handleClientLoad(){gapi.load("client:auth2",initClient)}function initClient(){gapi.client.init({apiKey:API_KEY,clientId:CLIENT_ID,discoveryDocs:DISCOVERY_DOCS,scope:SCOPES}).then(function(){getRelevantVacancies(),getVacanciesNames()},function(e){console.log(e)})}function getVacanciesNames(){gapi.client.sheets.spreadsheets.values.get({spreadsheetId:SPREADSHEET_ID,range:"vacancies!B:B"}).then(function(e){var t=e.result.values,a=$("#form170852898").find('select[name="vacancy"]');t.slice(1).forEach(function(e){a.append('<option value="'+e[0]+'">'+e[0]+"</option")})},function(e){console.error("error: "+e.result.error.message)})}function getRelevantVacancies(){gapi.client.sheets.spreadsheets.values.get({spreadsheetId:SPREADSHEET_ID,range:"relevant"}).then(function(e){var t=[],a=e.result.values,i=a[0];a=a.slice(1);for(var n=0;n<a.length;n++)if(!(a[n].length<i.length)){for(var s={},c=0;c<a[n].length;c++)s[i[c]]=a[n][c];t.push(s)}window.vacancies=t,fillVacancies(t)},function(e){console.error("error: "+e.result.error.message)})}function fillVacancies(e){var t=$(".careers .careers-list");t.fadeOut(500,function(){t.html(""),e.forEach(e=>{var a=$($.parseHTML('<li data-aos="fade-up"><a class="vacancy-item-link" target="_blank"><div class="careers-item-title"></div><div class="careers-item-info"></div><div class="careers-item-description line-clamp"></div></a></li>'));a.data("vacancy-id",e.id),a.find(".vacancy-item-link").attr("href",e.url),a.find(".careers-item-title").html(e.title),a.find(".careers-item-info").html(e.subtitle),a.find(".careers-item-description").html(e.description),t.append(a)}),$(this).fadeIn(500)})};var WIDTH=$(window).width();function showPage(){$("#loader").css("height","0px"),$("body").removeClass("scroll-lock"),$("#loader img").addClass("hidden"),$(window).scrollTop(0)}WIDTH>=980&&$("body").addClass("scroll-lock"),$(document).ready(function(){var o=window.location.pathname;"/thank-you-page"===o||"/program-sent"===o?($("#loader").css("display","none"),showPage()):WIDTH>=980&&setTimeout(showPage,1500),$(".menu-link-item").on("click",function(o){$(".menu-list_item").removeClass("active"),$(o.target.parentNode).addClass("active")}),$(".menu__burger, .menu__close").on("click",function(o){o.preventDefault();const e=$(".menu__content");"-490px"===e.css("top")?e.css("top","0"):e.css("top","-490px")})});function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}$(document).ready(function(){var o=0;$(window).scroll(function(){var s=$(this).scrollTop(),c=$("#btn-scroll"),e=$("#t-footer .footer");s>2500?s<=o?c.addClass("show"):c.removeClass("show"):s<500&&c.removeClass("show"),s+$(this).height()>$("body").height()-e.height()?e.css("opacity","1"):e.css("opacity","0"),c.on("click",scrollToTop),s+$(window).height()===$(document).height()?$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").addClass("without-shadow"):$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").removeClass("without-shadow"),o=s})});