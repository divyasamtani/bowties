$(document).ready(function() {

// CREATE NEW BOWTIE BUTTON
  var generateCreateButton = function(bowties) {
    createButton = '<a class="btn btn-cyan createBowtieButton" data-id="' + bowties[i].id + '">' + 'Create New' + '</a>'

    $('body').append(createButton);
  }


// SHOW LIST OF BOWTIES
  var generateIndex = function(bowties) {
    var newElem = "";

    for (var i = 0; i < bowties.length; i++) {
      newElem += '<div class="card col-md-4 col-sm-12">' +
                    '<div class="card-block col-md-4 col-sm-12">' +
                    // title
                    '<h6 class="card-title">' + bowties[i].id + '</h6>' +
                    // text
                     '<p class="card-text">' + bowties[i].material +
                      ' - ' +
                      bowties[i].pattern + '</p>' +
                  '<a class="btn btn-cyan editBowtieButton" data-id="' + bowties[i].id + '">' + 'Edit' + '</a>' +
                  '<a class="btn btn-cyan deleteBowtieButton" data-id="' + bowties[i].id + '">' + 'Delete' + '</a>' +
                  '</div>' +
                  '</div>'
    }

    newElem = '<div class="container">' + '<div class="row">' + newElem + '</div>' + '</div>'

    $('body').append(newElem);
  }

  $.ajax({
    url: "/api/bowties",
    method: "GET",
    success: function(resp) {
      generateIndex(resp);
      createButton();
    }
  });


// EDIT THE BOWTIE
  // $(".card").on('click', '.editBowtieButton', function (e) {
  //   e.preventDefault();

  //   var $button = $(e.target);
  //   var id      = $button.data('id');

  //   $.ajax({
  //     url: "/api/bowties" + id,
  //     method: 'GET'
  //   }).done(function(bowtie){
  //     updateParams   = bowtie.params
  //   });
  // });



// DELETE THE BOWTIE
//  $(".card").on('click', '.editBowtieButton', function (e) {
  //   e.preventDefault();

//     var $button = $(e.target);
//     var id      = $button.data('id');

//     $.ajax({
//       url: '/user/list/' + id,
//       method: 'DELETE',
//     }).done(function(bowtie){
//       $(e.target).remove();
//     });
//   });



})


// ********************************************************




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



