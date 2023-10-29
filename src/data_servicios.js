//Info de cada producto y servicio
//Cada producto un diccionario

export const data = [
    {
        id: 1,
        img: "https://www.totalenergies.es/sites/default/files/2021-12/instalacion%20paneles%20solares.jpg",
        nameProduct: "Instalación de Placas Solares",
        price: 100,
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
        img: "https://www.domoticalia.es/2875-large_default/nest-espana-termostato-inteligente-de-3-generacion.jpg",
        nameProduct: "Instalación de Termostato inteligente Nest",
        price: 199.99,
        quantity: 1,
        detail: "El termostato Nest usa la tecnología OpenTherm para modular tu caldera de condensación compatible de alta eficiencia. Mantiene tu hogar a una temperatura constante para que estés incluso más cómodo. Los Nest Thermostat no tienen pantalla táctil. Usa la barra táctil del lado derecho para controlar tu termostato. Desliza el dedo hacia arriba para subir la temperatura, deslízalo hacia abajo para bajarla y presiona para confirmar. La pantalla te mostrará cuántos minutos faltan para alcanzar la temperatura deseada.",
        reseñas: [
            {user: "angelneo",rating:5,comment:"Necesitaba algo asi en casa!", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:4, comment:"He comprado este producto y ha salido muy bien. He podido instalarlo solo.", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "gaxx",rating:5, comment: "Funciona muy bien. Fácil de instalar y útil.", img:"https://lh3.googleusercontent.com/a/AGNmyxZfCPJNWHHOGfyPAPJO8icARzK9wt33ycM-YQsh=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 3,
        img: "https://cdn.idealo.com/folder/Product/6303/6/6303639/s11_produktbild_gross/jbl-charge-4.jpg",
        nameProduct: "Instalación Sonido Altavoz Bluetooth JBL Charge con Alexa",
        price: 129.99,
        quantity: 1,
        detail:"Lleva la fiesta contigo haga el tiempo que haga. El altavoz JBL Charge 5 ofrece el potente sonido JBL Original Pro gracias al driver optimizado de gran amplitud, el altavoz de agudos independiente y los dos radiadores de graves JBL. Hasta 20 horas de autonomía y una práctica batería integrada que te permite cargar tus dispositivos y alargar la fiesta durante toda la noche. ¿Llueve? ¿Has derramado la bebida? ¿Estás en la playa? El Charge 5 resiste al polvo y el agua conforme a la norma IP67 para aguantar lo que le eches. Además, podrás conectar varios altavoces JBL compatibles con PartyBoost para disfrutar de un sonido con potencia suficiente para una multitud. Sus colores totalmente nuevos, inspirados en las últimas tendencias de moda urbana, le dan un aspecto tan bueno como su sonido.",
        reseñas:[
            {user: "angelneo",rating:3,comment:"Altavoz básico y normal", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:4, comment:"Calidad-precio está bastante bien.", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 4,
        img: "https://www.windowo.es/data/prod/img/ricevitore-tapparelle-smart-io-izymo-somfy-2.jpg",
        nameProduct: "Persiana inteligente Somfy",
        price: 149.99,
        quantity: 1,
        detail: "Tener persianas enrollables motorizadas con Somfy añade comodidad y confort a tu hogar. Gracias a la tecnología radio en los motores para persianas enrollables Somfy, podrás controlar su apertura y cierre con un solo gesto desde su mando a distancia, añadir sensores de luz para automatizarlas y con TaHoma® acceder al control desde el móvil.",
        reseñas:[
            {user: "angelneo",rating:5,comment:"Motor bueno. Funciona correctamente", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:3, comment:"Un poco difícil de instalar. He tenido que llamar a un técnico", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}]
    }
]
