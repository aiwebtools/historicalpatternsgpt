
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

const ThreeDPyramid = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth * 0.3, window.innerHeight * 0.3);
    renderer.setClearColor(0x000000, 0);
    
    if (mountRef.current.childElementCount === 0) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create pyramid geometry
    const pyramidGeometry = new THREE.ConeGeometry(2, 3, 4);
    const pyramidMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xD4AF37,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0xD4AF37,
      emissiveIntensity: 0.2,
    });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    
    // Create eye geometry
    const eyeGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const eyeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFFFFFF,
      emissive: 0x1EAEDB,
      emissiveIntensity: 0.5
    });
    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye.position.set(0, 1, 0);
    
    // Create eyeball geometry
    const pupilGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const pupilMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000 
    });
    const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    pupil.position.set(0, 0, 0.2);
    eye.add(pupil);
    
    // Add a point light at the eye position
    const eyeLight = new THREE.PointLight(0x1EAEDB, 2, 10);
    eyeLight.position.set(0, 1, 0);
    scene.add(eyeLight);
    
    // Add elements to scene
    scene.add(pyramid);
    scene.add(eye);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.z = 7;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      pyramid.rotation.y += 0.005;
      eye.rotation.y = -pyramid.rotation.y;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth * 0.3;
      const height = window.innerHeight * 0.3;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch (error) {
          console.error("Error removing renderer:", error);
        }
      }
    };
  }, []);
  
  return (
    <div ref={mountRef} className="w-full h-full relative">
      {/* Floating button */}
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-float">
        <a 
          href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className="bg-cyberpunk-gold hover:bg-amber-400 text-black font-bold text-xl py-4 px-10 rounded-full shadow-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] transition-all duration-300 transform hover:scale-105 min-w-[200px] tracking-wide"
          >
            TRY IT NOW
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ThreeDPyramid;
