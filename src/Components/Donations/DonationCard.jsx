import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const {id, picture, title, category } = donation || {}


    return (
        <div>
            <Link to={`/donations/${id}`}>
                <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img
                            src={picture}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {category}
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;

DonationCard.propTypes = {
    donation: PropTypes.object,
}