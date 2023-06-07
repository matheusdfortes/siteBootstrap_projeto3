$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('#form-contato').validate({
        rules:{
            nome:{
                required: true,
                minlength: 4,
                minWords: 2
            },
            email:{
                required: true,
                email: true
            },
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome completo',
            email: 'Por favor, insira seu email',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form){
            alert('seu formulário foi enviado')
        }
    })
})