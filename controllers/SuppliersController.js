import suppliesServices from "../services/suppliers/suppliesServices.js";

const getsuppliersByName = async (req, res) => {
  const nameCategory = req.body.typeEvent;
  const result = await suppliesServices.getSuppliersByCategoryName();
  res.json(result);
};

export default {
  getsuppliersByName,
};
