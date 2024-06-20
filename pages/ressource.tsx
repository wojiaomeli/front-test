// ToutesLesRessources.tsx
import React, { useEffect, useState } from 'react';
import BannerPage from '../src/app/components/BannerPage';
import Layout from '../src/app/components/layout';
import Container from "@mui/material/Container";
import Posts from "../src/app/components/Posts";
import Post from "../src/app/components/Post";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ToutesLesRessources: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/posts");
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <BannerPage title="Toutes les ressources" />
      
      <Container className="border border-100 p-8 flex flex-col items-center justify-center">
        <Router>
          <Routes>
            <Route path="/" element={<Posts posts={posts} loading={loading} />} />
            <Route path="/Post/:id" element={<Post />} />
          </Routes>
        </Router>
      </Container>
    </Layout>
  );
}

export default ToutesLesRessources;
