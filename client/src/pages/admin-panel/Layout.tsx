import React from 'react';
import { AddType } from '../../modules/components/modal/AddType';

export const Layout = () => {
  const [typeAddVisible, setTypeAddVisible] = React.useState<boolean>(false);

  return (
    <div className="container">
      <button onClick={() => setTypeAddVisible(true)}>Добавить тип</button>
      <button>Добавить бренд</button>
      <button>Добавить устройство</button>
      <AddType
        isOpen={typeAddVisible}
        onClose={() => setTypeAddVisible(false)}
      />
    </div>
  );
};
