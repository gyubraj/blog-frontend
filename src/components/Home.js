import { Link } from "react-router-dom";

const home = () => {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to Yubraj Blog</h1>
                <p className="lead">
                    You can find blog of different category and on the basis of those category you can filter it too.You can search the blog with the title words.I hope you have a great day.
                </p>
                <hr className="my-4" />
                <p>Click to view awesome blog</p>
                <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check Out Our Blog</Link>
            </div>

        </div>

    );
}
export default home;