import React from 'react'
import pic from "../../public/myphoto.png"
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";





function Home() {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>


        <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1  text-white'>
           <span className='text-xl '> Welcome in my Feed</span>
            <div className='flex  space-x-1 text-2xl md:text-4xl'>
            <h1 c>Hello, I'm a </h1>
            {/*<span >  Developer </span>*/}
          < ReactTyped
           className="text-red-700 font-bold "
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
          />
            </div>
            <br />
           < p className='text-sm md:text-md  text-justify'> As a senior computer science student, I aim to contribute to innovative approaches in document engineering as a   
               web developer, using both frontend and backend skills. Eager to sharpen my expertise in database programs and 
                markups within a team that pushes the boundaries of modern web design.
           </p>
           <br />

           <div >
              <h1 className='font-bold '>currentyly working on</h1>
              <div className='flex space-x-5 items-center mt-3'>
              <DiMongodb className='text-xl' />
              <SiExpress className='text-xl' />
              <FaReact className='text-xl'/>
              <FaNode className='text-xl'/>

              </div>
            </div>

          <br />

           {/* resume button */}
           <div className='justify-between items-center hover:scale-110 duration-300'>
           <a
            href="/resume.pdf" // Relative path or hosted link to your resume
            className="button "
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#339',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              marginRight: '50px',
            
             
              transition: 'all 0.3s ease',
            }}
            
          >
            Download Resume
          </a>
          {/* GitHub Button */}
          <a 
            href= "https://github.com/Punam5210"
            className="button "
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#339',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              marginLeft: '0px',
              margin:'10px',
              transition: 'all 0.3s ease',
            }}
            
          >
            View GitHub
          </a>
     
       
           </div>

            
        </div>

        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'> 
        <img src={pic}
         className='rounded-full md:w-[450px] md:h-[450px]' 
         alt="" />
        
        </div>
       </div>
            
      </div>    
      <hr />
    
    
    </>
  )
}

export default Home