import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const handleDay = () =>{
    setThemeName('day');
  }

  const handleNight = () => {   
    setThemeName('night');
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleDay}>DAY</div>
      <div className="off" onClick={handleNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;