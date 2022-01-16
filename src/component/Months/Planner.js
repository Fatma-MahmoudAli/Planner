import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import UseFetch from "./Usefetch";

const Planner = () => {
 
  const {data:blogs , isPending , error} = UseFetch('http://localhost:8000/blogs')
  

  return (
    
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading...</div>  }
      {blogs && <BlogList blogs={blogs} title="Months planner" />}
    </div>
  );
}
 
export default Planner;