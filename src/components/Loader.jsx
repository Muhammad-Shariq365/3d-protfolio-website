import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html style={{ marginTop: '20px' }}>
    <span className='canvas-load'></span>  
    <p
      style={{
        fontSize:14,
        colort:"#fififi",
        fontWeight: 800,
        marginTop: 40
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader;