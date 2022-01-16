import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./Usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate()
  const handleClick = () =>{
    fetch('http://localhost:8000/blogs/' + blog.id , {
      method:"DELETE"
    }).then(() => {
      history('/month')

    })
  }
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <div>
          <h2>{ blog.title }</h2>
          <p>Month of { blog.quote }</p>
          {/* <div>
              <ul className="blog-list">
                  <li className="list-item"><h2></h2>{blog.Challenges} <input type="checkbox" id="horns" name="horns" /> </li>
                  <h3>New Habbit : </h3> <li className="list-item" >{blog.habbit} <input type="checkbox" id="horns" name="horns"/> </li>
                  <li className="list-item">{blog.course} <input type="checkbox" id="horns" name="horns" /> </li>
                  <li className="list-item">{blog.blog} <input type="checkbox" id="horns" name="horns" /> </li>
                  
              </ul>
          </div> */}


<div >
        <div className="roww">
                        <div className="coll50">
                        <form className="form">
  
  
  <div className="inputGroup">
    <input id="option1" name="option1" type="checkbox"/>
    <label for="option1">Challenge : {blog.challenge}</label>
  </div>
  
  <div className="inputGroup">
    <input id="option2" name="option2" type="checkbox"/>
    <label for="option2">Habbit : {blog.habbit}</label>
  </div>
  <div className="inputGroup">
    <input id="option3" name="option3" type="checkbox"/>
    <label for="option3">Course : {blog.course} </label>
  </div>
  <div className="inputGroup">
    <input id="option4" name="option4" type="checkbox"/>
    <label for="option4">Event : {blog.event}<br /> Date : {blog.eventdate}</label>
  </div>
  <div className="inputGroup">
    <input id="option5" name="option5" type="checkbox"/>
    <label for="option5">weight-loss : {blog.weight}k</label>
  </div>
  <div className="inputGroup">
    <input id="option6" name="option6" type="checkbox"/>
    <label for="option6">Books-readed : {blog.books}</label>
  </div>
 
</form>

                            {/* <h2 className="titletext"><span>A</span>bout Us</h2> */}
                            {/* <div>
                         <ul className="blog-list">
                            <li className="listt-item">Challenge:<br />{blog.challenge}  
                                <div className="inputGroup">
                                  <input id="option1" name="option1" type="checkbox"/>
                                  <label htmlFor="option1"> </label>
                                </div>
                              </li>

                              <li className="listt-item">Habbit:{blog.habbit}  
                                <div className="inputGroup">
                                  <input id="option2" name="option2" type="checkbox"/>
                                  <label htmlFor="option2"> </label>
                                </div>
                              </li>

                              <li className="listt-item">Course:<br />{blog.course}  
                                <div className="inputGroup">
                                  <input id="option3" name="option3" type="checkbox"/>
                                  <label htmlFor="option3"> </label>
                                </div>
                              </li>

                              <li className="listt-item">Event:{blog.event}<br />{blog.eventdate}
                                <div className="inputGroup">
                                  <input id="option4" name="option4" type="checkbox"/>
                                  <label htmlFor="option4"> </label>
                                </div>
                              </li>

                              <li className="listt-item">weight loss:{blog.weight}k 
                                <div className="inputGroup">
                                  <input id="option6" name="option6" type="checkbox"/>
                                  <label htmlFor="option6"> </label>
                                </div>
                              </li>

                              <li className="listt-item">Books-readed:{blog.books}
                                <div className="inputGroup">
                                  <input id="option5" name="option5" type="checkbox"/>
                                  <label htmlFor="option5"> </label>
                                </div>
                              </li>

                             

                             {/* <li className="listt-item" > New Habbit : {blog.habbit}  <input type="checkbox" id="horns" name="horns"/> </li>
                            <li className="listt-item">  Course study : {blog.course} <input type="checkbox" id="horns" name="horns" /> </li>
                            <li className="listt-item">  Event : {blog.event} {blog.eventdate} <input type="checkbox" id="horns" name="horns" /> </li>
                            <li className="listt-item">  weight loss : {blog.weight}k <input type="checkbox" id="horns" name="horns" /> </li>
                            <li className="listt-item">  Books readed : {blog.books} <input type="checkbox" id="horns" name="horns" /> </li>
                            <li className="listt-item">  Money saved : {blog.course} <input type="checkbox" id="horns" name="horns" /> </li>
                            <li className="listt-item">  Course study : {blog.course} <input type="checkbox" id="horns" name="horns" /> </li>
                     */}
                          {/* </ul>
          </div> */} 
                        </div>
                        <div className="coll50">
                          <div className="imgboxx">
                          {/* <li className="list-item"><p className="titletext">{blog.blog}</p>  </li> */}
                          <p className="titlletext">{blog.blog}</p>
                         
                          </div>
                        
                        </div>

        </div>
            <div>
              <img id="month-img" src="/images/bodyb.png"  />
            </div>
    </div>
          <button  onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;