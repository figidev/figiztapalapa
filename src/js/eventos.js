const eventos = {
    "1": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021", hora: "16:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        imparte: 1
    },
    "2": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021",  hora: "16:45",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        imparte: 1
    },
    "3": {
        tipo: "Concierto",
        fecha: "20/11/2021",  hora: "18:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        programa: [
            [{ interprete: 2, contenido: null}],
            [{ interprete: 3, contenido: null}],
            [{ interprete: 4, contenido: null}],
            [{ interprete: 5, contenido: null}]
        ]
    },
    "4": {
        tipo: "Clase Magistral",
        fecha: "21/11/2021",  hora: "10:30",
        recinto: "Exconvento Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        imparte: 10
    },
    "5": {
        tipo: "Clase Magistral",
        fecha: "21/11/2021",  hora: "11:15",
        recinto: "Exconvento Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        imparte: 10
    },
    "6": {
        tipo: "Concierto",
        fecha: "21/11/2021",  hora: "12:00",
        recinto: "Exconvento Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 8, contenido: null}],
            [{ interprete: 1, contenido: null}]
        ]
    },
    "7": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021", hora: "16:00",
        recinto: "Museo de las Culturas pasión Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        imparte: 7
    },
    "8": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021",  hora: "16:45",
        recinto: "Museo de las Culturas pasión Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        imparte: 7
    },
    "9": {
        tipo: "Concierto",
        fecha: "27/11/2021",  hora: "18:00",
        recinto: "Museo de las Culturas pasión Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        programa: [
            [{ interprete: 6, contenido: null}],
            [{ interprete: 9, contenido: null}]
        ]
    },
    "10": {
        tipo: "Concierto",
        fecha: "28/11/2021",  hora: "12:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        programa: [
            [{ interprete: 11, contenido: null}],
            [{ interprete: 7, contenido: null}],
            [{ interprete: 12, contenido: null}]
        ]
    }
}

