import * as React from 'react';
// import Material Components from Material Ui 
import {Drawer,Button} from '@mui/material';
// import Icon from Material ui 
import ChatIcon from '@mui/icons-material/Chat';
// import Chat Style from Style Component 
import { ChatStyle } from './Style'
// import Chat Component
import Chat from './Chat';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <ChatStyle>
            {['right',].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/*  Chat Icon Button  */}
                    <Button onClick={toggleDrawer(anchor, true)} className="chatbutton" ><ChatIcon fontSize='large' /></Button>
                   {/* Drawer Open  */}
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{
                            '& .MuiPaper-root': {
                                width: "350px",
                                height: "450px",
                                marginRight: "15px",
                                marginBottom: "15px",
                                top: "unset",
                                bottom: "0",
                                borderRadius: "10px",
                            },
                        }}

                    >
                        {/* Chat Component */}
                        <Chat />
                    </Drawer>
                </React.Fragment>
            ))}
        </ChatStyle>
    );
}