function login() {
    var nome = document.getElementById("nome2").value;

    window.alert("Bem vindo a Game Mania " + nome + "!");
}


function cadastro() {
    var cadnome = document.getElementById("name1").value;

    var cadcpf = document.getElementById("cpf").value;

    var cadtel = document.getElementById("telefone_res").value;

    var cadcel = document.getElementById("telefone_cel").value;

    var cadcep = document.getElementById("cep").value;

    var cadrua = document.getElementById("endereco").value;

    var cadnumero = document.getElementById("numero").value;

    var cadcomplemento = document.getElementById("complemento").value;

    var cadbairro = document.getElementById("bairro").value;

    var cadcidade = document.getElementById("cidade").value;

    var cadestado = document.getElementById("estado").value;

    alert(`Cadastro efetuado com sucesso!`);

    alert(`Olá ${cadnome} 
    Seu CPF é: ${cadcpf}
    Seu Telefone é: ${cadtel}
    Seu Celular é: ${cadcel}
    Seu Cep é: ${cadcep}
    Seu Endereço é: ${cadrua} 
    Número: ${cadnumero} 
    Complemento: ${cadcomplemento} 
    Bairro: ${cadbairro}
    Cidade: ${cadcidade} 
    Estado: ${cadestado}  
    `)
}