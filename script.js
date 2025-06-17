document.getElementById("greeting").textContent = "Hi there!";
document.getElementById("h1").textContent = "The Header";

let items = document.getElementsByClassName("redclass");
for (let i = 0; i < items.length; i++)
{
    items[i].textContent = "Text change";
}

const header = document.querySelector("h1");
console.log(header);
const red = document.querySelectorAll("redclass");
console.log(red);
document.getElementById("click").addEventListener("click",function()
{
    alert("CLICK BUTTON!");
});
/* "The header" */

/*
run this first: php -S localhost:3006 -t ./
*/