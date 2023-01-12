import React from 'react'
import {Link} from 'react-router-dom'
import './entrance.css'
function EntrancePage(props) {
    return (
        <div className='main-conatiner'> 
          <Link to='/galery'><img src="https://play-lh.googleusercontent.com/gB_5Ev7KKRhwaTLNQgpo6zCpHIiwhyGISWv4ANkdatbmLlPeaMJDCmQChVojJeauwCw=w240-h480-rw" alt=""/></Link>
        </div>
    );
}

export default EntrancePage;