const interpretes = {
    "0": {
        nombre: "Por definir",
        resenia: `Por definir`,
        imagen: "./src/img/FIG_image.png",
        fondo: './src/img/FIGFondo.png'
    },
    "1": {
        nombre: "Natalia Tarquino",
        resenia: `Guitarrista Clásica de la Universidad Distrital Francisco José de Caldas – Facultad de Artes ASAB, nacida en Bogotá – Colombia. Comienza sus estudios en guitarra a los 7 años de edad, donde emprende una trayectoria de formación en las músicas tradicionales colombianas, pasando por instituciones emblemáticas en esta área, como la fundación Gilberto Alzate Avendaño y la Academia Luis A. Calvo. Posteriormente Ingresa a la Academia Superior de Artes de Bogotá (ASAB), facultad donde comienza sus estudios formales en música con énfasis en guitarra. Posteriormente cursa una movilidad académica luego de ganar una beca con el mejor promedio de su universidad para vivir y estudiar en Xalapa – México durante un año. Allí tuvo la oportunidad de continuar su formación musical en la Universidad Veracruzana, donde culmina los dos últimos semestres de su carrera profesional. Cuenta con una gran trayectoria como concertista, en diversas salas emblemáticas a nivel internacional. Una carrera enriquecida de experiencia como interprete, donde se pueden plasmar; dos giras internacionales por el territorio mexicano, en ciudades como Zacatecas, Durango, Xalapa, Veracruz, Ciudad de México, Oaxaca, Hermosillo, entre otras; diversos conciertos en ciudades de Colombia, además de participaciones como solista en festivales y concursos en México, Colombia y Estados Unidos. 
        Fue ganadora del Segundo Lugar en el Concurso Latinoamericano de Mujeres Interpretes de la Guitarra en Hermosillo Sonora en 2018, fue candidata nominada por la Universidad Distrital al Premio Nacional Mujeres de Éxito – Colombia 2020, participó en el Latin American Music Festival Boston 2020, en el que fue ganadora de beca para tomar masterclass con la gran maestra Sharon Isbin, además de poder presentar un concierto de gala en el Auditorio en The Rivers School Conservatory of Music – Massachusetts, estas entre otras participaciones. Natalia ha pasado por la tutoría de grandes maestros de gran talla internacional, en Colombia su formación profesional comienza con los maestros de guitarra; Yimy Robles, León Salcedo, Mario Riveros y Juan Miguel Sossa, posteriormente en México llega bajo la tutoría del guitarrista y compositor Cutberto Córdova, y este camino se ha ido enriqueciendo con un gran número de clases magistrales cursadas con grandes guitarristas a nivel mundial, como lo son: William Anderson (Estados Unidos), Mauro Zanatta (Italia), Luis Quintero (Venezuela), Luis Zea (Venezuela), Antonio Laguna (México), Mauricio Hernández (México), Norman Ruiz (Estados Unidos), entre otros. 
        Su formación Musical se ha complementado con su experiencia como docente en el área infantil, donde ha podido emprender investigaciones entorno a la pedagogía infantil de la guitarra y los que ha logrado llevar a cabo en México. También emprendió estudios en el Área de la Dirección Orquestal, por lo que cursó en la Universidad Veracruzana el Diplomado en Ensambles Instrumentales, el que culminó y aprobó satisfactoriamente luego de dirigir en quinteto de cuerdas el 3er Movimiento (Sentimental Saraband) de la Simple Symphony de Benjamin Britten en 2021. 
        Actualmente Natalia se encuentra radicada en Xalapa - México donde tuvo la oportunidad de formar su perfil laboral, al entrar como Consultora Académica del Instituto Superior de Música del Estado de Veracruz en 2020. Hoy en día ocupa el cargo como Subdirectora Académica de esta institución; de tanto valor dentro del arte y la cultura veracruzana en el territorio mexicano.`,
        imagen: "./src/img/Natalia.jpeg",
        fondo: './src/img/NataliaFondo.jpg'
    },
    "2": {
        nombre: "Blanca Pineda",
        resenia: `Licenciada en piano por la Facultad de Música UNAM, discípula de Jesús María Figueroa, Eva del Carmen Medina y Francisco Viesca. Ha perfeccionado sus conocimientos musicales con cursos sobre Bach, música española, análisis auditivo de la música, método Alexander, ensamble, improvisación y docencia. Sus estudios sobre jazz corrieron a cargo de personalidades como Felipe Gordillo, Juan José Calatayud y Daniel Wong.
        Su trayectoria incluye presentaciones como solista, acompañante, elemento de Orquesta Sinfónica y miembro de grupos de cámara. Ha sido directora musical e integrante de numerosos proyectos musicales. Actualmente cursa la maestría en Pedagogía de las Artes en la Universidad Veracruzana, es pianista del ensamble de cámara Scherzo, docente tutor investigador del IEMS, pianista titular de la Orquesta Sinfónica de la UACM y fundadora, pianista y directora de la banda de jazz Los Ochocuartos.`,
        imagen: "./src/img/Blanca.jpg",
        fondo: './src/img/BlancaFondo.jpg'
    },
    "3": {
        nombre: "Alan Bernal",
        resenia: "Discípulo de Blanca Pineda, comenzó como músico autodidacta para continuar en la Escuela de Iniciación Artística del Instituto Nacional de Bellas Artes número 2, para poder expandir sus horizontes musicales.  Ha tomado cursos de perfeccionamiento en jazz y música contemporánea. Actualmente estudia Educación Musical con especialidad en guitarra en la Facultad de Música UNAM, es profesor de guitarra y canto, guitarrista en la Orquesta Sinfónica de la UACM y en la banda de jazz Los Ochocuartos.",
        imagen: "./src/img/Alan.jpg",
        fondo: './src/img/AlanFondo.jpg'
    },
    "4": {
        nombre: "Axel Trejo",
        resenia: `Originario de la Ciudad de México comenzó sus estudios musicales a la edad de 19 años en el Centro de estudios profesionales a nivel profesional “Ad Libitum”, bajo la dirección del profesor Alexis Huerta. Además, ha complementado sus estudios siendo alumno de guitarristas de talla internacional como Alí Arango y Mauro Zanatta.
        Sus intereses musicales se centran en la música escrita para laúd del S. XVI, particularmente se ha enfocado en la obra del compositor francés Adrian Le Roy de quien ha transcrito su Primer libro de tablatura de laúd.
        Hoy en día estudia el ciclo propedéutico de la licenciatura Instrumentista en guitarra de la Facultad de Música de la UNAM bajo la cátedra del profesor José Luis Segura Maldonado.`,
        imagen: "./src/img/Axel.jpg",
        fondo: './src/img/AxelFondo.jpg'
    },
    "5": {
        nombre: "Alexis Huerta",
        resenia: `Músico mexicano que quiere brindar música de la mejor calidad para el público y así abrir una nueva ventana a la cultura.
                  Estudió la licenciatura en Guitarra en el Conservatorio Nacional de Música.
                  Ha tomado clases magistrales con Bertha Rojas, Benjamín Garrido, Iliana Matos, Denis Azabagic, Simon Powis, Gohar Vardanyan, Duo Angostino y Horacio Franco.
                  Participó en el Concurso Interno del Conservatorio Nacional de Música en las ediciones 2015, 2018 y 2019.
                  Se ha presentado en diferentes foros como la Sala Silvestre Revueltas, Sala de recepciones del MUNAL, Museo Dolores Olmedo, Museo del Virreinato Walter J. Mannien Center for the Arts (Beverly Massachussets). y el Museo del Carmen.
                  Se ha desempeñado como Maestro de guitarra en el Ad Libitum - Centro de estudios musicales a nivel profesional durante el 2018 a 2019; y como Maestro de guitarra, bajo y ukelele en el MVS Music Center desde el 2018.`,
        imagen: "./src/img/Alexis.jpg",
        fondo: './src/img/AlexisFondo.jpg'
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
        En el 2020, debido a la pandemia comienza a dar recitales virtuales de música académica. En el 2021, da inicio a un proyecto en su canal de Youtube, llamado 'Grandes maestros de la guitarra de concierto' (https://youtube.com/channel/UCzIRiOPp3evte7rXAiCe60A ) donde busca promover la guitarra clásica, e impulsar a las personas a acercarse a la música, por medio de entrevistas virtuales a maestros reconocidos en el ámbito musical de dicho instrumento.
        Actualmente se encuentra en el ámbito de la docencia a nivel básico, en el Centro Cultural Real del Bosque e impartiendo clases particulares,continúa como guitarrista en la Orquesta Sinfónica de la UACM, en el ensamble Cuerdas al Aire, como solista y en diversos proyectos personales.`,
        imagen: "./src/img/Sheila.jpg",
        fondo: './src/img/SheilaFondo.jpg'
    },
    "7": {
        nombre: "Cutberto Córdova Nieto",
        resenia: `Cutberto Córdova se ha convertido en un representante de la música mexicana de nueva creación. Sus obras van desde dotaciones para guitarra solista, duetos, cuartetos, música de cámara, hasta un concierto para guitarra y orquesta.
        Frecuentemente su obra es interpretada de diversas partes del mundo incluyendo Festivales Internacionales e incluso como obra obligatoria en Concursos Nacionales.
        Cuenta con grabaciones de discos de su trabajo compositivo que se encuentran en las plataformas digitales, además de haber sido grabada su obra para NAXOS por el guitarrista mexicano Cecilio Perera.
        Gracias a su gran labor como compositor o como ejecutante, ha sido invitado en diversos foros tales como; ponente y con el Ensamble de Guitarras del ISMEV al 5º Festival Internacional de Orquestas de Guitarra en la ciudad de Cali Colombia; en una conferencia de su obra y clases magistrales en Boston en el Latin American Music Festival auspiciado por The Rivers School Conservatory; es ganador del la beca Habilitación del Perfil Internacional (HAPI) de la Universidad Veracruzana para realizar una Residencia Artística en la Universidad de Rio Grande Valley, Texas, Estados Unidos; invitado al conversatorio de compositores, además de ser interpretada su obra por la Orquesta Internacional de Guitarra en el XVI Encuentro Internacional de Guitarra en Panamá; como Jurado del Concurso Latinoamericano de Mujeres Intérpretes de la Guitarra en Hermosillo Sonora; clases magistrales, ponencia y concierto en la Universidad Distrital ASAB de Bogotá Colombia; ponencia de su CD Crónicas de Viaje en el Latin-American Guitar Festival Chicago Estados Unidos; participa en el Segundo, Tercer y Quinto Festival de Orquestas de Guitarra en la ciudad de Cali Colombia en las ediciones del donde interpretaron diversas orquestas de diferentes países su obra; conferencista en el Foro de Compositores Clutch en la Universidad de Austin Texas.
        Ha presentado su CD Mictlán en Latina, Italia; Caravaca de la Cruz, España; Universidad del Mozarteum en Salzburgo, Austria y en el Conservatorio Koninklijk de la Haya, Holanda.
        Realizó una gira con la Orquesta de Guitarras de Xalapa por un mes a China, desde Hong Kong hasta Beijing y se ha presentado en la Escuela de Artes Musicales de la Universidad de San José Costa Rica; en el Conservatorio de Música “G. B. Pergolesi” de Fermo Italia, así como una conferencia en la Universidad del Cuyo, Mendoza Argentina.`,
        imagen: "./src/img/Cutberto.jpg",
        fondo: './src/img/CutbertoFondo.jpg'
    },
    "8": {
        nombre: "Marco Mizael Blanno Lugo",
        resenia: `Nació en el municipio de Tlalnepantla de Baz en el Estado de México en el año de 1990.
        Inicio sus estudios de manera autodidacta en el ámbito popular a la edad de 14 años. Posteriormente ingresó a la Casa de Cultura de Coacalco en el año 2006 donde aprendió guitarra clásica.
        En el año de 2015 ingresa a la Escuela de Bellas Artes de Tultepec bajo la tutela del maestro Jorge Pompa. Actualmente estudia la Licenciatura en Ejecución Musical en el área de Guitarra en la Escuela de Bellas Artes de Tultepec.
        Ha tomado clases magistrales con el maestro Sergio Frías, Cutberto Córdoba, Natalia Tarquino, José Miguel García Torres, José Francisco Grijalva Vega, Edilberto Vega García, ha participado en cursos de dirección orquestal, métodos de pedagogía musical y el encuentro de guitarras de México de la FAM UNAM.
        En el año 2018 ingresa a la Orquesta Sinfónica de la Universidad Autónoma de la Ciudad de México en la que participo en cuatro temporadas, realizando conciertos en distintas ferias del libro, noche de museos, ferias internacionales; interpretando obras de todo tipo de repertorio, incluyendo popular, pero en un formato de música académica.
        De forma paralela a la Orquesta Sinfónica forma parte del Cuarteto de Guitarras de la OSUACM teniendo presentaciones en ciudad universitaria, museo de San Carlos, Ex convento de Culhuacán en noche de museos, entre otros.`,
        imagen: "./src/img/Marco.jpg",
        fondo: './src/img/MarcoFondo.jpg'
    },
    "9": {
        nombre: "Marcos Yair Guzmán Rueda",
        resenia: `Comenzó sus estudios formales de música en el instrumento de guitarra clásica en la Escuela de Iniciación Artística No. 2. Posteriormente, ingresó a la Escuela de Bellas Artes de Toluca en la carrera técnica de músico instrumentista en guitarra clásica. 
        Actualmente estudia la carrera de instrumentista en guitarra de la Facultad de Música de la UNAM.
        Ha tenido presentaciones como solista; así como integrante del Ensamble Juvenil de Guitarras de la EBAT en distintos lugares, tales como: en la Académica de Música Yamaha; en la sala Xochipilli por el "Taller de Guitarras Clásicas"; "La Feria del tamal 2018" en San Lorenzo Tetlixtac; en el colegio de "Comunidad Europea"; en el "Colegio Cultural Cuauhtémoc"; la casa de cultura de El Sifón en la CDMX, en el auditorio Mozart de la EBAT, entre otros.`,
        imagen: "./src/img/Yair.jpg",
        fondo: './src/img/YairFondo.jpg'
    },
    "10": {
        nombre: "José Luis Segura",
        resenia: `Licenciado Instrumentista en Guitarra por la Facultad de Música de la UNAM, donde se graduó con mención Honorifica. Concluyo sus estudios de Maestría en Musicología en el Posgrado en Música de la UNAM. Realizo un curso de Posgrado en la Real Academia de Bellas Artes de San Fernando y el Conservatorio “Reina Sofía” en Madrid España. Ha ofrecido recitales en salas de concierto a lo largo de la república Mexicana, así como en varios países de Europa, América Latina y el Caribe; como solista, solista con orquesta, con Nova Música Guitar Duo, con el Cuarteto de Guitarras de la Ciudad de México, con el Duo Lux Chordarum y con el grupo de rock Fausto. Ha dictado conferencias e impartido cursos en diversos foros académicos y universidades de México, así como en Bolivia, Cuba, España y Perú. Del año 2011 a 2018 fue coordinador de investigación del CENIDIM Carlos Chávez del INBA. Actualmente se desempeña como profesor de Guitarra y Música de Cámara en la Facultad de Música de la UNAM, donde ademas es presidente del Claustro de Guitarra e integrante del Comité Editorial.`,
        imagen: "./src/img/JoseLuisSegura.jpg",
        fondo: './src/img/JoseLuisSeguraFondo.jpg'
    },
    "11": {
        nombre: "José Miguel García Torres",
        resenia: `Licenciado en Guitarra Clásica por la Facultad de Música de la UNAM. Ha tomado cursos de perfeccionamiento guitarrístico en las áreas de música del siglo XVI, Jazz, Lectura a primera vista, Tablatura Renacentista, Interpretación en música del siglo XX, Dirección Coral, Dirección de ensambles musicales diversos, Interpretación de música contemporánea (Rock). Ha formado parte de diversas agrupaciones musicales como la Orquesta Sinfónica de la UACM bajo la batuta del director Francisco Grijalba; Dirección y participación del Cuarteto de Guitarras de la UACM. También ha participado en el área vocal con el Coro Filarmónico Universitario UNAM; coro Gabriel Zaldívar del Centro Cultural Ollín Yoliztli. Ha tenido diversas presentaciones como solista o con ensambles musicales en la CDMX y en el interior de la república como son el Auditorio Nacional, la Sala Nezahualcóyotl, la sala Silvestre Revueltas del Centro Cultural Ollín Yoliztli, en la Universidad Autónoma de Nuevo León, en el Centro Cultural Mexiquense Bicentenario, por mencionar algunos. Actualmente imparte la asignatura de Educación Estética y Artística Música IV y V en el plantel No. 8 “Miguel E. Schulz” de la Escuela Nacional Preparatoria en la Ciudad de México.`,
        imagen: "./src/img/Miguel.jpg",
        fondo: './src/img/MiguelFondo.jpg'
    },
    "12": {
        nombre: "Cuarteto de Guitarras SUAM",
        resenia: `El Cuarteto de Guitarras SUACM se forma en Enero de 2018, por el Amor y la Pasión de sus integrantes hacia la Guitarra de Concierto, teniendo como prioridad la interpretación y difusión de los Grandes Compositores Mexicanos de la Guitarra Clásica, sin dejar de lado al resto del mundo. El Cuarteto de Guitarras SUACM cuenta con una amplia trayectoria de sus integrantes en la Guitarra de Concierto, tanto solistas como en diferentes ensambles, se ha presentado en diferentes foros como: el Antiguo Colegio de San Carlos, el Museo de San Carlos, el Palacio de Medicina de la UNAM. El Ex Convento del Desierto de   los Leones, Ex Convento de Cilhucán, Museo de las culturas Pasión por Iztapalapa, así como en galerías, ferias de libro y ferias populares.
                Integrantes:
                José Miguel García Torres FaM UNAM
                Marco Mizarl Blanno Lugo EBAT
                Gabriel Lara Amador INBA`,
        imagen: "./src/img/FIG_image.png",
        fondo: './src/img/FIGFondo.png'
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
        p = creaElemento('p')
        p.textContent = i
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
            img.src= './src/img/tomasa.jpg'
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