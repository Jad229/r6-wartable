import CoastlineImage from "../assets/maps/CoastlineTopFloorBG.jpg";
import BuckIcon from "../assets/operators/buck.png";
import HibanaIcon from "../assets/operators/hibana.png";
import KapkanIcon from "../assets/operators/kapkan.png";
import MuteIcon from "../assets/operators/mute.png";
import ThermiteIcon from "../assets/operators/thermite.png";
import "../styles.css";

const map: HTMLElement | null = document.getElementById("map");
map?.setAttribute("src", CoastlineImage);

const operatorList = document.querySelector(".operator-list");

const BuckImage: HTMLImageElement = document.createElement("img");
BuckImage.setAttribute("src", BuckIcon);

operatorList?.appendChild(BuckImage);
