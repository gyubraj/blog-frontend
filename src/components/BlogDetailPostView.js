import { dateTimeConvert } from '../utility/DateTimeConvert';
const blogDetailPostView = (props) => {

    const createBlog = () => {
        return { __html: props.blogData.body }
    }

    return (<>
        <h3>{props.blogData.title}</h3>
        <ul className="post-meta list-inline">
            <li className="list-inline-item">
                <i className="fa fa-user-circle-o"></i> <a href="#">{props.blogData.category}</a>
            </li>
            <li className="list-inline-item">
                <i className="fa fa-calendar-o"></i> <a href="#">{dateTimeConvert(String(props.blogData.date_created), 'date')}</a>
            </li>
            <li className="list-inline-item">
                <i className="fa fa-tags"></i> <a href="#">{dateTimeConvert(String(props.blogData.date_created), 'time')}</a>
            </li>
        </ul>
        {/* <p>{props.blogData.paragraph1}</p>
        <p className="lead">{props.blogData.paragraph2}</p>
        <p>{props.blogData.paragraph3}</p> */}
        <p dangerouslySetInnerHTML={createBlog()}></p>
        <ul className="list-inline share-buttons">
            <li className="list-inline-item">Share Post:</li>
            <li className="list-inline-item">
                <a href="#" className="social-icon-sm si-dark si-colored-facebook si-gray-round">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-facebook"></i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="#" className="social-icon-sm si-dark si-colored-twitter si-gray-round">
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-twitter"></i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="#" className="social-icon-sm si-dark si-colored-linkedin si-gray-round">
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </>
    )
}

export default blogDetailPostView;