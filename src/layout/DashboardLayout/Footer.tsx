// MATERIAL - UI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; Studyfans</Typography>
  </Stack>
);

export default Footer;
