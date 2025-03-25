import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const API_URL = "https://blog-api.obuna.com/api"; // HTTPS bilan almashtirildi

function AddCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addCategory = async () => {
    if (!name.trim()) return;
    try {
      const response = await fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        toast.success("Category added successfully!");
        navigate("/", { state: { refresh: true } });
      } else {
        toast.error("Failed to add category");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-bold mb-4">Add New Category</h1>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex gap-2">
        <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
        <button onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
      </div>
    </div>
  );
}

export default AddCategory;