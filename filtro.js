// Tenemos un li de productos
//cambiar imagenes a una nueva carpeta para que se vea mas ordeando
const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./assets/img/taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./assets/img/taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./assets/img/bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./assets/img/bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./assets/img/zapato-rojo.jpg",
  },
];

const li = document.getElementById("lista-de-productos"); //cambiar metodo id,
const input = document.querySelector("input"); //cambiar nombre de $i por input

for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div"); //cambiar a const
  d.classList.add("producto");

  const ti = document.createElement("p"); //cambiar a const
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;

  const imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}

// displayProductos(productos);// funcion no tiene sentido, no esta definida

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div");//cambiar a const
    d.classList.add("producto");

    const ti = document.createElement("p");//cambiar a const
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    const imagen = document.createElement("img");//cambiar a const
    imagen.setAttribute("src", productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
