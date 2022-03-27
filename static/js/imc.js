window.onload = () => {
	var buttonIMC = document.getElementById("getIMC");
	buttonIMC.addEventListener("click", getIMC, false);
};

function getIMC() {
    var weight = document.querySelector("#weight").value;
    var height = document.querySelector("#height").value;

    if (!weight) {
        alert("Preencha o campo Peso");
        return;
    }

    if (!height) {
        alert("Preencha o campo Altura");
        return;
    }

    imc = weight / height ** 2;
    classification = ''

    if (imc < 18.5)
        classification = 'Magreza'

    else 
        if (18.5 <= imc && imc < 25) 
            classification = 'Normal'

    else 
        if (25 <= imc && imc < 30) 
            classification = 'Sobrepeso'

    else 
        if (30 <=  imc && imc < 40) 
            classification = 'Obesidade'

    else 
        classification = 'Obesidade Grave'

    document.querySelector(".show-imc").innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br> Classificação: " + classification;
}
