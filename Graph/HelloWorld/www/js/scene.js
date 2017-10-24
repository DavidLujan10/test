(function(){//FLOUSURE: FUNCION ANONIMA QUE SE LLAMA A SI MISMA

    let scene = new THREE.Scene();//ASI SE CREA LA ESCENA (ES COMO UN CANVAS LA PERSPECTIVA DEL CANVAS)
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);//PRIMER DATO(FOV):ENFOQUE QUE TIENE LA CAMARA, SEGUNDO DATO(ASPECT): ANCHO Y ALTO DE LA CAMARA (COMO SE VA A VER LA CAMARA), TECER DATO CERCA(NEAR) Y CUARTO DATO LEJOS(FAR)
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);//TAMAÑO AL RENDERER OSEA ANCHO Y ALTO DE LA ESCENA Y RENDER ES DIBUJAR LO QUE SE ESTA CREANDO
    document.body.appendChild(renderer.domElement);

    camera.position.z = 15;//PROFUNDIDAD CON LA QUE SE VIZUALISARA LA CAMARA
    camera.position.y = 0;//ALTURA DE LA CAMARA

    let cuadroGeometria = new THREE.BoxGeometry(2, 2, 2, 2);//SE DEFINE EL TIMPO DE FIGURA GEOMETRIA (EN ESTE CASA UN CUBO)
    let circuloGeometria = new THREE.CircleGeometry(2, 50);//PRIMER ATRIBUTO ES EL RADIO (DEFAULT=50), SEGUNDO ATRIBUTO ES EL NUMERO DE TRIANGULOS QUE CONFORMA EL CIRCULO, TERCER ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), CUARTO ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let anilloGeometria = new THREE.RingGeometry(3, 5, 50, 1  );//1ATRIBUTO RADIO DEL ANILLO INTERIOR (DEFAULT=20), 2ATRIBUTO EL RADIO EXTERIOR (DEFAULT=50), 3ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMAN EL ANILLO, 4ATRIBUTO ES EL phiSegments(minimo 1), 5ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0) Y EL 6ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let ciliGeometria = new THREE.CylinderGeometry(3, 3, 5, 50, 50, false);//1ATRIBUTO ES EL RADIO DE LA PARTE SUPERIOS (DEFAULT=20), 2ATRIBUTO ES EL RADIO DE LA PARTE INFERIOR (DEFAULT=20), 3ATRIBUTO ES LA ALTURA DEL CILINDRO (DEFAULT=100), 4ATRIBUTO ES EL NO. DE FIGURAS QUE CONFORMA LA CARA DEL CILINDRO, 5ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMA LA ALTURA DEL CILINDRO, 
    //6ATRIBUTO INDICA SI ESTAN TAPADAS LOS EXTREMOS DEL CILINDRO (DEFAULT=FALSE ES DECIR TIENE "CARA"), 7ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), 8ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let conoGeometria = new THREE.ConeGeometry( 5, 10, 50, 50, false);//1ATRIBUTO ES EL RADIO DE LA PARTE BASE (DEFAULT=20), 2ATRIBUTO ES LA ALTURA DEL CONO (DEFAULT=100), 3ATRIBUTO ES EL NO. DE FIGURAS QUE CONFORMA LA BASE DEL CONO, 4ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMA LA ALTURA DEL CONO, 5ATRIBUTO INDICA SI ESTA TAPADA LA BASE DEL CONO (DEFAULT=FALSE ES DECIR TIENE "CARA"), 6ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), 7ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)

    let groundMaterial = new THREE.MeshPhongMaterial({ //DECLARA MATERIAL CON EL QUE SE RELLENA LA FIGURA ACEPTA PROPIEDADES (PhongMaterial)
        color: 0xfffff
    });
    let materialCircu = new THREE.MeshPhongMaterial({
        color: 0xffff00
    });
    let materialAnillo = new THREE.MeshBasicMaterial({
        color: 0xfffff,
        side: THREE.DoubleSide
    });
    let materialCili = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    let materialCono = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });

    let mesh = new THREE.Mesh(cuadroGeometria, groundMaterial);//GENERAMOS UNA REJILLA (mesh) DONDE GUARDAMOS LAS PROPIEDADES DE LA GEOMETRIA Y DEL MATERIAL DE LA FIGURA 
    let circle = new THREE.Mesh(circuloGeometria, materialCircu);
    let anillo = new THREE.Mesh(anilloGeometria, materialAnillo );
    let cilindro = new THREE.Mesh(ciliGeometria, materialCili );
    let cono = new THREE.Mesh( conoGeometria, materialCono );

    let puntoLuz = new THREE.PointLight(0x404040);//CREAMOS UNA LUZ DE TIPO PUNTO
    puntoLuz.position.y = 80;//POSICION (EN EL EJE) DE LA LUZ 

    //scene.add(mesh);//AGREGAMOS LA REGILLA (mesh) A LA ESCENA 
    //scene.add(circle);
    //scene.add(anillo);
    //scene.add(cilindro);
    scene.add(cono);
    scene.add(new THREE.AmbientLight(0x404040));//AGREGAMOS OTRA PEQUEÑA LUZ (luz de ambiente)
    scene.add(puntoLuz);//AGREGAMOS EL PUNTO LUZ A LA ESCENA
    

    //renderer.render(scene, camera);

    function loop(){//CICLA CONSTANTEMENTE LOS FRAMES QUE VAS A GENERAR
        requestAnimationFrame(loop);//PERMITE HABLAR A CADA FRAME (CILCLO DEL PROCESO QUE PERMITE VISUALIZAR LA ESCENA)
        //console.log("New frame");
        renderer.render(scene, camera);//SE PONE AQUI PARA QUE VUELVA A RENDERIZAR LA ESCENA        

    }

    loop();

})();