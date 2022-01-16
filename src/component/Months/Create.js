

import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
// export default Create;

const Create = () => {
    const [title , setTitle] = useState()
    const [blog , setBlog] = useState()
    const [challenge , setChallenge] = useState()
    const [books , setBooks] = useState()
    const [weight , setWeight] = useState()
    const [habbit , setHabbit] = useState()
    const [course , setCourse] = useState()
    const [event , setEvent] = useState()
    const [quote , setQuote] = useState()
    const [eventdate , setEventdate] = useState()
    const [ispending , setIspending] = useState(false)
    const [image , setImg] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMonth = {title , blog , challenge, books, weight, habbit , course, event , eventdate , quote , image}
    
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMonth)
        }).then(() => {
          // history.go(-1);
          setIspending(false)
          navigate('/month');
        })
      } 
   
    return ( 
   <div>
        <div className="title"><h2 className="titletext"><span>Create New Month</span></h2></div>
        <div className="create">
            <h1 >Add new one <i style={{ 
            color: '#20947b'
             }} className="fa fa-edit" ></i></h1>
            <form onSubmit={handleSubmit}>
                <label>Month :</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Month title :</label>
                <input type="text" required value={quote} onChange={(e) => setQuote(e.target.value)}/>
                <label>New Habbit :</label>
                <input type="text" required value={habbit} onChange={(e) => setHabbit(e.target.value)}/>
                <label>Courses to study :</label>
                <input type="text" required value={course} onChange={(e) => setCourse(e.target.value)}/>

                <span>Event :</span>
                <input id="tentac" type="text" required value={event} onChange={(e) => setEvent(e.target.value)} />
                <span> Date :</span>
                <input id="tentac" type="date" required value={eventdate} onChange={(e) => setEventdate(e.target.value)}/>

                <label>21  Challenge :</label>
                <select value={challenge} onChange={(e) => setChallenge(e.target.value)}>
                    <option value="Mental">Mental wellness</option>
                    <option value="Workout">Home workOut</option>
                    <option value="Gratitude">Graditude</option>
                    <option value="peace">Inner Peace</option>
                    <option value="Confidence">Confidence</option>
                </select>

                <div>
                <span>Books :</span> <input type="number" id="tentacles" name="tentacles" min="1" max="10" value={books} onChange={(e) => setBooks(e.target.value)}/>
                <span>weight-lose:</span> <input type="number" id="tentacles" name="tentacles" min="1" max="10" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>

                 <label>Month Blog :</label>
                <textarea required value={blog} onChange={(e) => setBlog(e.target.value)} ></textarea>
                <label>Month image :</label>
                <input type="file" id="file-input" name="ImageStyle"  value={image} onChange={(e) => setImg(e.target.value)}/>
                { !ispending &&  <button>Set Month</button>}
                { ispending &&  <button>Adding ...</button>}
            </form>
        
        </div>
   </div>
     );
}
 
export default Create;