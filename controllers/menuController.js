import menuServices from "../services/Menu/Categoties.js";

const createMenu = async (req, res) => {
  const { ...categories } = req.body;

  const result = await menuServices.menu(categories);
  res.json({ result });
};

export default {
  createMenu,
};
