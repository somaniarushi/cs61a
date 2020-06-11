function onClickBox() {
  let checked=$("#toggle-mode-cb").is(":checked");
  localStorage.setItem("checked", checked);
  $("#msg").text("Checkbox is checked: "+$("#toggle-mode-cb").is(":checked") );
}
function onReady() {
  $("#toggle-mode-cb").click(onClickBox);
  let checked="true"==localStorage.getItem("checked");
  $("#toggle-mode-cb").prop('checked', checked);
  $("#toggle-mode-cb").click(onClickBox);
}
$(document).ready(onReady);