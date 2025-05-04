let clock = document.querySelector(".clock");
let is12HR = false;


function addZero(num){
    return num < 10 ? "0" + num : num;
}
function tick(){
    
    let now = new Date();
    let h = now.getHours();
    let m = addZero(now.getMinutes());
    let s = addZero(now.getSeconds());
    
    if( is12HR ){
        if(h > 12){
            h = h - 12;
        }
        if(h === 0){
            h = 12;
        }
    }
    h = addZero(h);
    clock.innerHTML = `
        <span>${h} : </span>
        <span>${m} : </span>
        <span>${s}</span>
    `;
}

tick();
setInterval(tick, 1000);

clock.addEventListener("click",()=>{
    is12HR = !is12HR;
    tick();
});
