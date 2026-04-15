import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);
  const animationRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || hasError) return;

    let mounted = true;

    try {
      // Setup
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#0E1A14');
      scene.fog = new THREE.Fog('#0E1A14', 5, 15);

      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.set(0, 2, 5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight('#F5F0E8', 0.3);
      scene.add(ambientLight);
      
      const dirLight = new THREE.DirectionalLight('#F5F0E8', 0.6);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);

      const goldLight1 = new THREE.PointLight('#D4A853', 1.5, 8);
      goldLight1.position.set(-3, 2, 0);
      scene.add(goldLight1);

      const goldLight2 = new THREE.PointLight('#D4A853', 1, 6);
      goldLight2.position.set(3, 1.5, -2);
      scene.add(goldLight2);

      // Scene group for rotation
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Terrain
      const terrainGeo = new THREE.PlaneGeometry(12, 8, 64, 64);
      const terrainPos = terrainGeo.attributes.position.array;
      for (let i = 0; i < terrainPos.length; i += 3) {
        terrainPos[i + 2] = Math.sin(terrainPos[i] * 0.5) * 0.15 + 
                            Math.cos(terrainPos[i + 1] * 0.3) * 0.1 +
                            (Math.random() - 0.5) * 0.05;
      }
      terrainGeo.computeVertexNormals();
      const terrain = new THREE.Mesh(terrainGeo, new THREE.MeshStandardMaterial({
        color: '#1A3C2B', roughness: 0.9, metalness: 0.1,
      }));
      terrain.rotation.x = -Math.PI / 2;
      terrain.position.y = -1.1;
      mainGroup.add(terrain);

      // Wireframe overlay
      const wireGeo = new THREE.PlaneGeometry(12, 8, 32, 32);
      const wirePos = wireGeo.attributes.position.array;
      for (let i = 0; i < wirePos.length; i += 3) {
        wirePos[i + 2] = Math.sin(wirePos[i] * 0.5) * 0.15 + Math.cos(wirePos[i + 1] * 0.3) * 0.1;
      }
      wireGeo.computeVertexNormals();
      const wireframe = new THREE.Mesh(wireGeo, new THREE.MeshStandardMaterial({
        color: '#D4A853', wireframe: true, transparent: true, opacity: 0.08,
      }));
      wireframe.rotation.x = -Math.PI / 2;
      wireframe.position.y = -1.08;
      mainGroup.add(wireframe);

      // Crop rows
      const cropGroup = new THREE.Group();
      cropGroup.position.y = -1;
      mainGroup.add(cropGroup);
      
      const cropData = [];
      const colors = ['#1A3C2B', '#2D6B4A', '#1F4A35'];
      for (let x = -4; x <= 4; x += 0.7) {
        for (let z = -3; z <= 3; z += 0.9) {
          const height = 0.3 + Math.random() * 0.6;
          const geo = new THREE.CylinderGeometry(0.02, 0.04, height, 6);
          const mat = new THREE.MeshStandardMaterial({ 
            color: colors[Math.floor(Math.random() * colors.length)], roughness: 0.8 
          });
          const crop = new THREE.Mesh(geo, mat);
          crop.position.set(x, height / 2, z);
          cropGroup.add(crop);
          cropData.push({ mesh: crop, offset: Math.random() * Math.PI * 2 });
        }
      }

      // Floating particles (instanced)
      const particleCount = 120;
      const particleGeo = new THREE.SphereGeometry(0.02, 6, 6);
      const particleMat = new THREE.MeshStandardMaterial({
        color: '#D4A853', emissive: '#D4A853', emissiveIntensity: 0.5,
        transparent: true, opacity: 0.6,
      });
      const particles = new THREE.InstancedMesh(particleGeo, particleMat, particleCount);
      mainGroup.add(particles);
      
      const particleData = [];
      const dummy = new THREE.Object3D();
      for (let i = 0; i < particleCount; i++) {
        particleData.push({
          x: (Math.random() - 0.5) * 10,
          y: Math.random() * 3 - 0.5,
          z: (Math.random() - 0.5) * 8,
          speed: 0.2 + Math.random() * 0.5,
          offset: Math.random() * Math.PI * 2,
        });
      }

      // Holographic markers
      const markerPositions = [
        [-2.5, 0.5, -1], [2, 0.7, -0.5], [-1, 0.8, 1.5],
        [3, 0.4, 1], [-3, 0.6, 0.5], [0.5, 0.9, -2],
      ];
      const markerGroup = new THREE.Group();
      mainGroup.add(markerGroup);
      
      markerPositions.forEach((pos) => {
        const octGeo = new THREE.OctahedronGeometry(0.08, 0);
        const octMat = new THREE.MeshStandardMaterial({
          color: '#D4A853', emissive: '#D4A853', emissiveIntensity: 0.5,
          transparent: true, opacity: 0.8,
        });
        const marker = new THREE.Mesh(octGeo, octMat);
        marker.position.set(pos[0], pos[1], pos[2]);
        markerGroup.add(marker);

        const stemGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.2, 4);
        const stemMat = new THREE.MeshStandardMaterial({ color: '#D4A853', transparent: true, opacity: 0.4 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(pos[0], pos[1] - 0.15, pos[2]);
        markerGroup.add(stem);
      });

      // Animation
      const clock = new THREE.Clock();
      
      const animate = () => {
        if (!mounted) return;
        animationRef.current = requestAnimationFrame(animate);
        
        const t = clock.getElapsedTime();
        const delta = clock.getDelta();

        // Mouse-linked rotation
        mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, mousePos.current.x * 0.15, 0.02);
        mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, mousePos.current.y * 0.05 - 0.3, 0.02);

        // Crop wind animation
        cropData.forEach((c) => {
          c.mesh.rotation.x = Math.sin(t * 1.2 + c.offset) * 0.05;
          c.mesh.rotation.z = Math.cos(t * 0.8 + c.offset) * 0.025;
        });

        // Particle animation
        for (let i = 0; i < particleCount; i++) {
          const p = particleData[i];
          dummy.position.set(p.x, p.y + Math.sin(t * p.speed + p.offset) * 0.2, p.z);
          const s = 0.8 + Math.sin(t * 2 + p.offset) * 0.3;
          dummy.scale.setScalar(s);
          dummy.updateMatrix();
          particles.setMatrixAt(i, dummy.matrix);
        }
        particles.instanceMatrix.needsUpdate = true;

        // Marker floating
        const markers = markerGroup.children;
        for (let i = 0; i < markers.length; i += 2) {
          const baseY = markerPositions[i / 2][1];
          markers[i].position.y = baseY + Math.sin(t * 0.8 + i) * 0.1;
          markers[i].rotation.y = t * 0.5;
          if (markers[i + 1]) {
            markers[i + 1].position.y = baseY - 0.15 + Math.sin(t * 0.8 + i) * 0.1;
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      // Resize handler
      const handleResize = () => {
        if (!container || !mounted) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        mounted = false;
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.warn('3D scene failed, falling back:', err);
      setHasError(true);
    }
  }, [hasError]);

  if (hasError) {
    return (
      <div
        data-testid="hero-3d-fallback"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://static.prod-images.emergentagent.com/jobs/88f8a4a7-6409-4770-9e5d-8a88e41c9388/images/d4598409c375f447ac69aa8c21fba64ea7a1f9ae218a874e7fe9f3c4d5f71d58.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0E1A14',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      data-testid="hero-3d-scene"
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
    />
  );
}
