
    $(document).ready(function() {
        $('#vacancy-popup .btn.respond').on('click', function() {
            $('html, body').animate({
                scrollTop: $('.vacancy-form-container').offset().top
            }, 1000);
        });
    });
;$(document).ready(function() {
});;
  function formSubmit($form) {
    var $btn = $form.find('.t-form__submit');
    if ($form.hasClass("js-send-form-success")) {
      // setTimeout(function() {
      $btn.removeClass('send');
      $btn.find('input').attr('disabled', false);
      $form.parent().fadeOut(1000, function () {
        $form.parent().next('#thanks').fadeIn(1000);
      });
      // }, 1000);
    }
  }
  function upWidgetClick() {
    var $upwContainer = $(this).parents('.t-upwidget-container');
    setTimeout(function () {
      var $inputFile = $upwContainer.find('input:file');
      $inputFile.change(function (e) {
        var $tables = $upwContainer.find('.t-upwidget-container__data table');
        $upwContainer.find('.t-upwidget-container__button').hide();
        setTimeout(function () {
          var $data = $upwContainer.find('.t-upwidget-container__data');
          $data.addClass('upwidget__show-files');
          $data.find('table').slice($tables.length).each(function (index, value) {
            var $fileInfo = $(value).find('.t-upwidget-container__data_table_fileinfo');
            var $actions = $(value).find('.t-upwidget-container__data_table_actions');
            var $tr = $fileInfo.parent();
            $actions.on('click', removeFileClick);
            $actions.parent().prepend($fileInfo);
            $tr.remove();
          });
        }, 0);
      });
    }, 0);
  }
  function removeFileClick() {
    if ($(this).find('.t-upwidget-container__data_progress').length != 0) return;
    var $files = $('.t-upwidget-container__data_table');
    if ($files.length <= 1) {
      setTimeout(function () {
        $('.t-upwidget-container__data').removeClass('upwidget__show-files');
        $('.t-upwidget-container__button').show().text('Не забудь о резюме');
      }, 400);
    }
  }
  $(document).ready(function () {
    var $formRespond = $('form.t-form').addClass('mui-form');
    $formRespond.parents('.t-rec').hide();
    var $respondBtn = $formRespond.find('.t-form__submit').addClass('btn blue');
    var $target = $('#vacancy-popup .vacancy-form');
    $formRespond.find('.t-input-block').addClass('mui-textfield');
    setTimeout(function () {
      var $upwidget = $formRespond.find('.t-upwidget-container__button, .t-upwidget-container__button-indiv');
      $upwidget.filter('.t-upwidget-container__button').css({
        color: '#8C8E9288',
        backgroundColor: 'transparent',
        fontSize: '18px',
        textAlign: 'left',
        width: '100%',
        maxWidth: '100%',
        padding: 0
      }).text('Не забудь о резюме');
      $upwidget.on('click', upWidgetClick);
    }, 0);
    $formRespond.find('.t-input-group_em, .t-input-group_em+.t-input-group_in').wrapAll('<div class="mui-form-half"/>');
    $formRespond.find('.t-input-block').last().addClass('last-field');
    $target.append($formRespond);
    $formRespond.data('success-callback', 'formSubmit');
    $respondBtn.on('click', function (e) {
      var $btn = $(this);
      setTimeout(function () {
        var form = $btn.parents('form');
        var errors = form.find('.js-error-control-box');
        if (errors.length === 0) {
          $btn.addClass('send');
          $btn.find('input').attr('disabled', true);
        }
      }, 0);
    });
  });
