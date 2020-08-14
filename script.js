// gameplan - use military time - store info in an object? - save color coordination for last
// first user enters data into field
// if user hits save button, this data is then pushed to an object and stored in local storage
// for color changing, can use moment.js to say... if current time is > change to this color, if time is = change to this color, if time is < change to this color
// || if current time is > change to this color || how do i acomplish? maybe something like time = currentTime - xMinutes = time. need to figure out how to separate minutes from hours
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
    .val([]); // ⮘◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ where input value will be stored
    $("#TB").append($textArea);
    let saveButton = $("<button>")
    .addClass("btn saveBtn col-md-1 fas fa-save")
    $("#TB").append(saveButton);
  }
  // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ FOR LOOP TO RENDER CONTENT TO PAGE

  // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ FUNCTION TO SAVE VALUE IN TEXTAREA TO LOCALSTORAGE ON CLICK
  $(".saveBtn").click(function(){ 
    const inputFieldKey = $(this).prev("textarea").prev("p").css("background-color", "red").val();
    const inputField = $(this).prev("textarea").css("background-color", "red").val();
    localStorage.setItem(inputFieldKey, JSON.stringify(inputField));
    // localStorage.setItem(inputFieldKey, inputField);
    console.log(inputField)
    console.log(inputFieldKey)
    console.log(localStorage.getItem(inputFieldKey))
    console.log(localStorage.getItem(inputField))
    // localStorage.getItem(inputFieldKey, JSON.parse(inputField));
  }); 
  // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ FUNCTION TO SAVE VALUE IN TEXTAREA TO LOCALSTORAGE ON CLICK
  













//  window.onload = function () {
//  const inputField = localStorage.getItem("inputField")
//  if (inputField !== null) $(textArea).val("inputField");
//   }







// let schedule = localStorage.getItem(inputField);
// if(schedule){ 
//   schedule = JSON.parse(schedule);
// }else {
//   schedule = {};
// }

// console.log(this)
// console.log(inputField)
// console.log(inputFieldKey)

//   function donny(){
  
  //   var dingus = localStorage.getItem("inputField")
  //    $("textArea").val = dingus
  //  }
  
  //  donny();
  // console.log(inputField)
  // console.log(JSON.stringify($textArea.val))
  // var  = localStorage.getItem("text");
  // textArea = textArea ? textArea.split(',') : [];
  // localStorage.setItem("text", textArea.toString());
  
  
  
  
  // const id = $(this).parent().attr("id");
  // console.log(id)
  
  //jquery access sibling element - may need for my code... read up on jquery parents. 
  // $(".saveBtn").("click", function(){
    //   let schedule = localStorage.getItem("storage");
    //   if(schedule){
      //       schedule = JSON.parse(schedule);
      //   }else {
        //     schedule = {};
        //   }
        
        //   for(id in schedule){
          //     $("#").find("textarea").val(schedule[id]);
          //   }
          
          //   const val = $(this).siblings("textarea")[0])
          //   console.log(val);
          //   const id = $(this).parent().attr("id");
          //   console.log(id);
          //   schedule[id] = val;
          //   localStorage.Storage.setItem("schedule", JSON.stringify(scheulde));
          // })
          
        
        // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮙ MAIN FUNCTION TO SAVE TO LOCAL STORAGE 
        //object for storing user data--------------------------------------------------------------------------------------------------------------------------------------------
        //object for storing user data--------------------------------------------------------------------------------------------------------------------------------------------
        //function to change color--------------------------------------------------------------------------------------------------------------------------------------------
        //function to change color--------------------------------------------------------------------------------------------------------------------------------------------
        
        // WHEN I scroll down ⮘◙◙◙◙◙◙ DONE. FORMATTING IS WONKY BUT DOABLE
        // THEN I am presented with timeblocks for standard business hours ⮘◙◙◙◙◙◙ DONE. FORMATTING IS WONKY BUT DOABLE
        // WHEN I view the timeblocks for that day
        // THEN each timeblock is color coded to indicate whether it is in the past, present, or future ⮘◙◙◙◙◙◙ NEED TO WORK ON
        // WHEN I click into a timeblock 
        // THEN I can enter an event
        // WHEN I click the save button fort that timeblock 
        // THEN the text for that event is saved in local storage ⮘◙◙◙◙◙◙ NEED TO WORK ON
        // WHEN I refresh the page
        // THEN the saved events persist ⮘◙◙◙◙◙◙ NEED TO WORK ON
        
        // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ ideas ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
        // could i use a for loop to loop thru each field before refresh to determine if value contained within should be saved? 
        
        // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ ⮛ commented out attempts ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
        
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
                    
                    // window.localStorage.getItem(inputField)
                    // console.log(JSON.parse(window.localStorage.getItem(inputField)));
                    
                    // let textAreaVal = $textArea.val(); // ⮘◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ variable to store value of what user has input
                    // console.log(textAreaVal)
                    // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ commented out attempts ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
                    // ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ side bar from tucker ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙
                    //jquery access sibling element - may need for my code... read up on jquery parents. simplying
                    // $(".saveBtn").("click", function(){
                      //   let schedule = localStorage.getItem("storage");
                      //   if(schedule){
                        //       schedule = JSON.parse(schedule);
                        //   }else {
                          //     schedule = {};
                          //   }
                          
                          //   for(id in schedule){
                            //     $("#").find("textarea").val(schedule[id]);
                            //   }
                            
                            //   const val = $(this).siblings("textarea")[0])
                            //   console.log(val);
                            //   const id = $(this).parent().attr("id");
                            //   console.log(id);
                            //   schedule[id] = val;
                            //   localStorage.Storage.setItem("schedule", JSON.stringify(schedule));
        // })
// ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ side bar from tucker ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