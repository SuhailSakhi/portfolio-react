import React from 'react';

const HomeSection = ({ trail, namePosition }) => {
    return (
        <section id="home" className="bg-black text-white py-40 relative mt-16">
            <div className="max-w-7xl mx-auto px-4" style={{ left: `${namePosition.x}px`, top: `${namePosition.y}px` }}>
                <div className="text-center">
                    <h1 className="text-7xl font-bold flex items-center justify-center">
                        Welcome <img className="w-12 h-auto ml-2" src="/img/wave.png" alt="wave" />
                    </h1>
                    <h2 className="text-4xl font-bold">I am  <span className="text-blue-500">Suhail Sakhizadh</span></h2>
                    <p className="mt-4 text-xl font-medium">Student Creative Technologist</p>
                    <p className="mt-4 text-xl"></p>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {trail.map((point, index) => (
                    <img
                        key={index}
                        className="absolute"
                        src="/img/wave.png"
                        alt="logo"
                        style={{
                            width: '15px',
                            left: point.x - 10,
                            top: point.y - 10,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default HomeSection;
