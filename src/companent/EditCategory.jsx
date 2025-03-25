import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@react-spectrum/button";
import { TextField } from "@react-spectrum/textfield";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://blog-api.obuna.com/api";

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setName(data.name))
      .catch(() => toast.error("Failed to fetch category!"));
  }, [id]);

  const updateCategory = async () => {
    if (!name.trim()) return;
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      toast.success("Category updated successfully!");
      navigate("/");
    } else {
      toast.error("Failed to update category!");
    }
  };

  return (
    <div>
      <Toaster />
      <h1>Edit Category</h1>
      <TextField label="Category Name" value={name} onChange={setName} />
      <Button onPress={updateCategory} variant="primary">Save</Button>
      <Button onPress={() => navigate("/")}>Cancel</Button>
    </div>
  );
}

export default EditCategory;
