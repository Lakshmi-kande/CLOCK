// const hr = document.querySelector('#hr');
// const mn = document.querySelector('#mn');
// const sc = document.querySelector('#sc');
// const deg = 6;

//   setInterval(() => {

//     let day = new Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * deg;
//     let ss = day.getSeconds() * deg;
//  })
 
// hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
// mn.style.transform = `rotateZ(${mm}deg)`;
// sc.style.transform = `rotateZ(${ss}deg)`;


var sc=60;
var mn=60;
var hr=60; 
var D=new Date();

setInterval(
  function(){
    D=new Date();
    second=D.getSeconds()*6;
    minute=D.getMinutes()*6;
    hour=D.getHours()*30+ Math.round(minte/12)
    document.getElementById("second-hand").style.tranforms = "rotate" (+ second + "deg"); 
    document.getElemantById("minute-hand").style.tranforms = "rotate"( + minute + "deg");
  }
)
