const input = document.getElementById('input-name');

function LoadGraphs(){
    let dados = localStorage.getItem("dados");
    dados = JSON.parse(dados);
    pages = [];
    cliques = [];

    for(let i=0; i < dados.length; i++)
    {
        pages.push(dados[i].page);
        cliques.push(dados[i].cliques);
    }
    CreatePizza('click-graph', cliques, pages, '50%', '50%');
}

function InputClick(){
    input.style.backgroundColor = "white";
    input.style.color = "black";
    input.style.setProperty('--c', 'gray')
    input.style.backgroundImage = "url('https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640')"
}

function InputOff(){
    input.style.backgroundColor = "#6099f6";
    input.style.color = "#fff";
    input.style.setProperty('--c', '#fff')
    input.style.backgroundImage = "none";
}

function TamplateDownload(){
    let link = document.createElement('a');
    link.download = 'tamplate.xlsx'
    link.href = '../files/tamplate.xlsx';
    link.click();
}

function ClickTela(){
    let vetor = [];

    contator = 0;
    let dados = localStorage.getItem("dados");

    if(dados == null){
        let value = {page: 'Pagina Inicial', cliques: 1};
        let value2 = {page: 'Contato', cliques: 0};
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
        if(dados[i].page === 'Pagina Inicial')
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

function CreateNewGraph(name){
    const inputName = document.getElementById(name);

    if(inputName.value != ""){
        localStorage.setItem('newGraph', input.value);
        window.location = './pages/criar.html'
    }
    else
        alert('Gráfico sem nome.');
}

function CreateGraph(canva, typeGraph, x, y, name, color){
    let ctx = document.getElementsByClassName(canva);

    let chartGraph = new Chart(ctx,{
        type: typeGraph,
        data:{
            labels: x,
            datasets:[{
                label: name,
                data: y,
                borderWidth: 5,
                borderColor: color
            }]
        }
    })
}

function CreatePizza(canva, datas, names, width, height){
    let ctx = document.getElementById(canva);
    const config = new Chart(ctx,{
        type: 'pie',
        data: {
            labels: names,
            datasets: [
                {
                    label: 'Batata',
                    backgroundColor: ['#0b5fec', '#548ff2', '#0a48ad'],
                    data: datas,
                }
            ]
        }
    });

    ctx.parentNode.style.width = width;
    ctx.parentNode.style.height = height;
}