import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import SingleBlog from './SingleBlog';
import Pagination from './Pagination';
import Spinner from './Spinner';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true)
            try {
                const ress = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(ress.data.results[0])
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog`);
                setBlogs(res.data.results)
                setLoading(false)
                setPrevious(res.data.previous)
                setNext(res.data.next)
                setCount(res.data.count)
                setActive(1)
                setError(false)
            } catch (err) {
                setError(true)
                setLoading(false)
            }
        }

        fetchBlog()
    }, []);

    const visitPage = (page) => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?page=${page}`)
            .then(res => {
                setBlogs(res.data.results)
                setLoading(false)
                setPrevious(res.data.previous)
                setNext(res.data.next)
                setActive(page)
                setError(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
    }

    const previous_result = () => {

        if (previous !== null) {
            setLoading(true)
            axios.get(previous)
                .then(res => {
                    setBlogs(res.data.results)
                    setLoading(false)
                    setPrevious(res.data.previous)
                    setNext(res.data.next)
                    if (previous) {
                        setActive(active - 1)
                    }
                    setError(false)
                })
                .catch(err => {
                    setError(true)
                    setLoading(false)
                })
        }
    }

    const next_result = () => {

        if (next !== null) {
            setLoading(true)
            axios.get(next)
                .then(res => {
                    setBlogs(res.data.results)
                    setLoading(false)
                    setPrevious(res.data.previous)
                    setNext(res.data.next)
                    if (next) {
                        setActive(active + 1)
                    }
                    setError(false)
                })
                .catch(err => {
                    setError(true)
                    setLoading(false)
                })
        }

    }

    if (error) {
        return <Redirect to='error/blog' />
    }


    let blog = null;

    if (blogs) {
        blog = blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />);
    }


    return (
        <div className='container'>
            <CategoryList />

            {!loading ? <>
                <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                        <p className="lead my-3">{featuredBlog.excerpt}</p>
                        <p className="lead mb-0"><Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">Continue reading...</Link></p>
                    </div>
                </div>

                <div className="row mb-2">
                    {blog}
                </div></> : null}
            {blogs.length > 0 ? <Pagination
                itemsperpage={blogs.length}
                count={count}
                active={active}
                visitPage={visitPage}
                previous_result={previous_result}
                next_result={next_result}
            /> : <Spinner />}
        </div>
    );
}
export default Blog;