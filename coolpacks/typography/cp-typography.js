var captionLength = 0;
var caption = '';
var cursorBlink = '';

$(document).ready(function() {
  cursorBlink = setInterval('cursorAnimation()', 600);
  captionEl = $('#type-effect-caption');

  $('.cp-start-text-typing-effect').click(function() {
    testTypingEffect();
  });

  $('.cp-erase-text-typing-effect').click(function() {
    testErasingEffect();
  });
  
  //Un-comment this if you wish the animation to start automatically after some seconds
  //setTimeout(testTypingEffect, 2000);
});

function testTypingEffect() {
  caption = $('input#type-effect-user-caption').val();
  type();
}

function type() {
  captionEl.html(caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout('type()', 50);
  } else {
    captionLength = 0;
    caption = '';
  }
  
 //Un-Comment this if you wish the blink effect to stop after some seconds
 //setTimeout(function(){ clearInterval(cursorBlink); }, 4000);
  
 //Un-comment this if you wish the cursor to be removed after some seconds
 // setTimeout(deleteCursor, 4000);
}

function deleteCursor()
{
	$('#type-effect-cursor').hide();
}

function testErasingEffect() {
  caption = captionEl.html();
  captionLength = caption.length;
  if (captionLength > 0) {
    erase();
  } else {
    $('#type-effect-caption').html("You didn't write anything to erase, but that's ok!");
    setTimeout('testErasingEffect()', 1000);
  }
}

function erase() {
  captionEl.html(caption.substr(0, captionLength--));
  if (captionLength >= 0) {
    setTimeout('erase()', 50);
  } else {
    captionLength = 0;
    caption = '';
  }
}

function cursorAnimation() {
  $('#type-effect-cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}