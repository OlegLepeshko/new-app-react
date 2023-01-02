import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Modal } from '../components/Modal';
import { CreatProduct } from '../components/CreatProduct';
import { useState } from 'react';
import { IProduct } from '../models';


export function ProductsPage() {


    const [modal, setModal] = useState(false)

    const { loading, products, error, addProduct } = useProducts()

    const creatHandler = (product: IProduct) => {
       setModal(false)
       addProduct(product)
    }

    return (
     <div className='container mx-auto max-w-2xl pt-5'>

     { loading &&  <Loader />}

     { error && <Error error={ error } /> }

     { products.map(product => <Product product={ product } key={ product.id }/>) }

    {modal && <Modal title='Creat new product' onClose={() => setModal(false)}>
      <CreatProduct onCreate={ creatHandler }/>
    </Modal>}
     <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white  text-2xl px-4 py-2'
     onClick={() => setModal(true)}
     >+</button>
     </div>
    )

}