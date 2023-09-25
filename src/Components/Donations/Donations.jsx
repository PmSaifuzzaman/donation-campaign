import DonationCard from "./DonationCard";
import PropTypes from 'prop-types';


const Donations = ({donations}) => {
    console.log(donations)
    return (
        <div>
            <h2 className="text-center text-3xl my-5"> All Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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