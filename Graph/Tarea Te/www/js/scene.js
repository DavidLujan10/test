(function(){//FLOUSURE: FUNCION ANONIMA QUE SE LLAMA A SI MISMA
    
        let scene = new THREE.Scene();//ASI SE CREA LA ESCENA (ES COMO UN CANVAS LA PERSPECTIVA DEL CANVAS)
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(100, aspectRatio, 0.1, 100);//PRIMER DATO(FOV):ENFOQUE QUE TIENE LA CAMARA, SEGUNDO DATO(ASPECT): ANCHO Y ALTO DE LA CAMARA (COMO SE VA A VER LA CAMARA), TECER DATO CERCA(NEAR) Y CUARTO DATO LEJOS(FAR)
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);//TAMAÑO AL RENDERER OSEA ANCHO Y ALTO DE LA ESCENA Y RENDER ES DIBUJAR LO QUE SE ESTA CREANDO
        document.body.appendChild(renderer.domElement);
        var controls = new THREE.TrackballControls(camera);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.soft = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
    
        camera.position.z = 100;//PROFUNDIDAD CON LA QUE SE VIZUALISARA LA CAMARA
        camera.position.y = 1;//ALTURA DE LA CAMARA
        //camera.position.x = 0;//LARGO DE LA CAMARA

    
        let tetera = new THREE.OctahedronGeometry(30, 3);//1ATRIBUTO ES EL RADIO, 2ATRIBUTO CANTIDAD DE FIGURAS CON LAS QUE SE FORMA EL OCTAEDRO(DE SEGMENTOS)
        let groundMaterial = new THREE.MeshPhongMaterial({ //DECLARA MATERIAL CON EL QUE SE RELLENA LA FIGURA ACEPTA PROPIEDADES (PhongMaterial)
            color: 0xffff0
        });

        let mango = new THREE.TorusGeometry(15, 2, 120, 200, 3.5);
        let materialMango = new THREE.MeshPhongMaterial({ 
            color: 0xfffff0 
        });

        let platoTetera = new THREE.ConeGeometry(40, 3, 61, 64, false, 6, 6.3);
        let materialPlato = new THREE.MeshPhongMaterial({ 
            color: 0xfffff00 
        });
        
        let Tapa = new THREE.SphereGeometry(5, 100, 100);
        let material2 = new THREE.MeshPhongMaterial({
            color: 0xffff00
        });

        let Taza1 = new THREE.SphereBufferGeometry(15, 40, 40, 6, 6.3, 1, 4);
        let materialTaza1 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff00 
        });

        let platoTaza1 = new THREE.ConeGeometry(20, 3, 61, 64, false, 6, 6.3);
        let materialPlatoTaza1 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff00 
        });

        let mangoTaza1 = new THREE.TorusGeometry(7, 1, 30, 50, 3.5);
        let materialMangoTaza1 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff00 
        });

        let Taza2 = new THREE.SphereBufferGeometry(15, 40, 40, 6, 6.3, 1, 4);
        let materialTaza2 = new THREE.MeshPhongMaterial({ 
            color: 0xffff0 
        });

        let platoTaza2 = new THREE.ConeGeometry(20, 3, 61, 64, false, 6, 6.3);
        let materialPlatoTaza2 = new THREE.MeshPhongMaterial({ 
            color: 0xffff0 
        });

        let mangoTaza2 = new THREE.TorusGeometry(7, 1, 30, 50, 3.5);
        let materialMangoTaza2 = new THREE.MeshPhongMaterial({ 
            color: 0xffff0 
        });

        let Taza3 = new THREE.SphereBufferGeometry(15, 40, 40, 6, 6.3, 1, 4);
        let materialTaza3 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff0 
        });

        let platoTaza3 = new THREE.ConeGeometry(20, 3, 61, 64, false, 6, 6.3);
        let materialPlatoTaza3 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff0 
        });

        let mangoTaza3 = new THREE.TorusGeometry(7, 1, 30, 50, 3.5);
        let materialMangoTaza3 = new THREE.MeshPhongMaterial({ 
            color: 0xfffff0 
        });

        let Taza4 = new THREE.SphereBufferGeometry(15, 40, 40, 6, 6.3, 1, 4);
        let materialTaza4 = new THREE.MeshPhongMaterial({ 
            color: 0XFF00FF 
        });

        let platoTaza4 = new THREE.ConeGeometry(20, 3, 61, 64, false, 6, 6.3);
        let materialPlatoTaza4 = new THREE.MeshPhongMaterial({ 
            color: 0XFF00FF 
        });

        let mangoTaza4 = new THREE.TorusGeometry(7, 1, 30, 50, 3.5);
        let materialMangoTaza4 = new THREE.MeshPhongMaterial({ 
            color: 0XFF00FF 
        });


        let mesh = new THREE.Mesh(tetera, groundMaterial);//GENERAMOS UNA REJILLA (mesh) DONDE GUARDAMOS LAS PROPIEDADES DE LA GEOMETRIA Y DEL MATERIAL DE LA FIGURA 
        mesh.position.x = 0;//POSICION DE LA TETERA
        mesh.position.y = 0;//POSICION DE LA TETERA
        //mesh.rotation.set(0, 0, 1.4); //ROTACION DE LA TETERA

        let meshMango = new THREE.Mesh(mango, materialMango);
        meshMango.rotation.set(0, 0, 1.4); //ROTACION DEL MANGO
        meshMango.position.x = -25;//POSICION DEL MANGO

        let meshplatoTetera = new THREE.Mesh(platoTetera, materialPlato);
        meshplatoTetera.position.x =  0; //POSICION DEL PLATO
        meshplatoTetera.position.y =  -30; //POSICION DEL PLATO

        let meshTapa = new THREE.Mesh(Tapa, material2);//GENERAMOS UNA REJILLA (mesh) DONDE GUARDAMOS LAS PROPIEDADES DE LA GEOMETRIA Y DEL MATERIAL DE LA FIGURA 
        meshTapa.position.x = 0;//POSICION DE LA TAPA
        meshTapa.position.y = 30;//POSICION DE LA TAPA

        let meshTaza1 = new THREE.Mesh(Taza1, materialTaza1);
        meshTaza1.position.x = -100;//POSICION DE LA TAZA
        meshTaza1.position.y = 0;//POSICION DE LA TAZA

        let meshplatoTaza1 = new THREE.Mesh(platoTaza1, materialPlatoTaza1);
        meshplatoTaza1.position.x =  -100; //POSICION DEL PLATO
        meshplatoTaza1.position.y =  -15; //POSICION DEL PLATO
        
        let meshMangoTaza1 = new THREE.Mesh(mangoTaza1, materialMangoTaza1);
        meshMangoTaza1.rotation.set(0, 0, 1.4); //ROTACION DEL MANGO
        meshMangoTaza1.position.x = -113;//POSICION DEL MANGO
        meshMangoTaza1.position.y = -1;//POSICION DEL MANGO
        
        let meshTaza2 = new THREE.Mesh(Taza2, materialTaza2);
        meshTaza2.position.x = -150;//POSICION DE LA TAZA
        meshTaza2.position.y = 0;//POSICION DE LA TAZA

        let meshplatoTaza2 = new THREE.Mesh(platoTaza2, materialPlatoTaza2);
        meshplatoTaza2.position.x =  -150; //POSICION DEL PLATO
        meshplatoTaza2.position.y =  -15; //POSICION DEL PLATO
        
        let meshMangoTaza2 = new THREE.Mesh(mangoTaza2, materialMangoTaza2);
        meshMangoTaza2.rotation.set(0, 0, 1.4); //ROTACION DEL MANGO
        meshMangoTaza2.position.x = -163;//POSICION DEL MANGO
        meshMangoTaza2.position.y = -1;//POSICION DEL MANGO
        
        let meshTaza3 = new THREE.Mesh(Taza3, materialTaza3);
        meshTaza3.position.x = 100;//POSICION DE LA TAZA
        meshTaza3.position.y = 0;//POSICION DE LA TAZA

        let meshplatoTaza3 = new THREE.Mesh(platoTaza3, materialPlatoTaza3);
        meshplatoTaza3.position.x =  100; //POSICION DEL PLATO
        meshplatoTaza3.position.y =  -15; //POSICION DEL PLATO
        
        let meshMangoTaza3 = new THREE.Mesh(mangoTaza3, materialMangoTaza3);
        meshMangoTaza3.rotation.set(0, 0, 1.4); //ROTACION DEL MANGO
        meshMangoTaza3.position.x = 85;//POSICION DEL MANGO
        meshMangoTaza3.position.y = -1;//POSICION DEL MANGO
        
        let meshTaza4 = new THREE.Mesh(Taza4, materialTaza4);
        meshTaza4.position.x = 160;//POSICION DE LA TAZA
        meshTaza4.position.y = 0;//POSICION DE LA TAZA

        let meshplatoTaza4 = new THREE.Mesh(platoTaza4, materialPlatoTaza4);
        meshplatoTaza4.position.x =  160; //POSICION DEL PLATO
        meshplatoTaza4.position.y =  -15; //POSICION DEL PLATO
        
        let meshMangoTaza4 = new THREE.Mesh(mangoTaza4, materialMangoTaza4);
        meshMangoTaza4.rotation.set(0, 0, 1.4); //ROTACION DEL MANGO
        meshMangoTaza4.position.x = 145;//POSICION DEL MANGO
        meshMangoTaza4.position.y = -1;//POSICION DEL MANGO
       
    
        let puntoLuz = new THREE.PointLight(0x404040);//CREAMOS UNA LUZ DE TIPO PUNTO
        puntoLuz.position.y = 180;//POSICION (EN EL EJE) DE LA LUZ 
        puntoLuz.position.z = 20;//POSICION (EN EL EJE) DE LA LUZ 

        let puntoLuz2 = new THREE.PointLight(0x404040);
        puntoLuz2.position.x = 100;
        puntoLuz2.position.y = 10;
        puntoLuz2.position.z = 20;
    
    
        scene.add(mesh);//AGREGAMOS LA REGILLA (mesh) A LA ESCENA 
        scene.add(meshMango);
        scene.add(meshplatoTetera);
        scene.add(meshTapa);
        scene.add(meshTaza1);
        scene.add(meshplatoTaza1);
        scene.add(meshMangoTaza1);
        scene.add(meshTaza2);
        scene.add(meshplatoTaza2);
        scene.add(meshMangoTaza2);
        scene.add(meshTaza3);
        scene.add(meshplatoTaza3);
        scene.add(meshMangoTaza3);
        scene.add(meshTaza4);
        scene.add(meshplatoTaza4);
        scene.add(meshMangoTaza4);
        //scene.background = new THREE.Color(0xeeeeee);
        scene.add(new THREE.AmbientLight(0x404040));//AGREGAMOS OTRA PEQUEÑA LUZ (luz de ambiente)
        scene.add(puntoLuz);//AGREGAMOS EL PUNTO LUZ A LA ESCENA
        scene.add(puntoLuz2);

    
        function loop(){//CICLA CONSTANTEMENTE LOS FRAMES QUE VAS A GENERAR
            requestAnimationFrame(loop);//PERMITE HABLAR A CADA FRAME (CILCLO DEL PROCESO QUE PERMITE VISUALIZAR LA ESCENA)
            //console.log("New frame");
            controls.update();
            renderer.render(scene, camera);//SE PONE AQUI PARA QUE VUELVA A RENDERIZAR LA ESCENA 
    
        }
    
        loop();
    
    })();