


// function for add product

const addProduct = async (req,res) => {
  try {
    const { name, descripation, price, category, sizes, bestseller } = req.body;

    const image1 = req.files?.image1?.[0] 
    const image2 = req.files?.image2?.[0] 
    const image3 = req.files?.image3?.[0] 
    const image4 = req.files?.image4?.[0] 

    console.log(name, descripation, price, category, sizes, bestseller);
    console.log(image1, image2, image3, image4); // Should now log file objects

    res.json({ success: true, message: "Product received" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
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