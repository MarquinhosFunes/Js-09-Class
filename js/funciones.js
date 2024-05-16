class CAutores{
    constructor(){
        this.autoresVec = []
    }

    agregarAutor(nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadPublicacion) {
        this.autoresVec.push({
            nombre: nombre,
            apellido: apellido,
            nacionalidad: nacionalidad,
            mejorObra: mejorObra,
            añoPublicacion: añoPublicacion,
            edadPublicacion: edadPublicacion,
        });
      }

    listarNacionalidadArg(){
        const autoresArgentinos = [];
        for (const autor of this.autoresVec){
            if(autor.nacionalidad === "Argentino"){
                autoresArgentinos.push(autor.nombre);
            }
        }
        return autoresArgentinos;
    }

    listarPublic1960a1980(){
        const autores1960a1980 = [];
        for (const autor of this.autoresVec){
            if(autor.añoPublicacion >= 1960 && autor.añoPublicacion <= 1980){
                autores1960a1980.push(autor.nombre);
            }
        }
        return autores1960a1980;
    }

    promedioPublic(){
        let contador = 0;
        let suma = 0;
        for (const autor of this.autoresVec){
            suma = suma + autor.edadPublicacion
            contador++
        }
        return suma/contador;
    }

    mostrarAutores(){
        const nombreAutores = [];
        for(const autor of this.autoresVec){
            nombreAutores.push(autor.nombre)
        }
        return nombreAutores;
    }
}

const autores = new CAutores();

autores.agregarAutor("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40)
autores.agregarAutor("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48)
autores.agregarAutor("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40)
autores.agregarAutor("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45)
autores.agregarAutor("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56)
autores.agregarAutor("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38)
autores.agregarAutor("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29)
autores.agregarAutor("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)

console.log("Los autores con nacionalidad argentina son: " + autores.listarNacionalidadArg());
console.log("Los autores que publicaron entre 1960 a 1980 son: " + autores.listarPublic1960a1980());
console.log("El promedio de edad de publicacion es: " + autores.promedioPublic());
console.log("Los autores son: " + autores.mostrarAutores());

