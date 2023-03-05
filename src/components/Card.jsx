import CardBody from "./CardBody";

export default function Card(props) {
  const {children} = props;
  
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      {children}
      <CardBody buttonText="Go somewhere" {...props}/>
    </div>
  )
}
