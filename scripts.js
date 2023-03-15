var dataNasc = document.querySelector('#dataNasc')
var sexo = document.getElementsByName('sexo')
var resultado = document.querySelector('#resultado')
var button = document.querySelector('#button')
var img = document.querySelector('img')

button.addEventListener('click', () => {
    let date = new Date()
    let anoAtual = date.getFullYear()
    let dataNascimento = Number(dataNasc.value)

    let idade = anoAtual - dataNascimento

    if(idade < 0 || idade > 122){
        alert('Ano de Nascimento Incorreto!')
    }else{
        if(sexo[0].checked){
            resultado.innerHTML = `<h3>Homem com ${idade} anos.</h3>`
            if(idade < 12){
                resultado.innerHTML = `<h3>Menino com ${idade} anos.</h3>`
                img.src = 'menino-crianca.png'
            } else if (idade < 24){
                resultado.innerHTML = `<h3>Garoto com ${idade} anos.</h3>`
                img.src = 'homem-adolescente.jpg'
            }else if (idade < 54){
                resultado.innerHTML = `<h3>Homem com ${idade} anos.</h3>`
                img.src = 'homem-adulto.webp'
            }else{
                resultado.innerHTML = `<h3>Idoso com ${idade} anos.</h3>`
                img.src = 'homem-idoso.jpg'
            }
        } else if(sexo[1].checked){
            resultado.innerHTML = `<h3>Mulher com ${idade} anos.</h3>`
            if(idade < 12){
                resultado.innerHTML = `<h3>Menina com ${idade} anos.</h3>`
                img.src = 'menina-crianca.webp'
            } else if (idade < 24){
                resultado.innerHTML = `<h3>Garota com ${idade} anos.</h3>`
                img.src = 'mulher-adolescente.webp'
            }else if (idade < 54){
                resultado.innerHTML = `<h3>Mulher com ${idade} anos.</h3>`
                img.src = 'mulher-adulto.webp'
            }else{
                resultado.innerHTML = `<h3>Idosa com ${idade} anos.</h3>`
                img.src = 'mulher-idosa.jpg'
            }
        }
    }


})



