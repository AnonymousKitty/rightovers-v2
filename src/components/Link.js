import "./Link.css"

export default function Link({link, children}) {
    
    return (
        <a href={link} className="directory-btn">{children}</a>
    )
}
