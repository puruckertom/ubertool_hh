// jQuery
$(document).ready(function() {
  // Home
  $('#home').hover(
    function() {
        $('#home_text').stop().animate({width: '3.5em' }, {duration: 500, queue: false}).fadeTo(500,1);
    },
    function () {
        $('#home_text').stop().animate({width:0}, {duration: 500, queue: false}).fadeTo(500,0);
    }
  ).mousedown(function() {
    $(this).addClass('textshadow');
  }).mouseup(function() {
    $(this).removeClass('textshadow');
  }).mouseleave(function() {
    $(this).removeClass('textshadow');
  });
  // About
  $('#about').hover(
    function() {
        $('#about_text').stop().animate({width: '3.5em' }, {duration: 500, queue: false}).fadeTo(500,1);
    },
    function () {
        $('#about_text').stop().animate({width:0}, {duration: 500, queue: false}).fadeTo(500,0);
    }
  );
  // Links
  $('.articles a').hover(function(){
    $(this).stop().animate({ color:'#A31E39' },500);
  }, function(){
    $(this).stop().animate({ color:'#485C5A' },500);
  });
  // Index link
  $('#topheader_p p, .logreg').hide();
  $('.index_link').click(function(e) {
    e.preventDefault();
    var destination = $(this).attr('href');
    setTimeout(function() { window.location.href = destination; }, 500);
    $('#topheader_pic, #topheader_p').animate({
      height:'240px'
    }, 500);
    $('#topheader_p p, .logreg').fadeIn(500);
  });
  // BlockUI on QAQC
  $("a[class^='fadeQAQC']").click(function (e) {
    e.preventDefault();
    $(document).ajaxStart(function(){
      $.blockUI({
        css:{ "top":""+wintop+"", "left":""+winleft+"", "padding": "30px 20px", "width": "400px", "height": "60px", "border": "0 none", "border-radius": "4px", "-webkit-border-radius": "4px", "-moz-border-radius": "4px", "box-shadow": "3px 3px 15px #333", "-webkit-box-shadow": "3px 3px 15px #333", "-moz-box-shadow": "3px 3px 15px #333" },
        message: '<h2 class="popup_header">Processing QA/QC...</h2><br/><img src="/images/loader.gif" style="margin-top:-16px">',
        fadeIn:  500
      });
    });
      var retStatus;
      $.ajax({
          cache: false,
          complete: function(xhr) { 
            retStatus = xhr.status;
          },
          success: function() {
            window.location.href = model+"_qaqc.html";
          },
          error: function() {
            $.unblockUI();
            alert('There is a problem about your submission.')
          }
        });
      if(retStatus == 200)
          return false;
      else
          return true;
  });
  // Save Metadata
  $('#metaDataTxtArea').prop('disabled', true);
  $('#metaDataToggle').change(function() {
    if ($('#metaDataToggle').prop( "checked" )) {
      $('#metaDataTxtArea').prop('disabled', false);
      $('#metaDataDiv').slideDown();
    } else {
      $('#metaDataDiv').slideUp();
      $('#metaDataTxtArea').prop('disabled', true);
    }
  });
});