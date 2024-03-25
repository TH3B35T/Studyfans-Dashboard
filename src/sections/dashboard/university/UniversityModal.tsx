import { useMemo } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

// PROJECT IMPORTS
import FormUniversityAdd from './FormUniversityAdd';
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';
import CircularWithPath from 'components/@extended/progress/CircularWithPath';
import { useGetUniversity } from 'api/dashboard/university';

// TYPES
import { UniversityList } from 'types/dashboard/university';

interface Props {
  open: boolean;
  modalToggler: (state: boolean) => void;
  university?: UniversityList | null;
}

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

const UniversityModal = ({ open, modalToggler, university }: Props) => {
  const { universitiesLoading: loading } = useGetUniversity();

  const closeModal = () => modalToggler(false);

  const universityForm = useMemo(
    () => !loading && <FormUniversityAdd university={university || null} closeModal={closeModal} />,
    // eslint-disable-next-line
    [university, loading]
  );

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-university-add-label"
          aria-describedby="modal-university-add-description"
          sx={{ '& .MuiPaper-root:focus': { outline: 'none' } }}
        >
          <MainCard
            sx={{ width: `calc(100% - 48px)`, minWidth: 340, maxWidth: 880, height: 'auto', maxHeight: 'calc(100vh - 48px)' }}
            modal
            content={false}
          >
            <SimpleBar sx={{ maxHeight: `calc(100vh - 48px)`, '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
              {loading ? (
                <Box sx={{ p: 5 }}>
                  <Stack direction="row" justifyContent="center">
                    <CircularWithPath />
                  </Stack>
                </Box>
              ) : (
                universityForm
              )}
            </SimpleBar>
          </MainCard>
        </Modal>
      )}
    </>
  );
};

export default UniversityModal;
