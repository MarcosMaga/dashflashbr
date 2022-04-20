const newName = localStorage.getItem('newGraph');
const display = document.getElementById('display-graph');
let valuesX = [];
let valuesY = [];

ReadExcel();

if(newName == null){
    window.location = '../index.html';
}
document.getElementById('name').innerHTML = newName;
localStorage.removeItem('newGraph');

function InserirDados(){
    const br = document.createElement('br');
    const btInserir = document.getElementById('btInserir');
    const btCSV = document.getElementById('btCSV');
    const inputY = document.createElement('input');
    const inputX =  document.createElement('input');
    const btConfirma = document.createElement('button');
    const btMontar = document.createElement('button');
    const labelX = document.createElement('p');
    const labelY = document.createElement('p');
    const text = document.createTextNode("Valor X:");
    const text2 = document.createTextNode("Valor Y:");
    inputX.id = "inputX";
    inputY.id = "inputY";
    btConfirma.id = "btConfirma";
    btConfirma.innerHTML = "Criar";
    btMontar.id = "btMontar";
    btMontar.innerHTML = "Montar";
    btConfirma.onclick = CreateData;
    btMontar.onclick = Montar;
    labelX.appendChild(text);
    labelY.appendChild(text2);
    display.removeChild(btInserir);
    display.removeChild(btCSV);
    display.appendChild(labelX);
    display.appendChild(inputX);
    display.appendChild(br);
    display.appendChild(labelY);
    display.appendChild(inputY);
    display.appendChild(br);
    display.appendChild(btConfirma);
    display.appendChild(btMontar);
}

function CreateData(){
    const inputX = document.getElementById('inputX');
    const inputY = document.getElementById('inputY');

    if(inputX.value == "" || inputY.value == "")
        alert('Preencha os dois campos (X e Y)');
    else{
        valuesX.push(inputX.value);
        valuesY.push(inputY.value);
        inputX.value = "";
        inputY.value = "";
        Table();
    }
}

function Table(){
    try{
        const tabela = document.getElementById('tabela');
        display.removeChild(tabela);
    }catch{}

    if(valuesX.length > 0)
    {
        const tbl = document.createElement("table");
        tbl.id = "tabela";
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let text = document.createTextNode("X");
        let cell2 = document.createElement("td");
        let text2 = document.createTextNode("Y");
        let cell3 = document.createElement("td");
        let text3 = document.createTextNode("Remover");
        cell.appendChild(text);
        cell2.appendChild(text2);
        cell3.appendChild(text3);
        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tbl.appendChild(row);

        for(let i=0; i < valuesX.length; i++){
            let linha = document.createElement("tr");
            let tr1 = document.createElement("td");
            let tr2 = document.createElement("td");
            let tr3 = document.createElement("button");
            tr3.innerHTML = " ";
            tr3.id = 'a' + i;
            tr3.className = "removeBt";
            tr3.onclick = RemoveVal;
            let txt1 = document.createTextNode(valuesX[i])
            let txt2 = document.createTextNode(valuesY[i]);
            tr1.appendChild(txt1);
            tr2.appendChild(txt2);
            linha.appendChild(tr1);
            linha.appendChild(tr2);
            linha.appendChild(tr3);
            tbl.appendChild(linha);
        }

        display.appendChild(tbl)
    }
    
;}

function Montar(){
    if(valuesX.length > 0){
        localStorage.setItem('vetorX', valuesX);
        localStorage.setItem('vetorY', valuesY);
        localStorage.setItem('newGraph', newName);
        window.location = './build.html';
    }
    else
        alert("Nenhum dado inserido");
    
}

function RemoveVal(){
    let button = document.getElementById(this.id);
    let val = button.parentElement.childNodes[0].innerHTML;

    for(let i=0; i < valuesX.length; i++){
        if(val == valuesX[i]){
            valuesX.splice(i);
            valuesY.splice(i);
        }
    }

    Table();
}

function ReadExcel(){
    const input = document.getElementById('btCSV');
    const button = document.getElementById('btInserir')
    input.addEventListener('change', function(){
        readXlsxFile(input.files[0]).then(function(data){
            for(let i=1; i < data.length; i++){
                valuesX.push(data[i][0]);
                valuesY.push(data[i][1]);
                Montar();
            }
        });
    });
}

