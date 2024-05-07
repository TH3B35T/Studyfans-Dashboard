import { Flex } from 'antd';
import { UniversityTable } from 'components/university/UniversityTable';

const UniversityListPage = () => {
  return (
    <Flex vertical gap="large">
      <UniversityTable />
    </Flex>
  );
};

export default UniversityListPage;
