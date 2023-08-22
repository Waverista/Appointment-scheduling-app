import React from 'react'
import './Consultantprofile.css'

function Consultantprofile() {
  return (
    <><div class='cotainer-xl px-4 mt-4' />
      <hr class="mt-0 mb-4" />
      <div class="row">
        <div class="col-xl-4">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
              <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
              <label class="form-label" for="customFile">Upload your image</label>
              <input type="file" class="form-control" id="customFile" accept="image/png, image/jpeg"/>
              {/* <button size="small" color="success" class="btn btn-success" type="button">Upload image</button> */}
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">Name</label>
                    <input class="form-control" id="inputFirstName" type="text" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">Email</label>
                    <input class="form-control" id="inputFirstName" type="text" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="mobile">Phone number</label>
                    <input class="form-control" id="mobile" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="category">Job type</label>
                    <select class="form-select" id='jType' aria-label='Dropdown'>
                      <option value={0}>IT</option>
                      <option value={0}>Networking</option>
                      <option value={0}>Human resource</option>
                    </select>
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="country">Country</label>
                    <input class="form-control" id="country" />
                  </div>
                </div>
                <button class="btn btn-success" type="button">Save changes</button>
              </form>
            </div>

            <div class="card mb-4">
              <div class="card-header">Add available time</div>
              <div class="card-body">
                <form>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="startTime">Start time</label>
                      <input class="form-control" id="startTime" type="time" />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="endTime">End time</label>
                      <input class="form-control" id="endTime" type="time" />
                    </div>
                  </div>
                  <button class="btn btn-success" type="button">Add time</button>
                </form>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-header">Change password</div>
              <div class="card-body">
                <form>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="currentPass">Current password</label>
                      <input class="form-control" id="currentPass" type="text" />
                    </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="newPass">New password</label>
                      <input class="form-control" id="newPass" type="text" />
                    </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="confirmNewPass">Cinfirm new password</label>
                      <input class="form-control" id="confirmNewPass" />
                    </div>
                  </div>
                  <button class="btn btn-success" type="button">Update password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Consultantprofile