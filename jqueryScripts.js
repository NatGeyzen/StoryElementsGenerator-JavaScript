var navLinkContainer = $("#nav-link-container");
/* hide nav links on document ready */
$(document).ready(function() {
  navLinkContainer.hide();
});
/* toggle between showing and hiding the nav links */
$("#nav-icon-container").click(function() {
  navLinkContainer.toggle();
});
