import ProductSchema from "/productSchema.js";

export const createNewProduct = (prodObj) => {
  return ProductSchema(prodObj).save();
};

export const getProductById = (id) => {
  return ProductSchema.findById(id);
};

export const updateProduct = async (filter, obj) => {
  return await ProductSchema.findOneAndUpdate(filter, obj);
};

export const getProducts = async (filter) => {
  return await ProductSchema.find(filter);
};
