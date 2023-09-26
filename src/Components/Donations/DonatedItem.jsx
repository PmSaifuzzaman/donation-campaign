import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedItem = ({ donation }) => {

    const { id, picture, title, price, category } = donation;

    return (
        <div>
            <div className="card rounded-lg card-side bg-base-100 shadow-xl flex gap-3 items-center" style={{ background: donation.card_bg }}>
                <figure className='h-full w-1/2'><img src={picture} alt="Photos" /></figure>
                <div className="card-body space-y-2 py-2">
                    <button className='px-1 font-medium rounded' style={{ backgroundColor: donation.card_bg, color: donation.text_color }}>{category}</button>
                    <h2 className="card-title text-xl font-semibold" style={{ color: donation.category_bg }} >{title}</h2>
                    <p className='font-semibold' style={{ color: donation.category_bg }}>{price}</p>
                    <div className="card-actions justify-end">

                    </div>
                    <Link to={`/donation/${id}`}>
                        <button className="btn px-4 py-2 rounded text-white font-semibold" style={{ background: donation.category_bg }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedItem;

DonatedItem.propTypes = {
    donation: PropTypes.object,
}