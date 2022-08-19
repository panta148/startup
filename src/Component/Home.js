import React from 'react'
import Features from './Features'
import Courseinfo from './Courseinfo'
import course from './Coursedata'

function Home() {
    return (
        <>
            <div className="header" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url(./photo/bg1.jpg)" }}>

                <h5>Enhance Your Future With NEXUS</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, architecto molestiae dolorem molestias quas facilis fugit saepe similique accusamus reprehenderit eveniet, officia autem cum ex. Ratione debitis minus commodi. Minima.</p>

                <div className="mybtn">
                    <button className='lbtn'>Learn More</button>
                    <button className='rbtn'>Visit Course</button>
                </div>

            </div>
            <div className="container  mt-3 features">
                <h3 className='text-center mt-4'>Awesome Features</h3>
                <p className='text-center text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, odio?</p>
                <div className="container mt-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12">
                            <Features icon='fa fa-graduation-cap fa-4x' title='Scholarship Facility' />
                        </div>
                        <div className="col-md-4 col-12">
                            <Features icon='fa fa-book fa-4x' title='Sell Online Course' />
                        </div>
                        <div className="col-md-4 col-12">
                            <Features icon='fa fa-certificate fa-4x' title='Global Certificate' />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container  mt-5 ">
                <h3 className='text-center mt-4'>Our Popular Courses</h3>
                <p className='text-center text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, odio?</p>
                <div className="container mt-4">
                    <div className="row align-items-center">
                        {course.map((ele) => {
                            return <div className="col-md-4 col-12">
                                <Courseinfo pic={ele.p} title={ele.title} />
                            </div>

                        })


                        }


                    </div>
                </div>
            </div>
            <div className="mt-5 contact" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url(./photo/contact1.webp)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-6 lpart">
                            <h4 className='text-light'>Get 100 Online Course for Free</h4>
                            <h5 className='text-warning'>Register To Get It</h5>
                            <div className="time">
                                <div className="size">
                                    18 Days
                                </div>
                                <div className="size">
                                    23 Hours
                                </div>
                                <div className="size">
                                    06 mins
                                </div>
                                <div className="size">
                                    58 secs
                                </div>
                            </div>

                        </div>
                        <div className="mt-4 col-md-4 col-6 mycontact">
                            <h4 className='text-muted'>Create An Account</h4>
                            <form action="">
                                <input type="text" placeholder="Name" className='form-control my-2' />
                                <input type="text" placeholder="Email addresss" className='form-control my-2' />
                                <input type="text" placeholder="Phone Number" className='form-control my-2' />
                                <input type="submit" value="Visit Course" className='btn btn-warning my-2' />
                            </form>


                        </div>
                    </div>
                </div>

            </div>

            <div className=" mt-4 footer">

                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <h5>Top Product</h5>
                            <p>Course</p>
                            <p>Course</p>
                            <p>Course</p>
                            <p>Course</p>
                            <p>Course</p>
                        </div>
                        <div className="col-md-2 col-6"></div>
                        <div className="col-md-2 col-6"></div>
                        <div className="col-md-2 col-6"></div>
                        <div className="col-md-2 col-6"></div>
                        <div className="col-md-2 col-6"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
