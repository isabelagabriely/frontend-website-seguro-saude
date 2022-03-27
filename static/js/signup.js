window.onload = () => {
    var buttonSignUp = document.getElementById("validateCPF");
    buttonSignUp.addEventListener("click", validateCPF, false);
};

function validate(cpf) {
    var soma;
    var resto;
    var error = false;

    if (!cpf || cpf.length > 11) {
        error = true;
    }

    soma = 0;
    for (i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) 
        resto = 0;
    
    if (resto != parseInt(cpf.substring(9, 10)) || cpf == '00000000000') {
        error = true;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) 
    resto = 0;

    if (resto != parseInt(cpf.substring(10, 11))) {
        error = true;
    }

    return error;
}

function validateCPF() {
    var input_cpf = document.querySelector('#doc').value;
    error = validate(input_cpf);

    if (error) {
        document.getElementById('doc').innerHTML = "<style>input[id='doc'] {border-color: #f00;}</style>";
        alert('Insira um CPF ou CNPJ válido');
        document.getElementById('doc').focus();
        var field = document.getElementById("doc");
        var size = field.value.length;
        field.setSelectionRange(size, size);
        return; 
    }

    else {
        document.getElementById('doc').innerHTML = "<style>input[id='doc'] {border-color: none;}</style>";
        return;
    }
}
