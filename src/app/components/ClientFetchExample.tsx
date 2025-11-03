"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export function ClientFetchExample() {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch single user
  const fetchUser = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching user");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  // Create a new user
  const createUser = async () => {
    setLoading(true);
    setError("");
    try {
      const newUser = {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        role: "user",
      };

      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) throw new Error("Failed to create user");
      const data = await res.json();
      alert(`User created: ${data.firstName} ${data.lastName}`);
      fetchUsers(); // Refresh list
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error creating user");
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (id: string) => {
    setLoading(true);
    setError("");
    try {
      const updates = { role: "admin" };
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (!res.ok) throw new Error("Failed to update user");
      alert("User updated to admin!");
      fetchUsers(); // Refresh list
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating user");
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (id: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete user");
      alert("User deleted!");
      fetchUsers(); // Refresh list
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1.5rem",
      }}
    >
      <h3
        style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}
      >
        Client-Side Fetch Examples
      </h3>

      {loading && <p style={{ color: "#0070f3" }}>Loading...</p>}
      {error && <p style={{ color: "#e00" }}>Error: {error}</p>}

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <button onClick={fetchUser} style={buttonStyle}>
          Fetch Single User
        </button>
        <button onClick={fetchUsers} style={buttonStyle}>
          Fetch All Users
        </button>
        <button onClick={fetchProducts} style={buttonStyle}>
          Fetch Products
        </button>
        <button onClick={createUser} style={buttonStyle}>
          Create User (POST)
        </button>
      </div>

      {user && (
        <div
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            background: "#f5f5f5",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Single User:
          </h4>
          <p>
            {user.firstName} {user.lastName} ({user.email}) - {user.role}
          </p>
        </div>
      )}

      {users.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            All Users:
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((u) => (
              <li
                key={u.id}
                style={{
                  padding: "0.75rem",
                  marginBottom: "0.5rem",
                  background: "#f9f9f9",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  {u.firstName} {u.lastName} - {u.role}
                </span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => updateUser(u.id)}
                    style={smallButtonStyle}
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => deleteUser(u.id)}
                    style={deleteButtonStyle}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {products.length > 0 && (
        <div>
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Products:
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {products.map((p) => (
              <li
                key={p.id}
                style={{
                  padding: "0.75rem",
                  marginBottom: "0.5rem",
                  background: "#f0f8ff",
                  borderRadius: "4px",
                }}
              >
                <strong>{p.name}</strong> - ${p.price}
                <br />
                <small style={{ color: "#666" }}>{p.description}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.875rem",
};

const smallButtonStyle: React.CSSProperties = {
  padding: "0.25rem 0.75rem",
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.75rem",
};

const deleteButtonStyle: React.CSSProperties = {
  ...smallButtonStyle,
  background: "#e00",
};
