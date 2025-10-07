import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function AccoridingAbout() {
  return (
   <div className="p-5 xl:p-30 bg-[#113]" style={{userSelect: "none"}}>
      <Accordion className="bg-[#112]">
      <AccordionPanel>
        <AccordionTitle className="cursor-pointer">What Is Kawsar.Restaurent?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 capitalize text-gray-500 dark:text-gray-400">
           Kawsar.Restaurant is a modern and welcoming dining destination that combines exceptional cuisine with a comfortable atmosphere. Known for its diverse menu, it offers a wide variety of dishes prepared from fresh, high-quality ingredients, catering to both local tastes and international flavors.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className="cursor-pointer">What Is Web Developers?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 capitalize text-gray-500 dark:text-gray-400">
           Web developers are skilled professionals who create and maintain websites and web applications. They use programming languages like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue to build functional, responsive, and visually appealing sites. </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className="cursor-pointer">Why a restaurant website is created?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 capitalize text-gray-500 dark:text-gray-400">
     A restaurant website is created to establish a strong online presence, attract new customers, and provide existing patrons with important information. In today’s digital age, most people search for restaurants online before visiting, so having a professional website helps showcase the restaurant’s menu, ambiance, and special offerings. A website allows restaurants to display images of their dishes, share reviews, and highlight unique features like signature recipes or themed events.      
        </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
   </div>
  );
}
