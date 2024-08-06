/* eslint-disable react/no-unknown-property */
import { extend } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";
import { Monopente } from "./Monopente";

// Extend the geometries
extend({ BoxGeometry: THREE.BoxGeometry });

const Experience = () => {
  return (
    <>
      {/* <directionalLight color={"#ffffff"} position={[0, 0, 1]} /> */}
      <Stage
        intensity={1.5}
        environment="forest"
        adjustCamera={0.6}
        shadows={{ type: "accumulative", colorBlend: 5, color: "#ffffff" }}
      >
        <Monopente />
      </Stage>
      <OrbitControls
        makeDefault
        minDistance={8} // Set this to a value that keeps the camera from zooming inside the model
        maxDistance={50} // You can adjust the max distance as needed
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Experience;
