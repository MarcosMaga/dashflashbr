export function CreateGraph(canva, typeGraph, x, y, name, color){
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