import { useState } from "react";
import http from "../http";
import "../Home.css";

export default function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setInputs((prev) => ({ ...prev, [name]: value }));

  const submitForm = async () => {
    try {
      await http.post("/users", inputs);
      alert("User berhasil dibuat!");
      setInputs({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Gagal membuat user:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tambah User Baru</h2>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card shadow-lg rounded-lg p-4">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={inputs.email}
                onChange={handleChange}
                placeholder="Masukkan alamat email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={inputs.password}
                onChange={handleChange}
                placeholder="Masukkan password (min 6 karakter)"
              />
            </div>
            <button
              type="button"
              className="btn btn-info btn-lg w-100 mt-3"
              onClick={submitForm}
            >
              Buat User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
