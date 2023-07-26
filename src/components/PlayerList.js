import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";
function PlayerList() {
    const PlayerDatas = [
        { image: 'https://e2.365dm.com/10/06/800x600/Kalu-Uche-celeb-v-Greece_2466899.jpg?20100617155132' },
        { name: "Name: Uche Kalu" },
        { team: "Team: Águilas" },
        { nationality: "Nationality: Nigeria" },
        { jerseyNo: `JerseyNo: ${12}` },
        { age: `Age: ${30}` },

        { image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/10/26/thumbs_b_c_5625be5d0830bcc7eb4cabf7a6e1e979.jpg?v=200051' },
        { name: " Name: Amed Musa" },
        { team: "Team: Sivasspor" },
        { nationality: "Nationality: Nigeria" },
        { jerseyNo: `JerseyNo: ${7}` },
        { age: `Age: ${30}` },

        { image: 'https://www.footballlive.ng/wp-content/uploads/2018/02/Okechukwu.jpg' },
        { name: "Name: Okechukw Gabriel" },
        { team: "Team: Akwa United" },
        { nationality: "Nationality: Nigeria" },
        { jerseyNo: `JerseyNo: ${15}` },
        { age: `Age: ${20}` },

        { image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRttkac1ZjO6Ugh_woWHSxOajDBymf5QQJ3WKXZQ3qHQf1YLNGzDILCVlBiKaOFo2c7SVJnWhn1TzV5u_s' },
        { name: "Name: Cristiano Ronaldo" },
        { team: "Team: Al-Nassr fc" },
        { nationality: "Nationality: Portugal" },
        { jerseyNo: `JerseyNo: ${7}` },
        { age: `Age: ${34}` },

        { image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSpNWC8pbqyPBG_GSAGQTgCPKJDgKKHwODg34nbnIL6U5xykRk4wvNAxCHUx5h_gWgDdIwo1nKykp3kOfI' },
        { name: "Name: Messi Lionel" },
        { team: "Team: Inter Miami CF" },
        { nationality: "Nationality: Argentina" },
        { jerseyNo: `JerseyNo: ${10}` },
        { age: `Age: ${30}` },

        { image: 'https://media.cnn.com/api/v1/images/stellar/prod/210622101406-02-sadio-mane-file-0516.jpg?q=x_73,y_13,h_1592,w_2830,c_crop/h_720,w_1280' },
        { name: "Name: Mane Sadio" },
        { team: "Team: Bayern FC" },
        { nationality: "Nationality: Senegal" },
        { jerseyNo: `JerseyNo: ${10}` },
        { age: `Age: ${30}` },

    ]
    const PlayerData = (card, idx) => {
        return (
            <Card style={{ width: '100%' }} key={idx}>
                <Card.Body style={{ border: "1px solid grey", color: "white", wordSpacing: "10px", fontWeight: "bolder0", textTransform: "uppercase", backgroundColor: "burlywood" }}>
                    <Card.Img style={{ width: "60%", height: "30%", margin: "-5px 20%" }} variant="top" src={card.image} />
                    <Player PlayerData={card.name} />
                    <Player PlayerData={card.team} />
                    <Player PlayerData={card.nationality} />
                    <Player PlayerData={card.jerseyNo} />
                    <Player PlayerData={card.age} />
                </Card.Body>
            </Card>

        )
    }
    return (
        <div>
            {PlayerDatas.map(PlayerData)}
        </div>
    )
}
export default PlayerList;