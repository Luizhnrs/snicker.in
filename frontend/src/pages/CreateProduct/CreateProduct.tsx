import React, {ChangeEvent, useState} from 'react';
import Header from '../../components/Header';
import './createProduct.css';

export default function CreateProduct() {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <main className="create-product-page">
      <Header />
      <div className="create-product-container">
        <form className="create-product-form">
          <div className="form-group">
            <label htmlFor="productName">Nome</label>
            <input type="text" name="productName" id="productName" />
          </div>
          <div className="form-group">

            <label htmlFor="productBrand">Marca</label>
            <input type="text" name="productBrand" id="productBrand" />
          </div>
          <div className="form-group">

            <label htmlFor="productCategory">Categoria</label>
            <input type="text" name="productCategory" id="productCategory" />
          </div>
          <div className="form-group">

            <label htmlFor="productPrice">Preço</label>
            <input type="text" name="productPrice" id="productPrice" />
          </div>
          <div className="form-group">

            <label htmlFor="">Inserir imagem</label>
            <input type="file" name="" id="" onChange={handleFileChange} />
          </div>
          <button className="create-product-button">Salvar</button>
        </form>
        {image && <img src={image} alt="Product Preview" />}
      </div>
    </main>
  );
}
