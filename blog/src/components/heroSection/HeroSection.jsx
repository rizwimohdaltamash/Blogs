import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    const sectionClasses = mode === 'dark' ? 'bg-gray-800' : 'bg-blue-900';
    const textColor = mode === 'dark' ? 'text-white' : 'text-white';

    return (
        <section className={sectionClasses}>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="Logo" className="max-w-full h-auto" />
                            </div>
                            <h1 className={`text-3xl font-bold ${textColor}`}>AL-Blogs</h1>
                        </div>
                        <p className={`text-xl font-extralight ${textColor}`}>
                            Here are some blogs and pages contributed by AL-Blogs.
                        </p>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default HeroSection;
