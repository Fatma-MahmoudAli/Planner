import React, { Component } from 'react';
const Goals = () => {
    return ( 
      <div>
            <div className="title">
                        <h2 class="titletext"><span> New Year New Challenges ... </span></h2>
                        <p id='center'>With our busy schedules it might be difficult to find time to think about who we are, <br /> our strengths and weaknesses, our drives and personalities, our habits and values. <br /> 
                        Here is some challenge to start the new year with new mentalty
                        </p>
             </div>
            <div className='Goal'>
            <div className='container'>
            <div className='card' id='card'>
                    
                    <div className='imagebox'>
                        <img src='../images/selfhead.jpg'/>
                    </div>

                    <div className='Art'>
                        <h4>Self Love</h4>
                        <a href="https://www.bbrfoundation.org/blog/self-love-and-what-it-means" id="btn" className="btn" target="_blank"> Read more</a>
                    </div>

                </div>
               
             
                <div className='card' id='card'>
                    
                    <div className='imagebox'>
                        <img src='../images/wo.jpg'/>
                    </div>

                    <div className='Art'>
                        <h4>Workout</h4>
                        <a href="https://www.nytimes.com/guides/well/strength-training-plyometrics" id="btn" className="btn" target="_blank"> Read more</a>
                    </div>

                </div>
                <div className='card' id='card'>
                    
                    <div className='imagebox'>
                        <img src='../images/yoga.jpg'/>
                    </div>

                    <div className='Art'>
                        <h3>meditation</h3>
                        <a href="https://www.yogajournal.com/" id="btn" className="btn" target="_blank"> Read more</a>
                    </div>

                </div>
             
            </div>
            

        </div>
        <div className='Goal'>
            <div className='container'>
            <div className='card' id='card'>
                    
                    <div className='imagebox'>
                        <img src='../images/journal.jpg'/>
                    </div>

                    <div className='Art'>
                        <h4>Journaling</h4>
                        <a href="https://psychcentral.com/blog/ready-set-journal-64-journaling-prompts-for-self-discovery" id="btn" className="btn" target="_blank"> Read more</a>
                    </div>

                </div>
                <div className='card' id='card'>

<div className='imagebox'>
    <img src='../images/hs.jpg   '/>
</div>

<div className='Art'>
    <h4>Healthy Life</h4>
    <a href="https://www.healthline.com/health/fitness-nutrition/healthy-lifestyle-benefits" id="btn" className="btn" target="_blank"> Read more</a>
</div>

</div>
                <div className='card' id='card'>

                    <div className='imagebox'>
                        <img src='../images/deve.jpg'/>
                    </div>

                    <div className='Art'>
                        <h4>Develoment</h4>
                        <a href="https://www.berkeleywellbeing.com/self-development-the-9-skills-you-need-to-improve-your-life.html"  id="btn"className="btn" target="_blank"> Read more</a>
                    </div>

                </div>
                
             
            </div>
            

        </div>
       
    <section id="Blog">
    <div className="title">
        <h2 className="titletext"><span>Healthy Style</span> </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/8-p_nPkPU40" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</section>
      </div>
     );
}
 
export default Goals;
