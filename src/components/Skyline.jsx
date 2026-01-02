export default function Skyline() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[-120 + i * 22, 20 + (i % 4) * 10, -40]}
          castShadow
        >
          <boxGeometry args={[18, 40 + (i % 4) * 20, 18]} />
          <meshStandardMaterial color="#6d7176" />
        </mesh>
      ))}
    </>
  );
}
