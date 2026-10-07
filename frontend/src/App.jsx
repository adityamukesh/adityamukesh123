import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function App() {


const [count,setCount]=useState(0);
const [num,setNum]=useState(10);
const [products,setProducts]=useState([]);



  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function APIcall() {
      try {
        setLoading(true);
        console.log("Fetching products from backend...");
        let response = await fetch("https://adityamukesh123.onrender.com/api/products");
        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Products data fetched:", data);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    APIcall();
  }, []);

  // useEffect(()=>{ //execute each render
  //   console.log("parth");
  // });


  // useEffect(()=>{ //execute when count or num updated 
  //   console.log("sagar");
  // },[count,num]);

  //   useEffect(()=>{ //execute only one time 
  //   console.log("vikas");
  // },[]);

  return (
    <div>

       <h1>Lorem ipsum dolor sit. {count}</h1>
       <h1>Lorem ipsum dolor sit. {num}</h1>
       <button onClick={()=>setCount(count+1)}>click count</button>
       <button onClick={()=>setNum(num+1)}>click num</button>
       <ProductList products={products}/>

    </div>
  )
}

export default App