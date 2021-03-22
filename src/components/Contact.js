import { useState } from 'react'
import axios from 'axios'
import FormAlert from './FormAlert'
import { Redirect } from 'react-router'

const Contact = () => {
    window.scrollTo(0, 0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact_number: '',
        message: ''
    })

    const { name, email, contact_number, message } = formData

    const [error, setError] = useState('')
    const [emailMessage, setEmailMessage] = useState({})

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitForm = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, { name, email, contact_number, message })
            .then(res => {
                setEmailMessage(res.data)
                setFormData({
                    name: '',
                    email: '',
                    contact_number: '',
                    message: ''
                })
            })
            .catch(err => {

            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmailMessage({})
        if (name.trim().length < 2) {
            setError("Please Make sure Your name length is atleast 2 character long.")
        }
        else if (contact_number.length < 7 || contact_number.length > 14) {
            setError("Contact must be between 7-14 character long.")
        }
        else if (message.length < 10) {
            setError('message need to be atleast 10 charcter long.')
        }
        else {
            setError('')
            submitForm()
        }
    }



    const handleAlertClose = () => {
        if (error.length < 1) {
            setEmailMessage({})
        } else {
            setError('')
        }
    }

    let backendMessage = null;

    if (Object.keys(emailMessage).length !== 0) {
        if (emailMessage.error) {
            backendMessage = <FormAlert handleClose={handleAlertClose} alertClass='alert-danger' message={emailMessage.error} />
        }
        else if (emailMessage.message) {
            backendMessage = <FormAlert handleClose={handleAlertClose} alertClass='alert-primary' message="Email sent successfully.We will Contact you soon." />
        }
    }
    let frontendMessage = null;


    // Front end Form Validation
    if (error.length > 0) {
        frontendMessage = <FormAlert handleClose={handleAlertClose} alertClass='alert-danger' message={error} />
    }

    return (
        <div className='container mt-5 mb-5'>
            <h4 style={{ textAlign: "center" }}>Please Describe Your Query in Detail.</h4>
            <p style={{ textAlign: "center" }}>Your Data will not be shared with anyone.</p>
            {frontendMessage}
            {backendMessage}
            <form className='mt-3 mb-3' onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name='name' onChange={onChange} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder='Enter Your Email' aria-describedby="emailHelp" name='email' onChange={onChange} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Contact Number</label>
                    <input type="number" maxLength="13" minLength="7" className="form-control" aria-describedby="emailHelp" placeholder='Enter Your Contact Info' name='contact_number' onChange={onChange} value={contact_number} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" placeholder='Your Query' name='message' onChange={onChange} value={message} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>)
}
export default Contact