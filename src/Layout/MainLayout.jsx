import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Toaster></Toaster>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
                {/*Packet  */}
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                {/* Footer */}
                <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;