import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const { id, picture, title, category } = donation || {}


    return (
        <div className='border rounded-lg' style={{ background: donation.card_bg }}>
            <Link to={`/donation/${id}`}>
                <div className="">
                    <div className="">
                        <img
                            src={picture}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className=" ">
                            <button className='px-1 font-medium rounded' style={{ backgroundColor: donation.card_bg, color: donation.text_color }}>
                                {category}
                            </button>
                        </div>
                        <p className='text-xl font-semibold' style={{ color: donation.category_bg }}>
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