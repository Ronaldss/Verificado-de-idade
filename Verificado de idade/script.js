function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual
    var fano = document.getElementById('txtano')// ano obtido no input do formulário
    var res = document.querySelector('div#res')

    // Fechando o escopo da pesquisa
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        console.log(`Chegou aqui!`)
        console.log("Fsex[0] = "+fsex[0].id)
        console.log("Fsex[1] = "+fsex[1].id)
        console.log(`Também chegou aqui!`)
        if  (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
