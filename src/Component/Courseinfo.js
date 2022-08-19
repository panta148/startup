import React from 'react'
import { NavLink } from 'react-router-dom'

function Courseinfo({ pic, title }) {
    return (
        <>
            <div className=" mt-5 mycard" style={{ backgroundColor: '' }}>
                <div className="course">
                    <NavLink to="/"> <img src={pic} alt="no photo" className='img-fluid' /></NavLink>
                    <p>Updated 2/8/2021</p>
                    <h4 className='text-dark'>{title}</h4>
                    <p className='text-muted cstar'>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        <span>(239)</span>
                    </p>
                </div>

            </div>

        </>
    )
}

export default Courseinfo
