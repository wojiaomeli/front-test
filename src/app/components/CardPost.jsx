import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Posts from "./Posts";

import {Link} from "react-router-dom";

export default function CardPost(posts) {
  return (
    <Card sx={{ maxWidth: 330, margin: '18px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={console.log(Posts)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carte interactive de l’enseignement bilingue francophone en Europe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quel est le nombre de filières bilingues francophones en Europe ?
          Quelles sont les DNL en français enseignées dans les établissements de
          maternelle, du primaire ou du secondaire ? Combien d’élèves suivent
          cet enseignement ? De quand date la création des premières sections
          bilingues ?
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/Post/{$Post.id}`}>
        <Button size="small">Lire</Button>
        </Link>
        <Button size="small">Partager</Button>
        
      </CardActions>
    </Card>
  );
}
