import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div>
            <div className='p-3 space-y-2 mb-6'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>
            <div className='p-3 mb-6'>
                <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg
                ' href="">
                    <FaFacebookF className='mr-3'></FaFacebookF>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x
                ' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg
                ' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/** q zone */}
            <div className='p-3 space-y-2 mb-6'>
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt=""></img>
                <img src={qZone2} alt=""></img>
                <img src={qZone3} alt=""></img>
            </div>
        </div>
    );
};

export default RightNav;