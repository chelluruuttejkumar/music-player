function play()
{
    
      var audio = document.getElementById("audio");
      audio.play();
    

  
}
function pause()
{
    var audio=document.getElementById("audio")
    audio.pause();
}
function next()
{
    var x=Math.random()*5
    var y=Math.floor(x)
    console.log(y)
    if(y==1)
    {
      var x=document.getElementById("audio");
      x.src="./music/01 - Manasu Maree - SenSongsMp3.Co.mp3"
      x.play();
    }
    else if(y==2)
    {
        var x=document.getElementById("audio");
      x.src="./music/01_-_Bharat_Ane_Nenu_(The_Song_Of_Bharat).mp3"
    
      x.play();}
    else if(y==3)
    {
        var x=document.getElementById("audio");
      x.src="./music/01_-_Julayi_[www.AtoZmp3.net].mp3"
      x.play();
    }
    else if(y==4)
    {
      var x=document.getElementById("audio");
      x.src="./music/01_-_Kalala_Kadhala.mp3"
      x.play();

    }

    else if(y==5)
    {
      var x=document.getElementById("audio");
      x.src="./music/_04_-_Sailaja_Sailaja.mp3"
      x.play();
      
    }

    
}
function previous()
{
  var x=Math.random()*5-1
  var y=Math.floor(x)
  if(y==1)
  {
    var x=document.getElementById("audio");
    x.src="./music/01 - Manasu Maree - SenSongsMp3.Co.mp3"
    x.play();
  }
  else if(y==2)
  {
    var x=document.getElementById("audio");
    x.src="./music/01_-_Bharat_Ane_Nenu_(The_Song_Of_Bharat).mp3"
  
    x.play();
  }
  else if(y==3)
  {
    var x=document.getElementById("audio");
    x.src="./music/01_-_Julayi_[www.AtoZmp3.net].mp3"
    x.play();
  }
  else if(y==4)
  {
    var x=document.getElementById("audio");
    x.src="./music/01_-_Kalala_Kadhala.mp3"
    x.play();
  }

  else if(y==5)
    {
      var x=document.getElementById("audio");
      x.src="./music/_04_-_Sailaja_Sailaja.mp3"
      x.play();
      
    }
  

}














