console.log("hello");
// window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
// console.log(screen);

// let params =`width=400,height=400`;
// let name = "ptn"; 

// let win = window.open("", name,params);

// setTimeout(() => {
//     win.resizeTo(500, 500);
//     // win.resizeTo(500,500);
// }, 2000);
// setTimeout(() => {
//     win.moveTo(200, 200);
  
// }, 3000);
// setTimeout(() => {
//     win.close();
//     // win.resizeTo(500,500);
// }, 3000);
let p = document.getElementById('sss');
setInterval(() =>{
   
    let now = new Date();
    p.innerHTML = now.getHours()+`:`+now.getMinutes()+`:`+now.getSeconds();

}, 1000);
