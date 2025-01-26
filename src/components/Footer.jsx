 import React from 'react'
 import { FaLinkedinIn } from "react-icons/fa";
 function Footer() {
   return (

      <>
      <hr />
      <footer className='py-12'>

         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
               <div className='flex flex-col items-center justify-center'>


                   <div>
                       <a 
                        className='hover:scale-110'
                         href="https://www.linkedin.com/in/punam-kumari-bb80542a4" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         style={{ textDecoration: 'none', color: 'white' }}
      >
                      <FaLinkedinIn size={30} />
                      </a>
                 
                    </div>


               
               <div className='mt-8 border-t border-gray-500  text-white flex flex-col items-center'>
                     <p className='text-sm '> &copy; 2024 Punam.All right reserved.  </p>
              
               </div>


         </div>

          </div>


      </footer>

    

     </>


   )
 }
 
 export default Footer;