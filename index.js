/*Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones: i<4 y j<4*/

/*Rellenar TODA la matriz de números, debes pedírselo al usuario.
*/

  let matriz = [];
function llenarMatriz() {
  
  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      let valor = prompt(
        "Ingrese un valor para la matriz [" + i + "][" + j + "]:"
      );
      while (isNaN(parseInt(valor))) {
        valor = prompt(
          "El valor ingresado no es un número [" + i +"][" +j +"]:");
      }
      matriz[i][j] = parseInt(valor);
    }
  }
  return matriz;
}

// Llamando a la función para llenar la matriz

/*
 *Suma de una fila que se pedirá al usuario (controlar que elija una correcta)*/
function sumaFila(fila){
  let suma=0;
  for(let j=0; j <4 ;j++){
    suma=suma+matriz[fila][j];
  }
  return suma;
 
}



/*Suma de una columna que se pedirá al usuario (controlar que elija una correcta)*/
function sumarColumna(columna){
  let suma=0;
  for(let i=0; i<4;i++){
    suma=suma+matriz[i] [columna]
  }
  return suma;
}


/*
Sumar la diagonal principal (ver ejemplo)

*/
function sumarDiagonal(){
  let suma=0;
  for(let i =0; i<4 ;i++){
    suma=suma+matriz[i][i];
  }
  return suma;

}

/*

Sumar la diagonal inversa (ver ejemplo)*/
function sumarDiagonalInversa(){
   let suma = 0;
   for (let i = 0; i < 4; i++) {
     suma = suma + matriz[i][3-i];
   }
   return suma;

}
/*
La media de todos los valores de la matriz*/
function promedioMatriz(){
  let suma = 0;
  let i;
  let j;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      suma += matriz[i][j];
    }
  }
  return suma / (4 * 4);
}

  
  

 function menu() {
  let opcion;
  do {
     opcion = parseInt(
      prompt(
        "Ingrese una opcion:      \nMENU \n1-Rellernar matriz \n2-Sumafila\n3-Suma columna\n4-Suma diagonal\n5-Suma diagonal inversa \n6-La media de los valores\n0- salir "
      )
    );
    

    switch (opcion) {
      case 1:
        console.table(llenarMatriz());
        break;
      case 2:
         if (matriz.length === 0) {
          alert("¡Matriz vacía! Debes llenarla primero.");
        } else {
          let fila = parseInt(prompt("Ingrese un número de fila: "));
          if (fila >= 0 && fila < 4) {
            console.log("Eligio la fila"+ fila +" y su suma es: " + sumaFila(fila));
          } else {
            alert("Fila incorrecta!!!");
          }
        }
        break;
      
      case 3:
        if (matriz.length === 0) {
          alert("¡Matriz vacía! Debes llenarla primero.");
        } else {
          let columna = parseInt(prompt("Ingrese un número de la columna: "));
          if (columna >= 0 && columna < 4) {
            console.log("Eligio la columna "+columna +" y su suma  es: " + sumarColumna(columna));
            
          } else {
            alert("Columna incorrecta!!!");
          }
        }
        
        break;
      case 4:
        if(matriz.length === 0){
          alert("¡Matriz vacía! Debes llenarla primero.");
        }else{
          console.log("la suma de la \ \ diagonal es " + sumarDiagonal());
        }
        
        break;
      case 5:
        if (matriz.length === 0) {
          alert("¡Matriz vacía! Debes llenarla primero.");
        } else {
          console.log("la suma de la / / diagonal inversa es " + sumarDiagonalInversa());
        }
        
        
        break;
      case 6:
         if (matriz.length === 0) {
           alert("¡Matriz vacía! Debes llenarla primero.");
         } else {
           console.log("El promedio de la matriz es de "+ promedioMatriz());
         }
        

        break;
        
      case 0:
        alert("saliendo!!!");
        break;

      default:
        console.log("opcion invalida!!!");
        break;
    }
  } while ( opcion !== 0 );
}
menu();


