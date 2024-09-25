export const columns = [
  { field: "id", headerName: "№", maxWidth: 60, resizable: false },
  {
    field: "title",
    headerName: "Название",
    headerAlign: "left",
    minWidth: 250,
    resizable: false,
  },
  {
    field: "category",
    headerName: "Категория",
    headerAlign: "left",
    minWidth: 110,
    resizable: false,
  },
  {
    field: "description",
    headerName: "Описание",
    headerAlign: "left",
    minWidth: 670,
    resizable: false,
  },
  {
    field: "price",
    headerName: "Цена",
    headerAlign: "left",
    type: "number",
    minWidth: 100,
    resizable: false,
  },
  {
    field: "rating",
    headerName: "Рейтинг",
    headerAlign: "left",
    type: "number",
    minWidth: 100,
    resizable: false,
  },
];