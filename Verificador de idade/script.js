function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual
    var fano = document.getElementById('txtano')// ano que veiu do formulário
    var res = document.querySelector('div#res')

    // Fechando o escopo da pesquisa
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if  (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
