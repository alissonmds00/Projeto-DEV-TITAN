import './styles.css'

export function Card() {
    return (
        <div className='Card'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
            <p className='medium14'>Nome do item nome do item nome do item</p>
            <p className='h2'>R$ 19,90</p>
            <button className='medium14'>COMPRAR</button>
        </div>
    )
}