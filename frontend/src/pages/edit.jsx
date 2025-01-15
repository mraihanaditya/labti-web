import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function Edit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get(`/users/${id}/edit`).then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    http.put(`/users/${id}`, inputs).then(() => {
      alert("User updated successfully!");
      navigate("/");
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit User</h2>
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
                value={inputs.name || ""}
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
                value={inputs.email || ""}
                onChange={handleChange}
                placeholder="Masukkan email"
              />
            </div>
            <button
              type="button"
              className="btn btn-info btn-sm w-100 mt-2"
              onClick={submitForm}
            >
              Perbarui User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
