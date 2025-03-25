import React, { useState, useEffect } from "react";
import { TextField } from "@react-spectrum/textfield";
import { Button } from "@react-spectrum/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const API_URL = "http://blog-api.obuna.com/api";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].id);
        }
      });
  }, []);


  const addPost = async () => {
    if (!title.trim() || !body.trim() || !selectedCategory) {
      toast.error("All fields are required!");
      return;
    }

    const newPost = {
      title,
      body,
      category_id: selectedCategory,
    };

    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    console.log("Server response:", data);

    if (response.ok) {
      toast.success("Post added successfully!");
      navigate("/", { state: { refresh: true } });
    } else {
      toast.error("Failed to add post!");
    }
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <TextField label="Post Title" value={title} onChange={setTitle} />
      <TextField label="Post Body" value={body} onChange={setBody} />
      
      {/* 🔽 Kategoriya tanlash */}
      <label>Category:</label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <Button onPress={addPost} variant="cta">Submit</Button>
      <Button onPress={() => navigate("/")} variant="secondary">Back</Button>
    </div>
  );
}

export default AddPost;
