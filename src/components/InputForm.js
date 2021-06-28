

function InputForm() {

    return (<>

        <form className="form-inline d-flex justify-content-center align-items-center pb-3">
            
            
           <input className="form-control mx-3 " type="text" id="task"></input>
           <button type="button" className="btn btn-primary m-1">Add</button>
        </form>

    </>)
}
export default InputForm;