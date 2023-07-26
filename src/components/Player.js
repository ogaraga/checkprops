function Player(props) {
    return (
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", margin: "auto" }}>

            {props.PlayerData}
        </div>



    )
}
export default Player;