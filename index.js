"use strict";
function validateAll() {
    //console.log("Time 2 validate!");
    var submitButton = document.getElementById("submitBtn");
    if (validateFirstName() && validateSecondName() && validateEmail()) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}
function validateFirstName() {
    var inputField = document.getElementById("firstName");
    var mandatoryDiv = document.getElementById("firstNameMandatory");
    console.log(inputField.value);
    if (inputField.value === "") {
        mandatoryDiv.style.display = "block";
        return false;
    }
    else {
        mandatoryDiv.style.display = "none";
        return true;
    }
}
function validateSecondName() {
    var inputField = document.getElementById("lastName");
    var mandatoryDiv = document.getElementById("lastNameMandatory");
    if (inputField.value === "") {
        mandatoryDiv.style.display = "block";
        return false;
    }
    else {
        mandatoryDiv.style.display = "none";
        return true;
    }
}
function validateEmail() {
    var newsletterCheckBox = document.getElementById("newsletter");
    if (newsletterCheckBox.checked) {
        var inputField = document.getElementById("email");
        var mandatoryDiv = document.getElementById("emailMandatory");
        if (inputField.value === "") {
            mandatoryDiv.style.display = "block";
            return false;
        }
        else {
            mandatoryDiv.style.display = "none";
            return true;
        }
    }
    else {
        return true;
    }
}
function subToNewsletterChanged() {
    var newsletterCheckBox = document.getElementById("newsletter");
    var inputField = document.getElementById("email");
    var mandatoryDiv = document.getElementById("emailMandatory");
    var emailLabel = document.getElementById("emailLabel");
    if (newsletterCheckBox.checked) {
        inputField.style.display = "block";
        emailLabel.style.display = "block";
        validateEmail();
    }
    else {
        inputField.style.display = "none";
        mandatoryDiv.style.display = "none";
        emailLabel.style.display = "none";
    }
}
function whereDidYouHearFromUsChanges() {
    var select = document.getElementById("mediaChannelSelect");
    var textArea = document.getElementById("otherMediaChannel");
    console.log(select.selectedIndex);
    if (select.selectedIndex === 2) {
        textArea.style.display = "block";
    }
    else {
        textArea.style.display = "none";
    }
}
