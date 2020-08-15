// ⮛ ⮙ ⮘ ◙
//◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ ⮙ ⮘
//◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛
//◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙
//◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮘
//◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ day of the week display
let currentTime = moment().format("dddd"); // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮘ this uses the moment library to grab the day and sets it to variable of currentTime
$("#currentDay").text("Today is " + currentTime); // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮘ this says in the currentDay class, input text Today is followed by current day
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ day of the week display
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ array to store time slots
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
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ ARRAY TO STORE TO TIME SLOTS
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ FOR LOOP TO RENDER CONTENT TO PAGE

for (let i = 0; i < slots.length; i++) {
  const element = slots[i];
  let timeBlock = $("<p>")
    .addClass("col-md-1 hour")
    .text(slots[i])
    .val(slots[i]);
  $("#TB").append(timeBlock);
  var $textArea = $("<textarea>")
    .addClass("col-md-10 description")
    .attr("id", slots[i]);
  $("#TB").append($textArea);
  donny(slots[i]); // ⮘◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ WHERE INPUT VALUE WILL BE STORED
  let saveButton = $("<button>").addClass("btn saveBtn col-md-1 fas fa-save");
  $("#TB").append(saveButton);
}
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ FOR LOOP TO RENDER CONTENT TO PAGE
function donny(walter) {
  let localStorageGet = localStorage.getItem(walter);
  let inputFieldGet = $("#" + walter).val(localStorageGet);
}
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ FUNCTION TO SAVE VALUE IN TEXTAREA TO LOCALSTORAGE ON CLICK
$(".saveBtn").click(function () {
  let inputFieldKey = $(this)
    .prev("textarea")
    .prev("p")
    
    .val();
  let inputField = $(this)
    .prev("textarea")
    .css("background-color", "red")
    .val(); 
  localStorage.setItem(inputFieldKey, inputField);
  console.log(inputField);
});
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ FUNCTION TO SAVE VALUE IN TEXTAREA TO LOCALSTORAGE ON CLICK

