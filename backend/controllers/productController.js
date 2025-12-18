


// function for add product

const addProduct = async (req, res) => {
  try {
    console.log("FILES 👉", req.files);

    const {
      name,
      descripation,
      price,
      category,
      subCateory,
      sizes,
      bestseller,
    } = req.body;

    if (!req.files || !req.files.image1) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0] || null;
    const image3 = req.files.image3?.[0] || null;
    const image4 = req.files.image4?.[0] || null;

    const parsedSizes = sizes ? JSON.parse(sizes) : [];

    console.log({
      name,
      descripation,
      price,
      category,
      subCateory,
      parsedSizes,
      bestseller,
    });

    console.log(image1, image2, image3, image4);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};






//function for list product

const listProduct = (req,res)=>{

}

//function for remove product 

const removeProduct = async (req,res) =>{



}

//function for single product info

const singleProduct = async (req,res) =>{



}

export {listProduct,addProduct,singleProduct,removeProduct}