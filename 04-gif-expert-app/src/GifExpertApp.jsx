import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['onePunch','Dragon Ball']);

   console.log( categories );

   const onAddCategory = () => {
        setCategories([ ...categories, 'Valorant' ] );
        //setCategories( cat => [ ...cat, 'Batman' ] );
   }

  return (
    <>
       {/* titulo */}
      <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory setCategories={ setCategories } />

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
