import { AiOutlineHome, } from 'react-icons/ai';
import {TbMovie} from 'react-icons/tb'
import { NavItem, Text, Header, Box } from './AppBar.styled'


const navItems = [
    { href: '/', text: 'Home', icon: AiOutlineHome, },
    { href: '/movies', text: 'Movies', icon: TbMovie, }
];
    
const AppBar = () => {
    return (
        <Header>
            <Box as='nav'>
                {navItems.map(({ href, text, icon: Icon }) => <li key={href}><NavItem to={href} end><Icon size={24} /><Text>{text}</Text></NavItem></li>)}
            </Box>
        </Header>
    )
}

export default AppBar;