export default function Controls({ night, setNight }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 12,
        left: 12,
        zIndex: 10,
        background: "rgba(255,255,255,0.9)",
        padding: 10,
        borderRadius: 8,
        color: "#000"
      }}
    >
      <label>
        <input
          type="checkbox"
          checked={night}
          onChange={() => setNight(!night)}
        />{" "}
        Night mode
      </label>
    </div>
  );
}
