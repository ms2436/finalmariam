var numQues = 4;
var numChoi = 3;
var answers = new Array(4);

answers[0] = "Food and Water";
answers[1] = "Stay calm and stay in your car";
answers[2] = "Battery, tires, windshield fluid, fuel";
answers[3] = "Prepare one or buy one";

function getScore(form) {
 var score = 0;
 var currElt;
 var currSelection;
 var i = 0;
 var j = 0;
 for (i=0; i<numQues; i++) {
	 currElt = i*numChoi;
	 for (j=0; j<numChoi; j++) {
		 currSelection = form.elements[currElt + j];
		 if (currSelection.checked) {
			 if (currSelection.value == answers[i]) {
				 score++;
				 break;
			 }
		 }
	 }
 }
 score = Math.round(score/numQues*100);
 form.percentage.value = score + "%";
 var correctAnswers = "";
 for (i=1; i<=numQues; i++) {
	 correctAnswers += i + ". " + answers[i-1] + "\r\n";
 }
 form.solutions.value = correctAnswers;
 displayFeedback(score) ;
}

function displayFeedback(thisScore) {
	document.getElementById("pretest-feedback").style.display = "block";
	if (thisScore <= 50 ) {
		document.getElementById('pretest-feedback').innerHTML = 'You scored 50% or less.  It is time to LEARN MORE unless you want to end up stranded on the road this winter!!!';
	} else {
		document.getElementById('pretest-feedback').innerHTML = 'You did well.  You scored 75% or higher.  You can LEARN MORE or check out our RESOURCES!';
	}
}
