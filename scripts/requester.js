define(["jquery", "q"], function($, Q){
	var CHAT_URL = "http://crowd-chat.herokuapp.com/posts";

    function makeRequest(url, type, msg){
        var deferred = Q.defer();

        $.ajax({
            url: url,
            type: type || 'GET',
            data: (type == 'POST') ? JSON.stringify(msg) : undefined,
            contentType: 'application/json',
            success: function(data){
                if (type === 'POST') {
                    console.log(data);
                }
                deferred.resolve(data);
            },
            error: function(err){
                deferred.reject(err);
            }
        })

        return deferred.promise;
    }

    function getData(){
        return makeRequest(CHAT_URL);
    }

    function postData(msg){
        return makeRequest(CHAT_URL, 'POST', msg);
    }

    return {
    	getData: getData,
    	postData: postData
    }
})