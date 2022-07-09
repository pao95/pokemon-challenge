import { useState } from "react";
/**
 * Este hook permite manejar la paginacion de cualquier set de datos
 */
export const usePaginator = (limit: number) => {
  const [pagination, setPagination] = useState({
    limit,
    offset: 0,
    countPages: 0,
    page: 1,
  });
  const handleChangePaginator = (
    e: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPagination((prev) => ({
      ...pagination,
      page,
      offset: page * prev.limit - prev.limit,
    }));
  };

  const setCountItem = (countPages: number) => {
    setPagination({
      ...pagination,
      countPages: parseInt((countPages / pagination.limit).toString()),
    });
  };

  return {
    setCountItem,
    handleChangePaginator,
    page: pagination.page,
    limit: pagination.limit,
    offset: pagination.offset,
    countPages: pagination.countPages,
  };
};
