
import Image from 'react-bootstrap/Image'
import broken from '../assets/broken_clouds.svg'
import Weather from './Weather'


const Body: React.FC = (): JSX.Element => {

    const styles = {
        dataContainer:{
            borderRadius: '20px',
        },
        imageSettings: {
            borderRadius: '20px',
        },
        insideContainer:{
            border: '1px solid blue',
            width: '100%',
            height: '100%'
        }
    }

    return(
    <div className='container-lg d-flex justify-content-center align-items-center position-relative p-0'>
       <div style={styles.dataContainer} className='position-relative'>
         <div  style={styles.insideContainer} className="position-absolute">
             <Weather />
         </div>
         <Image style={styles.imageSettings} src={broken} fluid />
       </div>
    </div>
    )
}


export default Body;