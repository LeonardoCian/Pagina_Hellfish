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
  

 var integrantes=[
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
let current = 0;

  function showNext() {
    if(current === integrantes.length)
    current = 0;

    console.log(current);
    const contenedor_cards = document.getElementById("Informacion");
    let templateCard = "";
    let integrante = integrantes[current];
    current++;
   
    templateCard += 
    `<div class"card">
        <p>
        Soldado :${integrante.nombre},
        Apodo: ${integrante.apodo},
        Rango:${integrante.rango},
        Estado: ${integrante.estado}
        <p/>
    <div/>`;
   
   contenedor_cards.innerHTML = templateCard;
  };

  showNext();

  function showPrev(){
    console.log(current);
    if(current <= 1){
      current = integrantes.length -1;
    }
    else{
      current -= 2;
    }
     return showNext();
  };
  next.addEventListener('click', ()=>{
    showNext();
  })
  prev.addEventListener('click', ()=>{
showPrev();
  });

  
  

  
  
  