const eventos = {
    "1": {
        tipo: "Concierto",
        fecha: "05/11/2023",  hora: "14:00",
        recinto: "ExConvento de San Juan Evangelista Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 1, contenido: null}]
        ]
    },
    "2": {
        tipo: "Concierto",
        fecha: "06/11/2023",  hora: "19:00",
        recinto: "Centro Cultural Fausto Vega",
        referencia: 'https://www.google.com/maps/place/Fausto+Vega/@19.366863,-99.1131694,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fe725c2dbff3:0x46f18c5fce014d5d!8m2!3d19.366863!4d-99.1109754',
        programa: [
            [{ interprete: 2, contenido: null}]
        ]
    },
    "3": {
        tipo: "Concierto",
        fecha: "12/11/2023",  hora: "17:00",
        recinto: "UTOPÍA Cuauhtlicalli",
        referencia: 'https://maps.app.goo.gl/QMbJveM2MMBVhGVW6',
        programa: [
            [{ interprete: 3, contenido: null}]
        ]
    },
    "4": {
        tipo: "Concierto",
        fecha: "19/11/2023",  hora: "14:00",
        recinto: "ExConvento de San Juan Evangelista Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 4, contenido: null}]
        ]
    },
    "5": {
        tipo: "Concierto",
        fecha: "26/11/2023",  hora: "17:00",
        recinto: "Centro Cultural Fausto Vega",
        referencia: 'https://www.google.com/maps/place/Fausto+Vega/@19.366863,-99.1131694,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fe725c2dbff3:0x46f18c5fce014d5d!8m2!3d19.366863!4d-99.1109754',
        programa: [
            [{ interprete: 5, contenido: null}]
        ]
    },
    "6": {
        tipo: "Concierto",
        fecha: "29/11/2023",  hora: "19:00",
        recinto: "ExConvento de San Juan Evangelista Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 6, contenido: null}]
        ]
    },
    "7": {
        tipo: "Clase Magistral",
        fecha: "29/11/2023",  hora: "16:00",
        recinto: "ExConvento de San Juan Evangelista Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        imparte: 10
    },
    "8": {
        tipo: "Concierto",
        fecha: "02/12/2023",  hora: "18:00",
        recinto: "Utopia Papálotl",
        referencia: 'https://maps.app.goo.gl/TznxLuYvsUW5XVfU6',
        programa: [
            [{ interprete: 7, contenido: null}],
            [{ interprete: 8, contenido: null}],
            [{ interprete: 9, contenido: null}]
        ]
    },
    "9": {
        tipo: "Concierto",
        fecha: "24/11/2023",  hora: "18:00",
        recinto: "Museo de las Culturas Pasion por Iztapalapa",
        referencia: 'https://maps.app.goo.gl/MbS3VYfVoNbJRksz5',
        programa: [
            [{ interprete: 11, contenido: null}]
        ]
    },
    "10": {
        tipo: "Clase Magistral",
        fecha: "22/11/2023",  hora: "16:00",
        recinto: "UTOPÍA Meyehualco",
        referencia: 'https://maps.app.goo.gl/eq7eqnVkoJ9WRLv37',
        imparte: 12
    }
}

const interpretes = {
    "0": {
        nombre: "Por definir",
        resenia: `Por definir`,
        imagen: "./src/img/interpretes/LogoIcono.png",
        fondo: './src/img/interpretes/FIGFondo2022.png'
    },
    "1": {
        nombre: "Alejandra Moreno Núñez",
        resenia: `Guitarrista mexicana con trayectoria internacional, dedicada tanto a la enseñanza pedagógica de la guitarra como a los escenarios. Desde el año 2012 ha sido invitada a realizar conciertos en diferentes lugares de la República Mexicana, como Ciudad de México, Puebla, Hermosillo, Real del Monte, Guadalajara, Taxco y Oaxaca, así como en diversas ciudades de América y Europa, como Río de Janeiro en Brasil, Chicago en Estados Unidos, Lucca y Parma en Italia, Córdoba en España, Maastrich, Heerlen y Kerkrade en Holanda y Amberes y Bruselas en Bélgica. También ha sido invitada dentro de destacados encuentros como el “Segundo Festival de Guitarra Radio UNAM” en la Ciudad de México, ” (2012), el “Festival Internacional de Guitarra en Sonora” (2015) , el “Encuentro de Guitarra Joven" del Instituto de Artes de la Universidad del Edo de Hidalgo (2015), el “Ciclo de Música Articulada” en la Ciudad de Puebla (2015), “Lucca Chamber Music Festival 2017” en Italia, “Open 2018 Guitar Festival Homenaje a Leo Brouwer” en Lucca Italia, el XLV Festival de Guitarra en Paracho” (online 2020), el “XXXII Festival Internacional de Guitarra en Perú ICPNA” (online 2021), y el “Encuentro de mujeres guitarristas 2022” en la ciudad de Córdoba en España. 
        Su repertorio abarca desde la música europea del siglo XVII, hasta la música latinoamericana del siglo XXI integrando también obras de compositoras. Sus interpretaciones se caracterizan por su expresividad, virtuosismo, y belleza. `,
        imagen: "./src/img/interpretes/2023/AleMoreno.jpg",
        fondo: './src/img/interpretes/2023/AleMorenoBack.jpg'
    },
    "2": {
        nombre: "Orquesta de Guitarra 'La Unión' ",
        resenia: `Fundada por Javier Enrique Rojas Murillo en el año 2006, es una agrupación de la Escuela Municipal de Música de La Unión, Cartago, Costa Rica. En el 2008 participó en el 11vo Festival Internacional de Guitarras de Costa Rica, en el 2009 en el 1er Festival Nacional de Orquestas de Guitarras de Costa Rica, en el 2018 participó en el 2do Festival Internacional de Orquestas de Guitarras en Cali, Colombia. En 2022 fue invitado nuevamente al Festival Internacional de Orquestas de Guitarra en Colombia (Bogotá y Barranquilla). Está conformada por estudiantes avanzados de la Institución y graduados de la misma. 
        En 2023 nuevamente la Orquesta se presenta al Festival Internacional de Orquestas de Guitarra en Bogotá Colombia, y seguidamente organiza el Primer Encuentro Internacional de Guitarras de La Union, con la participación especial del Ensamble de Guitarras de la Universidad Veracruzana. 
        La Orquesta de Guitarras de la Unión es una orquesta versátil que tiene como objetivo básico la preparación e interpretación de conciertos y representaciones con repertorio de ritmos populares como Bossa Nova, Salsa, Pasillo, Tango, Boleros y mucho más, con énfasis en música costarricense y siempre con una visión de apoyo al compositor nacional. 
        Además tiene la misión de servir como instrumento al servicio de la educación musical de jóvenes y adultos cumpliendo una labor pedagógica, artística y cultural con la intención de elevar y promover los valores y el estudio de la música en el cantón de la Unión, motivando así labores similares de otras agrupaciones en todo el país. 
        Integrantes: 
        Javier Rojas, director. 

        Daniel Masis, Requinto 1 (concertino) 
        Carmen Vega, Esteban Angulo, Requinto 2 
        Hernán Núñez, Hansel Granados, Christian Alvarado, Guitarra 1 
        Kevin Phillips, David Sánchez, Guitarra 2 
        Sándor Sáenz, Zaida Pérez, Sebastián Rivera, Guitarra Baja 
        Ronald Picado, Bajo Eléctrico 
        Melissa Rojas, Isaac Cordero, Percusión `,
        imagen: "./src/img/interpretes/2023/OrquetaUnion.jpg",
        fondo: './src/img/interpretes/2023/OrquetaLaUnión.jpg'
    },
    "3": {
        nombre: "Alexis Rodriguez (Cuba)",
        resenia: `Por definir`,
        imagen: "./src/img/interpretes/2023/AlexisRodrigez.jpg",
        fondo: './src/img/interpretes/2023/AlexisRodrigezBack.jpg'
    },
    "4": {
        nombre: "Luis Benítez Alba",
        resenia: `Profesor y concertista originario de la Ciudad de México, es egresado con honores de la Facultad de Música de la UNAM. Posteriormente asistió a la Académie de Musique et Theâtre Prince Rainier III de Mónaco donde estudió bajo la guía de Luc Vander Borght y obtuvo el Diplôme d’Études Musicales. 
        De 2017 a 2018 realizó estudios de Maestría con Eliot Fisk en la Universidad Mozarteum de Salzburgo, Austria. En 2020 fue uno de los 6 instrumentistas seleccionados para participar en la prestigiosa Cátedra Extraordinaria Eduardo Mata de la UNAM. 
        Ha sido premiado en numerosas ocasiones destacando el Premio de la Juventud de la Ciudad de México 2015, el Tercer Lugar en el VI Claxica International Guitar Competition en Bologna, Italia y en los concursos nacionales de Colima, Toluca, Chihuahua, Pachuca y Durango. 
        En 2015 y 2021 gracias al Programa Creadores Escénicos Categoría del FONCA pudo concretar los proyectos “La guitarra mexicana del siglo XX”  y "Sonatas para guitarra: evolución de la forma desde la Nueva España del siglo XVIII hasta el México actual". 
        Desde 2020 es profesor de Guitarra del Sistema de Educación Continua de la Facultad de Música de la UNAM y es fundador del Estudio de Guitarra Clásica en la Ciudad de México.
        En 2023, el maestro visita el Festival Internacional de Guitarra Iztapalapa con el proyecto “Al alba del siglo XXI: nueva música mexicana para gutiarra” gracias al apoyo del FONCA. Con este programa recorrerá nuevamente la República Mexicana.
        El maestro Luis Benítez Alba desea extender un agradecimiento a el Festival Internacional de Guitarra Iztapalapa por las gestiones efectuadas para la realización de este recital.
        `,
        imagen: "./src/img/interpretes/2023/LuisBenitez.jpg",
        fondo: './src/img/interpretes/2023/LuisBenitezBack.jpg'
    },
    "5": {
        nombre: "Karla Keren Sierra",
        resenia: `Por definir`,
        imagen: "./src/img/interpretes/2023/KarlaKerern.jpg",
        fondo: './src/img/interpretes/2023/KarlaKerernBack.jpg'
    },
    "6": {
        nombre: "Dúo Lux Chordarum",
        resenia: `Lucy Rivera, Soprano y José Luis Segura, guitarra.
        Esta agrupación de cámara se formó en 2008 con el propósito principal de difundir el repertorio para voz y guitarra escrito por compositores mexicanos vivos. Además de esto, han fomentado la creación de nuevas composiciones de autores latinoamericanos para esta dotación. Lux chordarum se ha presentado en algunas de las más importantes salas de concierto de la Ciudad de México y el interior de la República Mexicana. En marzo de 2018 el dúo realizó su debut internacional con un concierto en el Museo Nacional de Bellas Artes de La Habana, Cuba, en el marco del Coloquio Internacional de Musicología de la Casa de las Américas; a finales de ese mismo año tuvo una gira por España, Francia e Italia con el programa Hermosas y fragantes flores…, conformado por música para voz y guitarra escrita por compositores mexicanos vivos, inspirada en textos de algunos de los poetas iberoamericanos más significativos para nuestro entorno cultural. Por otra parte, en 2019 Lux chordarum dio una serie de conciertos con el programa Los jardines interiores, conformado por música de compositores cubanos: dos ciclos de canciones de Leo Brouwer; y el estreno absoluto de dos ciclos más, uno con textos de Sor Juana Inés de la Cruz y otro con textos de Amado Nervo, de Alexis Rodríguez, realizado en el marco del Festival de Música Contemporánea de La Habana. En 2023 Lux chordarum está dando a conocer su primera producción discográfica con apoyo del Sistema de Apoyos a la Creación y Proyectos Culturales de México y publicado por Tempus Clásico. `,
        imagen: "./src/img/interpretes/2023/LuxChordarum.jpg",
        fondo: './src/img/interpretes/2023/LuxChordanrumBack.jpg'
    },
    "7": {
        nombre: "Cutberto Córdova ",
        resenia: `Cutberto Córdova se ha convertido en un importante exponente de música mexicana de nueva creación. 
        Como compositor, sus obra es interpretada en festivales de música en diferentes partes del mundo, además de ser publicada y grabada por Naxos Records. 
        Ha realizado una sólida labor docente, ya que sus alumnos son ganadores de premios en certámenes internacionales, además de estar insertados en el mundo laboral en importantes instituciones de música.
        Contacto:
        cutbertocordova@gmail.com 
        www.cutbertocordova.com
        https://youtu.be/FumKyiuVkpY`,
        imagen: "./src/img/interpretes/2023/CutbertoCordova.jpg",
        fondo: './src/img/interpretes/2023/CutbertoCordovaBack.jpg'
    },
    "8": {
        nombre: "Orquesta Femenil de Guitarras Sencuicati",
        resenia: `Es fundada por María Bárbara Trigos Bárcenas y por Claudia Valeria Vega Valencia en septiembre del 2023 en la Ciudad de México. 
        El nombre “Sencuicati”, proviene del náhuatl y se traduce como: “Juntas van a cantar”.
        La OFGS tiene como objetivo ser una agrupación dónde la mujer guitarrista clásica, pueda ejercer libre y profesionalmente su carrera.
        La visión de la orquesta es interpretar, mayoritariamente, obras creadas por mujeres, para difundir y apreciar el patrimonio musical y artístico creado por compositoras.`,
        imagen: "./src/img/interpretes/2023/Sencuicati.jpg",
        fondo: './src/img/interpretes/2023/OrquestaFemenilBack.jpg'
    },
    "9": {
        nombre: "Cuarteto SUACM",
        resenia: `Por definir`,
        imagen: "./src/img/interpretes/LogoIcono.png",
        fondo: './src/img/interpretes/FIGFondo2022.png'
    },
    "10": {
        nombre: "Alexis Rodriguez (Cuba)",
        resenia: `Clase magistral "Recursos metodológicos para un escritor de canciones".`,
        imagen: "./src/img/interpretes/2023/AlexisRodrigez.jpg",
        fondo: './src/img/interpretes/2023/AlexisRodrigezBack.jpg'
    },
    "11": {
        nombre: "Diego Varillas (Perú)",
        resenia: `Diego Varillas (Lima, 1990), músico, arreglista, productor musical y Gestor cultural. Ingresó al Conservatorio nacional de música en el año 2012. En el 2014 ingreso a la Escuela Nacional Superior de Folklore José María Arguedas. Fundador y director del Movimiento Cultural Guitarra Viva, Logró ganar reconocimientos muy importantes:
        * Concurso Nacional de Guitarra Madre Teresa de la Cruz de Candamo (2011, Lima). 
        * Concurso Internacional de Guitarra Homenaje a Agustín Barrios (2014, Universidad de San Martín de Porres, Perú). 
        * Joven Valor del Festival Internacional ICPNA (Lima, Perú, 2012, 2014 y 2016), 
        Ah publicado Libros musicales, investigando la obra de muy importantes guitarristas afroperuanos como: Homenaje a Julio Dávila, Oscar Avilés, Paco Maceda, Máximo Dávila, Rafael Amaranto.
        Publico Libro con arreglos peruanos propios: Valseando Polkas
        Actualmente se dedica a promover la Guitarra solista peruana en Perú y en diferentes países, participando y realizando festivales de Guitarra y Conciertos. `,
        imagen: "./src/img/interpretes/2023/DiegoVarillas.jpg",
        fondo: './src/img/interpretes/2023/DiegoVarillasBack.jpg'
    },
    "12": {
        nombre: "Freddy Pérez (Cuba)",
        resenia: `Clase Magistral`,
        imagen: "./src/img/interpretes/2023/FreddyPerez.jpg",
        fondo: './src/img/interpretes/2023/FreddyPerezBack.jpg'
    }
}

const programas = {
    "1": `<b>Programa1</b>`,
    "2": `<b>Programa1</b>`,
    "3": `<b>Programa1</b>`
}

const muestraInfo = (persona) => {
    let espacio = document.getElementById('interpreteResumen')
    while(espacio.childElementCount){
        espacio.removeChild(espacio.children[0])

    }
    let miInterprete = interpretes[persona]
    let parrafos = miInterprete.resenia.split('\n')
    
    let imagen = creaElemento('img', 'class', 'imgInterpreteInfo')
    imagen.src = interpretes[persona].fondo 
    espacio.appendChild(imagen)

    let titulo = creaElemento('h3', 'class', 'tituloInterpreteInfo')
    titulo.textContent = interpretes[persona].nombre 
    espacio.appendChild(titulo)

    let p = null
    for(let i of parrafos){
        let p = null
        if(/Integrantes:/.test(i) || /Músicos Invitados:/.test(i)){
            p = creaElemento('h4')
            p.textContent = i
        }else{
            p = creaElemento('p')
            p.textContent = i    
        }
        espacio.appendChild(p)
    }
    let cierre = creaElemento('span', 'id', 'cierre')
    cierre.textContent = 'X'
    cierre.setAttribute('onClick', `cerrar()`)
    espacio.appendChild(cierre)
    /*if(interpretes[persona].fondo) {
        espacio.style.backgroundImage = `url('${interpretes[persona].fondo}')`
    }else{
        espacio.style.backgroundImage = null
    } */

    espacio.style.display = 'block'
    
}

