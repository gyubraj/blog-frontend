import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleBlog from './SingleBlog';
import Pagination from './Pagination';
import Spinner from './Spinner';
import { Redirect } from 'react-router';
const SearchBlog = (props) => {
    const [searchData, setSearchData] = useState([]);
    const search = props.match.params.id.replace('_', ' ');
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [active, setActive] = useState(1)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getSearchdata = async () => {
            setLoading(true);
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/search/`, { search })
                setSearchData(res.data.results);
                setLoading(false);
                setPrevious(res.data.previous);
                setNext(res.data.next);
                setCount(res.data.count)
                setActive(1)
                setError(false)
            } catch (err) {
                setError(true)
                setLoading(false)
            }
        }
        getSearchdata()

    }, [search])

    const visitPage = (page) => {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_URL}/api/blog/search/?page=${page}`, { search })
            .then(res => {
                setSearchData(res.data.results)
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

        if (previous) {
            setLoading(true)
            axios.post(previous, { search })
                .then(res => {
                    setSearchData(res.data.results)
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
        if (next) {
            setLoading(true)
            axios.post(next, { search })
                .then(res => {
                    setSearchData(res.data.results)
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


    let searchDatats = null;
    if (searchData.length > 0) {
        let searchDatatss = searchData.map(blog => <SingleBlog key={blog.slug} blog={blog} />)
        searchDatats = (
            <>
                <div className="row mb-2">
                    {searchDatatss}
                </div>
                <Pagination
                    itemsperpage={searchData.length}
                    count={count}
                    active={active}
                    next_result={next_result}
                    previous_result={previous_result}
                    visitPage={visitPage}
                />

            </>
        )
    }

    return (
        <div className='container'>
            <h3 className="mb-4 mt-4">Searched Result For {search}</h3>
            {!loading ? searchDatats : <Spinner />}
        </div>
    );
}

export default SearchBlog;