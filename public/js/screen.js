let socket = null;

document.getElementById("btnGo").onclick = () => {
    const name = document.getElementById('msgName').value;
    const cns = document.getElementById('msgCns').value;
    //const ps = (document.getElementById('msgPs').value != null ? document.getElementById('msgPs').value : 'x' );
    //const email = (document.getElementById('msgEmail').value != null ? document.getElementById('msgEmail').value : 'x' );
    document.getElementById('msgName').value = ''
    document.getElementById('msgCns').value = ''
    document.getElementById('loginIn').style.display = 'none';
    document.getElementById('chatter').style.display = 'block';
    $.ajax({
        url: 'http://localhost:3030/change',
        method:'POST',
        data: {name: name}
      }).done(function(){
        socket = io.connect();
        
        $("form#chat").submit(function(e) {
          e.preventDefault();
          socket.emit("send message",  $(this).find("#msg_text").val(), function() {
              $("form#chat #msg_text").val("");
          });
        });

        socket.on('chat message', function(msg){
          //handle the message however you would like
          $('.cHistory').append($('<p />').text(msg));

        });

        socket.on("update messages", function(msg){
          var final_message = $("<p />").text(msg);
          $(".cHistory").append(final_message);
        });
   
        console.log('deu certo');
      }).fail(function(){
        console.log('deu ruim');
      });

}

