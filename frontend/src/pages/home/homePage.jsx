import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const HomePage = () => {
    return (
       
            <div className="flex flex-col min-h-[100dvh]">
              <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-50">
                    Welcome to Our Educational Institute
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                    Discover a world of knowledge and unlock your full potential with our exceptional educational programs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300"
                    prefetch={false}
                  >
                    Explore Our Programs
                  </Link>
                </div>
              </section>
              <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                        About Our Institute
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Our educational institute has been a beacon of knowledge and excellence for over a decade. We are
                        committed to providing world-class education and empowering students to reach their full potential.
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        With a team of experienced and dedicated faculty, state-of-the-art facilities, and a diverse range of
                        programs, we strive to create a transformative learning experience for our students.
                      </p>
                    </div>
                    <div>
                      <img src="/placeholder.svg" width="600" height="400" alt="About Our Institute" className="rounded-lg" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-50 text-center">
                    Our Educational Programs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <AutoStoriesIcon className="w-8 h-8 text-gray-900 dark:text-gray-50 mr-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Bachelor's Degree</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Comprehensive undergraduate programs that prepare you for a successful career.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        prefetch={false}
                      >
                        Learn More
                        <ReadMoreIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <SchoolIcon className="w-8 h-8 text-gray-900 dark:text-gray-50 mr-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Master's Degree</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Advanced graduate programs that deepen your expertise and open up new career opportunities.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        prefetch={false}
                      >
                        Learn More
                        <ReadMoreIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <WorkOutlineIcon className="w-8 h-8 text-gray-900 dark:text-gray-50 mr-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Professional Courses</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Specialized programs that enhance your skills and advance your career.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        prefetch={false}
                      >
                        Learn More
                        <ReadMoreIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-50 text-center">
                    What Our Students Say
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <blockquote>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                          "The faculty at this institute are truly exceptional. They\n have not only imparted valuable knowledge
                          but also\n inspired me to reach new heights in my academic and\n professional journey."
                        </p>
                        <cite className="text-gray-900 dark:text-gray-50 font-bold">- John Doe, Computer Science Graduate</cite>
                      </blockquote>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <blockquote>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                          "The hands-on learning experiences and state-of-the-art\n facilities at this institute have been
                          instrumental in\n shaping my skills and preparing me for the real world.\n I couldn't be more
                          grateful."
                        </p>
                        <cite className="text-gray-900 dark:text-gray-50 font-bold">
                          - Jane Smith, Business Administration Graduate
                        </cite>
                      </blockquote>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                      <blockquote>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                          "The diverse range of programs and the supportive\n environment at this institute have truly
                          transformed\n my educational journey. I highly recommend it to\n anyone seeking a transformative
                          learning experience."
                        </p>
                        <cite className="text-gray-900 dark:text-gray-50 font-bold">
                          - Michael Johnson, Engineering Graduate
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
           
    };

export default HomePage;
