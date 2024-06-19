import './BoxText.scss';

const BoxText = (props) => {
    return (
        <div className="box-text">
            <p>{props.text}</p>
        </div>
    )
}

export default BoxText;