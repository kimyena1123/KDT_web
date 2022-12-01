import './Button.css';

const Button = (props) => {
    console.log(props);
    const {link, children} = props;

    return (
        <div>
            <h1>Button</h1>
            <a href = {link} target = "_blank" rel = "noreferrer">
                <button>{children}</button>
            </a>
        </div>
    )
};
Button.defaultProps = {
    children: '네이버',
    link: 'https://www.namver.com',
}

export default Button;