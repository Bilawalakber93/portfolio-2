import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Static Resume Builder",
        desc: "A typescript base interactive resume built with HTML & CSS.",
        img: "/Static resume.png",
        tags: ["HTML","Node","CSS","Typescript"],
    },
    {
      id: 1,
      title: "E-Commerce Website",
      desc: "A React.js base interactive E-Commerce with HTML & TailwindCSS.",
      img: "/ecommerce.jpg",
      tags: ["HTML","Node","React","TailwindCSS"],
  },
  {
    id: 2,
    title: "Resturent website",
    desc: "A React.js base interactive E-Commerce with HTML & TailwindCSS.",
    img: "/restaurant.jpg",
    tags: ["HTML","Node","React","TailwindCSS"],
},
];
const Projects = () => {
  return (
    <div id='Projects' className='container pt-32'data-aos="zoom-in-up">
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
