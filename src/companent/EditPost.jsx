import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField } from "@react-spectrum/textfield";
import { Button } from "@react-spectrum/button";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://blog-api.obuna.com/api";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setTitle(data.title))
      .catch(() => toast.error("Failed to load post!"));
  }, [id]);

  const updatePost = async () => {
    if (!title.trim()) {
      toast.error("Title cannot be empty!");
      return;
    }

    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      toast.success("Post updated successfully!");
      navigate("/");
    } else {
      toast.error("Failed to update post!");
    }
  };

  return (
    <div>
      <Toaster />
      <h1>Edit Post</h1>
      <TextField label="Post Title" value={title} onChange={setTitle} />
      <Button onPress={updatePost} variant="primary">Save Changes</Button>
      <Button onPress={() => navigate("/")}>Cancel</Button>
    </div>
  );
}

export default EditPost;
