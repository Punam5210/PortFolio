import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import java from "../../public/java.png"
import dsa from "../../public/dsa.jpg"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"
import cpp from "../../public/c++.avif"
import sql from "../../public/SQL.png"
import problem from "../../public/problem.png"






function Skills() {
     
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo: css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JAVASCRIPT"
        },
        {
            id:4,
            logo:dsa,
            name:"DSA"
        },
        {
            id:5,
            logo:mongoDB,
            name:"mongodb"
        },
        {
            id:6,
            logo:java,
            name:"Java"
        },
        {
            id:7,
            logo:express,
            name:"express"
        },
        {
            id:8,
            logo:reactjs,
            name:"reactjs"
        },
        {
            id:9,
            logo:nodejs,
            name:"nodejs"
        },
        {
            id:10,
            logo:cpp,
            name:"cpp"
        },
        {
            id:11,
            logo:sql,
            name:"SQL"
        },
        {
            id:12,
            logo:problem,
            name:"problemSolving"
        },




    ];




  return (
        

     
     
    <div name='Skills' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
     <div>
     <h1 className='text-3xl text-white font-bold mb-4'>Skills</h1>
     <p className='text-blue-600 font-semibold mb-10'>Skilled in Below Technology </p>

     <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3  text-white'> 

            {
                cardItem.map(({id,logo,name})=>(
                      <div className='flex flex-col items-center justify-center
                                border-[2px] rounded-full md:h-[200px] md:w-{200px]
                                p-1 cursor-pointer hover:scale-110 duration-300'
                                key ={id}>
                         <img 
                         src={logo} 
                         className='w-[150px]  rounded-full 'alt="" />



                         <div>
                           <div >{name}</div>
                         </div>
                    
                        
                     </div> 


                

                ))}


                </div>
            </div>
    </div>

  );
}

export default Skills;