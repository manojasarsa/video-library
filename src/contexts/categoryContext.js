import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/categoryReducer";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {

    const [categoryState, categoryDispatch] = useReducer(categoryReducer, {
        categoryName: "",
        searchQuery: ""
    });

    return (
        <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };