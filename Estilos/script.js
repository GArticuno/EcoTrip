
var a = document.querySelector('.horas')
var cat = document.querySelector('#cat');
var globo = document.querySelector('#globo');

var body = document.querySelector('.body')
var header = document.querySelector('.header');
var main = document.querySelector('.main');
var footer = document.querySelector('.footer');

var s = document.querySelector('.site');
var tmhora =document.querySelector('.tmhora');
var tmimage = document.querySelector('.tmimage');
var tmfinal = document.querySelector('.tmfinal');
var animacao= document.querySelector('#animacao');

function glass(){
    s.style.backgroundImage = "url('imgs/tmglass.png')";
    tmhora.setAttribute('id','glass');
    body.style.backgroundImage= "url('imgs/glass.png')";
    header.setAttribute('id','glass');
    main.setAttribute('id','glass');
    main.style.backgroundImage = "url('imgs/tmglass.png')";
    footer.setAttribute('id','glass');
    tmimage.setAttribute('id','glass');
    cat.style.color="#ff7bbf";
    cat.innerHTML="m";
    globo.src='imgs/terra-glass.png';
    tmfinal.setAttribute('id','glass');
    animacao.src = 'imgs/imgglass.png';
}
function dark(){
    s.style.backgroundImage="url('imgs/tmdark.png')"
    body.style.backgroundImage ="url('imgs/dark.png')"
    header.setAttribute('id','tmdark');
    main.setAttribute('id','tmdark');
    main.style.backgroundImage="url('imgs/tmdark.png')"
    footer.setAttribute('id','tmdark');
    tmhora.setAttribute('id','darkb');
    tmimage.setAttribute('id','darkb');
    cat.style.color="#964ec2";
    cat.innerHTML="w";
    globo.src='imgs/terra-dark.png';
    tmfinal.setAttribute('id','darkb');
    animacao.src = 'imgs/imgdark.png';
}
function bauhaus(){
    s.style.backgroundImage = "url('imgs/bauhaus2.png')";
    tmhora.setAttribute('id','tmbauhaus');
    body.style.backgroundImage= "url('imgs/tmbauhaus.png')";
    header.setAttribute('id','tmbauhaus');
    main.setAttribute('id','glass');
    main.style.backgroundImage = "url('imgs/bauhaus.png')";
    footer.setAttribute('id','tmbauhaus');
    tmimage.setAttribute('id','bauhausimg');
    cat.style.color="rgb(247, 94, 94)";
    cat.innerHTML="r";
    globo.src='imgs/terra-bauhaus.png';
    tmfinal.setAttribute('id','bauhausfinal');
    animacao.src = 'imgs/imgbauhaus.png';
}
function horario(){
    
    var data =new Date().toLocaleDateString();
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    var dia= new Date().getDay();
    if(hora<=9){
        hora='0'+hora;
    }
    if(minutos<=9){
        minutos='0'+minutos;
    }
    switch(dia){
        case 1:
            dia="Segunda-feira";
            break;
        case 2:
            dia="Terça-feira";
            break;
        case 3:
            dia="Quarta-feira";
            break;  
        case 4:
            dia="Quinta-feira";
            break;
        case 5:
            dia="Sexta-feira";
            break;
        case 6:
            dia="Sábado";
            break;
        case 7:
            dia="Domingo";
            break;
        }
    a.innerHTML = "<p id='horario'>"+ hora +':'+minutos+'</p>'+ 
                "<p id='data'>"+data+'</p>'+
                "<p id='dia'>"+dia+'</p>';
    setTimeout(horario, 1000)
}