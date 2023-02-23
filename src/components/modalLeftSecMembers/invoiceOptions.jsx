export default function InvoiceOptions({img,alt,name}) {
    return (
        <>
            <div className='InvoiceOptions'>
                <div className='InvoiceOptionsChild'>
                    <img src={img} alt={alt} />
                </div>
                <span>{name}</span>
            </div>
        </>
    )
}