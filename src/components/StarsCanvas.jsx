import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Starfield = () => {
  const ref = useRef();
  const [points] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

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

const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <Starfield />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
