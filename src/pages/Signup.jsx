import react from 'react'


function Signup  ()  {
    
    return (
        <>
            <div className='container-fluid bg-dark  vh-100  '>
                <h1 className='text-light ms-5'>Create new account</h1>
                <a className='text-decoration-none ms-5' href="/log"><span className='text-light' >Already A Member?</span> Login</a>
                <div className='d-flex '>
                    
                    <div className="row mt-5 ms-5 ">
                        <input type="text" placeholder='Firstname'  className="form-control  border-0 bg-light mt-5 w-50"/>
                        <input type="text" placeholder='Lastname'  className="form-control  border-0 mt-5 bg-light w-50" />
                        <input type="email" placeholder='Email'  className="form-control   border-0 bg-light mt-5" />
                        <input type="password" placeholder='Password'  className="form-control  border-0 bg-light mt-5" />
                        <div className='d-flex justify-content-around mt-5 '>
                            <button className='btn btn-light'>Change Method</button>
                            <button className='btn btn-primary'>Create Account</button>
                        </div>
                    </div>
                    
                </div>
              
            </div>
        </>
    )
}

export default Signup
