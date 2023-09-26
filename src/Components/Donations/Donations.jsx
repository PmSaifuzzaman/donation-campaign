import DonationCard from "./DonationCard";
import PropTypes from 'prop-types';


const Donations = ({ donations }) => {
    console.log(donations)
    return (
        <div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donations;

Donations.propTypes = {
    donations: PropTypes.object,
}