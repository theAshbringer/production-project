import React from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoutes, RoutePath } from 'shared/config/routes';

export interface NavLinkItemType {
  name: string;
  path: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const navLinks: NavLinkItemType[] = [
  {
    name: AppRoutes.MAIN,
    path: RoutePath.main,
    Icon: HomeIcon,
  },
  {
    name: AppRoutes.PROFILE,
    path: RoutePath.profile,
    Icon: ProfileIcon,
  },
  {
    name: AppRoutes.ABOUT,
    path: RoutePath.about,
    Icon: AboutIcon,
  },
];
