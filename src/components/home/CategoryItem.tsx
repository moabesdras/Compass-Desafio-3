
import React from "react";

// Definindo os tipos das props
interface CategoryItemProps {
  name: string;
  imageLink: string;
}

// Componente de Item de Categoria
const CategoryItem: React.FC<CategoryItemProps> = ({ name, imageLink }) => {
  return (
    <div className="hover:scale-95 transition duration-500">
      <img className="rounded-lg cursor-pointer" src={imageLink} alt={name} />
      <h1 className="text-center text-2xl mt-8 font-semibold">{name}</h1>
    </div>
  );
}

export default CategoryItem;