const cerrar = () => {
    let espacio = document.getElementById('interpreteResumen')
    espacio.style.display = 'none'
}

const creaElemento = (elemento, atributo = null, valor = null) => {
    let resultado = document.createElement(elemento)
    if(atributo) resultado.setAttribute(atributo, valor )
    return resultado
}

const lineInfo = (tag, contenido) => {
    let wrapper = creaElemento('p')
    let etiqueta = creaElemento('b', 'class', 'derecha')
    etiqueta.textContent = `${tag}:`
    
    let texto = document.createElement('span')
    texto.textContent = ` ${contenido}`
        
    wrapper.appendChild(etiqueta)
    wrapper.appendChild(texto)
    return wrapper
}

const estilos = `
    .nombreEvento{
        text-align: center;
    }
    .eventData p{
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 10px;
    }
    .derecha{
        text-align: right;
    }
`

const estilosInterprete = `
    .persona {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin: 10px;
    }

    .persona:hover{
        color: #682444;
        cursor: pointer;
    }
    .imgInterprete {
        width: 60px;
        border-radius: 50%;
        margin: 0 20px;
    }
`

class InterpreteInfo extends HTMLElement {
    constructor(){
        super()
        
        const persona = interpretes[this.getAttribute('persona')]
        let shadow = this.attachShadow({mode: 'open'})
        
        let wrapper = creaElemento('div', "class", 'persona')
        let img = creaElemento('img', 'class', 'imgInterprete')
        let nombre = creaElemento('span', 'class', 'nombreInterprete')

        if(persona){
            img.src= persona.imagen
            nombre.textContent = persona.nombre
        }else{
            img.src= './src/img/interpretes/tomasa.jpg'
            nombre.textContent = "Pendiente"
        }
        const estilo = document.createElement('style')
        estilo.textContent = estilosInterprete

        wrapper.appendChild(img)
        wrapper.appendChild(nombre)
        shadow.appendChild(wrapper)
        shadow.appendChild(estilo)
    }
    actualiza(){
        const persona = interpretes[this.getAttribute('persona')]
        let nodo = this.shadowRoot.childNodes[0].childNodes
        nodo[0].src= persona.imagen
        nodo[1].textContent = persona.nombre
    }
}

