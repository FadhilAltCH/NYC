export default function TwinTowers() {
  return (
    <>
      {/* North Tower */}
      <mesh position={[-6, 50, 0]} castShadow>
        <boxGeometry args={[4, 100, 4]} />
        <meshStandardMaterial color="#cfcfd1" />
      </mesh>

      {/* South Tower (offset slightly) */}
      <mesh position={[8, 50, 2]} castShadow>
        <boxGeometry args={[4, 100, 4]} />
        <meshStandardMaterial color="#cfcfd1" />
      </mesh>
    </>
  );
}
