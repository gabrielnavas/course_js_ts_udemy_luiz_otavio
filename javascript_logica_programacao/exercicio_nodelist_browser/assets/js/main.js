const paragrafos = document.querySelectorAll('.paragrafos p');
const ps = paragrafos;


//getComputedStyle() pega os estilo do componente que foi computado até o presente momento 
const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
}