import { FC, PropsWithChildren} from 'react';
import AppBar from '../AppBar/AppBar';


const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
        <AppBar/>
        <main>{children}</main>
        </div>
    )
}

export default Layout