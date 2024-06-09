import FortniteImg from '../Images/RankImgs/fortnite.jpg';
import CODImg from '../Images/RankImgs/cod.jpg';
import eafcImg from '../Images/RankImgs/fifa.jpg';
import fifaImg from '../Images/RankImgs/fifa23.jpg';
import ApexImg from '../Images/RankImgs/apex.jpg';
import ForzaImg from '../Images/RankImgs/forza.jpg';
import GtaImg from '../Images/RankImgs/gta.jpg';
import RSixImg from '../Images/RankImgs/r6.jpg';
import MineImg from '../Images/RankImgs/minecraft.jpg';
import RobloxImg from '../Images/RankImgs/roblox.jpg';
import UnturnedImg from '../Images/RankImgs/unturned.jpg';
import RustImg from '../Images/RankImgs/rust.jpg';
import TeamImg from '../Images/RankImgs/tf2.jpeg';
import NarakaImg from '../Images/RankImgs/naraka.png';
import DestinyImg from '../Images/RankImgs/destiny.png';
import PubgImg from '../Images/RankImgs/pubg.png';
import DotaImg from '../Images/RankImgs/dota.jpg';
import CSImg from '../Images/RankImgs/cs.jpg';
import OWImg from '../Images/RankImgs/ov2.png'

