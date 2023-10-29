//Info de cada producto y servicio
//Cada producto un diccionario

export const data = [
    {
        id: 1,
        img: "https://lw-cdn.com/images/2B6A57CF5C96/k_db60be11cfbb895b70fd404156e5bf7e;w_957;h_957;q_70/7534341.webp",
        nameProduct: "Bombilla LED Philips Hue",
        price: 19.99,
        quantity: 1,
        detail: "Disfruta de una iluminación brillante en espacios como el garaje o la cocina y utiliza luces más suaves en cualquier habitación con la bombilla Philips Hue White A67, que ofrece un potente flujo de 1600 lúmenes (equivalente a 100 W) y regulación inalámbrica. Conéctate a un Hue Bridge para disfrutar de la amplia variedad de funciones de iluminación inteligente. ",
        tipo: "Iluminacion",
        reseñas: [
            {user: "angelneo", rating:5,comment:"Las mejores bombillas que he probado", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:3, comment:"No me han servido para lo que necesitaba", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}],
        recomendaciones:[
            {id: 2,
            id: 3}
        ]
        },
    {
        id: 2,
        img: "https://www.domoticalia.es/2875-large_default/nest-espana-termostato-inteligente-de-3-generacion.jpg",
        nameProduct: "Termostato inteligente Nest",
        price: 199.99,
        quantity: 1,
        detail: "El termostato Nest usa la tecnología OpenTherm para modular tu caldera de condensación compatible de alta eficiencia. Mantiene tu hogar a una temperatura constante para que estés incluso más cómodo. Los Nest Thermostat no tienen pantalla táctil. Usa la barra táctil del lado derecho para controlar tu termostato. Desliza el dedo hacia arriba para subir la temperatura, deslízalo hacia abajo para bajarla y presiona para confirmar. La pantalla te mostrará cuántos minutos faltan para alcanzar la temperatura deseada.",
        tipo: "Calefaccion",
        reseñas: [
            {user: "angelneo",rating:5,comment:"Necesitaba algo asi en casa!", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:4, comment:"He comprado este producto y ha salido muy bien. He podido instalarlo solo.", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "gaxx",rating:5, comment: "Funciona muy bien. Fácil de instalar y útil.", img:"https://lh3.googleusercontent.com/a/AGNmyxZfCPJNWHHOGfyPAPJO8icARzK9wt33ycM-YQsh=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 3,
        img: "https://cdn.idealo.com/folder/Product/6303/6/6303639/s11_produktbild_gross/jbl-charge-4.jpg",
        nameProduct: "Altavoz Bluetooth JBL Charge",
        price: 129.99,
        oferta:100.00,
        quantity: 1,
        detail:"Lleva la fiesta contigo haga el tiempo que haga. El altavoz JBL Charge 5 ofrece el potente sonido JBL Original Pro gracias al driver optimizado de gran amplitud, el altavoz de agudos independiente y los dos radiadores de graves JBL. Hasta 20 horas de autonomía y una práctica batería integrada que te permite cargar tus dispositivos y alargar la fiesta durante toda la noche. ¿Llueve? ¿Has derramado la bebida? ¿Estás en la playa? El Charge 5 resiste al polvo y el agua conforme a la norma IP67 para aguantar lo que le eches. Además, podrás conectar varios altavoces JBL compatibles con PartyBoost para disfrutar de un sonido con potencia suficiente para una multitud. Sus colores totalmente nuevos, inspirados en las últimas tendencias de moda urbana, le dan un aspecto tan bueno como su sonido.",
        tipo: "Sonido",
        reseñas:[
            {user: "angelneo",rating:3,comment:"Altavoz básico y normal", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:4, comment:"Calidad-precio está bastante bien.", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 4,
        img: "https://www.windowo.es/data/prod/img/ricevitore-tapparelle-smart-io-izymo-somfy-2.jpg",
        nameProduct: "Persiana inteligente Somfy",
        price: 149.99,
        oferta: 135.00,
        quantity: 1,
        detail: "Tener persianas enrollables motorizadas con Somfy añade comodidad y confort a tu hogar. Gracias a la tecnología radio en los motores para persianas enrollables Somfy, podrás controlar su apertura y cierre con un solo gesto desde su mando a distancia, añadir sensores de luz para automatizarlas y con TaHoma® acceder al control desde el móvil.",
        tipo: "Persianas",
        reseñas:[
            {user: "angelneo",rating:5,comment:"Motor bueno. Funciona correctamente", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:3, comment:"Un poco difícil de instalar. He tenido que llamar a un técnico", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },
    {
        id: 5,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZhPn4uIq14X3ya1LG7m1-CtHDcmBQ8EXKK81FYm5eM4icM876FxtWfV6Q7fZvpnvOVqidiLXA1-zrVj4Oi3cWZtnHdTHv6nH85JLoE4RLwMtgPmbiyx-O&usqp=CAE",
        nameProduct: "Motor para persiana de hasta 34Kg.",
        price: 30.85,
        quantity: 1,
        detail: "Motor TG M 1817 para persianas del hogar de 18Nm a una velocidad de 17rpm para un peso máximo de persiana de 34Kg. para accionar persianas de casa, para persianas de ventana o para subir persianas de balcon de vivienda. Motor tubular para eje de 52 o 60 Motores para persianas de aluminio, motores para persianas de plástico, motores para persianas exteriores, para persianas de seguridad, motores para persianas enrollables o motores para persianas de compacto mini. Modelo TG M 1517 y TTGO TG de maniobra por interruptor de pared. Precio con IVA incluido. Motores para persianas de vivienda con el sistema de seguridad térmica. Venta de motores de la marca TTGO de regulación de los finales de carrera de abertura y cierre por mediación de los reguladores que se encuentran en el motor de la persiana. Motor de alto rendimiento y con la garantía CE. De sencilla instalación para eje de persianas de tubo de 60mm. En el precio del motor está incluido: el soporte, los acoples para eje caras planas, las instrucciones de montaje y la varilla de regulación.Ideal para motores para persianas de ventanas de vivenda.",
        tipo: "Persianas",
        reseñas:[
            {user: "angelneo",rating:4,comment:"El producto funciona muy bien, en general es intuitivo pero difícil de instalar.", img:"https://lh3.googleusercontent.com/a-/ACB-R5SJfNzRSkMsi2DoY_FBEC4L9BepE09SFh7tCkqFlA=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "manny",rating:5, comment:"Motor en kit completo, motor suave sin ruidos, facilidad ajuste carrera, todo ajusta perfectamente. Funciona perfectamente. ", img:"https://lh3.googleusercontent.com/a-/ACB-R5THhTrhQXgQdEga9iQDb42oHAPzVQnORXa5hVsq=s120-c-c0x00000000-cc-rp-mo-br100"},
            {user: "Claudia",rating:5, comment:"No me ha dado tiempo a usarlo pero funciona", img:"https://lh3.googleusercontent.com/a/AGNmyxZfCPJNWHHOGfyPAPJO8icARzK9wt33ycM-YQsh=s120-c-c0x00000000-cc-rp-mo-br100"}]

    },
    {
        id: 6,
        img: "https://www.hogarcomfy.com/2188-medium_default/catchface-negra.jpg",
        nameProduct: "Cerradura inteligente",
        price: 199.00,
        quantity:1,
        detail: "Experimenta un nuevo estándar de seguridad y comodidad con nuestra cerradura inteligente de última generación. Diseñada para integrarse perfectamente en hogares modernos, esta cerradura combina una tecnología avanzada con un elegante diseño para ofrecer una experiencia de seguridad sin esfuerzo.",
        tipo: "Seguridad",
        reseñas:  [{user:"Angiee", rating:5, comment:"Me ha encantado, ya no tengo que llevar llaves cuando salgo de casa, un antes y un despues", img:"https://lh3.googleusercontent.com/a/AGNmyxZfCPJNWHHOGfyPAPJO8icARzK9wt33ycM-YQsh=s120-c-c0x00000000-cc-rp-mo-br100"}]
    },

    {
        id: 7,
        img: "https://www.seguridadprofesionalhoy.com/imagenes/2021/06/Cruiser.jpg",
        nameProduct: "Cámara de seguridad inteligente",
        price: 44.95,
        quantity:1,
        detail: "Asegura la tranquilidad de tu hogar con nuestra cámara de seguridad inteligente, una solución de vigilancia avanzada que combina tecnología de punta con funcionalidades inteligentes para una protección completa.",
        tipo: "Seguridad",
        reseñas:  []
    },
    {
        id: 8,
        img: "https://m.media-amazon.com/images/I/61inHz80D+L.jpg",
        nameProduct: "Enchufe inteligente",
        price: 25.55,
        quantity:1,
        detail: "Transforma tu hogar en un espacio conectado y eficiente con nuestro enchufe inteligente. Diseñado para simplificar tu vida cotidiana, este dispositivo te permite controlar tus electrodomésticos de manera remota y programar su funcionamiento para adaptarse a tu estilo de vida.",
        tipo: "Enchufes",
        reseñas:  [{user:"Hetbas", rating:5, comment:"Funciona bien", img:"https://img.menzig.es/a/0000/353-h0.jpg"}]
    },
    {
        id: 9,
        img: "https://prendeluz.com/app/images/products/502030-1.webp",
        nameProduct: "Luces LED de colores",
        price: 17.95,
        quantity:1,
        detail: "Eleva la atmósfera de tu hogar con nuestra tira de luces LED RGB inteligente. Diseñada para brindar un espectro completo de colores y efectos, esta tira de luces te permite personalizar la iluminación de tus espacios según tu estado de ánimo, ocasión o simplemente para añadir un toque vibrante a tu vida diaria.",
        tipo: "Iluminacion",
        reseñas:  [{user:"JJGamer", rating:4, comment:"Le da muchisimo ambiente a mi cuarto, me encanta! ", img:"https://img.utdstc.com/icon/e72/8cb/e728cb83db52c8fc5eb833c9fd6477b6e7ab42ed9ecd8239261d06d69894b6a5:200"}]
    }


]
