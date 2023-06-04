import React  from 'react'
import './Sidebar.css'



function Sidebar({products,productCategory,setCategory}) {


  const LeftbarData = [
    
    {
      heading: "All",
      
    },
    {
        heading: "Electronics",
       
 
      },
      {
         heading: 'Jewelery',
        
      },
      {
         heading: `Men's clothing`,
        
      },
      {
        heading: `Women's clothing`,
        
      },
    
    
  ];
  const handleClick = (heading) => {
    if(heading ==="All"){
      setCategory(products)
    }else{
      const lowercate= heading.toLowerCase()

      productCategory(lowercate);
    }
   
    
  };
  return (
    <div className='Sidebars'>


                
    <div className="menu">

   {LeftbarData.map((item,index)=>{
       
       
       return (
       
         <div className={`menuItems `}
           key={index}
           onClick={()=>handleClick(item.heading)}
           >
              
               <span style={{marginLeft:"15px"}}>
                   {item.heading}
               </span>
               
           </div>
        
          
       )
   })}
   

</div>

  
</div>
  )
}

export default Sidebar