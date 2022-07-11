import './index.scss'
import svg from '../../assets/svg/software-code-testing-animate.svg'

export function Works() {
    return (
        <div className='works'>
            <span className='congratulations'>Congratulations!</span>
            <img src={svg} />
            <span>If it will make you feel better: this page be available soon.</span>
        </div>
    );
}