(function($) {
  var page = ['about_company', 'about_service', 'about_team', 'school_australia', 'school_philippines', 'visa_australia', 'visa_philippines', 'student_benefit', 'lecture', '#student_sharing', 'contact_taiwan', 'contact_australia'];

  $(window).on('hashchange',function() {
    var hash = window.location.hash ? window.location.hash.substring(1) : false;
    var id = $('main section').attr('id');
    
    if(hash && page.indexOf(hash) != -1) {
      $('main section div').load('template/about_company.html');
    } else {
      $('main section div').load('template/home_page.html');
    }

     
    
    }); 
  $(document).ready(function() {
    $('main section div').load('template/home_page.html');
    
  });




})(jQuery);
