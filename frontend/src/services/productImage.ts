import api from './api';

export const createProductImages = async (productId: string,
    images: { filename: string, base64String: string }[]) => {
  try {
    const response = await api.post('/product-images/upload', {
      productId,
      images,
    });
    const {data} = response;
    console.log(data);
  } catch (error) {
    console.error('Error uploading product images:', error);
  }
};
