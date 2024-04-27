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
BuckImage.classList.add("operator");

const HibanaImage: HTMLImageElement = document.createElement("img");
HibanaImage.setAttribute("src", HibanaIcon);
HibanaImage.classList.add("operator");

const KapkanImage: HTMLImageElement = document.createElement("img");
KapkanImage.setAttribute("src", KapkanIcon);
KapkanImage.classList.add("operator");

const MuteImage: HTMLImageElement = document.createElement("img");
MuteImage.setAttribute("src", MuteIcon);
MuteImage.classList.add("operator");

const ThermiteImage: HTMLImageElement = document.createElement("img");
ThermiteImage.setAttribute("src", ThermiteIcon);
ThermiteImage.classList.add("operator");

operatorList?.appendChild(BuckImage);
operatorList?.appendChild(HibanaImage);
operatorList?.appendChild(KapkanImage);
operatorList?.appendChild(MuteImage);
operatorList?.appendChild(ThermiteImage);
