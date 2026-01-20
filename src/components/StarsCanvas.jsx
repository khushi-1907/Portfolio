"use client";

import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useDeviceCapabilities } from "../utils/useDeviceCapabilities";


const Starfield = () => {
  const ref = useRef();
  const [points] = useState(() => {
    const data = random.inSphere(new Float32Array(5001), { radius: 1.2 });
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  });

  useFrame((_s, d) => {
    if (ref.current) {
      ref.current.rotation.x -= d / 10;
      ref.current.rotation.y -= d / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas = () => {
  const { gpuTier, isMobile } = useDeviceCapabilities();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Delay loading 3D content until after LCP
    const timer = setTimeout(() => setEnabled(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!enabled || isMobile || gpuTier < 1) return null; // Disable completely on mobile for performance

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false, powerPreference: "default" }} // Disable antialias for perf
        style={{ pointerEvents: "none" }}
        dpr={[1, 1.5]} // Cap DPR to 1.5
      >
        <Suspense fallback={null}>
          <Starfield />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};


export default StarsCanvas;
