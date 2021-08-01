function showInput() {
    let dropdown = document.getElementsByName("bias");
    let dropdown_value;
    for (let i = 0; i < dropdown.length; i++) {
        if (dropdown[i].checked === true) {
            dropdown_value = i;
            break;
        }
    }

    let checkboxes = document.getElementsByName("trait");
    let checkboxes_values = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            checkboxes_values.push(checkboxes[i].value);
        }
    }

    console.log([
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("number").value,
        document.getElementById("dropdown").value,
        dropdown_value,
        checkboxes_values,
        document.getElementById("story").value,
    ]);
}