let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  /* dots[slideIndex-1].className += "active"; */
}
  

 var integrante=[
  {nombre:"Asa Phelps",apodo:"Asa",rango:"Soldado de asalto",estado:"Muerto, año 2000"},
{nombre:"Charles Montgomery Burns",apodo:"Burns",rango:"Soldado raso",estado:"Vivo"},
{nombre:"Arnie Gómez",apodo:"Gómez",rango:"Soldado raso - Conductor de tanque",estado:"Muerto, año 1979"},
{nombre:"Iggy Gorgory",apodo:"Gorgory",rango:"Soldado Granadero",estado:"Muerto, año 1979"},
{nombre:"Etch Westgrin",apodo:"Momo",rango:"Soldado raso",estado:"Muerto, año 1979"},
{nombre:"Griff McDonald",apodo:"Pepe",rango:"Soldado de asalto",estado:"Muerto, año 1979"},
{nombre:"Abraham Simpson",apodo:"Simpson",rango:"Sargento",estado:"Vivo"},
{nombre:"Sheldon Skinner",apodo:"Skinner",rango:"Radio-Operador",estado:"Muerto, año 1979"},
{nombre:"Milton Haas",apodo:"Sote",rango:"Soldado de asalto",estado:"Muerto, año 1945"}
 ];
 
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

  function showNext() {
    let objeto = integrante;
    let contenedor = document.querySelector(".Informacion");
    let info = document.getElementById('info');
    //let cadena ="Nombre:"+objeto.nombre+"\nApodo: "+objeto.apodo+"\nRango: "+objeto.rango+"\nEstado: "+objeto.estado;
const mapArray =() => {objeto.map(({key, value}) =>({[key]: value}))};
    info.textContent=mapArray();
    contenedor.appendChild(info);
  };

  function showPrev(){

  };
  next.addEventListener('click', ()=>{
    showNext();
  })
  prev.addEventListener('click', ()=>{
showPrev();
  });

  
  

  
  
  