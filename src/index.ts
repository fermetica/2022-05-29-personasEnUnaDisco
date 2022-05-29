let menoresDe21:number = 0;
let mayoresDe21:number = 0;
let personaEdad:number = 0;
let indice:number = 1;

function aleatorio(menorValor:number, mayorValor:number){
  
  while (indice <= 270){
    personaEdad = Math.floor(Math.random()*100);
    if (personaEdad >= menorValor && personaEdad <=mayorValor){
      if (personaEdad <21){
        menoresDe21++;
      };
      if (personaEdad >=21){
        mayoresDe21++;
      }; 
      indice++;
    ;}
  };
  console.log("La cantidad de personas menores a 21 son "+ menoresDe21);
  console.log("La cantidad de personas mayores a 21 son "+ mayoresDe21);
  console.log("La cantidad de personas totales son "+ (indice-1));
};

aleatorio(19,40);