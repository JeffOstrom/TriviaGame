// Variables 
var time = 30;
var correct = 0;
var incorrect = 0;
var misses = 0; 

// Variable using to create and array for the game questions 
var questions = [
	{   //List of specific questions to ask 
		name: "Chicago Blackhawks have won a total of 6 championships",
		answer: "true"
	},
	{
		name: "Patrick Kane is the team captain",
		answer: "false"
	},
	{
		name: "The home stadium for the Chicago Blackhawks is the United Center",
		answer: "true"
	}
];

//Creating my function to check the questions true/false with jQuery/loop

function check(){
		//Loop
		for (var i = 0; i < questions.length; i++) {
			//jQuery function/stackoverflow 
			var answer = $("input[name=q" + i + "]:checked").val();

			if (answer === undefined) {
				misses++;
			} //Using the loop to run through to confirm correct answer. 
			else if(answer ===questions.length) {
				correct++;
			}else{
				incorrect++;
			}

		}

			//displaying results once finished selecting calling variables. 
			//Using .append to display in order. 
		$("#content").empty();
		$("#content").append("<h1>Game is finished!</h1>");
		$("#content").append("<h3>Correct: "+ correct + "</h3>");
		$("#content").append("<h3>Incorrect:"+ incorrect + "</h3>");
		$("#content").append("<h3>Misses:"+ misses + "</h3>");


}	

//Run the function/Timer section
 //jQuery ready function
 $(document).ready(function(){

 	$("#start-button").on("click", function(){

 		console.log("button");
 		//clear the content in the div .empty
 		$("#content").empty();
 		//Using .append to replace my h1 with the timer 
 		$("#content").append("<h1>Time: <span id='time'>30</></h1>");
 		
 		//I'm using an Interval timer since I want it to count down
 		var timer = setInterval(function(){
			time--;
			$("#time").html(time);

			//condition to stop timer/ check questions
			if(time < 1){
				clearInterval(timer);
				checkAnswer();
			}	
		}, 1000);
 		console.log("test timer")

 	});
 

 }




