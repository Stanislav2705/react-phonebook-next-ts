import { FC } from 'react';
import { Load } from './Loader.styled';
import CircularProgress from '@mui/material/CircularProgress';

const Loader: FC = () => {
    return (
        <>
          <Load>
            <CircularProgress />
          </Load>
        </>
      )
}

export default Loader;

