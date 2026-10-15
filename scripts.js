//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

addEventListener('click', (event) => {
    event.preventDefault();
});

//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
//2.3 Bloques de article o section: Cambia el color de fondo.

addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'IMG') {
        target.src = 'assets/magic-5.gif'; // Cambia la imagen por un gif
    } else if (target.tagName === 'P') {
        target.style.color = 'orange'; // Cambia el color del texto
        target.style.backgroundColor = 'blue'; // Cambia el color de fondo
    } else if (target.tagName === 'ARTICLE' || target.tagName === 'SECTION') {
        target.style.backgroundColor = 'lightblue'; // Cambia el color de fondo
    }
});

//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones, y devolver dicho elemento a su estado original cuando salga el cursor:
//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

addEventListener('mouseover', (event) => {
    const target = event.target;

    if (target.tagName === 'IMG') {
        // Guardamos su imagen original la primera vez para poder restaurarla al salir
        if (!target.dataset.srcOriginal) {
            target.dataset.srcOriginal = target.getAttribute('src');
        }
        target.src = 'assets/abracadabra.gif'; // Cambia la imagen por el gif abracadabra.gif
    } else if (target.tagName === 'P') {
        target.style.color = 'purple'; // Cambia el color del texto
        target.style.backgroundColor = 'yellow'; // Cambia el color de fondo
    } else if (target.tagName === 'ARTICLE' || target.tagName === 'SECTION') {
        target.style.backgroundColor = 'lightgreen'; // Cambia el color de fondo
    }
});

//3.b Cuando el cursor salga del elemento, lo devolvemos a su estado original
addEventListener('mouseout', (event) => {
    // Buscamos el elemento afectado aunque el cursor salga desde un hijo de
    // dentro (un enlace o un <em> de un párrafo, por ejemplo)
    const target = event.target.closest('img, p, article, section');

    // Si el cursor sigue dentro del mismo elemento, no revertimos todavía
    if (!target || target.contains(event.relatedTarget)) return;

    if (target.tagName === 'IMG') {
        // Restauramos la imagen original que guardamos en el mouseover
        if (target.dataset.srcOriginal) {
            target.src = target.dataset.srcOriginal;
        }
    } else if (target.tagName === 'P') {
        // Al vaciar el estilo inline volvemos a los colores del CSS original
        target.style.color = '';
        target.style.backgroundColor = '';
    } else if (target.tagName === 'ARTICLE' || target.tagName === 'SECTION') {
        target.style.backgroundColor = '';
    }
});

//4. Premium - Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ['red', 'blue', 'green']
function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    //Evidentemente tambien se puede hacer con Math.ceil(Math.random() * array.length) - 1. Usa lo que te sientas más cómodo.
    return array[randomIndex];
}
console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'


//5. Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de https://coolors.co/palettes/trending en los apartados anteriores.

const palette = ['#FF6B6B', '#FFE66D', '#4472CA', '#4ECDC4', '#1A535C'];

addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'P') {
        target.style.color = getRandom(palette); // Cambia el color del texto a un color aleatorio de la paleta
        target.style.backgroundColor = getRandom(palette); // Cambia el color de fondo a un color aleatorio de la paleta
    } else if (target.tagName === 'ARTICLE' || target.tagName === 'SECTION') {
        target.style.backgroundColor = getRandom(palette); // Cambia el color de fondo a un color aleatorio de la paleta
    }
});

//6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const gifs = ['assets/magic-1.gif', 'assets/magic-2.gif', 'assets/magic-3.gif', 'assets/magic-4.gif', 'assets/magic-5.gif', 'assets/magic-6.gif', 'assets/abracadabra.gif'];

addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'IMG') {
        target.src = getRandom(gifs); // Cambia la imagen por un gif aleatorio de la lista
    }
});