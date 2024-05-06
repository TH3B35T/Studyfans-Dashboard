'use client';

import { Button, Flex, Input, Popconfirm, type UploadFile } from 'antd';
import { type ColumnsType } from 'antd/es/table';
import AntdTable from 'components/shared/AntdTable';
import Link from 'next/link';
import React, { type ChangeEvent, useState, useMemo } from 'react';
import type { OptionalUniversity } from 'types/dashboard/university';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { deleteUniversity, insertUniversity, updateUniversity, useGetUniversityList } from 'api/dashboard/university';
import AddUniversityModal from './AddUniversityModal';
import { debounce } from 'lodash';

const { Search } = Input;
export const UniversityTable = () => {
  const [limit, setLimit] = useState(10);
  const [universityModalSettings, setUniversityModalSettings] = useState({ isOpen: false, universityIdToUpdate: 0 });
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const { universities, universitiesLoading } = useGetUniversityList({ filterText });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const onClickDelete = (id: number) => {
    deleteUniversity(id);
  };
  const toggleAddModal = useMemo(
    () => () => {
      setUniversityModalSettings((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    },
    [setUniversityModalSettings]
  );
  const onClickUpdate = useMemo(
    () => (id: number) => {
      toggleAddModal();
      setUniversityModalSettings((prev) => ({ ...prev, universityIdToUpdate: id }));
    },
    [toggleAddModal, setUniversityModalSettings]
  );
  const onClickAddNew = () => {
    toggleAddModal();
    setUniversityModalSettings((prev) => ({ ...prev, universityIdToUpdate: 0 }));
  };

  const debouncedHandleChange = debounce(handleSearch, 500);
  const onSubmit = (e: OptionalUniversity, images: UploadFile[]) => {
    if (universityModalSettings.universityIdToUpdate) {
      updateUniversity(universityModalSettings.universityIdToUpdate, e);
      return;
    }
    insertUniversity(e);
  };

  const columns: ColumnsType<OptionalUniversity> = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        width: '60px',
        align: 'center'
      },
      {
        title: 'Name',
        width: '300px',
        dataIndex: 'name',
        align: 'center'
      },
      {
        title: 'Country',
        width: '200px',
        align: 'center',
        render: (_, { country }) =>
          country && (
            <Flex gap="middle" vertical>
              {country.map((country) => (
                <span key={country.id}>{country.name}</span>
              ))}
            </Flex>
          )
      },
      {
        title: 'City',
        width: '200px',
        align: 'center',
        render: (_, { city }) =>
          city && (
            <Flex gap="middle" vertical>
              {city.map((city) => (
                <span key={city.id}>{city.name}</span>
              ))}
            </Flex>
          )
      },
      {
        title: 'Website',
        width: '200px',
        align: 'center',
        render: (_, { website }) =>
          website && (
            <Link href={website} target="_blank">
              {website}
            </Link>
          )
      },
      {
        key: 'actions',
        fixed: 'right',
        align: 'center',
        render: (_, { id }) =>
          id && (
            <Flex justify="center" gap="middle">
              <Popconfirm
                title="Delete University"
                description="Are You Sure You Want To Delete This University"
                onConfirm={() => onClickDelete(id)}
                okText="Delete"
                cancelText="Cancel"
              >
                <DeleteTwoTone twoToneColor="red" className="fs-18 pointer" />
              </Popconfirm>
              <EditTwoTone className="fs-18 pointer" onClick={() => onClickUpdate(id)} />
            </Flex>
          )
      }
    ],
    [onClickUpdate]
  );

  return (
    <Flex vertical gap="middle">
      <Flex justify="end">
        <Button size="large" className="bg-primary c-white" onClick={onClickAddNew}>
          Add university
        </Button>
      </Flex>
      <Search size="large" onChange={debouncedHandleChange} placeholder="Universities Filter" />
      <AntdTable
        loading={universitiesLoading}
        data={[
          {
            id: 2,
            name: 'uni'
          },
          {
            id: 20,
            name: 'uni'
          },
          {
            id: 200,
            name: 'uni'
          },
          {
            id: 2000,
            name: 'uni'
          },
          {
            id: 21,
            name: 'uni'
          },
          {
            id: 2425,
            name: 'uni'
          }
        ]}
        handleOnChangePage={setPage}
        handleOnChangeLimit={setLimit}
        columns={columns}
        limit={limit}
        page={page}
        metadata={{ total: 500 }}
      />
      <AddUniversityModal
        data={
          universityModalSettings.universityIdToUpdate
            ? universities?.find((uni) => uni.id === universityModalSettings.universityIdToUpdate)
            : undefined
        }
        onSubmit={onSubmit}
        open={universityModalSettings.isOpen}
        toggleOpen={toggleAddModal}
      />
    </Flex>
  );
};
