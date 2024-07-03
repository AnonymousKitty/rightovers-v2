import "./Link.css";
import "./Snowfall.js";

export default function Link({link, children}) {
    
    return (
        <a href="#" className="directory-btn" onClick="Snowfall">{children}</a>
    )
}
