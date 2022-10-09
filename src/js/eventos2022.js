const eventos = {
    "1": {
        tipo: "Concierto",
        fecha: "29/10/2022",  hora: "17:00",
        recinto: "Utopía Utopia Cuauhtlicalli Aculco",
        referencia: 'https://www.google.com/maps/place/UTOPIA+ACULCO/@19.3667021,-99.1128096,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff8e29583989:0x84c2103ec5fe57ea!8m2!3d19.366776!4d-99.1106099',
        programa: [
            [{ interprete: 1, contenido: null}],
            [{ interprete: 2, contenido: null}]
        ]
    },
    "2": {
        tipo: "Concierto",
        fecha: "30/10/2022",  hora: "14:00",
        recinto: "Centro Cultural Fausto Vega",
        referencia: 'https://www.google.com/maps/place/Fausto+Vega/@19.366863,-99.1131694,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fe725c2dbff3:0x46f18c5fce014d5d!8m2!3d19.366863!4d-99.1109754',
        programa: [
            [{ interprete: 8, contenido: null}],
            [{ interprete: 6, contenido: null}]
        ]
    },
    "3": {
        tipo: "Concierto",
        fecha: "04/11/2022",  hora: "17:00",
        recinto: "Centro Cultural Acatitlán",
        referencia: 'https://www.google.com/maps/place/Centro+Cultural+Acatitlan/@19.3631482,-99.0120077,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1e2b47f291029:0x6a9a26f7c86fe57f!8m2!3d19.3631537!4d-99.0098402',
        programa: [
            [{ interprete: 3, contenido: null}]
        ]
    },
    "4": {
        tipo: "Concierto",
        fecha: "06/11/2022",  hora: "12:00",
        recinto: "ExConvento de San Juan Evangelista Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 4, contenido: null}]
        ]
    },
    "5": {
        tipo: "Concierto",
        fecha: "11/11/2022",  hora: "17:00",
        recinto: "Museo de las Culturas Pasión por Iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3576021,-99.0899225,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575957!4d-99.0877336',
        programa: [
            [{ interprete: 9, contenido: null}],
            [{ interprete: 5, contenido: null}]
        ]
    },
    "6": {
        tipo: "Concierto",
        fecha: "19/11/2022",  hora: "17:00",
        recinto: "Utopía Papalotl",
        referencia: 'https://www.google.com/maps/place/Utop%C3%ADa+%22Papalotl%22/@19.3421459,-99.034535,17z/data=!3m1!4b1!4m5!3m4!1s0x85ce034448e99d97:0x22fb90891720c78a!8m2!3d19.3421459!4d-99.032341',
        programa: [
            [{ interprete: 11, contenido: null}],
            [{ interprete: 12, contenido: null}]
        ]
    }
}

