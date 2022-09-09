import sombrilla from '../assets/sombrilla.jpg';
import pufiNap from '../assets/pufiNap.jpg'
import pufi from '../assets/pufi.jpg';
import carts from '../assets/carts.jpg';
import umbrellas from '../assets/umbrellas.jpg'
import puffBeach from '../assets/puff-beach.jpg';
import bagsCar from '../assets/bags-car.jpg';
import pillow from '../assets/pillow.jpg';



export const DataSubSections = [
    {   img: umbrellas,
        info:   {   
            image : sombrilla,
            text : 'Pufi RAIN',
            status: 'Paraguas portátil y plegable, lo que hace que sea tan pequeño para que lo lleves contigo a todas partes. Puedes ponerlo en tu bolso fácilmente en casa, oficina, escuela o campus.',
            className : 'data-items'    }
    },

    {   img: puffBeach,
        info:   {   
            image : pufi,
            text : 'Pufi PUFF',
            status: 'Silla inflable, perfecta para llevar a tu festival de música favorito o a tu próxima fiesta en la piscina. Pufi UFF es una forma rápida y divertida de añadir asientos al aire libre.',
            className : 'data-items',    }
},
    {   img: bagsCar,
        info:   {   
            image : carts,
            text : 'Pufi CART',
            status: 'Bolsas amigables con el medio ambiente por su reutilización, que se conectan en el carrito para brindarle acceso completo y alta visibilidad mientras compra y tiempos de salida más rápidos',
            className : 'data-items'    }
},
    {   img: pillow,
        info:   {   
            image : pufiNap,
            text : 'Pufi NAP',
            status: 'Almohada de viaje que proporciona un apoyo perfecto por su diseño ergonómico para su comodidad.',
            className : 'data-items'    }}
]