//evento-figi
class EventoFigi extends HTMLElement {
    constructor(){
        super()
        const evento = eventos[this.getAttribute('evento')]
        let shadow = this.attachShadow({mode: 'open'})
        

        let titulo = creaElemento('h3', 'class', 'nombreEvento')
        titulo.textContent = evento.tipo
        
        let eventData = creaElemento('div', 'class', 'eventData')

        

        const style = document.createElement('style')
        style.textContent = estilos

        eventData.appendChild(lineInfo('Cuando?', `${evento.fecha} a las ${evento.hora} horas.`))
        //eventData.appendChild(lineInfo('Donde?', `${evento.recinto}`))
        let recinto = creaElemento('p')
        let donde = creaElemento('b', 'class', 'derecha')
        let lugar = creaElemento('a', 'class', 'linkRecinto')
        donde.textContent = 'Donde?'
        lugar.textContent = `${evento.recinto}`
        lugar.setAttribute('target', '_blank')
        lugar.href = `${evento.referencia}`
        recinto.appendChild(donde)
        recinto.appendChild(lugar)
        eventData.appendChild(recinto)
        

        shadow.appendChild(style)
        shadow.appendChild(titulo)
        shadow.appendChild(eventData)

        let interprete = null
        if(evento.tipo === "Clase Magistral"){
            eventData.appendChild(lineInfo('Imparte', "")) //`${interpretes[evento.imparte].nombre}`))
            interprete = creaElemento(`interprete-info`, 'persona', `${evento.imparte}`)
            interprete.actualiza()
            interprete.setAttribute('onClick', `muestraInfo("${evento.imparte}")`)
            shadow.appendChild(interprete)

        }else{
            eventData.appendChild(lineInfo('Interpretes', ""))
            for(let i of evento.programa){
                for(let j of i){
                    interprete = creaElemento(`interprete-info`, 'persona', `${j.interprete}`)
                    interprete.actualiza()
                    interprete.setAttribute('onClick', `muestraInfo("${j.interprete}")`)
                    shadow.appendChild(interprete)
                }
                
            }
        }
        
        
        
    }
}




customElements.define('interprete-info', InterpreteInfo)

customElements.define('evento-figi', EventoFigi)

document.onkeydown = e => { 
    if(e.key === 'Escape') cerrar()
}