import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type MUIIconType = OverridableComponent<
  SvgIconTypeMap<object, 'svg'>
> & {
  muiName: string;
};
