class Personaje {
    constructor(id, nombre, nacion, poderes, arma) {
        this.id = id;
        this.nombre = nombre;
        this.nacion = nacion;
        this.poderes = poderes;
        this.arma = arma;
    }
}
const personajes = [];
personajes.push(new Personaje(1, "NARCISO", "Imperio de las Estrellas.", "Atributos de fénix.", "Guadaña de doble filo."));
personajes.push(new Personaje(2, "LILEN", "Unión de las Cometas.", "Control de la flora.", "Arco y flecha."));
personajes.push(new Personaje(3, "NILAK", "República de la Luna.", "Control del hielo.", "Cuchillas gemelas."));
personajes.push(new Personaje(4, "KENIA", "Confederación del Sol.", "Control de la luz, invisibilidad.", "Lanza de marfil."));
personajes.push(new Personaje(5, "CIRO", "Protectorado de los Meteoritos.", "Control de la arena.", "Espada curva."));
personajes.push(new Personaje(6, "SHURA", "Zarato del Rayo.", "Campos de fuerza, magnetismo.", "Hachas arrojadizas."));

for (const personaje of personajes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${personaje.nombre}<h2>
                     <h3>${personaje.nacion}<h3>
                     <h4>${personaje.arma}<h4>
                     <h4>${personaje.poderes}<h4>
                     <button id='${personaje.id}'>Seleccionar</button>
                     <hr>`;
    document.body.appendChild(div);
}