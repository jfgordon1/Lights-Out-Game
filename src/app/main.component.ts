import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { GameBoardComponent } from "./Components/GameBoard/GameBoard.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private board = new GameBoardComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.board, "gameboard");
    }
}
