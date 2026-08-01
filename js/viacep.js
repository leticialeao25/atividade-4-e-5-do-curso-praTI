const btnBuscarCep = document.getElementById("btnBuscarCep");
const campoCep = document.getElementById("cep");
const resultadoCep = document.getElementById("resultadoCep");

// quando o usuário clicar no botão "Buscar CEP"
btnBuscarCep.addEventListener("click", function () {

    // obtém o CEP digitado
    const cep = campoCep.value;

    // envia uma requisição para a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

        // converte a resposta da API para JSON
        .then(function (resposta) {
            return resposta.json();
        })

        // recebe os dados da API
        .then(function (dados) {

            // verifica se o CEP existe
            if (dados.erro) {

                resultadoCep.innerHTML = `
                    <div class="erro-cep">
                        ❌ CEP não encontrado. Verifique os números digitados e tente novamente.
                    </div>
                `;

                return;
            }

            // exibe os dados do endereço
            resultadoCep.innerHTML = `
                <p> <strong>Logradouro:</strong> ${dados.logradouro}</p>
                <p> <strong>Bairro:</strong> ${dados.bairro}</p>
                <p> <strong>Cidade:</strong> ${dados.localidade}</p>
                <p> <strong>Estado:</strong> ${dados.uf}</p>
            `;

        });

});