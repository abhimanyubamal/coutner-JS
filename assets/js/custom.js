let p = document.querySelector("#add");

let b = document.querySelector(".add-1");
let savedValues = document.querySelector("#save");
let saveButton = document.querySelector(".save-1");

let reset = document.querySelector(".reset");

b.addEventListener("click", function() {
    p.innerHTML = +p.innerHTML + 1;
    saveButton.classList.remove("disable");
});

saveButton.addEventListener("click", () => {
    if (p.innerHTML == 0) {
        saveButton.classList.add("disable");
        alert("CAN'T SAVE VOID")
    }
    else {
        if (savedValues.innerHTML == 0) {
            savedValues.innerHTML = p.innerHTML;
        }

        else {
            savedValues.innerHTML = savedValues.innerHTML + ', ' + p.innerHTML;
        }
        p.innerHTML = 0;
    }
});

reset.addEventListener("click", () => {
    p.innerHTML = 0;
    savedValues.innerHTML = 0;
});