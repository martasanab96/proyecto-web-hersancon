//Info de cada producto y servicio
//Cada producto un diccionario

export const data = [
    {
        id: 1,
        img: "https://www.totalenergies.es/sites/default/files/2021-12/instalacion%20paneles%20solares.jpg",
        nameProduct: "Instalación de Placas Solares",
        price: 1000,
        quantity: 1,
        detail: "La instalación de paneles solares debe ser realizada por un instalador profesional y capacitado, para garantizar una instalación segura y eficiente. Además, la instalación puede variar dependiendo de la ubicación geográfica, el tipo de techo y otros factores específicos de cada hogar. En general, la instalación de paneles solares en una casa típica sigue los siguientes pasos: <br></br> Evaluación del sitio: Antes de la obra se lleva a cabo una evaluación del sitio para determinar si la casa es adecuada para la instalación de paneles solares. Se evalúa la orientación y la inclinación del techo, la sombra y la cantidad de espacio disponible para la instalación de los paneles. En Naturgy te ofrecemos una visita gratuita y sin compromiso de nuestros instaladores para evaluar la adecuación de tu oferta a las condiciones de tu vivienda. <br></br><br></br>Obtención de permisos: Antes de la instalación, se deben obtener los permisos necesarios del gobierno local y/o de la compañía eléctrica. <br></br><br></br> Preparación del sitio e instalación de los paneles solares: Primero se prepara el sitio para la obra. Cuando está todo listo se instalan los paneles solares y se conectan los cables del sistema a un inversor, que convierte la energía solar en energía utilizable para el hogar.<br></br><br></br> Conexión a la red eléctrica: Por último, se conecta el sistema solar a la red eléctrica de la casa, lo que permite que la energía generada por los paneles solares se utilice directamente en el hogar y/o se venda a la red eléctrica para obtener créditos o retribución económica.",
        reseñas: [
            {user: "angelneo", rating:5,comment:"Buena instalación", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:3, comment:"Me han sorprendido. Todo ha ido como la seda.", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}],
        recomendaciones:[
            {id: 2,
            id: 3}
        ]
        },
    {
        id: 2,
        img: "https://www.bdbnpresupuestos.com/wp-content/uploads/2015/01/instalacion-termostato-digital.jpg.webp",
        nameProduct: "Instalación de control de temperatura",
        price: 99.99,
        oferta: 49.99,
        quantity: 1,
        detail: "Transforma tu hogar en un oasis de eficiencia y comodidad con nuestro servicio de control de temperatura. En la era de la domótica, tu sistema de climatización puede ser tan inteligente como tú.",
        reseñas: [
            {user: "angelneo",rating:5,comment:"Instalación rápida y profesional", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"}
        ]
    },
    {
        id: 3,
        img: "https://www.lampamania.es/ImgGalery/Img1/Clanky/aktuality-home/inteligentni_osvetleni.jpg",
        nameProduct: "Instalación de control de iluminación",
        price: 99.99,
        oferta: 79.99,
        quantity: 1,
        detail:"Ilumina tu vida con elegancia y eficiencia gracias a nuestro servicio de instalación de control de iluminación inteligente. Imagina tener el poder de personalizar la atmósfera de tu hogar con un toque. Con nuestro equipo de expertos en domótica, hacemos que la iluminación de tu hogar se adapte a tu estilo de vida.",
        reseñas:[
            {user: "manny",rating:3, comment:"Resultados perfectos, las luces quedan chulisimas !", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}
        ]
    },
    {
        id: 4,
        img: "https://persianaslavirgen.com/wp-content/uploads/2019/10/Persianas-inteligentes.jpg",
        nameProduct: "Instalación de control de persianas",
        price: 149.99,
        quantity: 1,
        detail: "Eleva el confort y el estilo de tu hogar con nuestro servicio especializado de instalación de persianas inteligentes. Experimenta un nuevo nivel de conveniencia al tener el control total sobre la iluminación y la privacidad de tus espacios con solo un toque. Nuestro equipo de expertos en instalaciones te guiará a través de la transformación de tus ventanas con persianas que se adaptan a tu estilo de vida.",
        reseñas:[
            {user: "angelneo",rating:5,comment:"Motor bueno. Funciona correctamente", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:3, comment:"La instalación fue un poco larga pero estoy muy satisfecho con el resultado", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 5,
        img: "https://zonapyme.prosegur.es/hubfs/control-de-presencia.jpg",
        nameProduct: "Instalación de control de presencia",
        price: 199.99,
        quantity: 1,
        detail: "Optimiza la seguridad y la eficiencia en tu entorno con nuestro servicio especializado de control de presencia. Desde el monitoreo de acceso hasta la gestión inteligente de asistencia, proporcionamos soluciones avanzadas que garantizan un ambiente seguro y bien gestionado.",
        reseñas:[
            {user: "gaxx",rating:5,comment:"Desde que lo tengo duermo mucho mejor por las noches, le daria 10 estrellas si pudiese", img:"https://lh3.googleusercontent.com/a/AGNmyxZfCPJNWHHOGfyPAPJO8icARzK9wt33ycM-YQsh=s120-c-c0x00000000-cc-rp-mo-br100"}
        ]
    }
]
