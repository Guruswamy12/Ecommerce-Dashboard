import Sidebar from '../Components/common/sidebar'
import Box from '@mui/material/Box'
import Header from './Header'
export default function Dashboard () {
  return (
    <>
    <Box>
    <Sidebar/>
    <Header/>
    <h1>This is Dashboard Component</h1>
    </Box>
    </>
  )
}
