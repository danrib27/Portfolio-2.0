import orbital from '../../assets/svg/orbital_icons.svg'
import './index.scss'

export function Menu() {
    return(
        <div>
            <img id="orbital" src={orbital} />
            <p id="codeApresentation">
                <a className='text-regular text-regular-pink'>const </a><a className='text-bold text-bold-purple'>DanielDuarte</a><a className='text-regular text-regular-pink'>:</a><a className='text-bold text-bold-cian'> Developer </a><a className='text-regular text-regular-pink'>=</a> <a className='text-regular'>&#123;</a><br /><a className='text-regular'>&emsp;type:</a><a className='text-bold'> "Full-Stack"</a><a className='text-regular'>,</a><br /><a className='text-regular'>&emsp;language:</a><a className='text-bold'> "Typescript"</a><br /><a className='text-regular'>&#125;</a>
            </p>
      </div>
    )
}