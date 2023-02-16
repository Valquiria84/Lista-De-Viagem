
let arraydestino = [];

function destino(){
    let nome = document.getElementById("nome");
    let pais = document.getElementById("pais");
    let conteudodigitado=document.getElementById("conteudo");

    if ((nome.value !== "") && (pais.value!== "")){
        conteudodigitado.innerHTML += ` ${nome.value}-${pais.value} <p><p/>`;
        let lista = {
            nome: nome.value,
            pais: pais.value
        } 
        for(i=0; i< arraydestino.length; i++){
            arraydestino.push(lista)
        }
    }
}