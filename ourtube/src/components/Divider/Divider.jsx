import './Divider.css';

function Divider({color}) {
  const classList = `divider divider__color_${color}`
  return (
    <div className={classList}></div>
  )
}

export default Divider;