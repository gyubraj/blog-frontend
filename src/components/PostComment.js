import { useState } from 'react';
import FormAlert from './FormAlert';

const PostComment = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        comment: '',
        name: ''
    });
    const { email, comment, name } = formData;

    const [error, setError] = useState(false);

    const onChange = e => {
        console.log(comment)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleAlertClose = () => {
        setError(false)
    }
    let errorMessage = null;
    if (error) {
        errorMessage = <FormAlert handleClose={handleAlertClose} alertClass='alert-danger' message="Unable to post Comment" />
    }
    return (
        <>
            <hr className="mb40" />
            <h4 className="mb40 text-uppercase font500">Post a comment</h4>
            <form onSubmit={e => props.upload(e, name, email, comment, props.blog, setFormData, setError)}>
                {errorMessage}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" name='name' value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" name='email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Comment</label>
                    <textarea className="form-control" rows="5" placeholder="Comment" name="comment" value={comment} onChange={onChange} required />
                </div>
                <div className="clearfix float-right">
                    <button className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        </>
    );
}
export default PostComment;