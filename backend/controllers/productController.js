import { v2 as cloudinary } from "cloudinary";

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Optional images
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    console.log(name, description, price, category, subCategory, sizes, bestseller);
    console.log("Images URL 👉", imagesUrl);

    res.json({
      success: true,
      message: "Product added successfully",
      imagesUrl,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Other functions
const listProduct = (req, res) => {};

const removeProduct = async (req, res) => {};

const singleProduct = async (req, res) => {};

export { listProduct, addProduct, singleProduct, removeProduct };
