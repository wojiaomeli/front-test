import React , {useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Post() {

  const {id} = useParams()
  useEffect(() => {
    fetch (`http://localhost:1337/api/posts/${id}`)
    .then (res => res.json())
    .then (res => console.log(res))
  
  })
 
  
  return (
    <div>
      <p>My post</p>
    </div>
  );
}
