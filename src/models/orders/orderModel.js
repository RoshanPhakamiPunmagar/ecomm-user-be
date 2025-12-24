import OrderSchema from "/orderSchema.js";

export const createNewOrder = (orderObj) => {
  return OrderSchema(orderObj).save();
};

export const getOrderById = (id) => {
  return OrderSchema.findById(id)
    .populate("products.productId")
    .populate("userId");
};

export const getOrders = async (filter) => {
  return await OrderSchema.find(filter)
    .populate("products.productId")
    .populate("userId");
};

export const updateOrder = async (filter, obj) => {
  return await OrderSchema.findOneAndUpdate(filter, obj);
};

export const getOrdersByUser = (userId) => {
  return OrderSchema.find({ userId }).populate("products.productId");
};