const Rankings = [{
    id:0,
    gameName: "Fortnite",
    rank:1,
    price: "FREE",
    platform: "XBOX",
    img: FortniteImg,
    url: 'https://www.xbox.com/en-za/games/store/fortnite/bt5p2x999vh2'
},
{
    id:1,
    gameName: "Call of Duty: Warzone",
    rank:2,
    price: "FREE",
    platform: "XBOX",
    img: CODImg,
    url: 'https://www.microsoft.com/en-za/p/call-of-duty/9n201kqxs5bm'
},
{
    id:2,
    gameName: "EA FC24",
    rank:3,
    price: "FROM R219.99",
    platform: "XBOX",
    img: eafcImg,
    url: 'https://www.xbox.com/en-za/games/store/ea-sports-fc-24-xbox-series-x-s/9nn6qw1npckn'
},
{
    id:3,
    gameName: "ROBLOX",
    rank:4,
    price: "FREE",
    platform: "XBOX",
    img: RobloxImg,
    url: 'https://www.xbox.com/en-za/games/store/roblox/bq1tn1t79v9k'
},
{
    id:4,
    gameName: "FORZA HORIZON 5",
    rank:5,
    price: "FROM R549.00",
    platform: "XBOX",
    img: ForzaImg,
    url: 'https://www.xbox.com/en-za/games/store/forza-horizon-5/9nnx1vvr3knq'
},
{
    id:5,
    gameName: "Apex Legends",
    rank:6,
    price: "FREE",
    platform: "XBOX",
    img: ApexImg,
    url: 'https://www.xbox.com/en-za/games/store/apex-legends/bv9ml45j2q5v'
},
{
    id:6,
    gameName: "GTA V",
    rank:7,
    price: "FROM R469.99",
    platform: "XBOX",
    img: GtaImg,
    url: 'https://www.xbox.com/en-za/games/store/grand-theft-auto-v-xbox-one/bpj686w6s0nh'
},
{
    id:7,
    gameName: "Rainbox Six Seige",
    rank:8,
    price: "FROM R549.99",
    platform: "XBOX",
    img: RSixImg,
    url: 'https://www.xbox.com/en-za/games/store/tom-clancys-rainbow-six-siege/c12t09dsvp8j'
},
{
    id:8,
    gameName: "FIFA 23",
    rank:9,
    price: "ONLY EA PLAY",
    platform: "XBOX",
    img: fifaImg,
    url: 'https://www.xbox.com/en-za/games/store/ea-sports-fifa-23-standard-edition-xbox-one/9nddmhzrz0r6'
},
{
    id:9,
    gameName: "Minecraft",
    rank:10,
    price: "FROM R339.00",
    platform: "XBOX",
    img: MineImg,
    url: 'https://www.xbox.com/en-za/games/store/minecraft/9mvxmvt8zkwc'
},
{
    id:10,
    gameName: "Counter-Strike 2",
    rank:1,
    price: "FREE",
    platform: "STEAM",
    img: CSImg,
    url: 'https://store.steampowered.com/app/730/CounterStrike_2/'
},
{
    id:11,
    gameName: "DOTA 2",
    rank:2,
    price: "FREE",
    platform: "STEAM",
    img: DotaImg,
    url: 'https://store.steampowered.com/app/570/Dota_2/'
},
{
    id:12,
    gameName: "PUBG: Battlegrounds",
    rank:3,
    price: "FREE",
    platform: "STEAM",
    img: PubgImg,
    url: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/'
},
{
    id:13,
    gameName: "Destiny 2",
    rank:4,
    price: "FREE",
    platform: "STEAM",
    img: DestinyImg,
    url: 'https://store.steampowered.com/app/1085660/Destiny_2/'
},
{
    id:14,
    gameName: "Apex Legends",
    rank:5,
    price: "FREE",
    platform: "STEAM",
    img: ApexImg,
    url: 'https://store.steampowered.com/app/1172470/Apex_Legends/'
},
{
    id:15,
    gameName: "Naraka: BLADEPOINT",
    rank:6,
    price: "FREE",
    platform: "STEAM",
    img: NarakaImg,
    url: 'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/'
},
{
    id:16,
    gameName: "GTA V",
    rank:7,
    price: "FROM R300.22",
    platform: "STEAM",
    img: GtaImg,
    url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
},
{
    id:17,
    gameName: "Team Fortress 2",
    rank:8,
    price: "FREE",
    platform: "STEAM",
    img: TeamImg,
    url: 'https://store.steampowered.com/app/440/Team_Fortress_2/'
},
{
    id:18,
    gameName: "RUST",
    rank:9,
    price: "FROM R329.00",
    platform: "STEAM",
    img: RustImg,
    url: 'https://store.steampowered.com/app/252490/Rust/'
},
{
    id:19,
    gameName: "Unturned",
    rank:10,
    price: "FREE",
    platform: "STEAM",
    img: UnturnedImg,
    url: 'https://store.steampowered.com/app/304930/Unturned/'
},{
    id:20,
    gameName: "Fortnite",
    rank:1,
    price: "FREE",
    platform: "PS",
    img: FortniteImg,
    url: 'https://www.playstation.com/en-za/games/fortnite/'
},
{
    id:21,
    gameName: "EA FC24",
    rank:2,
    price: "FROM R1099.00",
    platform: "PS",
    img: eafcImg,
    url: 'https://www.playstation.com/en-za/games/ea-sports-fc/'
},
{
    id:22,
    gameName: "Call of Duty: MW II",
    rank:3,
    price: "FROM R689.50",
    platform: "PS",
    img: CODImg,
    url: 'https://www.playstation.com/en-za/games/call-of-duty-modern-warfare-ii/'
},

{
    id:23,
    gameName: "ROBLOX",
    rank:4,
    price: "FREE",
    platform: "PS",
    img: RobloxImg,
    url: 'https://www.playstation.com/en-za/games/roblox/'
},
{
    id:24,
    gameName: "Rainbox Six Seige",
    rank:5,
    price: "FROM R187.77",
    platform: "PS",
    img: RSixImg,
    url: 'https://www.playstation.com/en-za/games/tom-clancys-rainbow-six-siege/'
},
{
    id:25,
    gameName: "GTA V",
    rank:6,
    price: "FROM R276.78",
    platform: "PS",
    img: GtaImg,
    url: 'https://www.playstation.com/en-za/games/grand-theft-auto-v/'
},
{
    id:26,
    gameName: "Minecraft",
    rank:7,
    price: "FROM R179.50",
    platform: "PS",
    img: MineImg,
    url: 'https://www.playstation.com/en-za/games/minecraft/'
},
{
    id:27,
    gameName: "Destiny 2",
    rank:8,
    price: "FREE",
    platform: "PS",
    img: DestinyImg,
    url: 'https://www.playstation.com/en-za/games/destiny-2/'
},
{
    id:5,
    gameName: "Apex Legends",
    rank:9,
    price: "FREE",
    platform: "PS",
    img: ApexImg,
    url: 'https://www.playstation.com/en-za/games/apex-legends/'
},

{
    id:8,
    gameName: "Overwatch 2",
    rank:10,
    price: "FREE",
    platform: "PS",
    img: OWImg,
    url: 'https://www.playstation.com/en-za/games/overwatch/'
},

]

export default Rankings