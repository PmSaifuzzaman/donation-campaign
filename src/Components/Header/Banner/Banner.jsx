import image from "../../../assets/banner.jpg"


const Banner = () => {
    return (
        <div className=""   >
            <div className="hero h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${image})`}}>

                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center ">
                        <h1 className=" pt-32 text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
                        <input type="text" />
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;