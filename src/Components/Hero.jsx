

function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='content'>
                    <p>Call us</p>
                    <p>1-800-123-4567</p>
                    <p>Because Money</p>
                    <p>Doesn't come with instructions</p>
                    <button href='/' className='button'>Free Consultation</button>
                </div>
            </div>
            <div className="container col-xxxl-8 px-4 py-5 my-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHwwfHx8MTYyMTQ0NjkyNg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="lc-block mb-3">
                            <div>
                                <h2 className="fw-bold display-5">Responsive left-aligned hero with image</h2>
                            </div>
                        </div>
    
                        <div className="lc-block mb-3">
                            <div>
                                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                </p>
                            </div>
                        </div>
    
                        <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                            <a className="btn btn-primary px-4 me-md-2" href="#" role="button">Get a free quote!</a>
                        </div>
    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero