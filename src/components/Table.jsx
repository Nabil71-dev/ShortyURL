import { DataGrid } from "mantine-data-grid";

const Table=({ data, columns, loading, ...props })=>{
  return (
    <DataGrid
      sx={(theme) => ({ backgroundColor: theme.white })}
      highlightOnHover
      withSorting
      withPagination
      withColumnResizing
      pageSizes={['10']}
      size="md"
      data={data}
      columns={columns}
      loading={loading}
      {...props}
    />
  );
}
export default Table;