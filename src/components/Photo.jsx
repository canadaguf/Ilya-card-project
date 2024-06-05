import ilyaPhoto from '../img/GSH29041.jpg'
export default function Photo() {
    return (
        <div id="ctn-image">
            <img src={ilyaPhoto} ></img>
            <p id="attribution"><em>Корпоративная эстафета 25.05.24</em></p>
        </div>
    );
}