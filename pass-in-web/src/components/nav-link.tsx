interface NavLinkProps {
    children: string,
    href: string,
    isActived?: boolean
}

export function NavLink(props: NavLinkProps) {
    const isActived = "font-medium text-sm text-zinc-300";
    const isntActived = "font-medium text-sm";
    return (
    <a href={props.href} className={(props.isActived ? isActived : isntActived)}>{props.children}</a>   
    )
}