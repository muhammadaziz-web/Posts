import React, { useState } from "react";
import { TextField } from "@react-spectrum/textfield";
import { Button } from "@react-spectrum/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const API_URL = "http://blog-api.obuna.com/api";

function AddCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addCategory = async () => {
    if (!name.trim()) return;
    const response = await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      toast.success("Category added successfully!");
      navigate("/", { state: { refresh: true } });
    }
  };

  return (
    <div>
      <h1>Add New Category</h1>
      <TextField label="Category Name" value={name} onChange={setName} />
      <Button onPress={addCategory} variant="cta">Submit</Button>
      <Button onPress={() => navigate("/")} variant="secondary">Back</Button>
    </div>
  );
}

export default AddCategory;
