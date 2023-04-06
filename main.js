let btn = document.querySelector("button")
let num = document.querySelector(".num")
let sba = document.querySelector(".sba")
let tsoher = document.querySelector(".tsoher")
tsoher
btn.onclick=function(){
    num.textContent++
    console.log(num.textContent)
    setTimeout(() => {
        sba.style.display = `none`
    }, 1000);
    sba.style.display = `block`

}

tsoher.onclick=function(){
    num.textContent =0
}