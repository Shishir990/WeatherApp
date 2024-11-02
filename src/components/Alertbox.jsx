import {Alert} from "react-bootstrap"
export function Alertbox(){
    return(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
         <Alert style={{margin:"30px auto"}} variant="success">
        <Alert.Heading>Hey,Welcome to my Weather App</Alert.Heading>
        <p>
          You can view weather reports here just by serching the name of the city
          in the search bar below.Also additional information like wind speed ,humdity
          and other parameters can be viewed here.
        </p>
        <hr />
      </Alert>

      </div>
       
    );

}