;
  // Client ID and API key from the Developer Console
  var CLIENT_ID = '598798259125-r73h54804ftfi29dlejvmcaf6dh96m3l.apps.googleusercontent.com';
  // var CLIENT_ID = '6447402744-9hegk3mt590a0l230lbq4pvjv1odmrok.apps.googleusercontent.com';
  var API_KEY = 'AIzaSyC3lZg1-B-e8XLvN7TtCkL6SmO1lzJ9sic';
  //  var API_KEY = 'AIzaSyAU2bt4wTdJyX_DvqVlGFLZV7f4YfGSV0U';
  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
  var SPREADSHEET_ID = '1xkUZ7BMztcHbmpEOYmjYXmZGj0QCQZZLKfJZXFiDpY0';
  //  var SPREADSHEET_ID = '1xIWIkhqhn_lscPECw5TtVXhFKk4gWYoWjZVXJ4K-T8I';
  var NUM_TO_SHOW = 5;
  /**
   *  On load, called to load the auth2 library and API client library.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }
  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      getVacancies();
      // Handle the initial sign-in state.
      // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function (error) {
      console.log(error);
    });
  }
  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      getVacancies();
    }
  }
  function getSheetNames() {
    var sheetNames = [];
    gapi.client.sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID
    }).then(function (response) {
      var sheets = response.result.sheets;
      for (var i = 0; i < sheets.length; i++) {
        sheetNames.push(sheets[i].properties.title);
      }
    });
    return sheetNames;
  }
  /**
   * Vacancies spreadsheet:
   * https://docs.google.com/spreadsheets/d/1xIWIkhqhn_lscPECw5TtVXhFKk4gWYoWjZVXJ4K-T8I/edit
   */
  function getVacancies(category) {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'vacancies'
    }).then(function (response) {
      var values = response.result.values;
      var keys = values[0];
      var urlPath = window.location.pathname;
      var urlIndex = keys.findIndex(function (i) {
        return i === 'url';
      });
      
      for (var i = 0; i < values.length; i++) {
        if (values[i][urlIndex] === urlPath) {
          var vacancy = {};
          for (var j = 0; j < values[i].length; j++) {
            vacancy[keys[j]] = values[i][j];
          }
          
          fillVacancy(vacancy);
          return;
        }
      }
    }, function (reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }
  function fillVacancy(vacancy) {
    var $vacancyPopup = $('#vacancy-popup');
    
    var requirements = vacancy.requirements.split(';').filter(function (i) {
      return i
    }).map(function (item) {
      return '<li>' + item + '</li>';
    });
    var advantages = vacancy.advantages.split(';').filter(function (i) {
      return i
    }).map(function (item) {
      return '<li>' + item + '</li>';
    });
    var responsibilities = vacancy.responsibilities.split(';').filter(function (i) {
      return i
    }).map(function (item) {
      return '<li>' + item + '</li>';
    });
    document.title = vacancy.title;
    $vacancyPopup.find('.vacancy-title').html(vacancy.title);
    $vacancyPopup.find('.vacancy-subtitle').html(vacancy.subtitle);
    $vacancyPopup.find('.vacancy-description > p').html(vacancy.description);
    $vacancyPopup.find('.vacancy-requirements .requirements-list').html(requirements);
    $vacancyPopup.find('.vacancy-advantages .advantages-list').html(advantages);
    $vacancyPopup.find('.vacancy-responsibilities .responsibilities-list').html(responsibilities);
    $vacancyPopup.find('input[name="vacancy"]').val(vacancy.title);
  }
;var WIDTH=$(window).width();function showPage(){$("#loader").css("height","0px"),$("body").removeClass("scroll-lock"),$("#loader img").addClass("hidden"),$(window).scrollTop(0)}WIDTH>=980&&$("body").addClass("scroll-lock"),$(document).ready(function(){var o=window.location.pathname;"/thank-you-page"===o||"/program-sent"===o?($("#loader").css("display","none"),showPage()):WIDTH>=980&&setTimeout(showPage,1500),$(".menu-link-item").on("click",function(o){$(".menu-list_item").removeClass("active"),$(o.target.parentNode).addClass("active")}),$(".menu__burger, .menu__close").on("click",function(o){o.preventDefault();const e=$(".menu__content");"-490px"===e.css("top")?e.css("top","0"):e.css("top","-490px")})});function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}$(document).ready(function(){var o=0;$(window).scroll(function(){var s=$(this).scrollTop(),c=$("#btn-scroll"),e=$("#t-footer .footer");s>2500?s<=o?c.addClass("show"):c.removeClass("show"):s<500&&c.removeClass("show"),s+$(this).height()>$("body").height()-e.height()?e.css("opacity","1"):e.css("opacity","0"),c.on("click",scrollToTop),s+$(window).height()===$(document).height()?$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").addClass("without-shadow"):$("#rec166147657, #rec174128763, #rec183008512, #rec185759638, #rec194057971").removeClass("without-shadow"),o=s})});