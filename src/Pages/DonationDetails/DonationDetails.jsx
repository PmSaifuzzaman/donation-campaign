import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const DonationDetails = () => {
    // State declear
    const [donation, setDonation] = useState([]);

    const { id } = useParams();


    const donations = useLoaderData();


    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id === id);
        setDonation(findDonation)
    }, [id, donations]);


    const handleAddToDonation = () => {
        console.log(donation);

        const addedDonatedItemsArray = [];

        const donatedItems = JSON.parse(localStorage.getItem('donations'));

        if (!donatedItems) {
            addedDonatedItemsArray.push(donation);
            localStorage.setItem('donations', JSON.stringify(addedDonatedItemsArray));
            swal("Good job!", "Donation added!", "success");
        }
        else {

            const isExist = donatedItems?.find(donation => donation.id === id);
            if (!isExist) {
                addedDonatedItemsArray.push(...donatedItems, donation);
                localStorage.setItem('donations', JSON.stringify(addedDonatedItemsArray));
                swal("Good job!", "Donation added!", "success");
            }
            else {
                swal("Opps!", "Already exist!", "error");
            }


        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="card w-2/3 py-5 relative">
                <figure>
                    <img src={donation.picture} alt="Shoes" className="rounded-xl w-full h-96" />
                </figure>
                <div className="absolute top-0 right-0 bottom- left-0 mt-80 ml-12">
                    <button onClick={handleAddToDonation} className="btn px-4 py-2 rounded text-white font-semibold" style={{ background: donation.category_bg }}>Donate {donation.price}</button>
                </div>
                <div className="card-body pt-5 space-y-3">
                    <h2 className="card-title text-4xl font-bold">{donation.title}</h2>
                    <p>{donation.description}</p>
                </div>
            </div>
        </div>

    );
};

export default DonationDetails;