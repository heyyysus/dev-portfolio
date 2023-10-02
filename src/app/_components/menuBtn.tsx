import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

export interface MenuBtnProps {
    onClick: () => void;
}

const MenuBtn: FC<MenuBtnProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={`p-1 border-solid border-2 
    rounded-md hover:cursor-pointer 
    hover:text-white transition-all mt-3`}>
      <span>
        <MenuIcon sx={{
            fontSize: 30,
        }} />
      </span>
    </div>
  );
};

export default MenuBtn