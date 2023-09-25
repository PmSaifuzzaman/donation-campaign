import { useEffect, useState } from "react";

import DonatedItem from "../../Components/Donations/DonatedItem";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if(setDonations){
            setDonations(donatedItems)
        }
        else{
            setNoDataFound("No data found");
        }
        
    },[]);

    return (
        <div>
            { noDataFound? <p className="flex justify-center items-center">{noDataFound}</p> : 

            <div className='grid grid-cols-2 gap-5'>
                {
                   donations?.map(donation => <DonatedItem key={donations.id} donation={donation}></DonatedItem>) 
                }
            </div>

            }
        </div>
    );
};

export default Donation;