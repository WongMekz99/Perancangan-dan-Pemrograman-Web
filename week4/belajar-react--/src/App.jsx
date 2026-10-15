import { useState } from "react";

import CardMahasiswa from "./components/CardMahasiswa";

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "John Doe", nim: "123456789" },
    { id: 2, nama: "Jane Smith", nim: "987654321" },
    { id: 3, nama: "Alice Johnson", nim: "456789123" }
  ]);

  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  const handlerTambahMahasiswa = (e) => {
    e.preventDefault();
    if (namaBaru.trim() === "" || nimBaru.trim() === "") {
      alert("Nama dan NIM tidak boleh kosong!");
      return;
    }
    
    const mahasiswaBaru = {
      id: Date.now(),
      nama: namaBaru,
      nim: nimBaru
    };

    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);
    setNamaBaru("");
    setNimBaru("");
  };

  const handlerHapusMahasiswa = (idTarget) => {
    const sisa = daftarMahasiswa.filter((mhs) => mhs.id !== idTarget);
    setDaftarMahasiswa(sisa);
  };

  return (
    <div style={{
      maxWidth: "650px",
      margin: "30px auto",
      padding: "0 20px"
    }}>
      {/* Judul Utama Kontras & Besar */}
      <h1 style={{ 
        textAlign: "center", 
        color: "#0f172a", 
        fontSize: "2.2rem", 
        fontWeight: "800",
        marginBottom: "6px" 
      }}>
        Pengelolaan Daftar Mahasiswa
      </h1>
      <form onSubmit={handlerTambahMahasiswa} style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "32px",
        border: "2px solid #cbd5e1",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.08)"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "6px", 
            fontSize: "1.15rem", 
            fontWeight: "700",
            color: "#1e293b" 
          }}>
            Nama Lengkap:
          </label>
          <input
            type="text"
            placeholder="Masukkan nama"
            value={namaBaru}
            onChange={(e) => setNamaBaru(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #94a3b8",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "6px", 
            fontSize: "1.15rem", 
            fontWeight: "700",
            color: "#1e293b" 
          }}>
            NIM:
          </label>
          <input
            type="text"
            placeholder="Masukkan NIM"
            value={nimBaru}
            onChange={(e) => setNimBaru(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #94a3b8",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            padding: "14px",
            fontSize: "1.2rem",
            fontWeight: "700",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + Tambah Mahasiswa
        </button>
      </form>

      
      <div>
        <h3 style={{ 
          marginBottom: "16px", 
          color: "#0f172a", 
          fontSize: "1.4rem", 
          fontWeight: "700" 
        }}>
          Total Terdaftar: {daftarMahasiswa.length} Orang
        </h3>

        {daftarMahasiswa.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "1.2rem" }}>
            Belum ada data mahasiswa.
          </p>
        ) : (
          daftarMahasiswa.map((mhs) => (
            <CardMahasiswa
              key={mhs.id} // [SESI 4] Key wajib ada saat me-render list
              id={mhs.id}
              nama={mhs.nama}
              nim={mhs.nim}
              onHapus={handlerHapusMahasiswa}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default App;