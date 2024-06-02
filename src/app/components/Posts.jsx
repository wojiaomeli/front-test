import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { Grid, Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ressource from "../../../pages/ressource";

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
        });
      });
  }, []);

  return (
    <div className="posts">
     
      <Grid container spacing={2}>
        {isLoading ? (
          <Box>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton width="60%" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
        ) : (
          posts.map((post) => <CardPost ressource={ressource} key={post.id} />)
        )}
      </Grid>
    </div>
  );
}
