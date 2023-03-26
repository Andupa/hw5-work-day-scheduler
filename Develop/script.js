 

  var timeBlockEl = ('.time-block');
     
  var descriptionEl =('.description');
  
  function handleActivityList(event){
    event.preventDefault();

    var descriptionListEl = $('textarea').val();
    if(!descriptionListEl);{
      return;
    }
    var activityDescription = $('<li class = "firstActivity">');
    activityDescription.text(descriptionListEl);
    descriptionListEl = " ";
    descriptionListEl.push(activityDescription);
    localStorage.setItem("My activities", JSON.stringify(discriptionListEl));
      timeBlockEl.on('click', .firstActivity, handleActivityList);
  };
       
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

         var presentTime = $('.present');
         presentTime.text('10Am')
         var pastTime = $('.past')
         var futureTime = $('.future');
         var currentHour =dayjs.hour();
         if (currentHour ==='4pm'){
          $('#hour-4').addClass('present');
          elseif(5 >= currentHour <= '12AM')

         
    

}

var today =dayjs();
$('#currentDay').text(today.format('dddd,MMMM D'));  