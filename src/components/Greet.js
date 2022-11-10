import logo from '../logo.svg';
import '../App.css';

const Home = () => {
    return (
        <>
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" style={{ width: "100px" }} />
                <div className="App-header">
                   Welcome to V-news
                </div>
            </div>
        </>
    );
}
export default Home