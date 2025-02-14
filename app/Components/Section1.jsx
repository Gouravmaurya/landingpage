import Navbar from "./Navbar";

const Section1 = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                {/* Large background ring with gradient */}
                <div className="absolute w-[600px] h-[600px] -z-20 rounded-full -right-48 -top-48 bg-gradient-to-r from-blue-300/20 via-blue-500/20 to-blue-700/20 p-2">
                    <div className="w-full h-full rounded-full bg-white" />
                </div>
                
                {/* Middle ring with gradient */}
                <div className="absolute w-[450px] h-[450px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-300/30 via-blue-500/30 to-blue-700/30 p-2">
                    <div className="w-full h-full rounded-full bg-white" />
                </div>
                
                <div className="w-1/3 relative z-10">
                    <h1 className="text-4xl font-bold mb-4">
                        The Ultimate Champion for Hydration
                    </h1>
                    <h3 className="text-xl mb-8">
                        We believe in the power of hydration - our mission is simple yet vital
                    </h3>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Inquiry Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Section1;