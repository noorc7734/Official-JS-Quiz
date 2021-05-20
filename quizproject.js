let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "Where do the first three seasons of Attack on Titan take place?",
	"a": "Paradis Island",
	"b": "Hawaiian Islands",
	"c": "Marley",
	"d": "Oceania",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   },
   {
	"question": "Who is the Main Protagonist of Attack on Titan?",
	"a": "Levi Ackerman",
	"b": "Armin Arlet",
	"c": "Mikasa Ackerman",
	"d": "Eren Yeager",
	"image":"quizimages/q2.jpg",
	"answer": "d"
   },
   {
	"question": "What is the original (Japanese) name for Attack on Titan?",
	"a": "Ansatsu Kyōshitsu",
	"b": "Shingeki no Kyojin",
	"c": "Yakusoku no Nebārando",
	"d": "Jujutsu Kaisen",
	"image":"quizimages/q3.jpg",
	"answer": "b"
   },
   {
	"question": "Which of the following is NOT an Attack on Titan army regiment?",
	"a": "The Marine Corps.",
	"b": "The Survey Corps.",
	"c": "The Military Police",
	"d": "The Garrison",
	"image":"quizimages/q4.jpg",
	"answer": "a"
   },
   {
	"question": "What piece of clothing did Eren give to Mikasa when they were children?",
	"a": "A hat",
	"b": "A pair of gloves",
	"c": "A scarf",
	"d": "A dress",
	"image":"quizimages/q5.jpg",
	"answer": "c"
   },{
	"question": "Out of the following four people, who is a Scout?",
	"a": "Carla Yeager",
	"b": "Hannes",
	"c": "Hange Zoe",
	"d": "Dot Pyxis",
	"image":"quizimages/q6.jpg",
	"answer": "c"
   },{
	"question": "Which of the following is NOT a type of Titan in Attack on Titan?",
	"a": "Female Titan",
	"b": "Attack Titan",
	"c": "Armoured Titan",
	"d": "Flame Titan",
	"image":"quizimages/q7.jpg",
	"answer": "d"
   },{
	"question": "What is the name of the equipment most commonly used by the Survey Corp.?",
	"a": "ODM Gear",
	"b": "Anti-Titan Swords",
	"c": "Eldian Rifles",
	"d": "Blades of Fire",
	"image":"quizimages/q8.jpg",
	"answer": "a"
   },{
	"question": "Who is the author of Attack on Titan?",
	"a": "Haruichi Furudate",
	"b": "Yoshihiro Togashi",
	"c": "Hajime Isayama",
	"d": "Masashi Kishimoto",
	"image":"quizimages/q9.jpg",
	"answer": "c"
   },
   {
	"question": "Who of the following four people is introduced in Season 2?",
	"a": "Sasha Braus",
	"b": "Kenny Ackerman",
	"c": "Connie Springer",
	"d": "Petra Ral",
	"image":"quizimages/q10.jpg",
	"answer": "B"
   }
 ];
 
 
  // load the current question on the page
 function loadQuestion() {
     
     // check for last question
     let message = "";
     if (currentQuestion == questions.length) {
         message = "The Quiz is finished. Your final score is " +  score + " / " + questions.length + ". Please refresh the page to try again";
         
         // show the lightbox with feedback
        document.getElementById("lightbox").style.display="block";
        document.getElementById("message").innerHTML = message; 
        currentQuestion = 0;
     }
     
     // preload the image 
     var img = document.getElementById("image");
     var preLoadImg = new Image();
     preLoadImg.src = questions[currentQuestion].image;

     preLoadImg.onLoad = function () {
        img.width = this.width;
     }
     img.style.maxWidth = "80%";
     img.src = preLoadImg.src;     
     
     
     
     // load the question
     document.getElementById("question").innerHTML = questions[currentQuestion].question;
     document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
     document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
     document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
     document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;

     
 } // loadQuestion
 
 
function markIt(ans) {
	let message = "";
	
	if (ans == questions[currentQuestion].answer) {
		// add 1 to score
		score++; 
		
		// display score
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message ="Correct! Your score is " + score + " / " + questions.length;
	} else {
		message ="Incorrect! Your score is " + score + " / " + questions.length;
	}
	// show the lightbox
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
	
	//move to the next question
	currentQuestion++;
	loadQuestion();
	
 }  // markIt


    let timeleft = 60;
  let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0) {
	  clearInterval(downloadTimer);
		document.getElementById("countdown").innerHTML = "Finished";
         message = "Your time is up. Your final score is " +  score + " / " + questions.length + ". Refresh the page to retry.";
		 
         // show the lightbox with feedback
        document.getElementById("lightbox").style.display = "block";
        document.getElementById("message").innerHTML = message; 
  }
  
}, 1000);

var blink_speed = 500; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('countdown');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);


function refreshPage(){
    window.location.reload();
} 

// Warning before leaving the page (back button, or outgoinglink)
window.onbeforeunload = function() {
   return "Do you really want to leave?";
   //if we return nothing here (just calling return;) then there will be no pop-up question at all
   //return;
};

  function closeLightBox() {
		document.getElementById("lightbox").style.display ="none";
  } // closeLightbox
