// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Book1, HambergerMenu } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  page: Book1,
  universities: HambergerMenu
};

// ==============================|| MENU ITEMS - UNIVERSITIES ||============================== //

const universities: NavItemType = {
  id: 'group-universities',
  type: 'group',
  icon: icons.page,
  children: [
    {
      id: 'universities',
      title: <FormattedMessage id="universities" />,
      type: 'collapse',
      icon: icons.universities,
      children: [
        {
          id: 'universities-list',
          title: <FormattedMessage id="universities" />,
          type: 'item',
          url: '/universities',
          target: true
        }
      ]
    }
  ]
};

export default universities;
