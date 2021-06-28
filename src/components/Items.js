

function Items() {

    return (<>
        <div className="row">
            <div className="col-6 offset-3 d-flex justify-content-around pb-3">

                <div className="card col-12 task-items-card" >
                    <ul className="list-group list-group-flush text-dark ">
                        <li className="list-group-item d-flex justify-content-between align-items-center"><i className=" text-secondary fa fa-tag fa-m" aria-hidden="true"> Item 1</i> 
                            <form>
                                <input type="checkbox" />
                                <i className="mx-3 fa fa-trash text-danger fa-sm" aria-hidden="true"></i>
                            </form>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">&diams; Item 1
                            <form>
                                <input type="checkbox" />
                                <i className="mx-3 fa fa-trash fa-sm text-danger" aria-hidden="true"></i>
                            </form>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    </>)
}

export default Items;