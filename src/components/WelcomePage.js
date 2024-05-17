import './WelcomePage.css'; // Import the CSS for styling
import SideNav from './SideNav';
import heart_logo from '../assets/images/heart_logo.png';
import Link from './Link';

const WelcomePage = () => {
    return (
        <div className='flex w-screen'>
            <SideNav />
            <div className="welcomepage w-[100vw]">
                <h2 className="title">Rightovers</h2>
                <p className='intro-sentence'>Leftovers done right!</p>
                <img src={heart_logo} alt="A bunch of vegetables in the shape of a heart" width="35%" height="35%"/>
            
                <div class="buttons">
                    <Link link={'/NearYou'} hasRounded={true}>What's Near Me</Link>
                    <Link link={'/FoodSharing'} hasRounded={true} isPrimary={true}>Find Food</Link>
                    <Link link={'/NearMePage'} hasRounded={true}>Find Foodbank</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;