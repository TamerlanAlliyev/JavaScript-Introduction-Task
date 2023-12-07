const password = prompt("Please enter the password");
if (password.length > 5) {
    alert("Password confirmed: " + password);
} else {
    alert("Password weak: " + password);
}