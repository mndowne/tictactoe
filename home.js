var team;
var teamTwo;
var gameOn = false;
var twoPlayer = false;
var turn = false;

var aA = 0;
var aB = 0;
var aC = 0;

var bA = 0;
var bB = 0;
var bC = 0;

var cA = 0;
var cB = 0;
var cC = 0;

var toggleTurn = function(){
	turn ? turn = false : turn = true;
};

//  END  END  END  END
//  END  END  END  END
var checkEnd = function(play1W, play2W, compW, cats) {
	////HORIZONTAL HORIZONTAL HORIZONTAL
	if(aA == aB && aA == aC && aA > 0){
		if(aA ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(bA == bB && bA == bC && bA > 0){
		if(bA ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(cA == cB && cA == cC && cA > 0){
		if(cA ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	///VERTICAL VERTICAL VERTICAL
	if(aA == bA && aA == cA && aA > 0){
		if(aA ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(aB == bB && aB == cB && aB > 0){
		if(aB ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(aC == bC && aC == cC && aC > 0){
		if(aC ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	////DIAGNAL DIAGNAL
	if(aA == bB && aA == cC && aA > 0){
		if(aA ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(aC == bB && aC == cA && aC > 0){
		if(aC ==1){
			play1W();
		}
		else {
			if (twoPlayer){
				play2W();
			}
			else {
				compW();
			}
		}
	}
	if(aA > 0 &&
			aB > 0 &&
			aC > 0 &&
			bA > 0 &&
			bB > 0 &&
			bC > 0 &&
			cA > 0 &&
			cB > 0 &&
			cC > 0){
		cats();
	}
};

$(document).ready(function(){
		/////////////
		/////New Game Menu\\\\\\
		/////////////
		$("#onePlayer").click(function(){
				$("#onePlayer").css('display', 'none');
				$("#twoPlayer").css('display', 'none');
				$("#xs").css('display', 'inline-block');
				$("#os").css('display', 'inline-block');
				$("#title").text("Choose Team");
				twoPlayer = false;
				turn = true;
				});

		$("#twoPlayer").click(function(){
				$("#onePlayer").css('display', 'none');
				$("#twoPlayer").css('display', 'none');
				$("#xs").css('display', 'inline-block');
				$("#os").css('display', 'inline-block');
				$("#title").text("Player One Pick Team");
				twoPlayer = true;
				turn = true;
				});

		//// os and xs

		$("#xs").click(function(){
				$('#newGame').css('display', 'none');
				team = "X";
				teamTwo = "O"
				gameOn = true;
				$("#aA").html("<p>-</p>");
				$("#aB").html("<p>-</p>");
				$("#aC").html("<p>-</p>");
				$("#bA").html("<p>-</p>");
				$("#bB").html("<p>-</p>");
				$("#bC").html("<p>-</p>");
				$("#cA").html("<p>-</p>");
				$("#cB").html("<p>-</p>");
				$("#cC").html("<p>-</p>");
				aA = 0;
				aB = 0;
				aC = 0;
				bA = 0;
				bB = 0;
				bC = 0;
				cA = 0;
				cB = 0;
				cC = 0;
		});
		$("#os").click(function(){
				$('#newGame').css('display', 'none');
				team = "O";
				teamTwo = "X"
				gameOn = true;
				$("#aA").html("<p>-</p>");
				$("#aB").html("<p>-</p>");
				$("#aC").html("<p>-</p>");
				$("#bA").html("<p>-</p>");
				$("#bB").html("<p>-</p>");
				$("#bC").html("<p>-</p>");
				$("#cA").html("<p>-</p>");
				$("#cB").html("<p>-</p>");
				$("#cC").html("<p>-</p>");
				aA = 0;
				aB = 0;
				aC = 0;
				bA = 0;
				bB = 0;
				bC = 0;
				cA = 0;
				cB = 0;
				cC = 0;
		});

		///// wins

		var playerOneWins = function(){
			$('#newGame').css('display', 'inline-block');
			$("#onePlayer").css('display', 'block');
			$("#twoPlayer").css('display', 'block');
			$("#xs").css('display', 'none');
			$("#os").css('display', 'none');
			$("#title").text("Player One Wins!!");

			gameOn = false;
		};
		var playerTwoWins = function(){
			$('#newGame').css('display', 'inline-block');
			$("#onePlayer").css('display', 'block');
			$("#twoPlayer").css('display', 'block');
			$("#xs").css('display', 'none');
			$("#os").css('display', 'none');
			$("#title").text("Player Two Wins!!");

			gameOn = false;
		};
		var computerWins = function(){
			$('#newGame').css('display', 'inline-block');
			$("#onePlayer").css('display', 'block');
			$("#twoPlayer").css('display', 'block');
			$("#xs").css('display', 'none');
			$("#os").css('display', 'none');
			$("#title").text("Sorry You Lost!!");

			gameOn = false;
		};
		var catsGame = function(){
			$('#newGame').css('display', 'inline-block');
			$("#onePlayer").css('display', 'block');
			$("#twoPlayer").css('display', 'block');
			$("#xs").css('display', 'none');
			$("#os").css('display', 'none');
			$("#title").text("Cat's Game!!");

			gameOn = false;
		};
		////////////////
		/////Fire Board spots\\\\\\
		////////////////
		var fireAA = function(dateam){
			$("#aA").html("<p>" + dateam +"</p>");
			if (dateam == team){
				aA = 1;
			}
			else {
				aA = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireAB = function(dateam){
			$("#aB").html("<p>" + dateam +"</p>");
			if (dateam == team){
				aB = 1;
			}
			else {
				aB = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireAC = function(dateam){
			$("#aC").html("<p>" + dateam +"</p>");
			if (dateam == team){
				aC = 1;
			}
			else {
				aC = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireBA = function(dateam){
			$("#bA").html("<p>" + dateam +"</p>");
			if (dateam == team){
				bA = 1;
			}
			else {
				bA = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireBB = function(dateam){
			$("#bB").html("<p>" + dateam +"</p>");
			if (dateam == team){
				bB = 1;
			}
			else {
				bB = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireBC = function(dateam){
			$("#bC").html("<p>" + dateam +"</p>");
			if (dateam == team){
				bC = 1;
			}
			else {
				bC = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireCA = function(dateam){
			$("#cA").html("<p>" + dateam +"</p>");
			if (dateam == team){
				cA = 1;
			}
			else {
				cA = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireCB = function(dateam){
			$("#cB").html("<p>" + dateam +"</p>");
			if (dateam == team){
				cB = 1;
			}
			else {
				cB = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		var fireCC = function(dateam){
			$("#cC").html("<p>" + dateam +"</p>");
			if (dateam == team){
				cC = 1;
			}
			else {
				cC = 2;
			}
			toggleTurn();
			checkEnd(playerOneWins, playerTwoWins, computerWins, catsGame);
		};
		////            \\\\
		////    User Clicks!    \\\\
		////             \\\\
		$("#aA").click(function(){
				if(gameOn && aA == 0){
				if (turn){
				fireAA(team);
				}
				else {
				fireAA(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#aB").click(function(){
				if(gameOn && aB == 0){
				if (turn){
				fireAB(team);
				}
				else {
				fireAB(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#aC").click(function(){
				if(gameOn && aC == 0){
				if (turn){
				fireAC(team);
				}
				else {
				fireAC(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#bA").click(function(){
				if(gameOn && bA == 0){
				if (turn){
				fireBA(team);
				}
				else {
				fireBA(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#bB").click(function(){
				if(gameOn && bB == 0){
				if (turn){
				fireBB(team);
				}
				else {
				fireBB(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#bC").click(function(){
				if(gameOn && bC == 0){
				if (turn){
				fireBC(team);
				}
				else {
				fireBC(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#cA").click(function(){
				if(gameOn && cA == 0){
				if (turn){
				fireCA(team);
				}
				else {
				fireCA(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#cB").click(function(){
				if(gameOn && cB == 0){
				if (turn){
				fireCB(team);
				}
				else {
				fireCB(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});
		$("#cC").click(function(){
				if(gameOn && cC == 0){
				if (turn){
				fireCC(team);
				}
				else {
				fireCC(teamTwo);
				}
				if (twoPlayer == false){
				gameOn = false;
				computerGo();
				gameOn = true;
				}
				}
				});

		///  Computers Brain
		///  Computers Brain
		///  Computers Brain
		var computerGo = function(){

			///HORIZONTALS CHECKS
			//    ROW   A  
			if (aA == 2 && aB == 2 && aC == 0){
				return fireAC(teamTwo);
			}
			if (aB == 2 && aC == 2 && aA == 0){
				return fireAA(teamTwo);
			}
			if (aA == 2 && aC == 2 && aB == 0){
				return fireAB(teamTwo);
			}
			///   ROW   B
			if (bA == 2 && bB == 2 && bC == 0){
				return fireBC(teamTwo);
			}
			if (bB == 2 && bC == 2 && bA == 0){
				return fireBA(teamTwo);
			}
			if (bA == 2 && bC == 2 && bB == 0){
				return fireBB(teamTwo);
			}
			///    ROW   C
			if (cA == 2 && cB == 2 && cC == 0){
				return fireCC(teamTwo);
			}
			if (cB == 2 && cC == 2 && cA == 0){
				return fireCA(teamTwo);
			}
			if (cA == 2 && cC == 2 && cB == 0){
				return fireCB(teamTwo);
			}
			///   VERTICAL CHECK
			//  COLUNM    A
			if (aA == 2 && bA == 2 && cA == 0){
				return fireCA(teamTwo);
			}
			if (aA == 2 && cA == 2 && bA == 0){
				return fireBA(teamTwo);
			}
			if (bA == 2 && cA == 2 && aA == 0){
				return fireAA(teamTwo);
			}
			//  COLUNM    B
			if (aB == 2 && bB == 2 && cB == 0){
				return fireCB(teamTwo);
			}
			if (aB == 2 && cB == 2 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 2 && cB == 2 && aB == 0){
				return fireAB(teamTwo);
			}
			// COLUNM      C
			if (aC == 2 && bC == 2 && cC == 0){
				return fireCC(teamTwo);
			}
			if (aC == 2 && cC == 2 && bC == 0){
				return fireBC(teamTwo);
			}
			if (bC == 2 && cC == 2 && aC == 0){
				return fireAC(teamTwo);
			}
			// DIAGNAL 
			// DIAGNAL 1
			if (aA == 2 && bB == 2 && cC == 0){
				return fireCC(teamTwo);
			}
			if (aA == 2 && cC == 2 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 2 && cC == 2 && aA == 0){
				return fireAA(teamTwo);
			}
			// DIAGNAL 2
			if (aC == 2 && bB == 2 && cA == 0){
				return fireCA(teamTwo);
			}
			if (aC == 2 && cA == 2 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 2 && cA == 2 && aC == 0){
				return fireAC(teamTwo);
			}
			//////////////////////
			///HORIZONTALS CHECKS
			//    ROW   A  
			if (aA == 1 && aB == 1 && aC == 0){
				return fireAC(teamTwo);
			}
			if (aB == 1 && aC == 1 && aA == 0){
				return fireAA(teamTwo);
			}
			if (aA == 1 && aC == 1 && aB == 0){
				return fireAB(teamTwo);
			}
			///   ROW   B
			if (bA == 1 && bB == 1 && bC == 0){
				return fireBC(teamTwo);
			}
			if (bB == 1 && bC == 1 && bA == 0){
				return fireBA(teamTwo);
			}
			if (bA == 1 && bC == 1 && bB == 0){
				return fireBB(teamTwo);
			}
			///    ROW   C
			if (cA == 1 && cB == 1 && cC == 0){
				return fireCC(teamTwo);
			}
			if (cB == 1 && cC == 1 && cA == 0){
				return fireCA(teamTwo);
			}
			if (cA == 1 && cC == 1 && cB == 0){
				return fireCB(teamTwo);
			}
			///   VERTICAL CHECK
			//  COLUNM    A
			if (aA == 1 && bA == 1 && cA == 0){
				return fireCA(teamTwo);
			}
			if (aA == 1 && cA == 1 && bA == 0){
				return fireBA(teamTwo);
			}
			if (bA == 1 && cA == 1 && aA == 0){
				return fireAA(teamTwo);
			}
			//  COLUNM    B
			if (aB == 1 && bB == 1 && cB == 0){
				return fireCB(teamTwo);
			}
			if (aB == 1 && cB == 1 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 1 && cB == 1 && aB == 0){
				return fireAB(teamTwo);
			}
			// COLUNM      C
			if (aC == 1 && bC == 1 && cC == 0){
				return fireCC(teamTwo);
			}
			if (aC == 1 && cC == 1 && bC == 0){
				return fireBC(teamTwo);
			}
			if (bC == 1 && cC == 1 && aC == 0){
				return fireAC(teamTwo);
			}
			// DIAGNAL 
			// DIAGNAL 1
			if (aA == 1 && bB == 1 && cC == 0){
				return fireCC(teamTwo);
			}
			if (aA == 1 && cC == 1 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 1 && cC == 1 && aA == 0){
				return fireAA(teamTwo);
			}
			// DIAGNAL 2
			if (aC == 1 && bB == 1 && cA == 0){
				return fireCA(teamTwo);
			}
			if (aC == 1 && cA == 1 && bB == 0){
				return fireBB(teamTwo);
			}
			if (bB == 1 && cA == 1 && aC == 0){
				return fireAC(teamTwo);
			}
			//////
			///////////
			/////////////////////
			////////////
			//////
			if (aA == 1 && cC == 1 && cB ==0){
				return fireCB(teamTwo);
			}
			if (aA == 1 && cB == 1 && cA ==0){
				return fireCA(teamTwo);
			}
			if (bA == 1 && cC == 1 && cA ==0){
				return fireCA(teamTwo);
			}
			if (bA == 1 && cB == 1 && aC == 0){
				return fireCA(teamTwo);
			}
			if (bA == 1 && aC == 1 && aA == 0){
				return fireAA(teamTwo);
			}
			if (aC == 1 && cA ==1 && aB == 0){
				return fireAB(teamTwo);
			}
			if (bB == 0){
				return fireBB(teamTwo);
			} 
			if (aC == 0){
				return fireAC(teamTwo);
			}
			if (cC == 0){
				return fireCC(teamTwo);
			}
			if (aA == 0){
				return fireAA(teamTwo);
			}
			if (cA == 0){
				return fireCA(teamTwo);
			}
			if (bA == 0){
				return fireBA(teamTwo);
			}
			if (aB == 0){
				return fireAB(teamTwo);
			}
		};

});
