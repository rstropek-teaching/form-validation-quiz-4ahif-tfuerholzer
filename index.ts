
function validateAll() : void{
    let submitButton : HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitBtn");
    if(validateFirstName() && validateSecondName() && validateEmail()){
        submitButton.disabled=false;
    }else{
        submitButton.disabled=true;
    }
}
function validateFirstName() : boolean{
    let inputField : HTMLInputElement = <HTMLInputElement>document.getElementById("firstName");
    let mandatoryDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("firstNameMandatory");
    if(inputField.value === ""){
        mandatoryDiv.style.display="block";
        return false;
    }else{
        mandatoryDiv.style.display="none";
        return true;
    }
}
function validateSecondName() : boolean{
    let inputField : HTMLInputElement = <HTMLInputElement>document.getElementById("lastName");
    let mandatoryDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("lastNameMandatory");
    if(inputField.value === ""){
        mandatoryDiv.style.display="block";
        return false;
    }else{
        mandatoryDiv.style.display="none";
        return true;
    }
}
function validateEmail() : boolean{
    let newsletterCheckBox : HTMLInputElement = <HTMLInputElement>document.getElementById("newsletter");
    if(newsletterCheckBox.checked){
        console.log("newsletter is checked!");
        let inputField : HTMLInputElement = <HTMLInputElement>document.getElementById("email");
        let mandatoryDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("emailMandatory");
        if(inputField.value === ""){
            mandatoryDiv.style.display="block";
            return false;
        }else{
            mandatoryDiv.style.display="none";
            return true;
        }
    }else{
        return true;
    }
}
function subToNewsletterChanged() : void{
    let newsletterCheckBox : HTMLInputElement = <HTMLInputElement>document.getElementById("newsletter");
    let inputField : HTMLInputElement = <HTMLInputElement>document.getElementById("email");
    let mandatoryDiv : HTMLDivElement = <HTMLDivElement>document.getElementById("emailMandatory");
    let emailLabel : HTMLLabelElement = <HTMLLabelElement>document.getElementById("emailLabel");
    if(newsletterCheckBox.checked){
        inputField.style.display="block";
        emailLabel.style.display="block";
        validateEmail();
    }else{
        inputField.style.display="none";
        mandatoryDiv.style.display="none";
        emailLabel.style.display="none";
    }
    validateAll();
}
function whereDidYouHearFromUsChanges() : void{
    let select : HTMLSelectElement = <HTMLSelectElement> document.getElementById("mediaChannelSelect");
    let textArea : HTMLTextAreaElement = <HTMLTextAreaElement> document.getElementById("otherMediaChannel");
    if(select.selectedIndex===2){
        textArea.style.display="block";
    }else{
        textArea.style.display="none";
    }
}