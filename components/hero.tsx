import image from "./hero.svg";

function Hero() {
    return (
        <div style={{ backgroundImage: `url(${image})` }}>
        </div>
    )
}

export { Hero }