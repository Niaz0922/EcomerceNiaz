const a  = 0;
const head  = document.querySelector("head");
const btn = document.querySelector("btn");
const op = document.querySelector("input").value

btn.addEventListener("click",function(){
    localStorage.setItem("Name",op);
});