const interpretes = {
    "0": {
        nombre: "Por definir",
        resenia: `Por definir`,
        imagen: "./src/img/interpretes/FIG_image.png",
        fondo: './src/img/interpretes/FIGFondo.png'
    },
    "1": {
        nombre: "Natalia María Beltán Velázquez (Colombia)",
        resenia: `Inició sus estudios musicales en la Academia Luis A. Calvo a los 17 años de edad en el énfasis de guitarra acústica. Posteriormente, ingresó al preparatorio de artes musicales en la Facultad de Artes ASAB en la Universidad Distrital Francisco José de Caldas y al pregrado de la misma bajo la tutoría del docente Daniel Forero. 
        Ha participado como guitarrista en la Orquesta de Guitarras ASAB, en donde participó en el segundo y cuarto encuentro de Orquestas de guitarras en Cali y, en el encuentro internacional de Orquestas de Guitarra en Ciudad de México, Toluca e Ixtlahuaca en el año 2019. Como guitarrista ha realizado presentaciones en el auditorio Teresa Cuervo en el Museo Nacional, Auditorio ICAHN y Samuel Bedoya. 
        Asimismo, ha participado en seminarios internacionales de música y género y talleres de interpretación. Ha participado en clases magistrales con los docentes Pedro Angel, Mario Arevalo, Jose Luis Lara, Guillermo Bocanegra, Mario Riveros, Cutberto Córdoba, Ensamble Tetrakis y el Duo Revueltas.
        Actualmente se encuentra realizando un intercambio académico en la Universidad Michoacana en México bajo la tutoría del maestro Héctor Cruz. `,
        imagen: "./src/img/interpretes/NataliaBentran.jpg",
        fondo: './src/img/interpretes/NataliaBentranFondo.jpg'
    },
    "2": {
        nombre: "Gabriel Lara Amador",
        resenia: `Músico Guitarrista Clásico por el Instituto Nacional de Bellas Artes y Literatura, Bajo la cátedra del Maestro Arturo Lozada, Ha tomado Clases Magistrales con los Maestros, Cutberto Córdova, José Luis Lara (Venezuela), Laura Velázquez (Cuba), Julio César Oliva, Carlos Larrauri, entre otros. 
        Actualmente es integrante de la Orquesta Sinfónica de la Universidad Autónoma de la Ciudad de México, del Cuarteto SUACM y es Promotor Cultural en la Alcaldía Iztapalapa, Se ha Presentado en distintos recintos, festivales y ferias dentro del territorio mexicano.`,
        imagen: "./src/img/interpretes/Gabriel.jpg",
        fondo: './src/img/interpretes/GabrielFondo.jpg'
    },
    "3": {
        nombre: "Sergio Ramírez Mancilla",
        resenia: `Actualmente termine los créditos de la licenciatura como instrumentista-guitarra en la Facultad de Música de la UNAM, con el maestro Antonio Alberto Rodríguez Delgado (Cuba), me encuentro preparando la titulación. Comencé mi formación clásica a los 17 años con Hugo Armando Medina. 
        También he tomado clases magistrales con Julio Cesar Oliva, Austin Wahl, Patrick Kearney, Winy Kellner entre otros, he asistido a clases magistrales de Leo Brouwer, Marcin Dylla, Paolo Pegoraro y Marco Tamayo. Actualmente soy maestro de guitarra en la Sala Chopin (CDMX) y en la Escuela de Música “Forte Rock School Music”. Como solista me he presentado en la Universidad Nacional Autónoma de México en diferentes sedes como; las Facultades de Arquitectura, y Contaduría y Administración. 
        Asimismo, en las Facultades de Estudios Superiores Zaragoza y Cuautitlán. Igualmente, en el Colegio Ciencias y Humanidades plantel oriente y en el Museo UNAM HOY. 
        Por otra parte, me presente en los siguientes museos y casas de cultura: Museo de la Mujer, Centro Cultural Acatitlán, Casa de Cultura San Antonio, Centro Cultural y Recreativo de Ecatepec, Centros Culturales y Regionales de Cuautitlán Izcalli y de Atizapán de Zaragoza, Tribunal Superior de Justicia y en la Plaza “La Aguadora” en Jiquilpan Michoacán.`,
        imagen: "./src/img/interpretes/SergioRamirez.jpg",
        fondo: './src/img/interpretes/SergioRamirezFondo.jpg'
    },
    "4": {
        nombre: "In-Fortunio Tango Dúo",
        resenia: `In-Fortunio Tango dúo es un dúo de bandoneón y guitarra único en México, tiene como objetivo difundir el tango tradicional y moderno mediante la integración de este par de instrumentos representativos del género que, a partir de arreglos y adaptaciones originales, presentan su propuesta para explorar con particular estética un lenguaje musical con profunda herencia. 
        El dúo surgió en 2014 en la Ciudad de México, y desde entonces se ha presentado en diversos foros y festivales del país, ofreciendo mas de 20 conciertos al año, entre ellos en la sala Manuel M. Ponce del Palacio de Bellas Artes, en el IX Encuentro Internacional de Guitarra de Salamanca, Guanajuato, el 4o. Ciclo Internacional de Guitarra de Cuernavaca, el Museo Iconográfico del Quijote en Guanajuato, la Feria Internacional del Libro del Museo Nacional de Antropología e Historia, el Festival Revueltas 2015 de la ciudad de Durango, el 8vo Festival Internacional Divertimento 2018, el 21 Festival Internacional de Guitarra de Taxco 2018, en los Conciertos Radiofónicos del IMER y en el Festival Internacional de Guitarra de Radio UNAM. 
        En el 2019 actuaron como solistas con la Orquesta del Festival Internacional de Guitarra de Morelia y con la Camerata Oaxaca tocando en doble concierto para bandoneón y guitarra del compositor Astor Piazzolla.
        Integrantes:
        César Lara
        Javier Noyola Zarazúa
        `,
        imagen: "./src/img/interpretes/In-Fortunio.jpg",
        fondo: './src/img/interpretes/In-FortunioFondo.jpg'
    },"5": {
        nombre: "Saúl Gonzáles Esquer",
        resenia: `Egresado con Honores de la Facultad de Música de la UNAM, Saúl Esquer ha continuado su formación en diversos diplomados con maestros de talla internacional como Adriano del Sal, Marco Socías, Mauro Zanatta, Petra Polackova y Arody García. 
        Como concertista se ha presentado en diversas salas y museos y fue miembro del cuarteto de guitarras Érebos y posteriormente del ensamble Attica! de música contemporánea. 
        Su interés por difundir la cultura de la guitarra mexicana lo llevó a ser miembro fundador de la Asociación Mexicana de Guitarra Clásica y Popular A.C. la cual opera desde inicios del año 2022. 
        En la docencia, fue profesor de música de la Escuela Médico Naval de la Secretaría de Marina y actualmente es maestro en la academia de música School Of Rock Pedregal.`,
        imagen: "./src/img/interpretes/SaulGonzalez.jpg",
        fondo: './src/img/interpretes/SaulGonzalezFondo.jpg'
    },
    "6": {
        nombre: "Sheila Mónica Muñiz Estrada",
        resenia: `En el 2014, inicia sus estudios musicales, con la especialización en guitarra clásica, en la escuela de iniciación artística #4 (INBA), en el año 2017 egresa de dicha institución.
        En 2019 ingresa al Conservatorio Nacional de Música de México, a la Licenciatura de enseñanza musical, con la guitarra como instrumento eje, bajo la cátedra del maestro Roberto Medrano.
        Ha participado como solista en distintos recintos culturales del estado de México como: Casa de Morelos, Centro Cultural Real del Bosque, Estación Lírica CM, centro cultural mexiquense, y en la ciudad de México, como, Museo Nacional de Arte, Museo Casa Carranza, Biblioteca Vasconcelos.
        En 2017 se integra a la Orquesta sinfónica de la UACM, participando en distintos escenarios, como: Desierto de los leones, centro cultural México contemporáneo, museo Nacional de antropología e historia, la antigua academia de San Carlos, biblioteca México, Centro cultural Venustiano Carranza, Centro cultural mexiquense, Ex convento de Culhuacán, así como en una clínica de interpretación de cuerdas.
        Ha participado con el cuarteto de guitarras SUACM, en distintos eventos como: Festival guitarreando, , feria del tamal en Coacalco, museo de San Carlos, Ciudad Universitaria, feria del libro de la Alameda central, centro cultural Elena Garro, Ex convento de Culhuacán, Palacio de medicina, Centro Vlady, museo de las culturas pasión por Ixtapalapa, este último, Junto al compositor y Guitarrista Veracruzano Cutberto Córdova Nieto.
        A mediados del año 2018 comienza a impartir clases de música en centros culturales.
        Ha participado con el ensamble de música popular 'Cuerdas al Aire' en recintos culturales del Edo de México: Festival ¨Guitarreando¨ día Nacional de la guitarra, Casa de Morelos, en la Ciudad de México: Centro Cultural Acatitla, Centro Cultural Elena Garro, entre otros. 
        En el 2020, debido a la pandemia comienza a dar recitales virtuales de música académica. En el 2022, da inicio a un proyecto en su canal de Youtube, llamado 'Grandes maestros de la guitarra de concierto' (https://youtube.com/channel/UCzIRiOPp3evte7rXAiCe60A ) donde busca promover la guitarra clásica, e impulsar a las personas a acercarse a la música, por medio de entrevistas virtuales a maestros reconocidos en el ámbito musical de dicho instrumento.
        Actualmente se encuentra en el ámbito de la docencia a nivel básico, en el Centro Cultural Real del Bosque e impartiendo clases particulares,continúa como guitarrista en la Orquesta Sinfónica de la UACM, en el ensamble Cuerdas al Aire, como solista y en diversos proyectos personales.`,
        imagen: "./src/img/interpretes/Sheila.jpg",
        fondo: './src/img/interpretes/SheilaFondo.jpg'
    },
    "8": {
        nombre: "Marco Mizael Blanno Lugo",
        resenia: `Nació en el municipio de Tlalnepantla de Baz en el Estado de México en el año de 1990.
        Inicio sus estudios de manera autodidacta en el ámbito popular a la edad de 14 años. Posteriormente ingresó a la Casa de Cultura de Coacalco en el año 2006 donde aprendió guitarra clásica.
        En el año de 2015 ingresa a la Escuela de Bellas Artes de Tultepec bajo la tutela del maestro Jorge Pompa. Actualmente estudia la Licenciatura en Ejecución Musical en el área de Guitarra en la Escuela de Bellas Artes de Tultepec.
        Ha tomado clases magistrales con el maestro Sergio Frías, Cutberto Córdoba, Natalia Tarquino, José Miguel García Torres, José Francisco Grijalva Vega, Edilberto Vega García, ha participado en cursos de dirección orquestal, métodos de pedagogía musical y el encuentro de guitarras de México de la FAM UNAM.
        En el año 2018 ingresa a la Orquesta Sinfónica de la Universidad Autónoma de la Ciudad de México en la que participo en cuatro temporadas, realizando conciertos en distintas ferias del libro, noche de museos, ferias internacionales; interpretando obras de todo tipo de repertorio, incluyendo popular, pero en un formato de música académica.
        De forma paralela a la Orquesta Sinfónica forma parte del Cuarteto de Guitarras de la OSUACM teniendo presentaciones en ciudad universitaria, museo de San Carlos, Ex convento de Culhuacán en noche de museos, entre otros.`,
        imagen: "./src/img/interpretes/Marco.jpg",
        fondo: './src/img/interpretes/MarcoFondo.jpg'
    },
    "9": {
        nombre: "Marcos Yair Guzmán Rueda",
        resenia: `Comenzó sus estudios formales de música en el instrumento de guitarra clásica en la Escuela de Iniciación Artística No. 2. Posteriormente, ingresó a la Escuela de Bellas Artes de Toluca en la carrera técnica de músico instrumentista en guitarra clásica. 
        Actualmente estudia la carrera de instrumentista en guitarra de la Facultad de Música de la UNAM.
        Ha tenido presentaciones como solista; así como integrante del Ensamble Juvenil de Guitarras de la EBAT en distintos lugares, tales como: en la Académica de Música Yamaha; en la sala Xochipilli por el "Taller de Guitarras Clásicas"; "La Feria del tamal 2018" en San Lorenzo Tetlixtac; en el colegio de "Comunidad Europea"; en el "Colegio Cultural Cuauhtémoc"; la casa de cultura de El Sifón en la CDMX, en el auditorio Mozart de la EBAT, entre otros.`,
        imagen: "./src/img/interpretes/Yair.jpg",
        fondo: './src/img/interpretes/YairFondo.jpg'
    },
    "11": {
        nombre: "José Miguel García Torres",
        resenia: `Licenciado en Guitarra Clásica por la Facultad de Música de la UNAM. Ha tomado cursos de perfeccionamiento guitarrístico en las áreas de música del siglo XVI, Jazz, Lectura a primera vista, Tablatura Renacentista, Interpretación en música del siglo XX, Dirección Coral, Dirección de ensambles musicales diversos, Interpretación de música contemporánea (Rock). Ha formado parte de diversas agrupaciones musicales como la Orquesta Sinfónica de la UACM bajo la batuta del director Francisco Grijalba; Dirección y participación del Cuarteto de Guitarras de la UACM. También ha participado en el área vocal con el Coro Filarmónico Universitario UNAM; coro Gabriel Zaldívar del Centro Cultural Ollín Yoliztli. Ha tenido diversas presentaciones como solista o con ensambles musicales en la CDMX y en el interior de la república como son el Auditorio Nacional, la Sala Nezahualcóyotl, la sala Silvestre Revueltas del Centro Cultural Ollín Yoliztli, en la Universidad Autónoma de Nuevo León, en el Centro Cultural Mexiquense Bicentenario, por mencionar algunos. Actualmente imparte la asignatura de Educación Estética y Artística Música IV y V en el plantel No. 8 “Miguel E. Schulz” de la Escuela Nacional Preparatoria en la Ciudad de México.`,
        imagen: "./src/img/interpretes/Miguel.jpg",
        fondo: './src/img/interpretes/MiguelFondo.jpg'
    },
    "12": {
        nombre: "Cuarteto de Guitarras SUAM",
        resenia: `El Cuarteto de Guitarras SUACM se forma en Enero de 2018, por el Amor y la Pasión de sus integrantes hacia la Guitarra de Concierto, teniendo como prioridad la interpretación y difusión de los Grandes Compositores Mexicanos de la Guitarra Clásica, sin dejar de lado al resto del mundo. 
        El Cuarteto de Guitarras SUACM cuenta con una amplia trayectoria de sus integrantes en la Guitarra de Concierto, tanto solistas como en diferentes ensambles, se ha presentado en diferentes foros como: el Antiguo Colegio de San Carlos, el Museo de San Carlos, el Palacio de Medicina de la UNAM. El Ex Convento del Desierto de los Leones, Ex Convento de Cilhucán, Museo de las culturas Pasión por Iztapalapa, así como en galerías, ferias de libro y ferias populares.
                
                Integrantes:
                Cutberto Córdova Nieto U.V.
                José Miguel García Torres FaM UNAM
                Marco Mizael Blanno Lugo EBAT
                Gabriel Lara Amador INBA

                Músicos Invitados:
                Karen Daniela Sustaita - Viola
                Francisco Rebollo - Violín`,
        imagen: "./src/img/interpretes/FIG_image.png",
        fondo: './src/img/interpretes/FIGFondo.png'
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