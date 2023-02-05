import { useState } from 'react';
import { motion } from 'framer-motion'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { useMousePosition } from '../hooks/useMousePosition';
import Slider from './Slider';
import { works } from '../data/works';
import { Link } from 'react-router-dom';
import Cursor from './UI/cursor/Cursor';

const WorksColumn = ({ length }) => {
  const { x, y } = useMousePosition();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false)
  const { width, height } = useWindowDimensions();
  return (
    <div className='menu'
    >
      <div className='menu-container'>
        <div className='menu-inner'>
          <ul
            className={'menu-list'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {works.slice(0, length).map(item =>
              <WorksGridItem key={item.id} id={item.id} title={item.title} desc={item.desc} setActiveSlide={setActiveSlide} src={item.src} width={width} color={item.color} />
            )}
          </ul>
        </div>
      </div>
      {width >= 991.98 ?
        <Slider activeSlide={activeSlide} x={x} y={y} hovered={hovered} />
        :
        <Cursor x={x} y={y} hovered={hovered} title={'View'} />
      }

    </div>
  )
}

export default WorksColumn

const WorksGridItem = ({ title, desc, id, setActiveSlide, src, width, color }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.li
      className='menu-item'
      animate={isHovered && width >= 991.98 ? { width: '105%' } : { width: '100%' }}
      transition={{ duration: .3 }}
      onHoverStart={() => { setActiveSlide(id); setIsHovered(true) }}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/work/${title.toLowerCase()}`} className='menu-item__inner'>
        {width < 991.98 ? (
          <div
            style={{ backgroundColor: `${color}`, backgroundImage: `url('${src}')` }} className='menu-item__image'>
          </div>
        ) : (
          <></>
        )}
        <div className={`${isHovered && width >= 991.98 ? "active" : ""} menu-item__title`}>{title}</div>
        <div className={`${isHovered && width >= 991.98 ? "active" : ""} menu-item__description`}>{desc}</div>
      </Link>
    </motion.li>
  )
}
