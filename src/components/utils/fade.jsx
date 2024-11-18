
const Fade = (props) => {

  const {isVisible} = props;

  let className = "fade";

  if (isVisible){

    className += "-in";

  }

  return (
    <div className={`fade ${className}`}>{props.children}</div>  
  )

}
export default Fade