function pegarNome(){
    const lc_nome = document.querySelector('#lc_nome')
    const le_nome = document.querySelector('#le_nome')
    const lc2_nome =  document.querySelector('#lc2_nome')
    const lce2_nome = document.querySelector('#lce2_nome')


    if(lc_nome.style.display == 'block' && le_nome.style.display =='block' && lc2_nome.style.display =='block' && lce2_nome.style.display =='block'){
        lc_nome.style.display = 'none'
        le_nome.style.display ='none'
        lc2_nome.style.display = 'none'
        lce2_nome.style.display = 'none'
    }else{
        lc_nome.style.display = 'block'
        le_nome.style.display ='block'
        lc2_nome.style.display = 'block'
        lce2_nome.style.display = 'block'
    }
}

function insertDress(){
    const lc_endereco = document.querySelector('#lc_endereco')
    const le_endereco = document.querySelector('#le_endereco')
    const lc2_endereco = document.querySelector('#lc2_endereco')
    const le2_endereco = document.querySelector('#le2_endereco')

    if(lc_endereco.style.display =='block' && le_endereco.style.display =='block' && lc2_endereco.style.display =='block' && le2_endereco.style.display =='block'){
        lc_endereco.style.display ='none'
        le_endereco.style.display ='none'
        lc2_endereco.style.display = 'none'
        le2_endereco.style.display = 'none'
    }else{
        lc_endereco.style.display ='block'
        le_endereco.style.display ='block'
        lc2_endereco.style.display = 'block'
        le2_endereco.style.display = 'block'
    }
}

function insertValor(){
    const valor_total = document.querySelector('#valor_total')
    const valor_total2 = document.querySelector('#valor_total2')
    const valor_total3 = document.querySelector('#valor_total3')
    const valor_total4 = document.querySelector('#valor_total4')
    

    if(valor_total.style.display == 'block' && valor_total2.style.display =='block' && valor_total3.style.display =='block' && valor_total4.style.display =='block'){
        valor_total.style.display = 'none'
        valor_total2.style.display ='none'
        valor_total3.style.display ='none'
        valor_total4.style.display ='none'
    }else{
        valor_total.style.display = 'block'
        valor_total2.style.display ='block'
        valor_total3.style.display ='block'
        valor_total4.style.display ='block'
    }
}

function insertValorParcela(){

    const valor_parcela = document.querySelector('#valor_parcela')
    const valor_parcela2 = document.querySelector('#valor_parcela2')
    const valor_parcela3 = document.querySelector('#valor_parcela3')
    const valor_parcela4 = document.querySelector('#valor_parcela4')

    if(valor_parcela.style.display == 'block' && valor_parcela2.style.display == 'block' && valor_parcela3.style.display == 'block' && valor_parcela4.style.display == 'block'){
        valor_parcela.style.display = 'none'
        valor_parcela2.style.display = 'none'
        valor_parcela3.style.display = 'none'
        valor_parcela4.style.display = 'none'
    }else{
        valor_parcela.style.display = 'block'
        valor_parcela2.style.display = 'block'
        valor_parcela3.style.display = 'block'
        valor_parcela4.style.display = 'block'
    }
}

function insertData(){
    const vencimento = document.querySelector('#data_vencimento')
    const vencimento2 = document.querySelector('#data_vencimento2')
    const vencimento3 =document.querySelector('#data_vencimento3')
    const vencimento4 =document.querySelector('#data_vencimento4')

    if(vencimento.style.display =='block' && vencimento2.style.display=='block' && vencimento3.style.display=='block' && vencimento4.style.display=='block'){
        vencimento.style.display ='none'
        vencimento2.style.display ='none'
        vencimento3.style.display ='none'
        vencimento4.style.display ='none'
    }else{
        vencimento.style.display ='block'
        vencimento2.style.display ='block'
        vencimento3.style.display ='block'
        vencimento4.style.display = 'block'
    }

}

function InsertVencimento(){

    const atrasado = document.querySelector('#data_atraso')
    const atrasado2 = document.querySelector('#data_atraso2')
    const atrasado3 = document.querySelector('#data_atraso3')
    const atrasado4 = document.querySelector('#data_atraso4')

    if(atrasado.style.display == 'block' && atrasado2.style.display == 'block' && atrasado3.style.display == 'block' && atrasado4.style.display == 'block'){
        atrasado.style.display = 'none'
        atrasado2.style.display = 'none'
        atrasado3.style.display = 'none'
        atrasado4.style.display = 'none'
    }else{
        atrasado.style.display = 'block'
        atrasado2.style.display = 'block'
        atrasado3.style.display = 'block'
        atrasado4.style.display = 'block'
    }
    
}

function abrirQrcode(){

    const div_qrcode = document.querySelector('#qrcode')
    const div_qrcode2 = document.querySelector('#qrcode2')

    if (div_qrcode.style.display == 'block' && div_qrcode2.style.display == 'block') {
        div_qrcode.style.display = 'none'
        div_qrcode2.style.display = 'none'
    }else{
        div_qrcode.style.display = 'block'
        div_qrcode2.style.display = 'block'
    }
}

// ÁREA DO QRCODE

const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'QRCODE';
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if(file){
        // agora a gente precisa ler a imagem
        const reader = new FileReader()

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img')
            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file);
    }else{
        pictureImage.innerHTML = pictureImageTxt;
    }
})



const inputFile2 = document.querySelector('#picture__input2');
const pictureImage2 = document.querySelector('.picture__image2');
const pictureImageTxt2 = 'QRCODE';
pictureImage2.innerHTML = pictureImageTxt2;

inputFile2.addEventListener('change', function(e){
    //console.log(inputFile2)
    const inputTarget2 = e.target;
    const file2 = inputTarget2.files[0];
    
    if(file2){
        // agora a gente precisa ler a imagem
        const reader2 = new FileReader()

        reader2.addEventListener('load', function(e){
            const readerTarget2 = e.target;

            const img2 = document.createElement('img');
            img2.src = readerTarget2.result;
            img2.classList.add('picture__img2')
            pictureImage2.innerHTML = '';

            pictureImage2.appendChild(img2);
        })

        reader2.readAsDataURL(file2);
    }else{
        pictureImage2.innerHTML = pictureImageTxt2;
    }
})

// vamos criar função que fecha a div tutorial

function fecharTuto(){
    const tutorial = document.querySelector('.tutorial')
    tutorial.classList.add('displayNone')

    if (tutorial.style.display =='none' && tutorial.style.marginTop =='0%') {
        tutorial.style.display ='block'
        tutorial.style.marginTop ='-100%'

    }else{
        tutorial.style.display ='none'
        tutorial.style.marginTop = '0%'
    
    }
}

function fecharPraPrint(){
    const div_btn = document.querySelector('.div_btn_add')
    div_btn.classList.add('displayNone')

    if (div_btn.style.display =='none') {
        div_btn.style.display ='block'
    } else {
        div_btn.style.display ='none'
        alert('Pronto! Agora você vai dar control + P e colocar para imprimir em modo/layout paisagem.')
    }
}