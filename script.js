const hourE1=document.querySelector(".hour");
const minuteE1=document.querySelector(".minute");
const secondE1=document.querySelector(".second");

function updateclock(){
    const currentdate= new Date();
    const hour=currentdate.getHours();
    const minute=currentdate.getMinutes();
    const second=currentdate.getSeconds();
    const hourdeg=(hour/12)*360;
    hourE1.style.transform=`rotate(${hourdeg}deg)`;
    const minutedeg=(minute/60)*360;
    minuteE1.style.transform=`rotate(${minutedeg}deg)`;
    const secondDeg=(second/60)*360;
    secondE1.style.transform=`rotate(${secondDeg}deg)`;
}

setInterval(updateclock,1000)