import "./Link.css"

export default function Link({link, hasRounded=false, isPrimary=false, children}) {
    
    return (
        <a href={link} className={"cat-btn " + (hasRounded ? 'has-rounded ' : ' ') + (isPrimary ? 'is-primary' : ' ')}>{children}</a>
    )
}
