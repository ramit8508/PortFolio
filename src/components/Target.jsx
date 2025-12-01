import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <group>
        {/* Target rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ff0000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ff0000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Center */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial color="#ff0000" />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -0.75, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.5, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
    </mesh>
  );
};

export default Target;
