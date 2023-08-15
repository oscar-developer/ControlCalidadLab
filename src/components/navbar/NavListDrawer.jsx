import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({navArrayLinks}){
    return(
        <Box sx={{width: 250 }}>
            {/* <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                </List>
            </nav>
            <Divider/> */}
            <nav>
                <List>
                    {
                        navArrayLinks.map(item=>(
                            <ListItem disablePadding key={item.title}>
                                
                                <ListItemButton
                                component="a"
                                href={item.path}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>                        
                            </ListItem>
                        ))
                    }
                    
                </List>
            </nav>
        </Box>
    );
}