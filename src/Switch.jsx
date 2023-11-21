import {useTheme} from './UserContext'
import './app.css'
const Switch = () => {
    const {theme, toggleTheme} = useTheme();
    return (
      <div>
      style={{backgroundColor: theme==="light"? "white": "black"}}
     <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme==='light'}
        />
        <span className="slider round" />
      </label>
      </div>
      
    );
   }
   export default Switch;