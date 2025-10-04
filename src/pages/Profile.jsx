import react from 'react'

function Profile() {
    

  return (
    <>
     <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="card p-4 shadow-lg bg-secondary" style={{ width: "38rem", height: "40vh" }}>
        <h1 className='text-center'><i className="fa-solid fa-user fa-2xl"></i></h1>
        <h3 className="mb-3 mt-4 fw-bold">Profile</h3>
        <p><strong>First Name:</strong></p>
        <p><strong>Last Name:</strong> </p>
        <p><strong>Email:</strong></p>
      </div>
    </div>

    </>
  )
}

export default Profile
