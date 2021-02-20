import React, {useState, useEffect } from "react";
//importing axios is allowing us to use the link to the data
import axios from "axios";

//we are creating Posts and the code that follows is how Posts functions 
const Posts = () => {
  //this says we are creating an arry that holds the variables posts and setPost-a function that allows us to change the value of posts 
  //this is equal to useState which will allow us to set the inital value of posts to nothing 
  const [posts, setPosts] = useState();

  //useEffect is stating for when the code should run which is when the page renders referred to as a ComponentDidMount
  useEffect (() => {
    //this is connecting to axios and allowing us to use the URL to obtain data within our code
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      //this is connecting the data to the value of setPosts that is within our array from above 
      const responsePosts = res.data; 
      setPosts(responsePosts);
    });
    //this [] is stating we want the code to run once
  }, []);
  //this is returning the data we want to print to the page
  return (
    //this div is saying how we want our information layed out and that we want to use the data by using the id, title, and body items within our provided output when posts are true 
    <div>
      <h1>Posts</h1>
      {posts &&
      posts.map((post) => {
        const {id, title, body} = post;
        return (
          //this div is the provided output that we want the specified data to funnel into the appropriate spots we created for each item
          <div key={id}>
            <h3>Posted by user:{id}</h3>
            <h4>Title: {title}</h4>
            <h5>{body}</h5>
          </div>  
        )
      })}
    </div>
  );
};

//this is what allows us to import Posts and its output into App.js
export default Posts; 