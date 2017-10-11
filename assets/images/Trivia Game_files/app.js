// Variables 
var time = 30;
var correct = 0;
var incorrect = 0;
var misses = 0; 

// Variable using to create and array for the game questions 
var questions = [
	{   //List of specific questions to ask 
		name: "Chicago Blackhawks have won a total of 6 championships?",
		answer: "true"
	},
	{
		name: "Patrick Kane is the team captain?",
		answer: "false"
	},
	{
		name: "The home stadium for the Chicago Blackhawks is the United Center?",
		answer: "true"
	}
];

//Creating my function to check the questions true/false with jQuery/loop

function checkAnswers(){
		//Loop
		for (var i = 0; i < questions.length; i++) {
			//jQuery function/stackoverflow 
			var answer = $("input[name=q" + i + "]:checked").val();

			if (answer === undefined){
				misses++;
			} //Using the loop to run through to confirm correct answer. 
			else if(answer === questions[i].answer) {
				correct++;
			}else{
				incorrect++;
			}

		}

			//displaying results once finished selecting calling variables. 
			//Using .append to display in order. 
		$("#content").empty();
		$("#content").append("<h1>Game Over!</h1>");

		$("#content").append("<h3>Correct: "+ correct + "</h3>");
		$("#content").append("<h3>Incorrect:"+ incorrect + "</h3>");
		$("#content").append("<h3>Misses:"+ misses + "</h3>");


}	

//Run the function/Timer section
 //jQuery ready function
 $(document).ready(function(){

 	$("#start-button").on("click", function(){

 		console.log("button clicked");
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
				checkAnswers();
				//This function is going to clear and display my function with correct/incorrect answers 
			}	
		}, 1000);

 		// this loop displays each questions
 		for (var i = 0; i < questions.length; i++) {
 		 $("#content").append("<p class='questions'>" + questions[i].name + "</p>");
 		 $("#content").append("<label class='radio-inline'><input type='radio' name=q" + i + " value='true'>True</label>");
		 $("#content").append("<label class='radio-inline'><input type='radio' name=q" + i + " value='false'>False</label>");
 		}

 	});
 

 });