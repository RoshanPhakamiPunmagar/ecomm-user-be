import { getProducts, countProducts } from "../models/products/productModel.js";

export const fetchProducts = async (req, res, next) => {
  try {
    // query params
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      search,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    // filter object
    const filter = {};

    // category filter
    if (category) {
      filter.category = category;
    }

    // price filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // search by name
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    // pagination
    const skip = (page - 1) * limit;

    // sorting
    const sort = { [sortBy]: order === "asc" ? 1 : -1 };

    const products = await getProducts({
      filter,
      skip,
      limit: Number(limit),
      sort,
    });

    const total = await countProducts(filter);

    return res.json({
      status: "success",
      products,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};
