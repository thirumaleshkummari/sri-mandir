

import './index.css'

const NavBar = () => {
    return(
        <nav className='nav-container'> 
            <div className="nav-mid-container">
                <div className="logo-and-title">
                    <img alt="srimandir-logo" src="https://play-lh.googleusercontent.com/cxjgWIVHy2T9ufVyyqaR2GayNcAqyTeCrQWpIQIVXoZgE4_7SrU6PcnnRPjScumzYA" className="sri-mandir-logo"/>
                    <h1 className="title">Sri Mandir</h1>
                </div>
                <ul className="list-container">
                    <li className="list-items">Home</li>
                    <li className="list-items">Puja</li>
                    <li className="list-items">Panchag</li>
                    <li className="list-items">Temples</li>
                    <li className="list-items"><span>Library</span></li>
                </ul>
                
          <select id="status" className="form-control">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
            </div>
        </nav>
    )
}

export default NavBar