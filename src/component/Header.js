// import React, { Component } from 'react';
// const Header = () => {
//     return ( 
//         <div>
//             <section className="banner" id="banner" >
//         <div className="content">
//             <h2>Choose being healthy</h2>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias qui iste saepe deserunt modi.
//              Ea fugiat iusto laborum animi quia numquam tempore, amet saepe pariatur odit quod aliquam sit fugit.</p>
//                 <a href="Healthy.html" class="btn" target="_blank"> Let's start</a>
//         </div>
//     </section>
// <section>
// <div class="title">
//                         <h2 class="titletext"><span>Happy New Year !</span></h2>
//                         <p>Are you making a resolution in the new year? You’ll give yourself your best shot at success if you set a goal that’s doable and meaningful too.</p>
//                     </div>
// </section>

//         </div>
//      );
// }
 
// export default Header;

import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const remind = ["You are pretty!" , "You are strong!" , "You are brave!" , "You are beautiful!" , "Keep going!" , "Have a nice day" , "Be your self!" ,"Love yourself first , you're perfect" ,"keep shining!" ,"You are worth to love!" ,"You Deserve it!" , "No one can get inner peace by pouncing on it" , "Lighten up on yourself. No one is perfect. Gently accept your humanness." , 
    "Nothing external to you has any power over you." , "Be who you are and say what you feel " , "Give your stress wings, and let it fly away." , "The most powerful relationship you will ever have is the relationship with yourself"
] ; 
    const min = 0;
    const max = 16;
    // const rand = Math.floor(min + (Math.random() * (max - min)));
    // console.log(rand)
    const notify = () => toast(remind[Math.floor(min + (Math.random() * (max - min)))]);
    // console.log(remind)
    return ( 
        <div>
            <section className="banner" id="banner" >
                </section>
                <section className="content">
        <div className="content">
            <h2>New year , New one</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias qui iste saepe deserunt modi.
             Ea fugiat iusto laborum animi quia numquam tempore, amet saepe pariatur odit quod aliquam sit fugit.</p>
                {/* <a  id="btn" target="_blank"> Let's start</a> */}
                <div>
        <button id="btn" onClick={notify}>for you <i className="fa fa-heart"></i></button>
        <ToastContainer />
      </div>

        </div>
    </section>


        </div>
     );
}
 
export default Header;