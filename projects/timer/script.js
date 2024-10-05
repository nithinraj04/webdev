let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let intervalID = 0;

const doc = document.getElementById("timer");

// let temp = document.createElement("p");
// temp.id = "temp";
// temp.textContent = "welcome to the timer";
// doc.appendChild(temp);
// doc.setAttribute("style", "font-size: 1em;");

function start() {
	if(!isRunning) {
		startTime = Date.now() - elapsedTime;
		intervalID = setInterval(update, 1);
		isRunning = true;
	}
}

function stop(){
	if(isRunning) {
		clearInterval(intervalID);
		isRunning = false;
	}
}

function rst(){
	stop();
	elapsedTime = 0;
	doc.textContent = "00:00:00:000";
}

function update() {
	elapsedTime = Date.now() - startTime;
	let hours = Math.floor(elapsedTime/(1000 * 60 * 60)).toString().padStart(2, "0");
	let minutes = Math.floor((elapsedTime/(1000 * 60)) % 60).toString().padStart(2, "0");
	let seconds = Math.floor(elapsedTime/1000 % 60).toString().padStart(2, "0");
	let ms = Math.floor(elapsedTime%1000).toString().padStart(3, "0");

	// console.log(`${hours}:${minutes}:${seconds}:${ms}`);
	doc.textContent = `${hours}:${minutes}:${seconds}:${ms}`;	
}


