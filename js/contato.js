function ClickTela(){
    let vetor = [];

    contator = 0;
    let dados = localStorage.getItem("dados");

    if(dados == null){
        let value = {page: 'Pagina Inicial', cliques: 0};
        let value2 = {page: 'Contato', cliques: 1};
        let value3 = {page: 'Quem somos?', cliques: 0};
        vetor.push(value, value2, value3);
        localStorage.setItem("dados", JSON.stringify(vetor));
    }

    while(vetor.length)
        vetor.pop();

    dados = localStorage.getItem("dados");
    dados = JSON.parse(dados);

    let find = false;
    for(let i=0; i < dados.length; i++){
        if(dados[i].page === 'Contato')
        {
            dados[i].cliques = dados[i].cliques + 1;
            localStorage.setItem("dados", JSON.stringify(dados));
            find = true;
            break;
        }
    }
}

function PegaLadrao(event){
    const inputs = document.getElementsByTagName('input');
    event.preventDefault();
    
    for(let i=0; i < inputs.length; i++)
        console.log(inputs[i].value)

}