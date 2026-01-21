import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const GeometriaEsferica = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const globeGroupRef = useRef(null);
  const cameraRef = useRef(null);
  const [sceneInitialized, setSceneInitialized] = useState(false);

  // ESTADOS - declarar PRIMERO
  const [puntos, setPuntos] = useState([
    { nombre: 'Ciudad de México', lat: 19.4326, lon: -99.1332, color: '#EF4444' },
    { nombre: 'Madrid', lat: 40.4168, lon: -3.7038, color: '#3B82F6' }
  ]);
  const [mediciones, setMediciones] = useState([]);
  const [mostrarGeodesia, setMostrarGeodesia] = useState(true);
  const [rotacionAutomatica, setRotacionAutomatica] = useState(true);

  // REF para rotación automática - declarar DESPUÉS del estado
  const rotacionAutomaticaRef = useRef(rotacionAutomatica);

  // Función para convertir lat/lon a coordenadas 3D en la esfera
  const latLonToVector3 = useCallback((lat, lon, radius = 5) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  }, []);

  // Calcular distancia esférica (fórmula del haversine)
  const calcularDistanciaEsferica = useCallback((lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }, []);

  // Calcular distancia euclidiana (línea recta a través de la Tierra)
  const calcularDistanciaEuclidiana = useCallback((lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const p1 = latLonToVector3(lat1, lon1, R);
    const p2 = latLonToVector3(lat2, lon2, R);
    return p1.distanceTo(p2);
  }, [latLonToVector3]);

  // Función para limpiar elementos anteriores
  const limpiarElementosAnteriores = useCallback(() => {
    if (!globeGroupRef.current) return;
    const elementosAEliminar = [];
    globeGroupRef.current.traverse((child) => {
      if (child.userData && (child.userData.tipo === 'punto' || child.userData.tipo === 'geodesica')) {
        elementosAEliminar.push(child);
      }
    });
    elementosAEliminar.forEach(elemento => globeGroupRef.current.remove(elemento));
  }, []);

  // Función para agregar puntos a la escena
  const agregarPuntos = useCallback(() => {
    if (!globeGroupRef.current || !sceneInitialized) return;

    limpiarElementosAnteriores();

    // Agregar nuevos puntos
    puntos.forEach(punto => {
      const posicion = latLonToVector3(punto.lat, punto.lon, 5.15);
      const geometria = new THREE.SphereGeometry(0.12, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: punto.color,
        opacity: 0.9,
        transparent: true
      });
      const esfera = new THREE.Mesh(geometria, material);
      esfera.position.copy(posicion);
      esfera.userData = { tipo: 'punto', nombre: punto.nombre };
      globeGroupRef.current.add(esfera);

      // Agregar etiqueta del punto
      const labelGeometry = new THREE.SphereGeometry(0.04, 8, 8);
      const labelMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.8,
        transparent: true
      });
      const label = new THREE.Mesh(labelGeometry, labelMaterial);
      const labelPos = latLonToVector3(punto.lat, punto.lon, 5.3);
      label.position.copy(labelPos);
      label.userData = { tipo: 'punto' };
      globeGroupRef.current.add(label);
    });
  }, [puntos, latLonToVector3, limpiarElementosAnteriores, sceneInitialized]);

  // Función para agregar geodésica
  const agregarGeodesica = useCallback(() => {
    if (!globeGroupRef.current || !sceneInitialized || puntos.length !== 2) return;

    const p1 = latLonToVector3(puntos[0].lat, puntos[0].lon, 5);
    const p2 = latLonToVector3(puntos[1].lat, puntos[1].lon, 5);

    // Crear geodésica usando interpolación esférica mejorada
    const angle = p1.angleTo(p2);
    const divisions = Math.max(60, Math.floor(angle * 40));

    const points = [];
    for (let i = 0; i <= divisions; i++) {
      const t = i / divisions;
      const interpolated = new THREE.Vector3();

      // Interpolación esférica (SLERP) manual
      const omega = Math.acos(Math.max(-1, Math.min(1, p1.dot(p2) / (p1.length() * p2.length()))));
      if (Math.abs(omega) < 0.001) {
        interpolated.copy(p1);
      } else {
        const sinOmega = Math.sin(omega);
        const a = Math.sin((1 - t) * omega) / sinOmega;
        const b = Math.sin(t * omega) / sinOmega;
        interpolated.x = a * p1.x + b * p2.x;
        interpolated.y = a * p1.y + b * p2.y;
        interpolated.z = a * p1.z + b * p2.z;
      }

      interpolated.normalize().multiplyScalar(5.12);
      points.push(interpolated);
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x10b981,
      linewidth: 3,
      opacity: 0.95,
      transparent: true
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { tipo: 'geodesica' };
    globeGroupRef.current.add(line);

    // Agregar puntos intermedios para mejor visualización
    const numIntermediatePoints = 5;
    for (let i = 1; i < numIntermediatePoints; i++) {
      const t = i / numIntermediatePoints;
      const omega = Math.acos(Math.max(-1, Math.min(1, p1.dot(p2) / (p1.length() * p2.length()))));
      const interpolated = new THREE.Vector3();

      if (Math.abs(omega) < 0.001) {
        interpolated.copy(p1);
      } else {
        const sinOmega = Math.sin(omega);
        const a = Math.sin((1 - t) * omega) / sinOmega;
        const b = Math.sin(t * omega) / sinOmega;
        interpolated.x = a * p1.x + b * p2.x;
        interpolated.y = a * p1.y + b * p2.y;
        interpolated.z = a * p1.z + b * p2.z;
      }

      interpolated.normalize().multiplyScalar(5.08);

      const dotGeometry = new THREE.SphereGeometry(0.03, 8, 8);
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        opacity: 0.7,
        transparent: true
      });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.copy(interpolated);
      dot.userData = { tipo: 'geodesica' };
      globeGroupRef.current.add(dot);
    }
  }, [puntos, latLonToVector3, sceneInitialized]);

  // Función para agregar marcadores visuales (sin texto)
  const agregarEtiquetas = useCallback(() => {
    if (!globeGroupRef.current || !sceneInitialized) return;

    // Eliminar etiquetas anteriores
    const etiquetasAEliminar = [];
    globeGroupRef.current.traverse((child) => {
      if (child.userData && child.userData.tipo === 'etiqueta') {
        etiquetasAEliminar.push(child);
      }
    });
    etiquetasAEliminar.forEach(etiqueta => globeGroupRef.current.remove(etiqueta));

    // Agregar marcadores visuales para puntos cardinales
    const cardinales = [
      { lat: 90, lon: 0, color: 0x00ff00 },   // Polo Norte
      { lat: -90, lon: 0, color: 0x00ff00 },  // Polo Sur
      { lat: 0, lon: 0, color: 0xffff00 },    // Ecuador/Greenwich
      { lat: 0, lon: 90, color: 0xffff00 },   // Ecuador/90°E
      { lat: 0, lon: -90, color: 0xffff00 },  // Ecuador/90°O
      { lat: 0, lon: 180, color: 0xffff00 },  // Ecuador/180°
    ];

    // Crear marcadores visuales
    cardinales.forEach(({ lat, lon, color }) => {
      const pos = latLonToVector3(lat, lon, 5.2);
      const markerGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const markerMaterial = new THREE.MeshBasicMaterial({ color });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(pos);
      marker.userData = { tipo: 'etiqueta' };
      globeGroupRef.current.add(marker);
    });
  }, [latLonToVector3, sceneInitialized]);

  // Efecto para mantener el ref sincronizado
  useEffect(() => {
    rotacionAutomaticaRef.current = rotacionAutomatica;
  }, [rotacionAutomatica]);

  // Inicializar Three.js - solo una vez al montar el componente
  useEffect(() => {
    const container = mountRef.current;
    if (!container || rendererRef.current) return;

    // Escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(darkMode ? 0x1a1a1a : 0xf0f0f0);
    sceneRef.current = scene;

    // Cámara
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;

    // Montaje seguro
    if (!container.children.length) {
      container.appendChild(renderer.domElement);
    }

    // Luz
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Grupo que contendrá todos los elementos del globo
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Esfera (Tierra)
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      wireframe: false,
      opacity: 0.8,
      transparent: true
    });
    const sphere = new THREE.Mesh(geometry, material);
    globeGroup.add(sphere);

    // Líneas de latitud y longitud
    const lineMaterial = new THREE.LineBasicMaterial({
      color: darkMode ? 0x4b5563 : 0x9ca3af,
      opacity: 0.3,
      transparent: true
    });

    // Meridianos (longitud)
    for (let i = 0; i < 360; i += 30) {
      const curve = new THREE.Curve();
      curve.getPoints = function (divisions) {
        const points = [];
        for (let j = 0; j <= divisions; j++) {
          const lat = -90 + (180 * j / divisions);
          points.push(latLonToVector3(lat, i, 5.01));
        }
        return points;
      };
      const points = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      globeGroup.add(line);
    }

    // Paralelos (latitud)
    for (let i = -60; i <= 60; i += 30) {
      const curve = new THREE.Curve();
      curve.getPoints = function (divisions) {
        const points = [];
        for (let j = 0; j <= divisions; j++) {
          const lon = -180 + (360 * j / divisions);
          points.push(latLonToVector3(i, lon, 5.01));
        }
        return points;
      };
      const points = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      globeGroup.add(line);
    }

    // Ecuador (más prominente)
    const ecuadorMaterial = new THREE.LineBasicMaterial({
      color: 0xef4444,
      linewidth: 2
    });
    const ecuadorCurve = new THREE.Curve();
    ecuadorCurve.getPoints = function (divisions) {
      const points = [];
      for (let j = 0; j <= divisions; j++) {
        const lon = -180 + (360 * j / divisions);
        points.push(latLonToVector3(0, lon, 5.02));
      }
      return points;
    };
    const ecuadorPoints = ecuadorCurve.getPoints(100);
    const ecuadorGeometry = new THREE.BufferGeometry().setFromPoints(ecuadorPoints);
    const ecuador = new THREE.Line(ecuadorGeometry, ecuadorMaterial);
    globeGroup.add(ecuador);

    // Meridiano de Greenwich
    const greenwichMaterial = new THREE.LineBasicMaterial({
      color: 0x4b5563,
      linewidth: 2
    });
    const greenwichCurve = new THREE.Curve();
    greenwichCurve.getPoints = function (divisions) {
      const points = [];
      for (let j = 0; j <= divisions; j++) {
        const lat = -90 + (180 * j / divisions);
        points.push(latLonToVector3(lat, 0, 5.02));
      }
      return points;
    };
    const greenwichPoints = greenwichCurve.getPoints(50);
    const greenwichGeometry = new THREE.BufferGeometry().setFromPoints(greenwichPoints);
    const greenwich = new THREE.Line(greenwichGeometry, greenwichMaterial);
    globeGroup.add(greenwich);

    // Agregar polos visuales
    const poloNorte = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    poloNorte.position.set(0, 5, 0);
    globeGroup.add(poloNorte);

    const poloSur = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    poloSur.position.set(0, -5, 0);
    globeGroup.add(poloSur);

    // Agregar marcadores en los puntos cardinales del ecuador
    const puntosCardinales = [
      { pos: [5, 0, 0], color: 0xffff00 },   // Este
      { pos: [-5, 0, 0], color: 0xffff00 },  // Oeste
      { pos: [0, 0, 5], color: 0xffff00 },   // Norte en el ecuador
      { pos: [0, 0, -5], color: 0xffff00 }   // Sur en el ecuador
    ];

    puntosCardinales.forEach(punto => {
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 16, 16),
        new THREE.MeshBasicMaterial({ color: punto.color })
      );
      marker.position.set(...punto.pos);
      globeGroup.add(marker);
    });

    // Controles de mouse y touch mejorados para móviles
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let rotationX = 0;
    let rotationY = 0;

    const getEventPos = (event) => {
      // Soporte para touch y mouse
      if (event.touches && event.touches.length > 0) {
        return { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
      return { x: event.clientX, y: event.clientY };
    };

    const handleMove = (event) => {
      event.preventDefault(); // Prevenir scroll en móviles
      if (isDragging) {
        const pos = getEventPos(event);
        const deltaX = pos.x - mouseX;
        const deltaY = pos.y - mouseY;

        rotationY += deltaX * 0.01;
        rotationX += deltaY * 0.01;

        // Limitar rotación vertical
        rotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotationX));

        if (globeGroupRef.current) {
          globeGroupRef.current.rotation.y = rotationY;
          globeGroupRef.current.rotation.x = rotationX;
        }

        mouseX = pos.x;
        mouseY = pos.y;
      }
    };

    const handleStart = (event) => {
      event.preventDefault();
      isDragging = true;
      const pos = getEventPos(event);
      mouseX = pos.x;
      mouseY = pos.y;
      renderer.domElement.style.cursor = 'grabbing';
    };

    const handleEnd = (event) => {
      event.preventDefault();
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    // Eventos mouse
    renderer.domElement.addEventListener('mousemove', handleMove);
    renderer.domElement.addEventListener('mousedown', handleStart);
    renderer.domElement.addEventListener('mouseup', handleEnd);
    renderer.domElement.addEventListener('mouseleave', handleEnd);

    // Eventos touch para móviles
    renderer.domElement.addEventListener('touchmove', handleMove, { passive: false });
    renderer.domElement.addEventListener('touchstart', handleStart, { passive: false });
    renderer.domElement.addEventListener('touchend', handleEnd, { passive: false });

    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;

        rotationY += deltaX * 0.01;
        rotationX += deltaY * 0.01;

        // Limitar rotación vertical
        rotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotationX));

        if (globeGroupRef.current) {
          globeGroupRef.current.rotation.y = rotationY;
          globeGroupRef.current.rotation.x = rotationX;
        }

        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    const handleMouseDown = (event) => {
      isDragging = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      renderer.domElement.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);

    // Resize handler mejorado
    const handleResize = () => {
      if (!container || !camera || !renderer) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Llamar resize inicialmente para asegurar tamaño correcto
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animación mejorada
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Usar el ref que siempre tiene el valor actual
      if (rotacionAutomaticaRef.current && !isDragging && globeGroupRef.current) {
        globeGroupRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };

    // Marcar como inicializado y comenzar animación
    setSceneInitialized(true);
    animate();

    // Cleanup function actualizada
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener('resize', handleResize);

      if (renderer.domElement) {
        // Remover eventos mouse
        renderer.domElement.removeEventListener('mousemove', handleMove);
        renderer.domElement.removeEventListener('mousedown', handleStart);
        renderer.domElement.removeEventListener('mouseup', handleEnd);
        renderer.domElement.removeEventListener('mouseleave', handleEnd);

        // Remover eventos touch
        renderer.domElement.removeEventListener('touchmove', handleMove);
        renderer.domElement.removeEventListener('touchstart', handleStart);
        renderer.domElement.removeEventListener('touchend', handleEnd);
      }

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      if (renderer) {
        renderer.dispose();
      }

      setSceneInitialized(false);
      rendererRef.current = null;
      sceneRef.current = null;
      globeGroupRef.current = null;
      cameraRef.current = null;
    };
  }, []); // Solo depende del montaje inicial

  // Efecto separado para actualizar colores en base al darkMode
  useEffect(() => {
    if (!sceneRef.current || !sceneInitialized) return;

    sceneRef.current.background = new THREE.Color(darkMode ? 0x1a1a1a : 0xf0f0f0);
  }, [darkMode, sceneInitialized]);

  // Efecto para actualizar puntos y geodésicas
  useEffect(() => {
    if (!sceneInitialized) return;

    agregarPuntos();

    if (mostrarGeodesia && puntos.length === 2) {
      agregarGeodesica();
    }
  }, [puntos, mostrarGeodesia, sceneInitialized, agregarPuntos, agregarGeodesica]);

  // Efecto para agregar etiquetas una vez que la escena esté lista
  useEffect(() => {
    if (sceneInitialized) {
      setTimeout(() => {
        agregarEtiquetas();
      }, 500); // Pequeño delay para asegurar que todo esté listo
    }
  }, [sceneInitialized, agregarEtiquetas]);

  const agregarMedicion = () => {
    if (puntos.length !== 2) return;

    const distEsferica = calcularDistanciaEsferica(
      puntos[0].lat, puntos[0].lon,
      puntos[1].lat, puntos[1].lon
    );

    const distEuclidiana = calcularDistanciaEuclidiana(
      puntos[0].lat, puntos[0].lon,
      puntos[1].lat, puntos[1].lon
    );

    const nuevaMedicion = {
      id: Date.now(),
      origen: puntos[0].nombre,
      destino: puntos[1].nombre,
      coordOrigen: `${puntos[0].lat.toFixed(2)}°, ${puntos[0].lon.toFixed(2)}°`,
      coordDestino: `${puntos[1].lat.toFixed(2)}°, ${puntos[1].lon.toFixed(2)}°`,
      distEsferica: distEsferica.toFixed(2),
      distEuclidiana: distEuclidiana.toFixed(2),
      diferencia: ((distEsferica - distEuclidiana) / distEuclidiana * 100).toFixed(1)
    };

    setMediciones([...mediciones, nuevaMedicion]);
  };

  const ciudadesPredefinidas = [
    { nombre: 'Ciudad de México', lat: 19.4326, lon: -99.1332 },
    { nombre: 'Nueva York', lat: 40.7128, lon: -74.0060 },
    { nombre: 'Londres', lat: 51.5074, lon: -0.1278 },
    { nombre: 'Tokio', lat: 35.6762, lon: 139.6503 },
    { nombre: 'Sídney', lat: -33.8688, lon: 151.2093 },
    { nombre: 'Madrid', lat: 40.4168, lon: -3.7038 },
    { nombre: 'Buenos Aires', lat: -34.6037, lon: -58.3816 },
    { nombre: 'El Cairo', lat: 30.0444, lon: 31.2357 },
    { nombre: 'Mumbai', lat: 19.0760, lon: 72.8777 },
    { nombre: 'Ciudad del Cabo', lat: -33.9249, lon: 18.4241 },
    { nombre: 'Chetumal', lat: 18.5002, lon: -88.2963 },
    { nombre: 'Cancún', lat: 21.1619, lon: -86.8515 },
    { nombre: 'San Juan, PR', lat: 18.4655, lon: -66.1057 },
    { nombre: 'La Habana', lat: 23.1136, lon: -82.3666 }
  ];

  return (
     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`} style={{ overflowX: 'hidden' }}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sesión 3: Introducción a la Geometría Esférica
              </h1>
               <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* CONCEPTOS BÁSICOS DE GEOGRAFÍA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🗺️ Conceptos Básicos de Geografía en el Globo Terráqueo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🌍</span> Sistema de Coordenadas Geográficas
                  </h4>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold text-blue-700 dark:text-blue-300">Latitud (Paralelos)</dt>
                      <dd className="text-sm mt-1">
                        • Líneas horizontales que van de Este a Oeste<br />
                        • Se miden de 0° a 90° Norte o Sur desde el Ecuador<br />
                        • Ecuador = 0°, Polo Norte = 90°N, Polo Sur = 90°S
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-blue-700 dark:text-blue-300">Longitud (Meridianos)</dt>
                      <dd className="text-sm mt-1">
                        • Líneas verticales que van de Polo a Polo<br />
                        • Se miden de 0° a 180° Este u Oeste desde Greenwich<br />
                        • Meridiano de Greenwich = 0°, Línea Internacional del Cambio de Fecha = 180°
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📍 Líneas Importantes del Globo</h4>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <dt className="font-semibold">Ecuador:</dt>
                      <dd>0° latitud (divide Norte/Sur)</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="font-semibold">Trópico de Cáncer:</dt>
                      <dd>23.5°N</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="font-semibold">Trópico de Capricornio:</dt>
                      <dd>23.5°S</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="font-semibold">Círculo Polar Ártico:</dt>
                      <dd>66.5°N</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="font-semibold">Círculo Polar Antártico:</dt>
                      <dd>66.5°S</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">🔄 Círculos en la Esfera</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300">Círculos Máximos</h5>
                      <p className="text-sm mt-1">
                        • Dividen la esfera en dos hemisferios iguales<br />
                        • Pasan por el centro de la esfera<br />
                        • Ejemplos: Ecuador, todos los meridianos<br />
                        • Son las rutas más cortas (geodésicas)
                      </p>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300">Círculos Menores</h5>
                      <p className="text-sm mt-1">
                        • NO pasan por el centro de la esfera<br />
                        • Todos los paralelos excepto el Ecuador<br />
                        • NO son rutas más cortas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📐 Cómo Leer Coordenadas</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Ejemplo: Chetumal</p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                      <code className="text-lg">18.5°N, 88.3°O</code>
                    </div>
                    <p className="text-sm mt-2">
                      ✓ 18.5° al Norte del Ecuador<br />
                      ✓ 88.3° al Oeste de Greenwich<br />
                      ✓ En el hemisferio Norte y Occidental
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🎯 Para Identificar en tu Globo Físico:</h4>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔴</div>
                  <p className="text-sm"><strong>Líneas Rojas:</strong> Ecuador y meridianos principales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔵</div>
                  <p className="text-sm"><strong>Líneas Azules:</strong> Paralelos importantes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🟢</div>
                  <p className="text-sm"><strong>Puntos Verdes:</strong> Polos Norte y Sur</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GLOBO TERRÁQUEO INTERACTIVO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌐 Explorador de Rutas Esféricas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Layout responsive: columna única en móvil, dos columnas en desktop */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
              <div className="order-2 lg:order-1">
                <h4 className="font-semibold mb-3">
                  Globo Terráqueo Interactivo
                  {!sceneInitialized && <span className="text-sm text-gray-500 ml-2">(Cargando...)</span>}
                </h4>
                <div
                  ref={mountRef}
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 touch-none"
                  style={{
                    cursor: sceneInitialized ? 'grab' : 'wait',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    maxWidth: '100%'
                  }}
                />
                <div className="mt-3 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={rotacionAutomatica}
                      onChange={(e) => setRotacionAutomatica(e.target.checked)}
                      className="rounded"
                      disabled={!sceneInitialized}
                    />
                    <span className="text-sm">Rotación automática</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={mostrarGeodesia}
                      onChange={(e) => setMostrarGeodesia(e.target.checked)}
                      className="rounded"
                      disabled={!sceneInitialized}
                    />
                    <span className="text-sm">Mostrar ruta geodésica</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4 order-1 lg:order-2">
                <h4 className="font-semibold">Selección de Puntos</h4>

                {[0, 1].map((index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm font-medium">
                      Punto {index + 1}: {puntos[index]?.nombre || 'No seleccionado'}
                    </label>
                    <select
                      value={puntos[index]?.nombre || ''}
                      onChange={(e) => {
                        const ciudad = ciudadesPredefinidas.find(c => c.nombre === e.target.value);
                        if (ciudad) {
                          const nuevosPuntos = [...puntos];
                          nuevosPuntos[index] = {
                            ...ciudad,
                            color: index === 0 ? '#EF4444' : '#3B82F6'
                          };
                          setPuntos(nuevosPuntos);
                        }
                      }}
                      className="w-full p-3 text-base border rounded dark:bg-gray-700 dark:border-gray-600"
                      disabled={!sceneInitialized}
                    >
                      <option value="">Seleccionar ciudad...</option>
                      {ciudadesPredefinidas.map(ciudad => (
                        <option key={ciudad.nombre} value={ciudad.nombre}>
                          {ciudad.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                {puntos.length === 2 && sceneInitialized && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                    <h5 className="font-semibold">Resultados de Medición:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>🌐 Distancia Esférica:</span>
                        <strong className="text-green-600 text-right">
                          {calcularDistanciaEsferica(
                            puntos[0].lat, puntos[0].lon,
                            puntos[1].lat, puntos[1].lon
                          ).toFixed(2)} km
                        </strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>📏 Distancia Euclidiana:</span>
                        <strong className="text-blue-600 text-right">
                          {calcularDistanciaEuclidiana(
                            puntos[0].lat, puntos[0].lon,
                            puntos[1].lat, puntos[1].lon
                          ).toFixed(2)} km
                        </strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>📊 Diferencia:</span>
                        <strong className="text-orange-600 text-right">
                          {(((calcularDistanciaEsferica(
                            puntos[0].lat, puntos[0].lon,
                            puntos[1].lat, puntos[1].lon
                          ) - calcularDistanciaEuclidiana(
                            puntos[0].lat, puntos[0].lon,
                            puntos[1].lat, puntos[1].lon
                          )) / calcularDistanciaEuclidiana(
                            puntos[0].lat, puntos[0].lon,
                            puntos[1].lat, puntos[1].lon
                          )) * 100).toFixed(1)}% más
                        </strong>
                      </div>
                    </div>

                    <button
                      onClick={agregarMedicion}
                      className="w-full bg-blue-600 text-white py-3 px-4 text-base rounded hover:bg-blue-700 mt-3 disabled:opacity-50 active:bg-blue-800"
                      disabled={!sceneInitialized}
                    >
                      ➕ Agregar a Tabla de Análisis
                    </button>
                  </div>
                )}

                <div className="bg-amber-50 dark:bg-amber-900 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>💡 Tip:</strong> Arrastra el globo para rotarlo. En móviles, usa un dedo para rotar.
                    Observa cómo la ruta más corta (geodésica) no es una línea recta en el mapa plano.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TABLA DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📊 Análisis de Rutas Registradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mediciones.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No hay mediciones registradas. Selecciona dos ciudades y agrega la medición.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border p-3 text-left">Origen</th>
                      <th className="border p-3 text-left">Destino</th>
                      <th className="border p-3 text-left">Dist. Esférica</th>
                      <th className="border p-3 text-left">Dist. Euclidiana</th>
                      <th className="border p-3 text-left">% Diferencia</th>
                      <th className="border p-3 text-left">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mediciones.map((medicion) => (
                      <tr key={medicion.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="border p-3">
                          {medicion.origen}<br />
                          <span className="text-xs text-gray-500">{medicion.coordOrigen}</span>
                        </td>
                        <td className="border p-3">
                          {medicion.destino}<br />
                          <span className="text-xs text-gray-500">{medicion.coordDestino}</span>
                        </td>
                        <td className="border p-3 font-semibold text-green-600">{medicion.distEsferica} km</td>
                        <td className="border p-3 font-semibold text-blue-600">{medicion.distEuclidiana} km</td>
                        <td className="border p-3 font-semibold text-orange-600">+{medicion.diferencia}%</td>
                        <td className="border p-3">
                          <button
                            onClick={() => setMediciones(mediciones.filter(m => m.id !== medicion.id))}
                            className="text-red-600 hover:text-red-800"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ACTIVIDADES PRÁCTICAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Actividades Prácticas - 60 minutos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">📢 Material Necesario:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Globo terráqueo físico (o pelota con líneas dibujadas)</li>
                <li>Cinta métrica flexible o cordón</li>
                <li>Marcadores o etiquetas adhesivas pequeñas</li>
                <li>Papel cuadriculado y calculadora</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 1: Exploración con Globo Físico (20 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Comprender la diferencia entre rutas planas y esféricas</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Instrucciones con tu globo terráqueo:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Localiza las siguientes ciudades y márcalas con etiquetas:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Chetumal (18.5°N, 88.3°O)</li>
                        <li>Londres (51.5°N, 0.1°O)</li>
                        <li>Tokio (35.7°N, 139.7°E)</li>
                        <li>Nueva York (40.7°N, 74.0°O)</li>
                      </ul>
                    </li>
                    <li>Con el cordón, une Chetumal-Londres de dos formas:
                      <ul className="list-disc pl-6 mt-1">
                        <li>Tensando el cordón (geodésica)</li>
                        <li>Siguiendo paralelos y meridianos</li>
                      </ul>
                    </li>
                    <li>Mide ambas distancias con la cinta métrica</li>
                    <li>Registra la diferencia y compárala con el simulador</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 2: Identificación de Elementos Geográficos (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Reconocer meridianos, paralelos y círculos máximos</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>En tu globo terráqueo, identifica y marca:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>El Ecuador (0° latitud) - márcalo con color rojo</li>
                    <li>Los Trópicos de Cáncer (23.5°N) y Capricornio (23.5°S)</li>
                    <li>El Meridiano de Greenwich (0° longitud)</li>
                    <li>El meridiano que pasa por Chetumal (~88°O)</li>
                    <li>Encuentra 3 círculos máximos diferentes</li>
                    <li>Identifica qué NO es un círculo máximo (ej: paralelo 30°N)</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 3: Triángulos Esféricos Físicos (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Demostrar que los ángulos suman más de 180°</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Experimento con el globo:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Forma un triángulo con cordón usando:
                      <ul className="list-disc pl-6 mt-1">
                        <li>Polo Norte (90°N)</li>
                        <li>Punto en Ecuador a 0° longitud</li>
                        <li>Punto en Ecuador a 90°E longitud</li>
                      </ul>
                    </li>
                    <li>Observa que todos los lados son arcos de círculo máximo</li>
                    <li>Nota que cada ángulo en el ecuador es de 90°</li>
                    <li>El ángulo en el polo también es 90°</li>
                    <li>Total: 90° + 90° + 90° = 270° (¡no 180°!)</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 4: Rutas de Aviación Reales (10 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Entender por qué los aviones vuelan rutas "curvas"</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Análisis práctico:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>En tu globo, traza con cordón la ruta más corta:
                      <ul className="list-disc pl-6 mt-1">
                        <li>Cancún → Madrid</li>
                        <li>Los Ángeles → Tokio</li>
                      </ul>
                    </li>
                    <li>Observa que pasan cerca del Polo Norte</li>
                    <li>Mide y compara con una ruta "directa" este-oeste</li>
                    <li>Calcula el ahorro en distancia (y combustible)</li>
                    <li>Registra tus observaciones en la tabla del simulador</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FORMATO DE ENTREGA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📝 Evidencias a Entregar (15% del Proyecto)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Mediciones en Geometría Esférica - Formato de Entrega</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">1. Tabla de Mediciones (8 puntos):</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded overflow-x-auto">
                    <table className="w-full text-sm border-collapse border">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="border p-2">Ruta</th>
                          <th className="border p-2">Origen</th>
                          <th className="border p-2">Destino</th>
                          <th className="border p-2">Dist. Esférica (km)</th>
                          <th className="border p-2">Dist. Euclidiana (km)</th>
                          <th className="border p-2">Diferencia %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">1</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">2</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">3</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">4</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">2. Análisis de Geodésicas (4 puntos):</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dibujo o captura mostrando al menos 3 rutas geodésicas</li>
                    <li>Explicación de por qué difieren de líneas rectas en mapas planos</li>
                    <li>Identificación de patrones en las rutas</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">3. Reflexiones y Aplicaciones (3 puntos):</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ventajas de usar geometría esférica en navegación</li>
                    <li>Ejemplos de aplicación en la vida real</li>
                    <li>Comparación con geometrías euclidiana y del taxista</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-800 rounded">
                <p className="font-semibold">💡 Consejos para obtener la máxima calificación:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Incluye coordenadas precisas para cada ciudad</li>
                  <li>Verifica cálculos usando la herramienta interactiva</li>
                  <li>Documenta observaciones específicas sobre las geodésicas</li>
                  <li>Relaciona los conceptos con navegación aérea/marítima real</li>
                  <li>Compara las tres geometrías estudiadas hasta ahora</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default GeometriaEsferica;