import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import "../Home.css"; // Tambahkan file CSS khusus untuk kustomisasi tambahan

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      // Sort data di frontend
      const sortedUsers = res.data.sort((a, b) => a.id - b.id);
      setUsers(sortedUsers);
    });
  };
 

  const deleteUser = (id) => {
    http.delete("/users/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tabel User</h2>
      <div className="table-responsive">
        <table className="table table-hover shadow-sm rounded">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 10).map(
              (
                user,
                index // Menampilkan hanya 10 data pertama
              ) => (
                <tr key={user.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-info btn-sm mx-1"
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
