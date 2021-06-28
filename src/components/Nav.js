

function Nav(){

    return (<>
    <header className="main-header">
        {/* <a href="/#">
            <img src="../images/art.png" style={{height:"60px",width:"auto",borderRadius:"40%"}} alt="brand-logo"></img>
            <div className="brand-name  ">
                Family Tasks Tracker
            </div>
        </a> */}
        <nav className="main-nav">
            <ul>
                <li>
                   <a href="/#">Add New +</a> 
                </li>
                <li>
                <a href="/#">  Completed Tasks</a> 
                </li>
            </ul>
        </nav>
    </header>
    </>)
}

export default Nav;