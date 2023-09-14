import { Fragment, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';

import Category from '../category/category-component';
import CategoriesPreview from '../category-preview/categories-preview.component';

import './shop.styles.scss';

const Shop = () => {
    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category/>} />
      </Routes>
    );
  };
  
  export default Shop;