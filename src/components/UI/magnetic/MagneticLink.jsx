import MagneticUI from './MagneticUI';

const MagneticLink = ({ style, distanceTrigger, className, children, onClick }) => {
   return (
      <MagneticUI onClick={onClick} style={style} distanceTrigger={distanceTrigger} className={`${className} magnetic-no-amin`} children={children} />
   )
}

export default MagneticLink