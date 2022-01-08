import Layout from "../Components/Layout";
import { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";

const HomePage = () => {

    useEffect(() => {
        document.title = "Dento - Home";
    }, []);

    const options = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
    };

    return (
        <Layout>
            <OwlCarousel className='owl-theme' {...options}>
                <div className="item relative">
                    <img class="w-full object-cover" style={{ height: 'calc(100vh - 129px)' }} src="/images/carousel-1.webp" alt="The Last of us" />
                    <div className="absolute inset-0 bg-gradient-to-r bg-black opacity-75" />
                    <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center w-full h-full">
                        <div className="mx-3 lg:w-[62rem] lg:mx-auto text-center ">
                            <h1 className="text-xl lg:text-5xl font-bold text-white">
                                We Believe Everyone Should Have Easy Access To Great Dental Care
                            </h1>
                            <p className="text-sm lg:text-lg text-white lg:mx-10 mt-5">
                                As a leading industry innovator, Dento is opening up exciting new opportunities for dental professionals, investors, employees & suppliers. Contact us to find out what we have to
                                offer you.
                            </p>
                            <div className="flex items-center my-4 justify-center">
                                <Link to="/">
                                    <button className="px-4 py-2 bg-blue-500 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 text-white uppercase mx-3 normal-transition">Get Started</button>
                                </Link>
                                <Link to="/">
                                    <button className="px-4 py-2 hover:bg-blue-500 hover:text-white normal-transition border border-blue-500 text-blue-500 uppercase mx-3">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backdrop-blur-md">
                    <img class="w-full object-cover" style={{ height: 'calc(100vh - 129px)' }} src="/images/carousel-2.webp" alt="The Last of us" />
                    <div className="absolute inset-0 bg-gradient-to-r bg-black opacity-75" />
                    <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center w-full h-full">
                        <div className="mx-3 lg:w-[62rem] lg:mx-auto text-center ">
                            <h1 className="text-xl lg:text-5xl font-bold text-white">
                                We Believe Everyone Should Have Easy Access To Great Dental Care
                            </h1>
                            <p className="text-sm lg:text-lg text-white lg:mx-10 mt-5">
                                As a leading industry innovator, Dento is opening up exciting new opportunities for dental professionals, investors, employees & suppliers. Contact us to find out what we have to
                                offer you.
                            </p>
                            <div className="flex items-center my-4 justify-center">
                                <Link to="/">
                                    <button className="px-4 py-2 bg-blue-500 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 text-white uppercase mx-3 normal-transition">Get Started</button>
                                </Link>
                                <Link to="/">
                                    <button className="px-4 py-2 hover:bg-blue-500 hover:text-white normal-transition border border-blue-500 text-blue-500 uppercase mx-3">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

            {/* about us */}
            <section className="py-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                            <img src="/images/about-us.jpg" alt="about" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold bottom-line wow animate__animated animate__fadeIn" data-wow-delay="0.2s">About Us</h1>
                            <p className="text-base text-gray-600 mt-10 wow animate__animated animate__fadeIn" data-wow-delay="0.3s">Vestibulum condimentum, risus sedones honcus rutrum, salah lacus mollis zurna, nec finibusmi velit advertisis. Proin vitae odin quis magna aliquet laciniae. Etiam auctor, nisi vel. Pellentesque ultrices nisl quam iaculis, nec pulvinar augue.</p>

                            <div className="w-full my-5 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold mb-3">Experience Dentist</h2>
                                    <h3 className="text-xl font-semibold mb-3">80%</h3>
                                </div>
                                <div className="w-full overflow-hidden h-2 relative after:content-[''] after:absolute after:inset-0 after:w-3/4 after:bg-blue-400 bg-gray-100 rounded-xl" />
                            </div>

                            <div className="w-full my-5 wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold mb-3">Modern Equipments</h2>
                                    <h3 className="text-xl font-semibold mb-3">60%</h3>
                                </div>
                                <div className="w-full overflow-hidden h-2 relative after:content-[''] after:absolute after:inset-0 after:w-3/5 after:bg-blue-400 bg-gray-100 rounded-xl" />
                            </div>

                            <div className="w-full my-5 wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold mb-3">Friendly Stuff</h2>
                                    <h3 className="text-xl font-semibold mb-3">90%</h3>
                                </div>
                                <div className="w-full overflow-hidden h-2 relative after:content-[''] after:absolute after:inset-0 after:w-11/12 after:bg-blue-400 bg-gray-100 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* service area */}
            <section className="bg-cover bg-fixed" style={{ background: 'linear-gradient(rgba(54,134,255,.7), rgba(66,66,66,.7)),url("/images/service-bg.webp") no-repeat center center', backgroundAttachment: 'fixed' }}>
                <div className="backdrop-blur-lg py-24 ">
                    <div className="container mx-auto">
                        <h1 className="text-4xl bottom-line wow animate__animated animate__fadeIn font-semibold text-white" data-wow-delay="0.2s">Our Services
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                    <img src="/images/service-icon-1.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Teeth Whitening</p>
                                </div>
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
                                    <img src="/images/service-icon-2.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Missing Teeth</p>
                                </div>
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="0.8s">
                                    <img src="/images/service-icon-3.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Teeth Whitening</p>
                                </div>
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="1s">
                                    <img src="/images/service-icon-4.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Cosmetic Dentistry</p>
                                </div>
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="1.2s">
                                    <img src="/images/service-icon-5.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Examination</p>
                                </div>
                                <div className="group wow animate__animated animate__fadeIn" data-wow-delay="1.4s">
                                    <img src="/images/service-icon-6.webp" alt="service-1" />
                                    <p className="text-base text-white mt-4 group-hover:text-blue-700 normal-transition font-semibold">Teeth Pain</p>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn" data-wow-delay="1.6s">
                                <img className="h-full w-full" src="/images/service-banner.webp" alt="service-banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* pricing table */}
            <section className="py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl bottom-line wow animate__animated animate__fadeIn font-semibold" data-wow-delay="0.2s">Pricing</h1>

                    <table className="mt-7 table w-full">
                        <thead className="outline-none">
                            <tr className="bg-blue-400 text-left text-white font-semibold">
                                <td className="border-4 border-white px-4 py-3">Service Name</td>
                                <td className="border-4 border-white px-4 py-3">Stage</td>
                                <td className="border-4 border-white px-4 py-3">Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Teeth Whitening Service at home</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Teeth Whitening Service at Dental Clinic</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Ceramic crowns and fillings Dental porcelain</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Remove crowns, bridges Service</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Covering the recession of the gums</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Consultation, impressions and preparation of models</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Removal of an old inlay, old crown</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Overlay teeth whitening ( 2 arches)</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Standard porcelain and zirconium crown on implant</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">Implantation of an implant (price depends on system used)</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">1 times</td>
                                <td className="border-4 border-white px-4 py-4 text-xs lg:text-base">$115.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="/" className="flex justify-center items-center mt-5">
                        <p className="px-7 py-3 bg-blue-400 text-white font-semibold">Read More</p>
                    </Link>
                </div>
            </section>

            {/* our dentist */}
            <section className="py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl bottom-line wow animate__animated animate__fadeIn font-semibold " data-wow-delay="0.2s">Our Dentists
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
                        <div className="flex justify-center items-center">
                            <div className="relative h-[21.875rem] w-[21.875rem] bg-gray-100 group">
                                <img height={350} width={350} src="/images/dentist-1.webp" alt="dentist-1" />
                                <div className="absolute h-auto bottom-0 left-0 right-0 flex justify-center items-center opacity-90" style={{ background: 'linear-gradient(rgba(54,134,255,.9), rgba(0,0,0,.9))' }}>
                                    <div className="py-3">
                                        <h1 className="text-lg font-semibold text-white">Michael Barley</h1>
                                        <p className="text-xs text-white text-center">Implant Expert</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="relative h-[21.875rem] w-[21.875rem] bg-gray-100 group">
                                <img height={350} width={350} src="/images/dentist-2.webp" alt="dentist-1" />
                                <div className="absolute h-auto bottom-0 left-0 right-0 flex justify-center items-center opacity-90" style={{ background: 'linear-gradient(rgba(54,134,255,.9), rgba(0,0,0,.9))' }}>
                                    <div className="py-3">
                                        <h1 className="text-lg font-semibold text-white">Michael Barley</h1>
                                        <p className="text-xs text-white text-center">Implant Expert</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="relative h-[21.875rem] w-[21.875rem] bg-gray-100 group">
                                <img height={350} width={350} src="/images/dentist-3.webp" alt="dentist-1" />
                                <div className="absolute h-auto bottom-0 left-0 right-0 flex justify-center items-center opacity-90" style={{ background: 'linear-gradient(rgba(54,134,255,.9), rgba(0,0,0,.9))' }}>
                                    <div className="py-3">
                                        <h1 className="text-lg font-semibold text-white">Michael Barley</h1>
                                        <p className="text-xs text-white text-center">Implant Expert</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial section */}
            <section className="bg-cover bg-fixed bg-center" style={{ background: 'linear-gradient(rgba(54,134,255,.7), rgba(66,66,66,.7)),url("/images/service-bg.webp") no-repeat', backgroundAttachment: 'fixed' }}>
                <div className="backdrop-blur-md py-16">
                    <div className="container mx-auto">
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="item">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                                    <div className="h-44 w-44 flex justify-self-center lg:justify-self-end items-center">
                                        <img className="rounded-full " src="/images/patient-1.webp" alt="patient" />
                                    </div>
                                    <div className="justify-self-start col-span-2">
                                        <p className="text-base text-white"><i>“I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and
                                            very helpful. Excellent treatment and advice.”</i></p>
                                        <h3 className="text-lg font-semibold text-white">Arron Ramsey</h3>
                                        <p className="text-xs text-white">Dental Patient</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* latest news */}
            <section className="py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl bottom-line wow animate__animated animate__fadeIn font-semibold " data-wow-delay="0.2s">The Latest News
                    </h1>
                    <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-4 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                        <div className="flex justify-center items-center">
                            <div className="w-[21.875rem] shadow-lg">
                                <img className="h-[14.75rem] w-full" src="/images/news-1.webp" alt="news-1" />
                                <div className="py-7 px-5">
                                    <Link to="/news-1" className="text-xl font-bold hover:text-blue-700 normal-transition">
                                        How your mouth bacteria can harm your lungs
                                    </Link>
                                    <p className="mt-2 text-sm">
                                        Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam ...
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-clock text-blue-700 mr-2"></i>
                                            28 Sep 2018
                                        </span>
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-chat-text text-blue-700 mr-2"></i>
                                            3 Comments
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="w-[21.875rem] shadow-lg">
                                <img className="h-[14.75rem] w-full" src="/images/news-2.webp" alt="news-1" />
                                <div className="py-7 px-5">
                                    <Link to="/news-1" className="text-xl font-bold hover:text-blue-700 normal-transition">
                                        What is the best kind of toothpaste to use?
                                    </Link>
                                    <p className="mt-2 text-sm">
                                        Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam ...
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-clock text-blue-700 mr-2"></i>
                                            28 Sep 2018
                                        </span>
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-chat-text text-blue-700 mr-2"></i>
                                            3 Comments
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="w-[21.875rem] shadow-lg">
                                <img className="h-[14.75rem] w-full" src="/images/news-3.webp" alt="news-1" />
                                <div className="py-7 px-5">
                                    <Link to="/news-1" className="text-xl font-bold hover:text-blue-700 normal-transition">
                                        Why you should avoid sipping your drinks
                                    </Link>
                                    <p className="mt-2 text-sm">
                                        Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam ...
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-clock text-blue-700 mr-2"></i>
                                            28 Sep 2018
                                        </span>
                                        <span className="mt-4 text-xs">
                                            <i class="bi bi-chat-text text-blue-700 mr-2"></i>
                                            3 Comments
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default HomePage;
