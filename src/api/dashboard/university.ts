import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';

// utils
import { fetcher, fetcherDelete, fetcherPost, fetcherPut } from 'utils/axios';

// types
import { OptionalUniversity, University, UniversityProps } from 'types/dashboard/university';

const initialState: UniversityProps = {
  modal: false
};

export const endpoints = {
  key: 'api/university',
  list: '/list', // server URL
  modal: '/modal', // server URL
  insert: '/insert', // server URL
  update: '/update', // server URL
  delete: '/delete' // server URL
};

export function useGetUniversityList(filter: object | undefined = undefined) {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.list, (url) => fetcher([url, { data: filter }]), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      universities: data?.customers as University[] | undefined,
      universitiesLoading: isLoading,
      universitiesError: error,
      universitiesValidating: isValidating,
      universitiesEmpty: !isLoading && !data?.customers?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function insertUniversity(newUniversity: OptionalUniversity) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentData: { universities: OptionalUniversity[] } | undefined) => {
      if (!currentData) return; // Return early if currentData is undefined
      newUniversity.id = currentData.universities.length + 1;
      const addedUniversity: OptionalUniversity[] = [...currentData.universities, newUniversity];

      return {
        ...currentData,
        universities: addedUniversity
      };
    },
    false
  );
  fetcherPost([endpoints.key + endpoints.insert, { data: newUniversity }]);
}

export async function updateUniversity(universityId: number, updatedUniversity: OptionalUniversity) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentData: { universities: OptionalUniversity[] } | undefined) => {
      if (!currentData) return; // Return early if currentData is undefined
      const newUniversity: OptionalUniversity[] = currentData.universities.map((university: OptionalUniversity) =>
        university.id === universityId ? { ...university, ...updatedUniversity } : university
      );

      return {
        ...currentData,
        universities: newUniversity
      };
    },
    false
  );

  fetcherPut([endpoints.key + endpoints.insert, { data: { id: universityId, ...updatedUniversity } }]);
  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { list: updatedUniversity };
  //   await axios.post(endpoints.key + endpoints.update, data);
}

export async function deleteUniversity(universityId: number) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentData: { universities: OptionalUniversity[] } | undefined) => {
      if (!currentData) return; // Return early if currentData is undefined
      const nonDeletedUniversity = currentData.universities.filter((university: OptionalUniversity) => university.id !== universityId);

      return {
        ...currentData,
        universities: nonDeletedUniversity
      };
    },
    false
  );
  fetcherDelete([endpoints.key + endpoints.insert, { data: { id: universityId } }]);
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
