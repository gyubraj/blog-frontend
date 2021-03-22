import { Link } from 'react-router-dom';
const categoryList = () => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to='/category/world'>World</Link>
            <Link className="p-2 text-muted" to='/category/entertainment'>Entertainmnet.</Link>
            <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
            <Link className="p-2 text-muted" to='/category/design'>Design</Link>
            <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
            <Link className="p-2 text-muted" to='/category/business'>Business</Link>
            <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
            <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
            <Link className="p-2 text-muted" to='/category/science'>Science</Link>
            <Link className="p-2 text-muted" to='/category/health'>Health</Link>
            <Link className="p-2 text-muted" to='/category/style'>Style</Link>
            <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
            <Link className="p-2 text-muted" to='/category/sport'>Sport</Link>
        </nav>
    </div>
);
export default categoryList;