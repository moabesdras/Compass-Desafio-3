//Hook
import React, { useState } from "react";

export default function usePagination(data: any, itemsPerPage: any) {
  //Criação do estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  //Número máximo de páginas
  const maxPage = Math.ceil(data.length / itemsPerPage);

  //Calcula e retorna os dados da página atual
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  //Avança para a próxima página
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  //Volta para a página anterior
  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  //Permite pular para uma página específica
  function jump(page: any) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}
