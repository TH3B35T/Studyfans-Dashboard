import { Tooltip } from '@mui/material';
import { DocumentDownload } from 'iconsax-react';
import { CSVLink } from 'react-csv';
import { Headers } from 'react-csv/lib/core';
interface CSVExportProps {
  data: never[] | any[];
  filename: string;
  headers?: Headers;
}

export const CSVExport = ({ data, filename, headers }: CSVExportProps) => {
  return (
    <CSVLink data={data} filename={filename} headers={headers}>
      <Tooltip title="CSV Export">
        <DocumentDownload size={28} style={{ color: 'gray', marginTop: 4 }} />
      </Tooltip>
    </CSVLink>
  );
};
