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
  key: 'universities'
};

export function useGetUniversityList(filter: object | undefined = undefined) {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key, (url) => fetcher([url, { data: filter }]), {
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
    endpoints.key,
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
  fetcherPost([endpoints.key, { data: newUniversity }]);
}

export async function updateUniversity(updatedUniversity: OptionalUniversity) {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentData: { universities: OptionalUniversity[] } | undefined) => {
      if (!currentData) return; // Return early if currentData is undefined
      const newUniversity: OptionalUniversity[] = currentData.universities.map((university: OptionalUniversity) =>
        university.slug === updatedUniversity.slug ? { ...university, ...updatedUniversity } : university
      );

      return {
        ...currentData,
        universities: newUniversity
      };
    },
    false
  );

  fetcherPut([endpoints.key + `/${updatedUniversity.slug}`, { data: { ...updatedUniversity } }]);
  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { list: updatedUniversity };
  //   await axios.post(endpoints.key + endpoints.update, data);
}

export async function deleteUniversity(slug: string) {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentData: { universities: OptionalUniversity[] } | undefined) => {
      if (!currentData) return; // Return early if currentData is undefined
      const nonDeletedUniversity = currentData.universities.filter((university: OptionalUniversity) => university.slug !== slug);

      return {
        ...currentData,
        universities: nonDeletedUniversity
      };
    },
    false
  );
  fetcherDelete(endpoints.key + `/${slug}`);
  // to hit server
  // you may need to refetch latest data after server hit and based on your logic
  //   const data = { universityId };
  //   await axios.post(endpoints.key + endpoints.delete, data);
}

export function useGetUniversityMaster() {
  const { data, isLoading } = useSWR(endpoints.key, () => initialState, {
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
    endpoints.key,
    (currentUniversitymaster: any) => {
      return { ...currentUniversitymaster, modal };
    },
    false
  );
}
