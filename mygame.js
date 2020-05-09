var createdTime = new Date().getTime();
var clickedTime,refluxTime,score;

function getRandomColor() 
{
	var colorIndex="0123456789abcdef".split("");
	color="#";
    for(var i=0;i<6;i++)
    {
		var index=Math.round(Math.random()*16);
		color += colorIndex[index];
	}//for loop closed
	return color;

}

function createBox() 
{
	//var time=Math.random()*300;
	setTimeout(function(){
		
		if (Math.random()>0.5){
			document.getElementById("box").style.borderRadius="0px";
        }
        else if (Math.random()>0.10)
        {
            document.getElementById("box").style.borderRadius="50px";
        }
        else if (Math.random()>0.20)
        {
            document.getElementById("box").style.borderRadius="50px";
        }
		else{
			document.getElementById("box").style.borderRadius="100px";
		}//end of else


            var top = Math.floor(Math.random() * 250);
            var left = Math.floor(Math.random() * 850);
            var size = Math.floor(Math.random() * 100) + 49;
            document.getElementById("box").style.display = "block"
            document.getElementById("box").style.top = top + "px";
            document.getElementById("box").style.left = left + "px";
            document.getElementById("box").style.width = size + "px";
            document.getElementById("box").style.height = size + "px";
            document.getElementById("box").style.backgroundColor=getRandomColor();
		    createdTime=new Date().getTime();

    },time);
}//end of createbox function
createBox();

//onclick 
document.getElementById("box").onclick= function(){
for(var i=0;i<=timeleft;i++)
    {
    document.getElementById("box").style.display="none";
    clickedTime= new Date().getTime();
    refluxTime=clickedTime-createdTime;
    refluxTime=refluxTime/1000;
    score = (refluxTime< score || !score ? refluxTime : score);
    document.getElementById("highscore").innerHTML = "High Score :"+" "+score;
    document.getElementById("time").innerHTML="Your Time :"+" "+refluxTime+" "+"s";
    createBox(); //so as to create box again
    }
   
} 

//end of onclick functiion

//timer
var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "GAMEOVER";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
