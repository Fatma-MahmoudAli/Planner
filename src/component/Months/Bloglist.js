import { Link } from "react-router-dom";

 
// export default Blogslist;

const BlogList = ({ blogs , title }) => {
  // const title = props.title
    return (
      <div className="blog-list">
        {/* <h1>{title}</h1> */}
        {/* <div className="title"><h2 className="titletext"><span>{title}</span></h2></div> */}
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`blog/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Month of { blog.quote }</p>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;