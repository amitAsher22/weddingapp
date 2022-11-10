import Menu from "../../model/Menu.js";

const menu = async (categories) => {
  try {
    const createCategories = await Menu.create({
      categories,
    });
    return createCategories;
  } catch (error) {
    console.log(error);
  }
};

export default {
  menu,
};
