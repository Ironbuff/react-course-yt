import React from 'react'

export default function 
({username,image,position}) {
  return (
    <div>
       <figure  className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512"/>
  <div  className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p  className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est, magnam laudantium fuga quaerat alias soluta saepe eligendi, corporis molestiae ratione repellendus eum, expedita iste? Ipsam maxime libero nobis nisi?
      </p>
    </blockquote>
    <figcaption  className="font-medium">
      <div  className="text-sky-500 dark:text-sky-400">
       {username}
      </div>
      <div  className="text-slate-700 dark:text-slate-500">
        {position}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

