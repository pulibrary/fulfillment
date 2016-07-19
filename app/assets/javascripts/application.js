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
  $("table.tablesorter").tablesorter({
      widthFixed: true,
      widgets: ['stickyHeaders', 'filter', `'zebra'],
      headers: { 
        0: {sorter: false},
        1: {sorter: true},
        2: {sorter: true},
        3: {sorter: false},
        4: {sorter: false},
      }
  });

});