import React, {ChangeEvent, FormEvent, useState} from 'react';
import Header from '../../components/Header';
import './createProduct.css';
import {createProduct} from '../../services/productService';

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    productBrand: '',
    productCategory: '',
    productPrice: '',
    productImage: '',
    productDescription: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createProduct({
        productName: formData.productName,
        productBrand: formData.productBrand,
        productDescription: formData.productDescription,
        productCategory: formData.productCategory,
        productImages: formData.productImage,
        productPrice: Number(formData.productPrice),
        productOnSale: false,
        productSalePrice: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="create-product-page">
      <Header />
      <div className="create-product-container">
        <form className="create-product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Nome</label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productBrand">Marca</label>
            <input
              type="text"
              name="productBrand"
              id="productBrand"
              value={formData.productBrand}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productCategory">Categoria</label>
            <input
              type="text"
              name="productCategory"
              id="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Preço</label>
            <input
              type="text"
              name="productPrice"
              id="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Imagem</label>
            <input
              type="text"
              name="productImage"
              id="productImage"
              value={formData.productImage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Descrição</label>
            <input
              type="text"
              name="productDescription"
              id="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit" className="create-product-button">Salvar</button>
        </form>
        {formData.productImage && (
          <img src={formData.productImage} alt="Product Preview" />
        )}
      </div>
    </main>
  );
}
