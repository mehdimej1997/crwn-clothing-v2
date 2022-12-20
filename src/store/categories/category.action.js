import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
export const setCategoriesMap = async (categoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    categoriesMap
  );
};
