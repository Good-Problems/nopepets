import World from "./World";

function Header(props) {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          height: "175px",
          width: "85%",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/orange-texture_95678-73.jpg?w=2000')",
          borderRadius: "25px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <p
          style={{
            textAlign: "right",
            fontSize: "30px",
            paddingRight: "50px",
          }}
        >
          <button
            onClick={() => {
              props.setPlanet("universe");
            }}
          >
            World Map
          </button>
          <button
            onClick={() => {
              props.setPlanet("adopt");
            }}
          >
            Animal Adoption
          </button>
          <button
            onClick={() => {
              props.setPlanet("pets");
            }}
          >
            See Pets
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Points: {props.points}{" "}
          <button
            onClick={() => {
              props.pointsToTokens();
            }}
          >
            move to chain
          </button>
        </p>
        <p
          style={{
            textAlign: "right",
            fontSize: "30px",
            paddingRight: "50px",
          }}
        >
          {" "}
          <button>
            <a
              href="https://testnet.bscscan.com/address/0x154e6f29e629a4b63f85735e65449b92fbbb4bc4"
              target="_blank"
            >
              See testnet wallet
            </a>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Balance: {props.balance}{" "}
          <button
            onClick={() => {
              props.tokensToPoints();
            }}
          >
            move to site
          </button>
        </p>
      </div>

      <div style={{ paddingTop: "175px" }}>
        <World
          seePet={props.seePet}
          petInfo={props.petInfo}
          petNum={props.petNum}
          adopt={props.adopt}
          planet={props.planet}
          setPlanet={props.setPlanet}
          points={props.points}
          setPoints={props.setPoints}
        />
      </div>
    </div>
  );
}

export default Header;
