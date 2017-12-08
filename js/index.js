(function($) {
  var page = ['about_company', 'about_service', 'about_team', 'school_australia', 'school_philippines', 'visa_australia', 'visa_philippines', 'student_benefit', 'lecture', '#student_sharing', 'contact_taiwan', 'contact_australia'];

  $(window).on('hashchange',function() {
    var hash = window.location.hash ? window.location.hash.substring(1) : false;
    
    if(hash && page.indexOf(hash) != -1) {
      $('#index').hide();
      $('main').load('template/about_company.html');
    } else {
      var id = $('main section').attr('id');
      $('#'+id).hide();
      $('#index').show();

    }

     
    
    }); 
  $(document).ready(function() {
      
  
  });




})(jQuery);