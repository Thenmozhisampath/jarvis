var recognition = new webkitSpeechRecognition();

recognition.lang = "en-IN";
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(e){
  process(e.results);
};
recognition.onerror = function(e){
  console.error(e);
  window.location.reload();
};
recognition.onend = function(e){
  recognition.start();
};
recognition.start();

function process(results){
  // console.log(results);
  transcript = $.trim(results[results.length - 1][0].transcript);
  $("#translated-text").html(transcript);

  // get translated text
  $.post('/apis/translate', {'text': transcript, 'format': 'text'}).done(function(){

  });

  // get translated speech
  $.post('/apis/translate', {'text': transcript, 'format': 'audio'}).done(function(){

  });
}
