
const botao = document.getElementById("btnSaibaMais");
const notificacao = document.getElementById("notificacao");
const btnVoltar = document.getElementById("btnVoltar");
const btnVoltarInicio = document.getElementById("btnVoltarInicio");


// Saiba Mais
botao.addEventListener("click", function () {

    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
    
    //notificação - mostra uma notificação quando o usuario clica em saiba mais
    setTimeout(function () {
        notificacao.classList.add("mostrar");

        setTimeout(function () {
            notificacao.classList.remove("mostrar");
        }, 3000);

    },  800);

});

//voltar 
btnVoltar.addEventListener("click", function () {

    document.getElementById("header").scrollIntoView({
        behavior: "smooth"
    });

});

// Voltar ao Início
btnVoltarInicio.addEventListener("click", function () {

    document.getElementById("header").scrollIntoView({
        behavior: "smooth"
    });

});




