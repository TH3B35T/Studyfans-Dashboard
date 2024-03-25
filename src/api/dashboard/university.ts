import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';

// utils
import { fetcher } from 'utils/axios';

// types
import { UniversityList, UniversityProps } from 'types/dashboard/university';

const initialState: UniversityProps = {
  modal: false
};

export const endpoints = {
  key: 'api/customer',
  list: '/list', // server URL
  modal: '/modal', // server URL
  insert: '/insert', // server URL
  update: '/update', // server URL
  delete: '/delete' // server URL
};

export function useGetUniversity() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.list, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      universities: data?.customers as UniversityList[],
      universitiesLoading: isLoading,
      universitiesError: error,
      universitiesValidating: isValidating,
      universitiesEmpty: !isLoading && !data?.customers?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function insertUniversity(newUniversity: UniversityList) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentUniversity: any) => {
      newUniversity.id = currentUniversity.universities.length + 1;
      const addedUniversity: UniversityList[] = [...currentUniversity.universities, newUniversity];

      return {
        ...currentUniversity,
        universities: addedUniversity
      };
    },
    false
  );

  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { newUniversity };
  //   await axios.post(endpoints.key + endpoints.insert, data);
}

export async function updateUniversity(universityId: number, updatedUniversity: UniversityList) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentUniversity: any) => {
      const newUniversity: UniversityList[] = currentUniversity.universities.map((university: UniversityList) =>
        university.id === universityId ? { ...university, ...updatedUniversity } : university
      );

      return {
        ...currentUniversity,
        universities: newUniversity
      };
    },
    false
  );

  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { list: updatedUniversity };
  //   await axios.post(endpoints.key + endpoints.update, data);
}

export async function deleteUniversity(universityId: number) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentUniversity: any) => {
      const nonDeletedUniversity = currentUniversity.universities.filter((university: UniversityList) => university.id !== universityId);

      return {
        ...currentUniversity,
        universities: nonDeletedUniversity
      };
    },
    false
  );

  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { universityId };
  //   await axios.post(endpoints.key + endpoints.delete, data);
}

export function useGetUniversityMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.modal, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      universityMaster: data,
      universityMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerUniversityDialog(modal: boolean) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.modal,
    (currentUniversitymaster: any) => {
      return { ...currentUniversitymaster, modal };
    },
    false
  );
}
