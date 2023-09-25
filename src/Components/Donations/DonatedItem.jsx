import PropTypes from 'prop-types';

const DonatedItem = ({ donation }) => {

    const{picture, title, price, category} = donation;

    return (
        <div >
            <div className="card rounded-lg card-side bg-base-100 shadow-xl flex gap-3 items-center">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h3>{category}</h3>
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-red-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedItem;

DonatedItem.propTypes = {
    donation: PropTypes.object,
}