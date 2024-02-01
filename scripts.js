let chave = "333ae6249063a0f1f0c7aee1f66b7300";



function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".img-previsao").src =
        "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    try {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            cidade +
            "&appid=" +
            chave +
            "&lang=pt_br" +
            "&units=metric"
        );

        if (!response.ok) {
            throw new Error("Cidade não encontrada");
        }

        let dados = await response.json();
        colocarNaTela(dados);
    } catch (error) {
        console.error("Erro ao buscar cidade:", error.message);
        alert("Erro ao buscar cidade. Verifique o nome e tente novamente.");
    }
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;

    if (cidade.trim() !== "") {
        buscarCidade(cidade);
    } else {
        alert("Por favor, insira o nome da cidade.");
    }
}


