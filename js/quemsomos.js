function ClickTela(){
    let vetor = [];

    contator = 0;
    let dados = localStorage.getItem("dados");

    if(dados == null){
        let value = {page: 'Pagina Inicial', cliques: 0};
        let value2 = {page: 'Contato', cliques: 0};
        let value3 = {page: 'Quem somos?', cliques: 1};
        vetor.push(value, value2, value3);
        localStorage.setItem("dados", JSON.stringify(vetor));
    }

    while(vetor.length)
        vetor.pop();

    dados = localStorage.getItem("dados");
    dados = JSON.parse(dados);

    let find = false;
    for(let i=0; i < dados.length; i++){
        if(dados[i].page === 'Quem somos?')
        {
            console.log("dados antigos: " + dados[i].cliques);
            dados[i].cliques = dados[i].cliques + 1;
            console.log("dados novos: " + dados[i].cliques);
            localStorage.setItem("dados", JSON.stringify(dados));
            find = true;
            break;
        }
    }
}