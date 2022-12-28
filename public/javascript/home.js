var form = document.querySelector("#form-sharing");
var btnSubmit = document.querySelector('#form-sharing button[type="submit"]');
var inputFile = document.querySelector('#form-sharing input[type="file"]');

function checkFileValidate(event) {
  if (inputFile.files.length) {
    btnSubmit.removeAttribute("disabled");
    console.log(btnSubmit);
  } else {
    btnSubmit.addAttribute("disabled");
  }
}

window.checkFileValidate = checkFileValidate;
