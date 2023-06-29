const MoreInfo = ({attributions}) => {
    return (
        <div className="card mb-4">
            <div className='card-body'>
                <h4 className='card-title'>
                    Click the Links for More Info:
                </h4>
                <div>
                    {attributions.map((website) => (
                        <div key={website.url}>
                            <a href={website.url} target="_blank">
                                {website.url}
                            </a>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreInfo