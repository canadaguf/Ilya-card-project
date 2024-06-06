export default function Buttons() {
    return (
        <div className="buttons">
            <a href="mailto:ilyaiono@gmail.com">
                <button id="btn-email">
                    <i className="fa fa-envelope"></i>Email
                </button>
            </a>
            <a href="tel:+79384668931">
                <button id="btn-phone">
                    <i className="fa fa-phone"></i>Phone
                </button>
            </a>
        </div>
    );
}
