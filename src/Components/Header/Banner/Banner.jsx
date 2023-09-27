
import bannerImage from "../../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="p-4 relative mb-10">
            <div
                className="hero h-96 relative bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div className="text-center space-y-9">
                        <h1 className="pt-10 text-5xl font-bold text-center text-black">I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search here...." maxLength={20} className="bg-white border pl-2 py-3 rounded-l-lg mt-4" />
                        <button className="btn px-5 py-3 rounded-r-lg bg-[#FF444A] mt-4 text-white font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
