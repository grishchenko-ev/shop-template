import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';

export const Preview = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(PRODUCT_ROUTE + '/' + 'todo-product-id')}>
      Preview
    </div>
  );
};
