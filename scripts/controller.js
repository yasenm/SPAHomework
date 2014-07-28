define(["jquery"], function($){

	function getMsgFromForm(){
	    var result = {
	        user: getUserName(),
	        text: getTextMsg()
	    }

	    return result;
	}

	function getUserName(){
	    var USER_MIN_LEN = 4,
	        USER_MAX_LEN = 30,
	        username = $('#username-input').val().trim(),
	        validUsername = (username.length >= USER_MIN_LEN) && (username.length <= USER_MAX_LEN);

	    if (!validUsername) {
	        alert('Username must be between 4 and 30 symbols! User will apear as unknown');
	        username = 'unknown';
	    }

	    return username;
	}

	function getTextMsg(){
	    var MSG_MIN_LEN = 1,
	        MSG_MAX_LEN = 200,
	        msgText = $('#chat-message-input').val().trim(),
	        validMessage = (msgText.length >= MSG_MIN_LEN) && (msgText.length <= MSG_MAX_LEN);
	    if (!validMessage) {
	        alert('Message text must be between 1 and 200 symbols! Message will apear as empty!');
	        msgText = 'empty';
	    }

	    return msgText;
	}

	return {
		getMsg: getMsgFromForm
	}
})