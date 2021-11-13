setInterval(() => {

    const time = new Date();

    let hours = document.getElementById("hours");
    hours.innerHTML = time.getHours();

    if(hours.innerHTML< 10){
       hours.innerHTML = "0"+ time.getHours();
    }
    let minutes = document.getElementById("minutes");
    minutes.innerHTML = time.getMinutes();

    if(minutes.innerHTML <10){
        minutes.innerHTML = "0"+ time.getMinutes();
     }
    let seconds = document.getElementById("seconds");
    seconds.innerHTML = time.getSeconds();

    if(seconds.innerHTML < 10){
        seconds.innerHTML = "0"+ time.getSeconds();
     }

     let meridian = document.getElementById("meridians");
     if(hours.innerHTML > 12){
         meridian.innerHTML="PM";
         hours.innerHTML=hours.innerHTML-12;
     }
    
         else{
         meridian.innerHTML="AM";

     }


     

},1000);







function settime(){
    var morning=Number(document.getElementById("options-m").value);   
    var time=new Date().getHours();
    if(morning==time){
        document.getElementById("img").style.backgroundImage="url(./morning.png)";
        document.getElementById("some-text").innerHTML="HELLO! Good Morning. Have a Nice Day.";
        document.getElementById("some-text").setAttribute("style","color:#9933ff; margin-top:20px;font-size:40px;margin-left:30px;font-family:fantasy;text-align:center;letter-spacing:3px ; word-spacing:5px; ");
        function Makediv(){

            var container=document.createElement("div");
            container.className="left-container";
            container.id="dynamic-block";
        
            document.getElementById("left-container-4").appendChild(container);
        
        
            var invalue=document.getElementById("options-m");
            var value=invalue.options[invalue.selectedIndex].text;
            document.getElementById("dynamic-block").innerHTML= "GOOD MORNING!" +" " + "now " +" " + " Morning-Time " + " " + ":" + " " + value;
        }
        Makediv();

    }


    var lunch=Number(document.getElementById("options-l").value);
    var time=new Date().getHours();

    if(lunch==time){
        document.getElementById("img").style.backgroundImage="url(./lunch.png)";
        document.getElementById("some-text").innerHTML="Let's Have some Lunch !!";
        document.getElementById("some-text").setAttribute("style","color:#9933ff; margin-top:20px;font-size:40px;margin-left:30px;font-family:fantasy;text-align:center;letter-spacing:5px ;word-spacing:5px; ");

        function Makediv(){

            var container=document.createElement("div");
            container.className="left-container";
            container.id="dynamic-block";
        
            document.getElementById("left-container-4").appendChild(container);
        
        
            var invalue=document.getElementById("options-l");
            var value=invalue.options[invalue.selectedIndex].text;
            document.getElementById("dynamic-block").innerHTML= "GOOD AFTERNOON!" +" " + "now " +" " + " Afternoon-Time " + " " + ":" + " " + value;
            
        }
        Makediv();

    }


    var night=Number(document.getElementById("options-n").value);
    var time=new Date().getHours();


    if(night==time){
        document.getElementById("img").style.backgroundImage="url(./night.png)";
        document.getElementById("some-text").innerHTML="GOOD NIGHT, Sweet Dream.";
        document.getElementById("some-text").setAttribute("style","color:#9933ff; margin-top:20px;font-size:40px;margin-left:30px;font-family:fantasy;text-align:center;letter-spacing:3px ;word-spacing:5px; ");
        function Makediv(){

            var container=document.createElement("div");
            container.className="left-container";
            container.id="dynamic-block";
        
            document.getElementById("left-container-4").appendChild(container);
        
        
            var invalue=document.getElementById("options-l");
            var value=invalue.options[invalue.selectedIndex].text;
            document.getElementById("dynamic-block").innerHTML= "GOOD NIGHT!" + " " + "now" + " " + "Night-Time" + " " + ":" + " " + value;
            
        }
        Makediv();

    }   
}
