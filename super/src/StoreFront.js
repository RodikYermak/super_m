import { useState, useEffect } from 'react';
import ProductsList from './ProductsList.js';
import AddProductForm from './AddProductForm.js';
import Loader from "./Loader.js";

export default function StoreFront() {
    // NOTE: If you enter incorrect data into your localStorage, uncomment this line (once) then comment it out again
    // localStorage.setItem("products", "[]");

    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            return JSON.parse(savedProducts);
        } else {
            return [];
        }
    });
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validation, setValidation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        (async ()=>{
            try{
                setIsLoading(true);

                const response = await fetch("https://react-tutorial-demo.firebaseio.com/products.json");
                const data = await response.json();
                // console.log(data)
                setProducts(data);
            }catch(e){
                console.error(e);
            }finally {
                setIsLoading(false);
            }
        })()
    }, [])

    useEffect(() => {
        if (products.length === 0) {
            document.title = 'No products';
        } else if (products.length === 1) {
            document.title = '1 product';
        } else {
            document.title = `${products.length} products`;
        }
    }, [products]);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!name) {
            setValidation('Please enter a name');
            return;
        }
        if (!description) {
            setValidation('Please enter a description');
            return;
        }
        setProducts([
            ...products,
            {
                id: products.length + 1,
                name: name,
                description: description,
            },
        ]);
        setName('');
        setDescription('');
        setValidation('');
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleDeleteClick(id) {
        setProducts(products.filter((product) => product.id !== id));
    }

    if(isLoading){
        return <Loader />
    }

    return (
        <>
            <AddProductForm
                name={name}
                description={description}
                validation={validation}
                onNameChange={handleNameChange}
                onDescriptionChange={handleDescriptionChange}
                onFormSubmit={handleFormSubmit}
            />
            <div>{products.length === 0 && <p>Add your first product</p>}</div>
            <ProductsList products={products} onDeleteClick={handleDeleteClick} />
        </>
    );
}
