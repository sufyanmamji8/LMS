import React from 'react'
import { assets } from '../../assets/assets'

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className='text-4xl font-semibold text-gray-500'>Testimonials</h1>
      <p className='mt-5'>Hear from our learners as they share their journey of transformation , success and how our <br />platform has made a difference in their lives.</p>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          
          {/* Testimonial 1 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={assets.profile_img_1}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={assets.profile_img_2}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
              <p className="text-gray-500">UI Developer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={assets.profile_img3}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials

