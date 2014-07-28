(function () {
    require.config({
        paths: {
            "jquery": "../libs/jquery/dist/jquery",
            "q": "../libs/q/q",
            "sammy": "../libs/sammy/lib/sammy",
            "requester": "./requester",
            "renderer": "./renderer",
            "controller": "./controller"
        }
    });

    require(["jquery", "q", "requester", "renderer", "sammy", "controller"], function($, Q, requester, renderer, sammy, controller){
        var spa = sammy('#content', function(){

            this.get('#/info', function(){
                $('#content').load('partials/info.html');
            })

            this.get('#/chat', function(){
                $('#content').load('partials/chat.html', function(){
                    $('#send-msg').on('click', function() {
                        var msg = controller.getMsg();
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