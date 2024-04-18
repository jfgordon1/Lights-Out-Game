import { EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
//import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    //private layout: BoardButtonComponent;
    constructor() {
        super(html, css);
    }

    getHeight() {}

    getWidth() {}
}
