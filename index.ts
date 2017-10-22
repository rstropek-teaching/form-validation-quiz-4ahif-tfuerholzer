
function validateAll() : void{
    //console.log("Time 2 validate!");
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
    console.log(inputField.value)
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
}
function whereDidYouHearFromUsChanges() : void{
    let select : HTMLSelectElement = <HTMLSelectElement> document.getElementById("mediaChannelSelect");
    let textArea : HTMLTextAreaElement = <HTMLTextAreaElement> document.getElementById("otherMediaChannel");
    console.log(select.selectedIndex);
    if(select.selectedIndex===2){
        textArea.style.display="block";
    }else{
        textArea.style.display="none";
    }
}