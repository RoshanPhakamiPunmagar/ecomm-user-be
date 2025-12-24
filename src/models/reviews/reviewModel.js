import ReviewSchema from "/reviewSchema.js";

export const createNewReview = (revObj) => {
  return ReviewSchema(revObj).save();
};

export const getReviewById = (id) => {
  return ReviewSchema.findById(id);
};

export const getReviews = async (filter) => {
  return await ReviewSchema.find(filter);
};

export const updateReview = async (filter, obj) => {
  return await ReviewSchema.findOneAndUpdate(filter, obj);
};
