// let inputElement = document.querySelector("input");

// let submit = document.querySelector("button");

// let output = document.getElementsByClassName("output-box");
// output.innerHTML="hsljlfsjjs;";

// console.log(output.innerHTML);

// output.innerText = "hii there"
// function sendMessage(e){
//     console.log(e);
//     console.log("hello");
// }

// --------------------------------------------------------


let loginForm = document.getElementById("loginForm");
let output;
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("event ", e)
    let inputElement = document.querySelector("input");

        // perform operation with form input
        // alert("This form has been successfully submitted!");
        console.log(
            `This form has a input of ${inputElement.value}`);
        output = document.getElementsByClassName("output-box")[0];
        console.log("output ", output.innerHTML);
        output.textContent = inputElement.value;

        inputElement.value = "";

});
