

function Nav(){

    return (<>
    <header className="main-header">
        <a href="/#">
            <img src="../images/art.png" style={{height:"60px",width:"auto"}} alt="brand-logo"></img>
            <div className="brand-name">
                Family Tasks Tracker
            </div>
        </a>
        <nav className="main-nav">
            <ul>
                <li>
                   <a href="/#">Create New Member</a> 
                </li>
                <li>
                <a href="/#">  View All Completed Tasks</a> 
                </li>
            </ul>
        </nav>
    </header>
    </>)
}

export default Nav;