import { createContext, useContext, useReducer, useState } from "react";
import { categoryReducer } from "../reducer/categoryReducer";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {

    const [activeClass, setActiveClass] = useState("");

    const [categoryState, categoryDispatch] = useReducer(categoryReducer, {
        categoryName: "",
        searchQuery: ""
    });

    const getActiveCategory = (ele) => {
    
        var element = document.getElementById(ele);
        element.classList.add("category_active");
        setActiveClass(element);
    
        if (activeClass.classList.contains("category_active")) {
            activeClass.classList.remove("category_active");
        }
        element.classList.add("category_active");
    }

    return (
        <CategoryContext.Provider value={{ categoryState, categoryDispatch, getActiveCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };