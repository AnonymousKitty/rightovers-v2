import './WelcomePage.css'; // Import the CSS for styling
import SideNav from './SideNav';
import fruit_heart from '../assets/images/fruit_heart.png';
import Link from './Link';

const WelcomePage = () => {
    return (
        <div className='flex w-screen'>
            <SideNav />
            <div className="welcomepage w-[100vw]">
                <h2 className="title">Rightovers</h2>
                <p className='intro-sentence'>Leftovers done right!</p>
                <img src={fruit_heart} alt="A bunch of vegetables in the shape of a heart" className='centre-logo'/>
            
                <div className="buttons">
                    <Link link={'/NearYou'} className="grid-item">What's Near Me</Link>
                    <Link link={'/FoodSharing'} className="grid-item">Find Food</Link>
                    <Link link={'/NearMePage'} className="grid-item">Find Foodbank</Link>
                    <Link link={'/Settings'} className="grid-item">Settings</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;