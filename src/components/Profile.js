import './Profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Spinner from './Spinner';
const Profile = () => {
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/alldata/1`)
            .then(res => {
                setUserData(res.data)
                setError(false)
            })
            .catch(err => {
                setError(true)
            })
    }, [])

    if (error) {
        return <Redirect to='/error/profile' />
    }
    let profileData
    if (Object.keys(userData).length !== 0) {
    }

    return (
        Object.keys(userData).length !== 0 ? <>
            <div class="row py-5 px-4">
                <div class="col-xl-6 col-md-8 col-sm-10 mx-auto">
                    <div class="bg-white shadow rounded overflow-hidden">
                        <div class="px-4 pt-0 pb-4 bg-dark " >
                            <div class="media align-items-end profile-header">
                                <div class="profile mr-3"><img src={userData.profile_pic} alt="profile_picture" width="130" class="rounded mb-2 img-thumbnail" /></div>
                                <div class="media-body mb-5 text-white">
                                    <h4 class="mt-0 mb-0">{userData.user}</h4>
                                    <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>{userData.city}, {userData.country}</p>
                                </div>
                            </div>
                        </div>

                        <div class="py-4 px-4">
                            <div class="py-4">
                                <h5 class=" mt-4 mb-3">Description</h5>
                                <div class="p-4 bg-light rounded shadow-sm">
                                    <p class="font-italic mb-0">{userData.description}</p>
                                </div>
                                <h5 class=" mt-4 mb-3">Contact Information</h5>
                                <div class="p-4 bg-light rounded shadow-sm">
                                    <div className="row" style={{ textAlign: 'left' }}>
                                        <div className="col-3">
                                            <i className="fa fa-envelope"></i>  Email
                                            </div>
                                        <div className="col-9">
                                            <a href="mailto:gyubraj104@gmail.com">{userData.email}</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{ textAlign: 'left' }}>
                                        <div className="col-3">
                                            <i className="fa fa-phone"></i>  Contact
                                            </div>
                                        <div className="col-9">
                                            {userData.contact_no}
                                        </div>
                                    </div>
                                </div>

                                <h5 class=" mt-4 mb-3">Address Information</h5>
                                <div class="p-4 bg-light rounded shadow-sm">
                                    <div className="row" style={{ textAlign: 'left' }}>
                                        <div className="col-3">
                                            Country
                                            </div>
                                        <div className="col-9">
                                            Nepal
                                            </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{ textAlign: 'left' }}>
                                        <div className="col-3">
                                            City
                                            </div>
                                        <div className="col-9">
                                            Kathmandu
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> : <Spinner />
    )
}
export default Profile