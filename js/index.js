(function($) {
  var page = ['about_company', 'about_service', 'about_team', 'school_australia', 'school_philippines', 'visa_australia', 'visa_philippines', 'student_benefit', 'lecture', 'student_sharing', 'contact_taiwan', 'contact_australia'];

  $(window).on('hashchange',function() {
    var hash = window.location.hash ? window.location.hash.substring(1) : false;
    
    $('section > div:visible').hide('slow');

    if(hash && page.indexOf(hash) != -1) {
      // will use has varible
      $('#'+'about_company').show('slow');
    } else {
      $('#index').show('slow');
    }

     
    
    }); 
  $(document).ready(function() {
    /*
     * will use foreach to all html hide.
     * */
    
    $.get('template/'+'about_company.html', function(data) {
      var $element = $(data);
      
      $('main #index').after($element);
      $element.hide();
    });
    
  });




})(jQuery);
