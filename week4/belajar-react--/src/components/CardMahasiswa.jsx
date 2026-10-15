function CardMahasiswa({id, nama, nim, onHapus}) {
  return (
    <div style={{
      border: "2px solid #cbd5e1",
      borderRadius: "12px",
      padding: "20px 24px",
      marginBottom: "16px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <h3 style={{ 
          margin: "0 0 6px 0", 
          color: "#1d4ed8", 
          fontSize: "1.6rem", 
          fontWeight: "800" 
        }}>
          {nama}
        </h3>
        <p style={{ 
          margin: 0, 
          color: "#334155", 
          fontSize: "1.2rem", 
          fontWeight: "600" 
        }}>
          NIM: <span style={{ color: "#0f172a" }}>{nim}</span>
        </p>
      </div>

      {onHapus && (
        <button
          onClick={() => onHapus(id)}
          style={{
            backgroundColor: "#dc2626",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Hapus
        </button>
      )}
    </div>
  );
}

export default CardMahasiswa;