import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { Grid, Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/posts", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setPosts(res.data);
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="posts">
      <h1>Liste des articles</h1>
      <Grid container spacing={3}>
        {isLoading ? (
          <Box >
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton width="60%" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
        ) : (
          posts.map((post) => <CardPost post={post} key={post.id} />)
        )}
      </Grid>
    </div>
  );
}
