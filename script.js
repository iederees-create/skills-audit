//... (skills audit code from previous response)...

function submitRole() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    const roleSelection = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role
    };

    document.getElementById("role-result-text").textContent = JSON.stringify(roleSelection, null, 2);
}
