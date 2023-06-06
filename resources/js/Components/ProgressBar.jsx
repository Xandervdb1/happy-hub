import progressBar from "./progresscss/progressBar.css";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
   
const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
}
    return (
        <div className="progressBar">
            <div style={fillerStyles} className="completedBar">
                <span className="completedPart">{`${completed}%`}</span>
            </div>
        </div>

    );
};
export default ProgressBar;