// Use Day.js to format the date and assign to the declared variable.
// WEBSITE: https://day.js.org/docs/en/display/format


// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
// Dec 16, 2024

// create date with dayJS
const gradDate = dayjs('2024-12-16');
// format date MMM D, YYYY
const formattedGradDate = gradDate.format('MMM D, YYYY');
// query the DOM element
// set text of DOM element to the formatted date
$('#1a').text(formattedGradDate);


// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
// create a date const with a value of 1/1/27
const weekday = dayjs('2027-01-01')     //this is always Y-M-D standard
// format date with dddd
const formattedWeekday = weekday.format('dddd');
// set the text on the DOM element
$('#2a').text(formattedWeekday);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
// get instance of time
const time =dayjs();
// format h:mm:ss A
const formattedTime = time.format('h:m:s');
// set the text on the DOM element
$('#3a').text(formattedTime);

// TODO: 4. What is the current Unix timestamp?
// create an instance of Unix time
const unixTimestamp = time.unix();
// call the valueOf method on the time instance
// format the time
// set the text on the DOM element using jquery
$('#4a').text(unixTimestamp);
// day.js website says: dayjs('2019-01-25').unix();

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

