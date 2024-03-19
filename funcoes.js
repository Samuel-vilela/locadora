function Trocar(){
    let tipo = document.getElementById("veiculo").value
    alert(tipo)


    if(tipo == "Basico"){
        document.getElementById("imagem").src="./img/basico.png"
    }
    else if(tipo == "Esporte"){
        document.getElementById("imagem").src="./img/esporte.png"
    }
    else{
        document.getElementById("imagem").src="./img/completo.png"
    }
}