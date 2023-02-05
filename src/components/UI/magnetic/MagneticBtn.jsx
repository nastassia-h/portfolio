import MagneticUI from "./MagneticUI";

const MagneticBtn = ({ style, className, children, onClick, distanceTrigger = 0.7 }) => {

   return (
      <MagneticUI onClick={onClick} style={style} distanceTrigger={distanceTrigger} className={`magnetic-btn ${className}`} children={children} />
   );
};

export default MagneticBtn;