var mainEl = document.getElementById('main');
var image = document.getElementById('image');
var cover = document.getElementById('cover');
var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');
var pictures = ['./assets/images/1.jpg','./assets/images/2.jpg', './assets/images/3.jpg','./assets/images/4.jpg','./assets/images/5.jpg','./assets/images/6.jpg','./assets/images/7.jpg']
// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
  cover.setAttribute('style', 'width: 0px;');
  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      if(wordCount < pictures.length){
        image.setAttribute('src', pictures[wordCount]);
      }else {
        var index = wordCount - pictures.length;
        image.setAttribute('src', pictures[index]);
      }
      wordCount++;
    }
  }, 1000);
}

