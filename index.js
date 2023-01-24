const hourHand = document.querySelector(".hour") // Recall javascript selectors
const minutesHand = document.querySelector(".minutes")
const secondsHand = document.querySelector(".seconds")

// console.log(hourHand); // This line is just to test if it is working. if we check the console on the page we will see the class="hour" div

function checkTime() {
	const currentDay = new Date(); // we just created a new object saved in currentDay, now checkTime will give the day and time once it is called.
	setTimeout(checkTime, 1000); // If we want the function to keep updating per second we can use either setInterval or setTimeout methods. The setTimeout() method calls a function after a number of milliseconds. 1 second = 1000 milliseconds.
	// console.log(currentDay); // at the console, the time will keep being updated per second
	const hour = currentDay.getHours(); // the getHours() method abstracts the hour from the date and time.
	const minutes = currentDay.getMinutes();
	const seconds = currentDay.getSeconds();
	// console.log(hour, minutes, seconds); // will update hour, minutes and seconds in the console each second
	// Now we need to convert the transform:rotate() of each of the arrow hands to correspond with that of our js
	const degreeHour = (hour / 12) * 360; //calculation to convert the hour to degree so that it can correspond with the hour hand in the clock
	hourHand.style.transform = `rotate(${degreeHour}deg)`; // here we select the transform:rotate() syle and point it to our dynamically converted degree. we used `` as
	const degreeMinutes = (minutes / 60) * 360;
	minutesHand.style.transform = `rotate(${degreeMinutes}deg)`;
	const degreeSeconds= (seconds / 60) * 360;
	secondsHand.style.transform = `rotate(${degreeSeconds}deg)`;
}

checkTime();

// Another method we can use is the setInterval method. All we need is to comment out the setTimeout(checkTime, 1000); and then replace the part where we call our checkTIme() function with setInterval(checkTime, 1000); 
//this will produce same result