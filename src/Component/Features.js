import React from 'react'

function Features({ icon, title }) {
    return (
        <>
            <div className="mycard">
                <div className="myicon">
                    <i className={icon}></i>
                    <h4 className='text-dark'>{title}</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates dicta eligendi dignissimos vel ab magnam voluptatum eius vero. Earum.</p>
                </div>

            </div>

        </>
    )
}

export default Features
