// gameplan - use military time - store info in an object? - save color coordination for last
// first user enters data into field
// if user hits save button, this data is then pushed to an object and stored in local storage
// for color changing, can use moment.js to say... if current time is > change to this color, if time is = change to this color, if time is < change to this color
// || if current time is > change to this color || how do i acomplish? maybe something like time = currentTime - xMinutes = time. need to figure out how to separate minutes from hours

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ day of the week display ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
let currentTime = moment().format("dddd"); // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ this uses the moment library to grab the day and sets it to variable of currentTime
$("#currentDay").text("Today is " + currentTime); // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ this says in the currentDay class, change text to Today is
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ day of the week display ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ array to store time slots ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
let slots = [
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
];
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ array to store time slots ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ dynamically rendering fields to page ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
for (let i = 0; i < slots.length; i++) {
  const element = slots[i];
  let timeBlock = $("<div>")
    .addClass("col-md-1 hour")
    .attr("data-slot", slots[i])
    .text(slots[i]);
  $("#TB").append(timeBlock);
  console.log(timeBlock);
  let timeBlock1 = $("<textarea>")
    .addClass("col-md-10 description")
    .attr("data-slot", slots[i]);
  $("#TB").append(timeBlock1);
  console.log(timeBlock1);
  let timeBlock2 = $("<button>")
    .addClass("btn saveBtn col-md-1")
    .attr("data-slot", slots[i]);
  $("#TB").append(timeBlock2);
  console.log(timeBlock2);
}
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ dynamically rendering fields to page ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
//object for storing user data--------------------------------------------------------------------------------------------------------------------------------------------

//object for storing user data--------------------------------------------------------------------------------------------------------------------------------------------

//function to change color--------------------------------------------------------------------------------------------------------------------------------------------

//function to change color--------------------------------------------------------------------------------------------------------------------------------------------

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button fort that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```








// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ commented out attempts ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙

// for (let i = 0; i < slots.length; i++) {
//     const element = slots[i];
//     let timeBlock1 = $("<textarea>")
//     .addClass("row description col-md-10")
//     .attr("data-slot", slots[i])
//     $("#TB").append(timeBlock);
//     console.log(timeBlock)
// }

// for (let i = 0; i < slots.length; i++) {
//     const element = slots[i];
//     let timeBlock2 = $("<button>")
//     .addClass("row btn saveBtn col-md-10")
//     .attr("data-slot", slots[i])
//     $("#TB").append(timeBlock);
//     console.log(timeBlock)
// }

// for (let i = 0; i < slots.length; i++) {
//     const element = slots[i];
//     let timeBlock = $("<p>")
//     .addClass("row description col-md-10")
//     .attr("data-slot", slots[i])
//     .text(slots[i])
//     $("#TB").append(timeBlock);
//     console.log(timeBlock)
//     for (let i = 8; i < slots.length; i++) {
//         const element = slots[i];
//         let timeBlock = $("<textarea>")
//         .addClass("row description col-md-10")
//         .attr("data-slot", slots[i])
//         $("#TB").append(timeBlock);
//         console.log(timeBlock)
//         for (let i = 8; i < slots.length; i++) {
//             const element = slots[i];
//             let timeBlock = $("<button>")
//             .addClass("row btn saveBtn col-md-10")
//             .attr("data-slot", slots[i])
//             $("#TB").append(timeBlock);
//             console.log(timeBlock)
//         }
//     }
// }

// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//     let letterBtn = $("<button>")
//       .addClass("letter-button letter letter-button-color")
//       .attr("data-letter", letters[i])
//       .text(letters[i]);
//       $("#buttons").append(letterBtn);

//       console.log(letters);
//     }

{
  /* <div id = "time block" class = "row time-block">
                            <div class = "col-md-1 hour">
                            0900
                            </div>
                            <textarea class = "col-md-10 description"></textarea>
                            <button class = "btn saveBtn col-md-1">
                            <i class = "fas fa-save"></i>
                            </button>
                            </div> */
}
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ commented out attempts ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