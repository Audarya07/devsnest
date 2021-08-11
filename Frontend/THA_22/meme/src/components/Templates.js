const Templates = ({templates, setMeme}) => {
    return (
        <div className="templates">
            {templates.map(template => (
                <div key={templates.id} className="template" onClick={() => {
                    setMeme(template)
                }}>
                    <div 
                    style={{backgroundImage: `url(${template.url})`}}
                    className="image">
        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Templates;