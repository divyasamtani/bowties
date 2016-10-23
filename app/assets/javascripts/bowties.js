$(document).ready(function() {

  var generateIndex = function(bowties) {
    var newElem = "";

    for (var i = 0; i < bowties.length; i++) {
      newElem += '<div class="card">' +
                    '<div class="card-block col-xs-4">' +
                    // title
                    '<h6 class="card-title">' + bowties[i].id + '</h6>' +
                    // text
                     '<p class="card-text">' + bowties[i].material +
                      ' - ' +
                      bowties[i].pattern + '</p>' +
                  '</div>' + '</div>'
    }

    newElem = '<div class="bowtieList">' + '<div class="row">' + newElem + '</div>' + '</div>'

    $('body').append(newElem);
  }

  $.ajax({
    url: "/api/bowties",
    method: "GET",
    success: function(resp) {
      generateIndex(resp);
    }
  });
})


// ********************************************************



// function bowtieDisplay (bowties) {
//     var newBowtie = '' +
//     '<div class="bowtie col-xs-5">' +
//           '<h5 class="card-header elegant-color-dark white-text">' + list.location + '</h5>' +
//           '<div class="card-block"> <a class="btn btn-lime editListButton" data-id="' + list._id + '">Edit</a> <a class="btn btn-cyan deleteListButton" data-id="' + list._id + '">Delete</a> </div>' +
//         '</div>'
//       '</div>';
//     $(newText).appendTo($cardList);
//   }



// // EDIT BUTTON ON LIST CARD - Retrieve info to put in modal
//   $("#cardList").on('click', '.editListButton', function (e) {
//     e.preventDefault();

//     var $button = $(e.target);
//     var id      = $button.data('id');

//     $.ajax({
//       url: '/user/list/' + id,
//       method: 'get'
//     }).done(function(list){
//       createMode = false;
//       updateId   = list._id;
//       replacePlaces(list);
//       $('#myModal').modal('show');
//     });
//   });


// // DELETE BUTTON ON LIST CARD
//   $("#cardList").on('click', '.deleteListButton', function(e) {
//      e.preventDefault();

//     var $button = $(e.target);
//     var id      = $button.data('id');

//     $.ajax({
//       url: '/user/list/' + id,
//       method: 'delete',
//     }).done(function(list){
//       $(e.target).parents('.card').remove();
//       console.log("list card deleted");
//     });
//   });

// // SUBMIT NEW LIST AND SAVE EDITED LIST
//   $("#addlist").submit(function(event) {
//     event.preventDefault();

//     addPlaces();

//     if (createMode) {
//       saveList();
//     } else {
//       saveList("/user/list/" + updateId, "PUT")
//     }

//     // Clears labels and removes active class
//     $(this).find('input').val('');
//     $(this).find('label').removeClass('active');
//     $(this).find('i').removeClass('active');
//   });

//   // Reset modal once closed
//   $('#myModal').on("hidden.bs.modal", function () {
//     createMode = true;
//     updateId   = null;
//   })
// });


//   // LOOK FOR CHECKED LOCATIONS
//   function bindCheckbox () {
//     $("input[type=checkbox]").click(function(e) {
//       var $checkboxes = $("input[type=checkbox]");
//       locations =[];
//       for(var i = 0; i < $checkboxes.length; i++) {
//         var checkbox = $checkboxes[i];
//         if (checkbox.checked) {
//           locations.push(countryCode[checkbox.value]);
//         }
//       }
//       updateMap();
//       updateTravelStats();
//       saveTravelStats();
//     });
//   }



