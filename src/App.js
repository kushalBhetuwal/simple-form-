import Practice from "./Practice1/Practice";
import Profile from "./User/Profile";
import { UserProvider } from "./User/Usercontext";
import { ThemeProvider, useTheme } from "./UserContext";
import Switch from './Switch.jsx'
import './app.css'
const App =()=>{
  return (
    <div>
    <Practice/>
    <UserProvider>
    <Profile/>
    </UserProvider>
    <ThemeProvider>
      <Switch/>
    </ThemeProvider>
   
    </div>
  )
}

export default App;