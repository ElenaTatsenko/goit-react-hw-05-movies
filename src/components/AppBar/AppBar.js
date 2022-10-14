import { AiOutlineHome, } from 'react-icons/ai';
import {TbMovie} from 'react-icons/tb'
import { NavItem, Header, Text } from './AppBar.styled'


const navItems = [
    { href: '/', text: 'Home', icon: AiOutlineHome, },
    { href: '/movies', text: 'Movies', icon: TbMovie, }
];
    
const AppBar = () => {
    return (
        <Header>
            
            {navItems.map(({ href, text, icon: Icon }) =>
                
                <NavItem key={href} to={href} end>
                    <Icon size={24} />
                    <Text>{text}</Text>
                </NavItem>
      
               )}
            
        </Header>
   )
}

export default AppBar;
