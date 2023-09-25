import { useEffect, useState } from "react";

import DonatedItem from "../../Components/Donations/DonatedItem";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState('');

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if (setDonations) {
            setDonations(donatedItems);
        }
        else {
            setNoDataFound("No data found");
        }

    }, []);

    return (
        <div>

            {noDataFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noDataFound}</p>
            ) : (
                <div>


                    <div className="grid grid-cols-2 gap-5">
                        {
                            donations?.map((donation) => (
                                <DonatedItem key={donation.id} donation={donation}></DonatedItem>
                            ))


                        }
                    </div>


                </div>
            )}

        </div>
    );
};

export default Donation;