import React, {ChangeEvent, FormEvent, useState} from 'react';
import Header from '../../components/Header';
import './createProduct.css';
import {createProduct} from '../../services/productService';
import {createProductImages} from '../../services/productImage';

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    productBrand: '',
    productCategory: '',
    productPrice: '',
    productDescription: '',
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles || null);
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const saveImages = async (files: FileList, productId: string) => {
    try {
      const base64Images = await Promise.all(
          Array.from(files).map(async (file) => {
            const base64String = await getBase64(file);
            return {
              filename: file.name,
              base64String: base64String.split(',')[1],
            };
          }),
      );

      await createProductImages(productId, base64Images);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const createdProduct = await createProduct({
        productName: formData.productName,
        productBrand: formData.productBrand,
        productDescription: formData.productDescription,
        productCategory: formData.productCategory,
        productPrice: Number(formData.productPrice),
        productOnSale: false,
        productSalePrice: 0,
      });

      if (files) {
        await saveImages(files, String(createdProduct.id));
      }
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
            <label htmlFor="productImage">Imagens</label>
            <input
              type="file"
              name="productImage"
              id="productImage"
              multiple
              onChange={handleFileChange}
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
          <button type="submit"
            className="create-product-button">Salvar</button>
        </form>
      </div>
    </main>
  );
}
