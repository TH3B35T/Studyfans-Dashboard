import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}
type TTableProp<T extends object> = {
  components?: {
    body: {
      row: (props: RowProps) => React.JSX.Element;
    };
  };
  columns: ColumnsType<T>;
  loading?: boolean;
  data: T[];
  metadata?: {
    total?: number;
  };
  limit: number;
  page: number;
  handleOnChangeLimit: React.Dispatch<React.SetStateAction<number>>;
  handleOnChangePage: React.Dispatch<React.SetStateAction<number>>;
  pageSizeOptions?: number[];
  scrollX?: number;
};
const AntdTable = <T extends object>(props: TTableProp<T>) => {
  return (
    <div
      style={{
        width: '100%',
        background: '#FAFAFA'
      }}
    >
      <Table
        components={props.components}
        className="antd-custom-table"
        pagination={{
          total: props.metadata?.total,
          current: props.page,
          showSizeChanger: true,
          onShowSizeChange: (_, size) => props.handleOnChangeLimit(size),
          pageSizeOptions: props.pageSizeOptions || [5, 10, 15, 20, 25, 30],
          pageSize: props.limit,
          onChange: (newPage) => props.handleOnChangePage(newPage)
        }}
        loading={props.loading}
        columns={props.columns}
        dataSource={props.data}
        rowKey="id"
        scroll={{ x: props.scrollX ? props.scrollX : 'max-content', y: 'auto' }}
      />
    </div>
  );
};

export default AntdTable;
