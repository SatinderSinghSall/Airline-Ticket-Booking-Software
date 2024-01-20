const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const siginBtn = document.getElementById('siginBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function()
{
    title.innerHTML = "Customer Sign-up.";
    nameField.style.display = "block";
}

siginBtn.onclick = function()
{
    title.innerHTML = "Login.";
    nameField.style.display = "none";
}