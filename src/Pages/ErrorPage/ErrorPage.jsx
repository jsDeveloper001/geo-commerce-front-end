import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Page not found.</p>
            <Link to={"/"} className='btn'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;