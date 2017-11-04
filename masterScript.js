
$(document).ready(function() {
  var country = ["Australia", "Bangladesh", "Denmark", "Hong Kong", "Indonesia", "Netherlands", "New Zealand", "South Africa"];
  $("#country").select2({
    data: country
  });
});
