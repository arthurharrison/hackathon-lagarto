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
        console.log('deu certo');
      }).fail(function(){
        console.log('deu ruim');
      });

}
