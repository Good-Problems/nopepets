import Lavaland from "./planets/Lavaland";
import Volcano from "./events/Volcano";
import Universe from "./planets/Universe";
import Eye from "./planets/Eye";
import Earf from "./planets/Earf";
import Shop from "./events/Shop";
import Grassland from "./planets/Grassland";
import Wheel from "./events/Wheel";
import Adopt from "./events/Adopt";
import Pets from "./events/Pets";

function World(props) {
  if (props.planet === "adopt") {
    return <Adopt setPlanet={props.setPlanet} adopt={props.adopt} />;
  }
  if (props.planet === "pets") {
    return (
      <Pets
        petInfo={props.petInfo}
        setPlanet={props.setPlanet}
        seePet={props.seePet}
        petNum={props.petNum}
      />
    );
  }
  if (props.planet === "universe") {
    return <Universe setPlanet={props.setPlanet} />;
  }
  if (props.planet === "lavaland") {
    return <Lavaland setPlanet={props.setPlanet} />;
  }
  if (props.planet === "grassland") {
    return <Grassland setPlanet={props.setPlanet} />;
  }
  if (props.planet === "earf") {
    return <Earf setPlanet={props.setPlanet} />;
  }
  if (props.planet === "shop") {
    return <Shop setPlanet={props.setPlanet} />;
  }
  if (props.planet === "wheel") {
    return (
      <Wheel
        points={props.points}
        setPoints={props.setPoints}
        setPlanet={props.setPlanet}
      />
    );
  }
  if (props.planet === "eye") {
    return <Eye setPlanet={props.setPlanet} />;
  }
  if (props.planet === "volcano") {
    return <Volcano setPlanet={props.setPlanet} />;
  }
}

export default World;
