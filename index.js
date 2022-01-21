function clock (){

    let hour=document.getElementById("hours");
    let minutes=document.getElementById("min");
    let seconds=document.getElementById("secs");
    let am=document.getElementById("am-pm");

    let time = new Date();
    let a=time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let b=time.getMinutes() <10 ? "0" + time.getMinutes() : time.getMinutes() ;
    let c=time.getSeconds() <10 ? "0" + time.getSeconds() : time.getSeconds();
    let d=time.getHours()>= 12 ? "PM" : "AM";
    
    hour.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    am.innerHTML=d;

}

setInterval(clock,1000);


function setTime() {

    var i=document.getElementById("wakeUpTimeSelector").value;
    var j=document.getElementById("lunchTimeSelector").value;
    var k=document.getElementById("napTimeSelector").value;

     var hourr =new Date().getHours() ;
     var mnt = new Date().getMinutes();
     var sec = new Date().getSeconds();

    console.log("i",i); console.log("j",j); console.log("k",k);
    
    if(Number(i) == hourr){
     
        document.getElementById('img-container').setAttribute("src","./assets./wakeup_image.png");
        document.getElementById('text-container').innerHTML="HEY WAKE UP!!";
        document.getElementById('block').innerHTML='Good morning  :'+hourr+" : "+mnt+" : "+sec+" "+pm;
        i=0;j=0;
    }

     else if(Number(j) == hourr){

        document.getElementById('img-container').setAttribute("src","./assets./lunch_image.png");
        document.getElementById('text-container').innerHTML="Lets have some lunch!!";
        document.getElementById('block').innerHTML='Good Afternoon :'+hourr+" : "+mnt+" : "+sec+" "+pm ;
        i=0;k=0;
        
     }
     else if(Number(k) == hourr) {
         
        document.getElementById('img-container').setAttribute("src","./assets./goodnight_image.png");
        document.getElementById('text-container').innerHTML="Have a Good Night!!";
        document.getElementById('block').innerHTML='Good night :' +hourr+" : "+mnt+" : "+sec+" "+pm;
       j=0;i=0;
        
    }

     
}