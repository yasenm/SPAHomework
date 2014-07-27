(function () {
    require.config({
        paths: {
            "jquery": "../libs/jquery/dist/jquery",
            "q": "../libs/q/q",
            "sammy": "../libs/sammy/lib/sammy",
            "requester": "./requester",
            "renderer": "./renderer"
        }
    });

    require(["jquery", "q", "requester", "renderer", "sammy"], function($, Q, requester, renderer, sammy){
        var spa = sammy('#content', function(){

            this.get('#/info', function(){
                $('#content').load('partials/info.html');
            })

            this.get('#/chat', function(){
                $('#content').load('partials/chat.html', function(){
                    $('#send-msg').on('click', function() {
                        alert('BUTTON!');
                        var msg = renderer.getMsg();
                        requester.postData(msg);
                    });
                });
            })

            this.get('#/', function(){
                $('#content').load('partials/chatffs.html');
            })
            
        });
        spa.run('#/');

        function refreshChat(){
            requester.getData().then(renderer.renderChat);
        }
        setInterval(refreshChat, 500);
    })
}());