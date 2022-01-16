const Footer = () => {
    return ( 
        <div>
           <footer id="footer">
            <div className="footer pt-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-6 text-center">
                            <div className="footer-social pb-4 text-center">
                                <span  className="titletext" style={{color: 'rgb(185, 142, 118)' , fontWeight:'bold'  }}>Planner</span>
                                {/* <h2 className="titletext"><span> New Year</span> New One ... </h2> */}
                                <a href="#"><i className="fa fa-facebook-f"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                               
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="newletter"> 
                                <div className="d-flex">
                                    <input className="form-control" placeholder="Email Address Here" type="email" />
                                    <button className="main-btn" id="submit" >Subscribe</button>
                                </div>
                            </form>
                        </div>
                        {/* <div class="col-sm-12">
                            <div class="footer-copy">
                                <div class="copy-right text-center pt-5">
                                    <p class="text-light"> @2021 .Baker All rights reserved</p>

                                </div>

                            </div>

                        </div> */}

                    </div>

                </div>

            </div>

        </footer>

        </div>
     );
}
 
export default Footer;