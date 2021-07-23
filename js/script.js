var timer1, timer2, timer3 = null;

function init () {
	ImagesEffet();
	seconds = 0; // On met à 0 le timer
	timer2 = setInterval(timer850, 100); // On lance le timer
	timer3 = setInterval(timer120, 100); // On lance le timer
	timer1 = setInterval(timer15, 100); // On lance le timer
}

function timer15(){

	var chiffre15 = document.getElementById("15"); // Reprend le timer dans le HTML
	seconds++; // Incrémente les secondes

	if (seconds > 15) { 
		seconds = 0; // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
		perdre15();
		}					
		
	chiffre15.textContent = seconds;
								}

function perdre15 (){
	if (seconds = 15) { 
		 // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
				clearInterval(timer1); // On arrête le timer
	}
}

function timer850(){

	var chiffre850 = document.getElementById("850"); // Reprend le timer dans le HTML
	seconds++; // Incrémente les secondes

	if (seconds > 850) { 
		seconds = 0; // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
		perdre850();
		}					
		
	chiffre850.textContent = seconds;
								}

function perdre850 (){
	if (seconds = 850) { 
		 // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
				clearInterval(timer2); // On arrête le timer
	}
}

function timer120(){

	var chiffre120 = document.getElementById("120"); // Reprend le timer dans le HTML
	seconds++; // Incrémente les secondes

	if (seconds > 120) { 
		seconds = 0; // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
		perdre120();
		}					
		
	chiffre120.textContent = seconds;
								}

function perdre120 (){
	if (seconds = 120) { 
		 // Les secondes ne peuvent pas dépasser 60, pour des raisons évidentes
				clearInterval(timer3); // On arrête le timer
	}
}

//Fonction changement d'images avec effet

function ImagesEffet(){

var images = new Array();
images.push("img/img1.png");
images.push("img/img2.png");
images.push("img/img4.png");


var i = 0;
	
var recharger = setInterval(function(){
        if(i<=images.length - 1){
        document.getElementById("img1").src = images[i]; 
				document.getElementById('img1').style.opacity = 0;
				document.getElementById('img1').style.backgroundSize = "cover"; 
				setTimeout(function(){
					document.getElementById('img1').setAttribute("class","animate");
					document.getElementsByClassName('animate')[0].style.opacity = 1;
					setTimeout(function(){document.getElementById('img1').removeAttribute("class","animate")},250)
					i++;					
					},250)
					}
		else{
		i = 0;
		}
},2000);}
//Fin Fonction changement d'images avec effet

