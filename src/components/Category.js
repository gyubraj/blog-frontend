import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleBlog from './SingleBlog';
import CategoryList from './CategoryList';
import AlertShow from './Alert';
import Pagination from './Pagination';
import Spinner from './Spinner';
import { Redirect } from 'react-router';


const Category = (props) => {

    const category = props.match.params.id;
    const [categoryData, setCategoryData] = useState([]);
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(1)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true)
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category });
                setCategoryData(res.data.results);
                setPrevious(res.data.previous);
                setNext(res.data.next);
                setCount(res.data.count);
                setLoading(false)
                setError(false)
                setActive(1)
            } catch (err) {
                setError(true)
                setLoading(false)
            }
        }
        fetchCategoryData();
    }, [category]);

    const visitPage = (page) => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category?page=${page}`, { category })
            .then(res => {
                setCategoryData(res.data.results)
                setPrevious(res.data.previous)
                setNext(res.data.next)
                setActive(page)
            })
            .catch(err => {

            })
    }

    const previous_result = () => {
        if (previous !== null) {
            setLoading(true)
            axios.post(previous, { category })
                .then(res => {
                    setCategoryData(res.data.results)
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
            axios.post(next, { category })
                .then(res => {
                    setCategoryData(res.data.results)
                    setLoading(false)
                    setPrevious(res.data.previous)
                    setNext(res.data.next)
                    if (next) {
                        setActive(active + 1)
                    }
                    setError(false)
                })
                .catch(err => {
                    setError(false)
                    setLoading(false)

                })
        }

    }

    if (error) {
        return <Redirect to='/blog' />
    }


    let categoryDatas = null;
    if (categoryData.length > 0) {
        let categoryDatass = categoryData.map(blog => <SingleBlog key={blog.slug} blog={blog} />)
        categoryDatas = (
            <>
                <div className='row mb-2'>
                    {categoryDatass}
                </div>

                <Pagination
                    itemsperpage={6}
                    count={count}
                    active={active}
                    visitPage={visitPage}
                    previous_result={previous_result}
                    next_result={next_result}
                />
            </>

        )
    } else {
        categoryDatas = <AlertShow
            variant='primary'
            heading={`No Blog of category ${category}`}
            message="This category blog is empty .Please look for other category blog from above links.I hope you have a great day"
        />
    }

    return (
        <div className='container'>
            <CategoryList />
            {loading ? <Spinner /> : categoryDatas}

        </div>
    );
}

export default Category;
