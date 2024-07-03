import './Snowfall.css';

export default function createSnow() {
    let flake = document.createElement('flake')
    let speed = Math.random() * 10 + 4
    document.body.appendChild(flake)
    flake.style.scale = `${Math.random() * 2 + 1}`
    flake.style.setProperty('--snow-speed', `${speed}s`)
    flake.style.setProperty('--snow-pos', `${Math.random() * 101}vw`)

    setTimeout(() =>{
        document.body.removeChild(flake)
    }, speed*1000);
    return (
        <div>
            {flake}
        </div>
    )
}


