//Random # should be between 19-120
$(document).ready(function(){
	var Random = Math.floor(Math.random()*101+19)

//appending var Random to id="numValue" in html
	$('#numValue').text(Random);

//making random #'s for each jewel
//random # is between (1-15)
var gem1 = Math.floor(Math.random()*11+1)
var gem2 = Math.floor(Math.random()*11+1)
var gem3 = Math.floor(Math.random()*11+1)
var gem4 = Math.floor(Math.random()*11+1)

//variable for wins and losses
var userTotal = 0;
var wins = 0;
var losses = 0;

$('#numberWin').text(wins);
$('#numLose').text(losses);

//reset game after win or lose
function reset() {
	Random = Math.floor(Math.random()*101+19);

	$('#numValue').text(Random);

var gem1 = Math.floor(Math.random()*11+1);
var gem2 = Math.floor(Math.random()*11+1);
var gem3 = Math.floor(Math.random()*11+1);
var gem4 = Math.floor(Math.random()*11+1);

userTotal = 0;

$('#total').text(userTotal);
}

//wins added to userTotal
function winner() {
	alert("Good Job! You Win!!");
	wins++;
	$('#numberWin').text(wins);
	reset();
}

//loses added to usertotal
function loser() {
	alert("You Lost! Try Again");
	losses++;
	$('#numberLose').text(losses);
	reset();
}

//jewel clicks
$('#bluegem1').on('click', function() {
	userTotal = userTotal + gem1;
	console.log("New UserTotal= " + userTotal);
	$('#total').text(userTotal);

// if/else statements per the win/lose conditions
if (userTotal == Random) {
	winner();
}
else if (userTotal > Random) {
	loser();
	
}
})
$('#greengem2').on('click', function() {
	userTotal = userTotal + gem2;
	console.log("New UserTotal= " + userTotal);
	$('#total').text(userTotal);

if (userTotal == Random) {
	winner();
}
else if (userTotal > Random) {
	loser();
	
}
})
$('#redgem3').on('click', function() {
	userTotal = userTotal + gem3;
	console.log("New UserTotal= " + userTotal);
	$('#total').text(userTotal);

if (userTotal == Random) {
	winner();
}
else if (userTotal > Random) {
	loser();
	
}
})
$('#yellowgem4').on('click', function() {
	userTotal = userTotal + gem4;
	console.log("New UserTotal= " + userTotal);
	$('#total').text(userTotal);

if (userTotal == Random) {
	winner();
}
else if (userTotal > Random) {
	loser();
	
}
})

});

