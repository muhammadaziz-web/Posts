import React, { useState, useEffect } from "react";
import {
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "@react-spectrum/table";
import { Button } from "@react-spectrum/button";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://blog-api.obuna.com/api";

function Carigory() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deleteCategory = async (id) => {
    const response = await fetch(`${API_URL}/categories/${id}`, { method: "DELETE" });
    if (response.ok) {
      toast.success("Category deleted successfully!");
      setCategories(categories.filter((cat) => cat.id !== id));
    } else {
      toast.error("Failed to delete category!");
    }
  };


  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`, { method: "DELETE" });
    if (response.ok) {
      toast.success("Post deleted successfully!");
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      toast.error("Failed to delete post!");
    }
  };

  return (
    <div>
      <Toaster />
      
      <h1>Categories</h1>
      <Button onPress={() => navigate("/add-category")} variant="primary">Add Category</Button>
      
      <TableView aria-label="Categories Table">
        <TableHeader>
          <Column key="name">Name</Column>
          <Column key="actions">Actions</Column>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <Row key={cat.id}>
              <Cell>{cat.name}</Cell>
              <Cell>
                <Button onPress={() => navigate(`/edit-category/${cat.id}`)}>Edit</Button>
                <Button onPress={() => deleteCategory(cat.id)} variant="negative">Delete</Button>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>

      <hr style={{ margin: "30px 0" }} />

      <h1>Blog Posts</h1>
      <Button onPress={() => navigate("/add-post")} variant="primary">Add Post</Button>

      <TableView aria-label="Blog Posts Table">
        <TableHeader>
          <Column key="title">Title</Column>
          <Column key="actions">Actions</Column>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <Row key={post.id}>
              <Cell>{post.title}</Cell>
              <Cell>
                <Button onPress={() => navigate(`/edit/${post.id}`)}>Edit</Button>
                <Button onPress={() => deletePost(post.id)} variant="negative">Delete</Button>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </div>
  );
}

export default Carigory;
