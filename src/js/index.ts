import CoastlineImage from "../assets/maps/CoastlineTopFloorBG.jpg";
import "../styles.css";
import { operators } from "./operators";

const map: HTMLElement | null = document.getElementById("map");
map?.setAttribute("src", CoastlineImage);

const operatorList: HTMLDivElement | null =
  document.querySelector(".operator-list");

operators.forEach((op) => {
  const img: HTMLImageElement = document.createElement("img");

  img.src = op.icon;
  img.alt = op.name;
  img.classList.add("operator");

  img.addEventListener("click", () => {
    selectOperator(op.name);
  });

  operatorList?.appendChild(img);
});

function selectOperator(name: string) {
  const operatorImg = document.createElement("img");
}
