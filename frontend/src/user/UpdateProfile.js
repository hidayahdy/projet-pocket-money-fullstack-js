import React from "react";



const UpdateProfile = () => {
  return (
    <>
      <section className="py-5 bg-success vh-100">
        <div className="container text-center">
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form>
                  <span className="text-muted">Update Profile</span>
          

                
                  <div className="mb-3 input-group">
                    <input
        
                      className="form-control"
                      type="text"
                      placeholder="Enter firstname"
                    />
                  </div>
           
                  <div className="mb-3 input-group">
                    <input
             
                      className="form-control"
                      type="text"
                      placeholder="Enter lastname"
                    />
                  </div>
           
                  <div className="mb-3 input-group">
                    <input
 
                      className="form-control"
                      type="email"
                      placeholder="Enter email"
                    />
                  </div>
             

                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="submit" class="btn btn-warning">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;