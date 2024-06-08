import React from "react";
import { Link } from "react-router-dom";

const About=()=>{
    return(
        <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    SS Science Academy
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Empowering minds, transforming lives. Discover our world-class education and vibrant community.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Explore Programs
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Hero"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Esteemed Faculty</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Meet the dedicated and accomplished educators who shape the minds of our students.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Dr. Jane Doe"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Dr. Jane Doe</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Professor of Mathematics</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">20+ years of teaching experience</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ph.D. in Mathematics, University of Cambridge
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Dr. John Smith"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Dr. John Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Professor of Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">15+ years of teaching experience</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ph.D. in Computer Science, Massachusetts Institute of Technology
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Dr. Sarah Lee"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Dr. Sarah Lee</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Professor of Biology</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">18+ years of teaching experience</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ph.D. in Biology, University of California, Berkeley
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Successful Alumni</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Discover the remarkable achievements of our distinguished alumni.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-4">
                  <img src="/placeholder.svg" width="100" height="100" alt="John Doe" className="mx-auto rounded-full" />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Corporation</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Class of 2010, Business Administration</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Awarded Entrepreneur of the Year, 2020</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Jane Smith"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Researcher, Biotech Innovation</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Class of 2015, Molecular Biology</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Awarded Best Researcher, 2022</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Michael Lee"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Michael Lee</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer, Tech Unicorn</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Class of 2018, Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Awarded Best Newcomer, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Life</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Explore the vibrant student community and the diverse extracurricular activities available at our
                    institute.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Chess Club"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Chess Club</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Develop your strategic thinking and compete in regional tournaments.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Debate Society"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Debate Society</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Hone your public speaking and critical thinking skills through engaging debates.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    width="100"
                    height="100"
                    alt="Robotics Club"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Robotics Club</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Explore the world of engineering and programming by designing and building robots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About SS Science Academy</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Discover the rich history, mission, and unique offerings that make our institute a premier educational
                    destination.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/placeholder.svg"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className />
                </div>
              </div>
            </div>
          </section> */}
        </main>
      </div>
    )
}
export default About;