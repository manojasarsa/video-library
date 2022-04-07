import { createContext, useState, useEffect, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/categoryReducer";
// import { getFilteredList } from "../../utils/filterMethod";

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

      const [ categoryState, categoryDispatch ] = useReducer(categoryReducer, {
            categoryName: ""
      });
      
      return (
            <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
                  {children}
            </CategoryContext.Provider>
      )
}

const useCategory = () => useContext(CategoryContext);

export {useCategory, CategoryProvider};