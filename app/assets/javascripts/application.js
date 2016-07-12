// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery-tablesorter
//= require jquery-tablesorter/jquery.tablesorter.combined
//= require jquery-tablesorter/widgets/widget-uitheme
//= require pul-assets
//= require jquery.sticky
$(document).ready(function(){
  // // $("table.request--available_items").tablesorter({
  // //     widthFixed: true,
  // //     widgets: ['stickyHeaders', 'filter', 'zebra'],
  // // });

  // // $( ".alert-success" ).on('click', 'a', function() {
  // //   event.preventDefault();
  // //   $(this).hide();
  // // });

  // $( ".close" ).on( "click", function( event ) {
  //   event.preventDefault();
  // });

  $(".flash_messages").sticky({topSpacing:0});
});