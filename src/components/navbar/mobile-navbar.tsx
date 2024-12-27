import { useState } from 'react';
import { Bar, Burguer, ListItem, MobileList, MobileNavItem, MobileNavLink } from './navbar.styles';

export const MobileNavbar = () => {
    const [btnState, setBtnState] = useState(false);

    const toggle = () => {
        setBtnState(!btnState)
        console.log(btnState)
        if (!btnState) {
            return document.body.style.overflow = 'hidden'
        }
        return document.body.style.overflow = 'scroll'
    }

    return (
        <>
            <Burguer className={"burgir" + (btnState ? " ativo" : "") + " d-block d-lg-none"} onClick={toggle} >
                <Bar style={{top: 0}} />
                <Bar style={{top: 8}} />
                <Bar style={{bottom: 0}} />
            </Burguer>
            {
                btnState && (
                    <MobileNavItem>
                        <MobileList>
                            <ListItem>
                                <MobileNavLink to="/">Home</MobileNavLink>
                            </ListItem>
                            <ListItem>
                                <MobileNavLink to="/corpo-docente">Corpo Docente</MobileNavLink>
                            </ListItem>
                            <ListItem>
                                <MobileNavLink to="/contato">Contato</MobileNavLink>
                            </ListItem>
                        </MobileList>
                    </MobileNavItem>
                )
            }

        </>
    );
};