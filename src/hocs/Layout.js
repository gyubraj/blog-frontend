import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />

        </div>
    )
}
export default Layout;