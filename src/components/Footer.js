// import { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Footer = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <footer className="mb-5">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-about wow fadeInUp animated" >
                            <h3>About Developer</h3>
                            <p>
                                This blog is created by Yubraj Upadhaya and please contact me for more information regarding Blog page.
		        			</p>
                            <p>© Yubraj Blog</p>
                        </div>
                        <div className="col-md-4 offset-md-1 footer-contact wow fadeInDown animated" >
                            <h3>Contact Developer</h3>
                            <p><i className="fa fa-map-marker"></i> Gokarna 10, Kathmandu Nepal</p>
                            <p><i className="fa fa-phone"></i> Phone: (+977) 981 88 75 950</p>
                            <p><i className="fa fa-envelope"></i> Email: <a href="mailto:gyubraj104@gmail.com">gyubraj104@gmail.com</a></p>
                            <p><i className="fa fa-linkedin"></i> Linkedin: gyubraj104</p>
                        </div>
                        <div className="col-md-4 footer-links wow fadeInUp animated" >
                            <div className="row">
                                <div className="col">
                                    <h3>Links</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p><Link className="scroll-link" to='/'>Home</Link></p>
                                    <p><Link to="/blog">Blog</Link></p>
                                    <p><Link to="/contact">Contact</Link></p>
                                    <p><Link to="">About</Link></p>
                                </div>
                                <div className="col-md-6">
                                    <p><Link to="">Plans &amp; pricing</Link></p>
                                    <p><Link to="">Affiliates</Link></p>
                                    <p><Link to="">Terms</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        //     <>
        //         <Button variant="primary" onClick={handleShow}>
        //             Launch demo modal
        //   </Button>

        //         <Modal show={show} onHide={handleClose}>
        //             <Modal.Header closeButton>
        //                 <Modal.Title>Modal heading</Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="secondary" onClick={handleClose}>
        //                     Close
        //       </Button>
        //                 <Button variant="primary" onClick={handleClose}>
        //                     Save Changes
        //       </Button>
        //             </Modal.Footer>
        //         </Modal>
        //     </>
    );
}
export default Footer