import React, { useState, useEffect } from 'react';
import Layout from '@layoutComponents/Layout';
import { getCategories } from '@utils/fetchers';

function CategoriesPage() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategoriesList(categories);
    });
  }, []);
  return (
    <div>
      <h1>New Product</h1>
      {categoriesList.map((category) => {
        return (
          <div key={category.id}>
            <div>{category.name}</div>
            {category.attributes.map((attribute) => {
              return (
                <div key={attribute.id}>
                  <div>{attribute.name}</div>
                  {attribute.options.map((option) => {
                    return (
                      <div key={option.id}>
                        <div>{option.value}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

CategoriesPage.getLayout = (page) => <Layout title="Categories">{page}</Layout>;

export default CategoriesPage;
