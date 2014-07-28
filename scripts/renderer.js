define(["jquery"], function($, controller){

	function renderChat(data){
	    var messages = data.slice(data.length - 14, data.length - 1);

	    var $panel = $('<div>')
	                    .addClass('panel')
	                    .addClass('panel-primary');

	    messages.forEach(function(msg){
	        var userIsValid = !(msg.by.trim() === ''),
	            textIsValid = !(msg.text.trim() === ''),
	            messageText = escapeText(msg.by + ' : ' + msg.text);

	        if (userIsValid && textIsValid) {
	            var $newMsg = $('<div>')
	                                .text(messageText)
	                                .css('word-wrap', 'break')
	                                .addClass('panel-body');
	            $panel.append($newMsg);
	        }
	    })

	    $('#chat-container').text('');
	    $('#chat-container').append($panel);
	}


    function escapeText(msg){
        return $("<div>").html(msg).text();
    }

	return {
		renderChat: renderChat
	}
})