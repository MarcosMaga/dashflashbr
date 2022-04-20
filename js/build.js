const X = localStorage.getItem('vetorX');
const Y = localStorage.getItem('vetorY');
const nome = localStorage.getItem('newGraph');

//localStorage.removeItem('newGraph');
//localStorage.removeItem('vetorX');
//localStorage.removeItem('vetorY');
let vetorX = X.split(',');
let vetorY = Y.split(',')

console.log(vetorX);
console.log(vetorY);

CreateGraph('build-graph', vetorX, vetorY, nome, 'rgba(77,166,253,0.85)', '50%', '50%');

function CreateGraph(canva, x, y, name, color, width, height){
    let ctx = document.getElementById(canva);

    let chartGraph = new Chart(ctx,{
        type: 'line',
        data:{
            labels: x,
            datasets:[{
                label: 'x',
                data: y,
                borderWidth: 5,
                borderColor: color,
                backgroundColor: 'white',
            }]
        },
        options:{
            plugins: {
                title:{
                    display: true,
                    text: name,
                }
            },
        }
    })

    ctx.parentNode.style.width = width;
    ctx.parentNode.style.height = height;
}

function Baixar(){
    let link = document.createElement('a');
    link.download = nome + '_graph.png';
    link.href = document.getElementById('build-graph').toDataURL();
    link.click();
}

function Voltar(){
    window.location = '../index.html'
}

