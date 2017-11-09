(function(){//FLOUSURE: FUNCION ANONIMA QUE SE LLAMA A SI MISMA

    let scene = new THREE.Scene();//ASI SE CREA LA ESCENA (ES COMO UN CANVAS LA PERSPECTIVA DEL CANVAS)
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);//PRIMER DATO(FOV):ENFOQUE QUE TIENE LA CAMARA, SEGUNDO DATO(ASPECT): ANCHO Y ALTO DE LA CAMARA (COMO SE VA A VER LA CAMARA), TECER DATO CERCA(NEAR) Y CUARTO DATO LEJOS(FAR)
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);//TAMAÑO AL RENDERER OSEA ANCHO Y ALTO DE LA ESCENA Y RENDER ES DIBUJAR LO QUE SE ESTA CREANDO
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    camera.position.z = 100;//PROFUNDIDAD CON LA QUE SE VIZUALISARA LA CAMARA
    camera.position.y = 1;//ALTURA DE LA CAMARA
    //camera.position.x = 0;//LARGO DE LA CAMARA

    let mesh1;
    let mesh2;
    let mesh3;
    let mesh4;
    let mesh5;
    
    let loader = new THREE.TextureLoader();
    

    loader.load('public/map1.jpg', function(texture){
        let esfera = new THREE.SphereGeometry(12, 100, 100);//1ATRIBUTO ES EL RADIO, 2ATRIBUTO CANTIDAD DE FIGURAS EN EL ANCHO (DE SEGMENTOS), 3ATRIBUTO Y LARGO DE SEGMENTOS
        let material = new THREE.MeshBasicMaterial({
            map: texture
            //color: 0xffff00
        });

        mesh1 = new THREE.Mesh(esfera, material);
        console.log(mesh1);
        mesh1.position.y = 35;
        scene.add(mesh1);

    });

    loader.load('public/mercurio2.jpg', function(texture){
        let esfera2 = new THREE.SphereGeometry(5, 100, 100);
        let material2 = new THREE.MeshBasicMaterial({
            map: texture
            //color: 0xffff00
        });
        
        mesh2 = new THREE.Mesh(esfera2, material2);
        mesh2.position.y = -8;
        scene.add(mesh2);

    });

    loader.load('public/venus.jpg', function(texture){
        let esfera3 = new THREE.SphereGeometry(10, 100, 100);
        let material3 = new THREE.MeshBasicMaterial({
            map: texture
            //color: 0xffff00
        });
        
        mesh3 = new THREE.Mesh(esfera3, material3);
        mesh3.position.y = 10;
        scene.add(mesh3);

    });

    loader.load('public/marte.jpg', function(texture){
        let esfera4 = new THREE.SphereGeometry(8, 100, 100);
        let material4 = new THREE.MeshBasicMaterial({
            map: texture
            //color: 0xffff00
        });
        
        mesh4 = new THREE.Mesh(esfera4, material4);
        mesh4.position.y = 60;
        scene.add(mesh4);

    });

    loader.load('public/sun.jpg', function(texture){
        let esfera5 = new THREE.SphereGeometry(20, 100, 100);
        let material5 = new THREE.MeshBasicMaterial({
            map: texture
            //color: 0xffff00
        });
        
        mesh5 = new THREE.Mesh(esfera5, material5);
        mesh5.position.y = -35;
        scene.add(mesh5);

    });



    /*let cuadroGeometria = new THREE.BoxGeometry(2, 2, 2, 2);//SE DEFINE EL TIMPO DE FIGURA GEOMETRIA (EN ESTE CASA UN CUBO)
    let circuloGeometria = new THREE.CircleGeometry(2, 50);//PRIMER ATRIBUTO ES EL RADIO (DEFAULT=50), SEGUNDO ATRIBUTO ES EL NUMERO DE TRIANGULOS QUE CONFORMA EL CIRCULO, TERCER ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), CUARTO ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let anilloGeometria = new THREE.RingGeometry(3, 5, 50, 1  );//1ATRIBUTO RADIO DEL ANILLO INTERIOR (DEFAULT=20), 2ATRIBUTO EL RADIO EXTERIOR (DEFAULT=50), 3ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMAN EL ANILLO, 4ATRIBUTO ES EL phiSegments(minimo 1), 5ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0) Y EL 6ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let ciliGeometria = new THREE.CylinderGeometry(3, 3, 5, 50, 50, false);//1ATRIBUTO ES EL RADIO DE LA PARTE SUPERIOS (DEFAULT=20), 2ATRIBUTO ES EL RADIO DE LA PARTE INFERIOR (DEFAULT=20), 3ATRIBUTO ES LA ALTURA DEL CILINDRO (DEFAULT=100), 4ATRIBUTO ES EL NO. DE FIGURAS QUE CONFORMA LA CARA DEL CILINDRO, 5ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMA LA ALTURA DEL CILINDRO, 
    //6ATRIBUTO INDICA SI ESTAN TAPADAS LOS EXTREMOS DEL CILINDRO (DEFAULT=FALSE ES DECIR TIENE "CARA"), 7ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), 8ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)
    let conoGeometria = new THREE.ConeGeometry( 5, 10, 50, 50, false);//1ATRIBUTO ES EL RADIO DE LA PARTE BASE (DEFAULT=20), 2ATRIBUTO ES LA ALTURA DEL CONO (DEFAULT=100), 3ATRIBUTO ES EL NO. DE FIGURAS QUE CONFORMA LA BASE DEL CONO, 4ATRIBUTO ES EL NUMERO DE FIGURAS QUE CONFORMA LA ALTURA DEL CONO, 5ATRIBUTO INDICA SI ESTA TAPADA LA BASE DEL CONO (DEFAULT=FALSE ES DECIR TIENE "CARA"), 6ATRIBUTO ES EL ANGULO INICIAL (DEFAULT=0), 7ATRIBUTO ES EL ANGULO CENTRAL (DEFAULT=2*Pi)


    let groundMaterial = new THREE.MeshPhongMaterial({ //DECLARA MATERIAL CON EL QUE SE RELLENA LA FIGURA ACEPTA PROPIEDADES (PhongMaterial)
        color: 0xffffff
    });
    let materialCircu = new THREE.MeshPhongMaterial({
        color: 0xfffff
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
    mesh.position.x = 20;
    let circle = new THREE.Mesh(circuloGeometria, materialCircu);
    circle.position.x = 10;
    let anillo = new THREE.Mesh(anilloGeometria, materialAnillo );
    anillo.position.x = -20;
    let cilindro = new THREE.Mesh(ciliGeometria, materialCili );
    cilindro.position.x = -10;
    let cono = new THREE.Mesh( conoGeometria, materialCono );
    cono.position.y = 5;
    //cono.position.z = 5;*/

    let puntoLuz = new THREE.PointLight(0x404040);//CREAMOS UNA LUZ DE TIPO PUNTO
    puntoLuz.position.y = 80;//POSICION (EN EL EJE) DE LA LUZ 
    //puntoLuz.position.z = 20;//POSICION (EN EL EJE) DE LA LUZ 


    /*scene.add(mesh);//AGREGAMOS LA REGILLA (mesh) A LA ESCENA 
    scene.add(circle);
    scene.add(anillo);
    scene.add(cilindro);
    scene.add(cono);
    scene.background = new THREE.Color(0xeeeeee);*/
    scene.add(new THREE.AmbientLight(0x404040));//AGREGAMOS OTRA PEQUEÑA LUZ (luz de ambiente)
    scene.add(puntoLuz);//AGREGAMOS EL PUNTO LUZ A LA ESCENA
    

    //renderer.render(scene, camera);

    function loop(){//CICLA CONSTANTEMENTE LOS FRAMES QUE VAS A GENERAR
        requestAnimationFrame(loop);//PERMITE HABLAR A CADA FRAME (CILCLO DEL PROCESO QUE PERMITE VISUALIZAR LA ESCENA)
        //console.log("New frame");
        /*mesh.rotation.y += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Y
        circle.rotation.y += 0.1;//PARA ROTAR LA FIGURA EN EL EJE Y
        anillo.rotation.y += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Y
        cilindro.rotation.y += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Y
        cono.rotation.y += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Y
        mesh.rotation.z += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Z
        circle.rotation.z += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Z
        anillo.rotation.z += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Z
        cilindro.rotation.z += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Z
        cono.rotation.z += 0.01;//PARA ROTAR LA FIGURA EN EL EJE Z
        mesh.rotation.X += 0.01;//PARA ROTAR LA FIGURA EN EL EJE X
        anillo.rotation.X += 0.01;//PARA ROTAR LA FIGURA EN EL EJE X
        circle.rotation.X += 0.01;//PARA ROTAR LA FIGURA EN EL EJE X
        cilindro.rotation.X += 0.01;//PARA ROTAR LA FIGURA EN EL EJE X
        cono.rotation.X += 0.01;//PARA ROTAR LA FIGURA EN EL EJE X*/
        
        //SISTEMA SOLAR
        mesh1.rotation.y += 0.01;
        mesh2.rotation.y += 0.01;
        mesh3.rotation.y += 0.01;
        mesh4.rotation.y += 0.01;
        mesh5.rotation.y += 0.01;
        renderer.render(scene, camera);//SE PONE AQUI PARA QUE VUELVA A RENDERIZAR LA ESCENA 

    }

    loop();

})();