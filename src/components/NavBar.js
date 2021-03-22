import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { Nav, Form, FormControl, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Navbars = () => {

    const [formData, setFormData] = useState({
        search: ''
    });
    const [searchData, setSearchData] = useState('');
    const { search } = formData
    const [boolSearch, setBoolSearch] = useState(false)

    const onChange = e => {
        setBoolSearch(false);
        setFormData({ [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (search.trim() !== '') {
            setSearchData(search.trim().replace(' ', '_'))
            setFormData({
                search: ''
            })
            setBoolSearch(true)
        } else {
            setBoolSearch(false)
        }

    }



    return (
        <>
            <Navbar bg="light" expand="lg">
                <LinkContainer to='/'><Navbar.Brand>Yubraj Blog</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
                        <LinkContainer to='/blog'><Nav.Link >Blog</Nav.Link></LinkContainer>
                        <LinkContainer to='/contact'><Nav.Link >Contact</Nav.Link></LinkContainer>
                        <LinkContainer to='/profile'><Nav.Link >Profile</Nav.Link></LinkContainer>
                    </Nav>
                    <Form inline onSubmit={onSubmit}>
                        <FormControl type="text" name='search' value={search} onChange={onChange} placeholder="Search" className="mr-sm-2" />
                        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {boolSearch ? <Redirect to={`/search/search_title=${searchData}`} /> : null}
        </>
    )

    // return (
    //     <>
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //             <Link className="navbar-brand" to='/'>Yubraj Blog</Link>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav mr-auto">
    //                     <li className="nav-item active">
    //                         <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
    //                     </li>
    //                     <li className="nav-item active">
    //                         <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
    //                     </li>
    //                     <li className="nav-item active">
    //                         <NavLink className="nav-link" exact to='/contact'>Contact</NavLink>
    //                     </li>
    //                 </ul>
    //                 <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
    //                     <input className="form-control mr-sm-2" type="text" placeholder="Search" name='search' aria-label="Search" value={search} onChange={onChange} />
    //                     <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
    //                 </form>
    //             </div>
    //         </nav>
    //         {boolSearch ? <Redirect to={`/search/search_title=${searchData}`} /> : null}
    //     </>
    // );
}
export default Navbars;