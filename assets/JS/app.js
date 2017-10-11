// Variables 
var time = 30;
var correct = 0;
var incorrect = 0;
var misses = 0; 

// Variable using to create and array for the game questions 
var questions = [
	{   //List of specific questions to ask 
		quest: "Chicago Blackhawks have won a total of 6 championships",
		answer: "true"
	},
	{
		quest: "Patrick Kane is the team captain",
		answer: "false"
	},
	{
		quest: "The home stadium for the Chicago Blackhawks is the United Center",
		answer:
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


}	