import { useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function PersonalInfo() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [password, setPassword] = useState('');

    function handleOnClickShowDropDown() {
        setShowDropDown(true);
    }

    function handleOnClickShowPersonalInfo() {
        if (password === 'flametree') {
            setShowPersonalInfo(true);
        } else {
            setPassword('');
            alert('Incorrect password, please try again.');
        }
    }

    function handleOnChange({ target }) {
        setPassword(target.value);
    }

    return (
        <div className="flex">
            {
                showDropDown
                ?
                <div className="flex w-screen">
                    {
                    showPersonalInfo
                    ?
                    <div className="m-auto w-full p-4 bg-resume-charcoal text-resume-white drop-shadow-xl flex">
                        <div className="m-auto">
                            <h1 className='text-3xl pb-2'>Personal Info</h1>
                            <ul>
                                <li>Full Name: Jesse James Watson</li>
                                <li>Address: 5 Flametree Tce, Banora Point NSW, 2486</li>
                                <li>Phone Number: 0424914378</li>
                                <li>Email: jessewatson04@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="m-auto w-full p-4 bg-resume-charcoal text-resume-white flex gap-4">
                        <div className="m-auto">
                            <input className="mr-2 px-2 rounded-md text-resume-dark-blue" value={password} type="password" placeholder="Enter password." onChange={handleOnChange} />
                            <button className="underline hover:no-underline" onClick={handleOnClickShowPersonalInfo}>Get Access</button>
                        </div>
                    </div>
                    }
                </div>
                :
                <div onClick={handleOnClickShowDropDown} className="m-auto w-full p-4 bg-resume-charcoal text-resume-white text-center flex hover:opacity-90 active:opacity-100">
                    <div className="flex gap-2 m-auto">
                        <HiOutlineChevronDoubleDown className="my-auto" />
                        <h1>Show Personal Info</h1>
                        <HiOutlineChevronDoubleDown className="my-auto" />
                    </div>
                </div>
            }
            
        </div>
    );
}