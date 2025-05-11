import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

   console.log( categories );

   const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        //setCategories( cat => [ ...cat, 'Batman' ] );

        if( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories ] );
        
   }

  return (
    <>
       {/* titulo */}
      <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
          //setCategories={ setCategories } 
          onNewCategory = { (event) => onAddCategory( event ) } 
        
        />
        {/* Listado Gif */}
        <ol>
            { 
                categories.map( category => {
                    return <li key={ category }> { category }</li>
                })
            }
            
        </ol>
            {/* Gif Item */}


    </>
  )
}

export default GifExpertApp
