 

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
       
  
  
         var presentTime = $('.present');
         presentTime.text('10Am')
         var pastTime = $('.past')
         var futureTime = $('.future');
         var currentHour =dayjs.hour();
         if (currentHour ==='4pm'){
          $('#hour-4').addClass('present');
          elseif(5 >= currentHour <= '12AM')
          {
            $('#hour-5').addClass('future');
          }

         
    

}

var today =dayjs();
$('#currentDay').text(today.format('dddd,MMMM D'));  