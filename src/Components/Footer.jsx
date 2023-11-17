import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Sunway Solar Systems 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer