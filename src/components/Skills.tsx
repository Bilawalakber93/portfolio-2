import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:5xl' >Technologies I work with</h2>
                <p className='text-gray-800 pt-2'>
                    I have a solid foundation in web development, specializing in HTML, CSS, & JavaScript. My experience extends to using frameworks like React & Next.js to create dynamic & user-friendly applications. i am also proficient in Tailwind CSS for efficient styling & design.With a passion for learning, I stay update on the latest technologies to enhance my skill set & contribute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-down">React.js</h2>
                        <h2 data-aos="zoom-in-left">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-left">Tailwind</h2>
                        <h2 data-aos="zoom-in-down">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
