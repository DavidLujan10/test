(function(){
    
        //vertex shader calcular posiciones y vertices de los primitivos
        //y el frament shader calcula el color y la posicion de los primitivos
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        renderer.shadowMap.enabled = true;//DAR DE ALTA EL SERVICIO DE LAS SOBRAS PARA PODER USARLAS
        renderer.shadowMap.soft = true;//LA SOMBRA MAS SUAVE CON RESPECTO LA LUZ QUE ESTOY PROYECTANDO
        renderer.shadowMap.type = THREE.PCFShadowMap;//TIPO DE SOMBRA QUE VAMOS A USAR
    
    
        camera.position.z = 60;
        camera.position.y = 15;
        let mesh;
    
        let planeGeometry = new THREE.PlaneGeometry(200,900);
        planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
        let groundMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        let plane = new THREE.Mesh(planeGeometry, groundMaterial);
        plane.receiveShadow  = true;//QUIEN VA A RECBIR LA SOMBRA
        let loader = new THREE.TextureLoader();
    
        loader.load('public/images.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(20,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true;//ESA PRIMITIVA VA A SER LA QUE PROYECTE LA SOMBRA
            mesh.position.y = 25;
            scene.add(mesh);
        })
    
        //let geometry = new THREE.BoxGeometry(10,10,10,10);
    
       // let groundMaterial = new THREE.MeshPhongMaterial({
           // color: 0xffffff
        //});
    
        //let mesh = new THREE.Mesh(geometry, groundMaterial);
    
        let pointLight = new THREE.PointLight(0x606060);//LO HACE UN POCO MAS BRILLANTE
    
        pointLight.position.y = 60;
        pointLight.position.z = 20;
    
        pointLight.castShadow = true;//PARA QUE LA LUZ(PUNTUAL) PROYECTE LA SOMBRA
    
        scene.background = new THREE.Color(0xeeeeee);
        scene.add(new THREE.AmbientLight(0x404040));
        scene.add(plane);
        scene.add(pointLight);
    
        let controls = new THREE.OrbitControls(camera, renderer.domElement);//ESTO ES PARA PODER MOVER LA CAMARA POR LA ESCENA
    
    
        function loop(){
            requestAnimationFrame(loop);
            mesh.rotation.x += 0.01;
            renderer.render(scene, camera);
        }
    
        loop();
    
    })();