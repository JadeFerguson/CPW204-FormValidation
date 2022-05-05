window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");

    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        //let errSpan = dobBox.nextElementSibling;
        // errSpan.innerHTML = "Format should be mm/dd/yyyy";
        // Other way of doing above but dont have to use nextElement
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];

        if (currSpan.hasAttribute("data-required")) {
                currSpan.innerText = "*";
        }

        else {
            currSpan.innerText = "";
        }
    }
}

// If make generic we can use on other sites to validate
// regexr.com good for looking up patterns
function isValidDate(input:string):boolean {
    // Validating this format mm/dd/yyyy and m/d/yyyy
    // Want to start with ^, the $ before $ is for only one occurrence to be in there
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);

}

/**
 * Returns true if the textbox with the given id has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox 
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
