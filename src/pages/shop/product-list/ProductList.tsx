
import React, { useState } from "react";
import { data } from "../../../mock-data";
import ProductCard from "../../../components/products/ProductCard";
import usePagination from "../../../utils/Pagination";
import { Pagination, Stack } from "@mui/material";

export default function ProductList() {
  // Número de produtos por página
  const perPage = 16;
  // Total de páginas
  const totalPageCount = Math.ceil(data.length / perPage);
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  // Dados paginados
  const paginatedData = usePagination(data, perPage);

  // Função para alterar a página
  const handleChangePage = (event: any, page: any) => {
    setCurrentPage(page);
    paginatedData.jump(page);
  };

  return (
    <section className="mt-16">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10 w-[80%]">
          {paginatedData.currentData().map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <Stack spacing={2}>
          <Pagination
            page={currentPage}
            count={totalPageCount}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                background: "#f9f1e7",
                border: "none",
                borderRadius: "10px",
                margin: '10px',
                height: '55px',
                width: '55px',
                fontSize: '20px',
                '&:hover': {
                  background: "#B88E2F",
                  color: "#FFFFFF",
                },
              },
              '& .Mui-selected': {
                background: "#B88E2F",
                color: "#FFFFFF",
                '&:hover': {
                  background: "#B88E2F",
                },
              },
            }}
          />
        </Stack>
      </div>
    </section>
  );
}
