const btn = document.getElementsByClassName("btn-delete");
// console.log(btn);

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behavior of browser form submissions.
  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", (event) => {
    alert("Yeah! Data sent and response loaded.");
  });

  // Define what happens in case of an error
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open("POST", "http://localhost:3000/files/delete");

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
}

window.deleteHandle = deleteHandle;

function getData(obj) {
  var temp = Array.from(obj.getAttribute("value").split(" "));
  return { name: temp[0], type: temp[1] };
}

function deleteHandle(obj) {
  console.log(getData(obj));
  var data = getData(obj);

  sendData(data);
}

var form;

async function setContentModal(title, content, btn1) {
  $("#modal-confirm .modal-title").text(title);
  $("#modal-confirm .modal-body").text(content);
  $("#modal-confirm .btn-confirm").text(btn1);
}

$(".btn-delete").click(async function () {
  setContentModal("Thông báo", "Xác nhận chắc chắn xóa File.", "Xác nhận");
  form = $(this).parents("form");
});

$("#modal-confirm .btn-confirm").click(function (e) {
  if (form) form.submit();
});

function validateForm(event) {
  console.log("validating");
}

window.validateForm = validateForm;
