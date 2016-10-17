$(function() {

  //   var $tweetText = "";
  //   var $tweetChar = $('#chars');
  //   var $charCount = $('#counter');
  //   var $counter = 0;
  //   var $tweet-counter = 140;
  //   var $keysToIgnore = ["Shift", "Alt", "CapsLock", "Meta"];
  //
  var $ol = $('ol');

  //console.log(tweets);
  $.each(tweets, function(i, tweet){
    //console.log(i);
    //console.log(tweet);

    $ol.append('<li class="stream-item">'+
    '<div class="tweet">'+
    '<a href="#">'+
    '<img src="' + tweet.user_thumbnail +'">'+
    '</a>'+
    '<div class="content">'+
    '<strong class="fullname">' + tweet.name +'</strong>'+
    '<span>&rlm;</span>'+
    '<span>@</span><b>' + tweet.screen_name +'</b>'+
    '&nbsp;&middot;&nbsp;'+
    '<small class="time">'+ tweet.created_at +
    '</small>' +
    '<p>' + tweet.text +'</p>' +
    '</div>' +
    '</div>' +
    '</li>');

    $("#new-tweet-form").submit(function(){
       var $charInput = $(("new-tweet-input").value);
       console.log($("new-tweet-input").value);
     });
    //
    // $ol.prepend('<li class="stream-item">'+
    // '<div class="tweet">'+
    // '<a href="#">'+
    // '<img src="' + tweet.user_thumbnail +'">'+
    // '</a>'+
    // '<div class="content">'+
    // '<strong class="fullname">' + tweet.name +'</strong>'+
    // '<span>&rlm;</span>'+
    // '<span>@</span><b>' + tweet.screen_name +'</b>'+
    // '&nbsp;&middot;&nbsp;'+
    // '<small class="time">'+ tweet.created_at +
    // '</small>' +
    // '<p>' + tweet.text +'</p>' +
    // '</div>' +
    // '</div>' +
    // '</li>');

    // $tweetChar.textContent = $tweetText;
    // $charCount.textContent = $counter;
    //
    // $('keyup', function() {
    //      console.log(e.key, $tweetText[0]);
    //     console.log(e.key);
    //     if(keysToIgnore.indexOf(e.key) !== -1 || $tweetText.length === $tweet-counter) return;
    //
    //     //if(keysToIgnore.indexOf(e.key) !== -1) return;
    //     if($tweetText.length === $tweet-counter) return;
    //
    //     if(e.key === $tweetText[0]) {
    //       console.log("Correct key pressed");
    //
    //       $tweetChar.textContent = $tweetChar;
    //       $counter++;
    //     } else {
    //       console.log("Incorrect key pressed");
    //     }
    //     $charCount.textContent = $counter;
    //   //});
  });
  //});
  //console.log(tweet);
});
