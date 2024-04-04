// JSX - JavaScript XML
// TSX - TypeScript XML
import nwlUniteIcon from '../assets/nwl-unite-icon.svg';
import { NavLink } from './nav-link';

export function Header() {
    return (
    <div className="flex items-center gap-5 PY-2">
        <img src={nwlUniteIcon} alt="" />
        
        <nav className="flex items-center gap-5">
            {/* <a href="" className="font-medium text-sm text-zinc-300">Eventos</a> */}
            <NavLink href="#" isActived={true}>Eventos</NavLink>
            <NavLink href="#">Participantes</NavLink>
        </nav>
    </div>
    )
}