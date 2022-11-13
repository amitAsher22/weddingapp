import Supplies from "../../model/suppliesModel.js";

const getSuppliersByCategoryName = async () => {
  try {
    const suppliersByCategoryName = await Supplies.find();
    return suppliersByCategoryName;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getSuppliersByCategoryName,
};
