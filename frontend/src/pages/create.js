import { useState } from "react";
import http from "../http";
import "../Home.css"; // Gunakan CSS yang sama untuk menjaga konsistensi

export default function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitForm = () => {
    http.post("/users", inputs).then((res) => {
      alert("User created successfully!");
      setInputs({ name: "", email: "", password: "" }); // Reset form
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tambah User Baru</h2>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card shadow-sm rounded p-4">
            <div className="mb-3">
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
                placeholder="Masukkan nama"
              />
            </div>
            <div className="mb-3">
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
                placeholder="Masukkan email"
              />
            </div>
            <div className="mb-3">
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
                placeholder="Masukkan password"
              />
            </div>
            <button
              type="button"
              className="btn btn-info btn-sm w-100 mt-2"
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
