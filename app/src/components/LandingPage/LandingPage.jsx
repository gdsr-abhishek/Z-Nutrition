
import TopBar from '../TopBar/TopBar.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
export default function LandingPage(){
 return(
<>
<TopBar/>
<div className='bg-gradient-to-br from-lime-800 to-lime-600 p-40 text-center text-yellow-50'>
    <div className='m-8'>
    <h1> <span className='text-4xl font-sans'>Fueling Dreams, Nourishing Ambitions </span> <br /> <span className='text-lg font-bold'>With ZNutrition</span> </h1>
    </div>
    <div>
        <button className='shadow-md bg-slate-50 text-lime-600 rounded-full p-2 hover:bg-lime-600 hover:text-slate-50 hover:shadow-xl'>Get Started <KeyboardDoubleArrowRightIcon/></button>
    </div>
</div>
<div className='bg-slate-100 py-60 text-center text-slate-500'>
    <RestaurantMenuIcon className=' py-2 text-lime-600 align-top' sx={{fontSize:60}}/>
    <div className='m-5  bg-slate-100'>
        <h1 className='text-3xl'>Optimize your health on the go with our convenient health tracking solution</h1>
    </div>
</div>
<div className='bg-gradient-to-br py-40 from-lime-800 to-lime-600 p-40 text-center text-yellow-50'>

<SoupKitchenIcon className=' py-2 text-slate-50 align-top' sx={{fontSize:60}}/>
    <div className='m-5  text-slate-200'>
        <h1 className='text-3xl'>If it's edible, it resides in this space</h1>
    </div>
</div>
<div className='bg-black p-2 text-center text-yellow-50'><footer>
        <div class="footer-content">
            <p>&copy; 2024 Z-Nutrition. All rights reserved.</p>
        </div>
    </footer></div>
</>
 )
}