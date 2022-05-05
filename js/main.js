window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    var messageHeading = document.createElement("h2");
    messageHeading.innerText = "Processing form";
    messageHeading.setAttribute("class", "message");
    messageHeading.onclick = changeHeading;
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", messageHeading);
    setTimeout(function () {
        messageHeading.remove();
    }, 20000);
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    checkValidDate();
}
function changeHeading() {
    var heading = this;
    var red = Math.floor(Math.random() * 225 + 1);
    var green = Math.floor(Math.random() * 225 + 1);
    var blue = Math.floor(Math.random() * 225 + 1);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(color);
    heading.style.color = color;
    console.log(heading.style.color);
}
function checkValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
