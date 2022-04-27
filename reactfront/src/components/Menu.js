import {Navigation} from 'react-minimal-side-navigation';
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";

const Menu = () => {
    
    const location = useLocation();
    const navigation = useNavigate();
    
    
    return (

        <div className='position-fixed'>

        <Navigation
            // you can use your own router's api to get pathname
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
            navigation.navigate(itemId);
            }}

            items={[
            {
                title: 'Inicio',
                itemId: '/',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />,
            },
            {
                title: 'Ingresar alumno',
                itemId: '/create',
                elemBefore: () => <Icon name="users" />,
                subNav: [
                {
                    title: 'Projects',
                    itemId: '/management/projects',
                },
                {
                    title: 'Members',
                    itemId: '/management/members',
                },
                ],
            },
            {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                {
                    title: 'Teams',
                    itemId: '/management/teams',
                },
                ],
            },
            ]}
        />
        
        </div>
        
        
    )
}


export default Menu


