import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div>
                Created by &nbsp; <a target="_blank" href="https://github.com/aeskay" style={{color: 'lightblue'}}> aeskay</a>
            </div>
            <div className='soc-icons'>
                <a href='https://www.facebook.com/alalade.samuelsambluez'>
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href='https://twitter.com/iamaeskay'>
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href='https://github.com/aeskay'>
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href='https://kr.linkedin.com/in/alalade-samuel'>
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href='https://api.whatsapp.com/send/?phone=2348133355944&text&app_absent=0'>
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a href='mailto:alaladesambluez@gmail.com'>
                    <i class="fa-solid fa-circle-envelope"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
