import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'

export default function  Sidebar () {
  return (
    <Box
      sx={{
        width: 260,
        height: "clamp(64px, 85vh - 56px, 90vh)",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #e0e0e0",
        bgcolor: "background.paper",
      }}
    >
        <Box flex={1} p={2}>
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text} disablePadding>
                {text}
              </ListItem>
            ))}
         </List>
        </Box>
    </Box>
  )
}
