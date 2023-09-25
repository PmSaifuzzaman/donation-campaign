import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    // State declear
    const [donation, setDonation] = useState([]);

    const { id } = useParams();


    const donations = useLoaderData();


    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id === id);
        setDonation(findDonation)
    }, [id, donations]);
    console.log(donation)

    return (
        <div className="flex items-center justify-center">
            <div className="card w-screen bg-base-100 shadow-xl py-10">
                <figure className="px-10 py-10 flex items-center justify-center">
                    <img src={donation.picture} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center space-y-5">
                    <h2 className="card-title">{donation.title}</h2>
                    <p>{donation.description}</p>
                    <div className="card-actions">
                        <button className="btn bg-red-600">Donate {donation.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;