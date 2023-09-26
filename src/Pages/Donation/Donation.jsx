import { useEffect, useState } from "react";

import DonatedItem from "../../Components/Donations/DonatedItem";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if (donatedItems) {
            setDonations(donatedItems);
            
        }
        else {
            setNoDataFound("No data found");
            
        }

    }, []);

    const handleDeleteall = () => {
        localStorage.clear();
        setDonations([]);
        setNoDataFound("No data found");
    }

    return (
        <div>

            {noDataFound ? (
              <p className="text-center my-44 font-bold">{noDataFound}</p>
            ) : (
                <div>
                    {
                        donations.length > 0 && <button onClick={handleDeleteall} className=" my-6 mx-auto block btn px-5 py-2 bg-red-500  text-white">Delete all Donations</button>
                    }

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