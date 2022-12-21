import { createSelector } from "@reduxjs/toolkit";

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  ({ categories }) => {
    return categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesState = createSelector(
  [selectCategoryReducer],
  ({ isLoading, error }) => {
    return { isLoading, error };
  }
);
