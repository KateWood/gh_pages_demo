$(document).ready(function(){


// var myDiv = document.getElementById('container')
//
// var newP = document.createElement('p')
//
// newP.innerHTML = 'Hello complicated, multi-step world of adding an element to the DOM!'
//
// myDiv.appendChild(newP)


// $('#container').append('<p>Hello simple insertion using jQuery chaining</p>')
//
// $('#container').append('<button id="myButton">Change Color</button>')
//
// $('#myButton').click(function(){
//   $('p').toggleClass('red')
// })

// var $newDiv = $('<div>')
//
// $newDiv.html('Farm-to-table')
//
// $newDiv.addClass('innerItem')
//
// $('#outerContainer').append($newDiv)
// $('body').click(function(){
//   alert("BODY CLICKED!")
// })
// $('#container').click(function(){
//   alert("You clicked the container!")
// })
// $('#myBtn').click(function(){
//   alert('You clicked me!')
//   event.stopPropagation()
// })

// var buttonInnerHTML = $('#myBtn').html()
//
// $('#container').append('<p>This is a paragraph</p>')
//
// $('#myBtn').click(function(){
//   $('p').remove()
//   $('#container').append('<a>LINK</a>')
// })


var drinksArray = ['Coca-cola', 'Pepsi Cola', 'RC Cola', 'Shasta Cola', 'Some Other Cola']

// for(var i = 0; i < drinksArray.length; i++){
//   $('#drinks').append('<li>' + drinksArray[i] +'</li>')
// }

drinksArray.forEach(function(drink){
  $('#drinks').append('<li>' + drink + '</li>')
})

var foodsArray = ['pizza', 'sandwiches', 'salad', 'chicken']

// foodsArray.forEach(function(food){
//   $('#foods').append('<li>' + food + '</li>')
// })

for(var i = 0; i < foodsArray.length; i++){
  $('#foods').append('<li>' + foodsArray[i] + '</li>')
}

$('#addDrink').click(function(){
  var newDrink = $('#drinkInput').val()
  $('#drinks').append('<li>' + newDrink + '</li>')
  $('#drinkInput').val('')
})

$('#addFood').click(function(){
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
})


})
