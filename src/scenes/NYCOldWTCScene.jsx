import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import TwinTowers from "../components/TwinTowers";
import Ground from "../components/Ground";
import Skyline from "../components/Skyline";
import Controls from "../ui/Controls";
import { useState } from "react";

export default function NYCOldWTCScene() {
  const [night, setNight] = useState(false);

  return (
    <>
      <Controls night={night} setNight={setNight} />

      <Canvas camera={{ position: [200, 180, 250], fov: 45 }} shadows>
        <Sky sunPosition={night ? [0, -1, 0] : [2, 1, -1]} />

        <ambientLight intensity={night ? 0.2 : 0.8} />
        <directionalLight
          position={[100, 200, 100]}
          intensity={night ? 0.6 : 1.2}
          castShadow
        />

        <OrbitControls target={[0, 40, 0]} />

        <Ground />
        <Skyline />
        <TwinTowers />
      </Canvas>
    </>
  );
}
