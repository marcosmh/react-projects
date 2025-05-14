import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);

   console.log( categories );

   const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        //setCategories( cat => [ ...cat, 'Batman' ] );

        if( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories ] );
        
   }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        //setCategories={ setCategories } 
        onNewCategory = { (event) => onAddCategory( event ) } 
      
      />

      { 
          categories.map( ( category ) => (
                  <GifGrid 
                    key={ category }
                    category={ category }
                  />
              )
          )
      }
            
    </>
  )
}

export default GifExpertApp
