$(document).on("click", "#sitranslate", function (event) {
  $("#output").addClass("d-none");

  var isValid = validateInput();
  if (isValid != true) {
    $("#outputtext").text("Invalid Input (" + isValid + ")");
    $("#output").removeClass("d-none");
    return;
  }

  payload = JSON.stringify({"sent": '"'+ $("#sent").val() +'"'})

  $.ajax({
    url: "/sit/translate-v2",
    type: "POST",
    data: payload,
    contentType:"application/json",
    dataType:"json",
    headers: {
      "Content-Type": "application/json"
    },
    complete: function (response, status) {
      onComplete(response.responseText, status);
    },
  });
});

function onComplete(response, status) {
  if (status == "success") {
    var resultSet = JSON.parse(response);
    $("#outputtext").text(resultSet.translation.trim());
    $("#output").removeClass("d-none");
  } else if (status == "error") {
    $("#outputtext").text("Server error!");
    $("#output").removeClass("d-none");
  } else {
    $("#outputtext").text("Unknown error!");
    $("#output").removeClass("d-none");
  }
}

function validateInput() {
  if ($("#sent").val().trim() == "") {
    return "Input cannot be empty";
  }

  return true;
}
