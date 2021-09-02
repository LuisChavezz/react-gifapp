


export const GifGridItem = ( {img} ) => {



    return (
        <div className='card animate__animated animate__bounce animate__delay-2s'>
            <img src={ img.url } alt={ img.title } />
            <p>{ img.title }</p>
        </div>
    )
}