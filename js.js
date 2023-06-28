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
  dots[slideIndex-1].className += "active";
}
  

 var integrante=[];{
 const int1 = {nombre:"Asa Phelps",apodo:"Asa",rango:"Soldado de asalto",estado:"Muerto, año 2000"}
 const int2 = {nombre:"Charles Montgomery Burns",apodo:"Burns",rango:"Soldado raso",estado:"Vivo"}
 const int3 = {nombre:"Arnie Gómez",apodo:"Gómez",rango:"Soldado raso - Conductor de tanque",estado:"Muerto, año 1979"}
 const int4 = {nombre:"Iggy Gorgory",apodo:"Gorgory",rango:"Soldado Granadero",estado:"Muerto, año 1979"}
 const int5 = {nombre:"Etch Westgrin",apodo:"Momo",rango:"Soldado raso",estado:"Muerto, año 1979"}
 const int6 = {nombre:"Griff McDonald",apodo:"Pepe",rango:"Soldado de asalto",estado:"Muerto, año 1979"}
 const int7 = {nombre:"Abraham Simpson",apodo:"Simpson",rango:"Sargento",estado:"Vivo"}
 const int8 = {nombre:"Sheldon Skinner",apodo:"Skinner",rango:"Radio-Operador",estado:"Muerto, año 1979"}
 const int9 = {nombre:"Milton Haas",apodo:"Sote",rango:"Soldado de asalto",estado:"Muerto, año 1945"}
 }
 
 let prev = document.querySelector("prev");
 const next = document.querySelector("next");

  function showNext() {
    var objeto = integrante[slideIndex];
    var info = document.createElement("info");
    info.textContent= "Nombre:"+objeto.nombre;
    var contenedor = document.querySelector(".Informacion");
    contenedor.appendChild(info);
  }; 
  function showPrev(){

  };
  next.addEventListener('click', ()=>{
    console.log("Click");
  })

  
  

  
  
  