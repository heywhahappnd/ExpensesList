import './Card.css';

function Card(props) {
    const styles = 'card ' + props.className;
    return <div className={styles}>{props.children}</div>
}

export default Card;