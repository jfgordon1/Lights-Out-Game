import { Click, EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";
//import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    private rows: BoardButtonRowComponent[] = [];

    constructor() {
        super(html, css);
    }

    @Click("makeBoard")
    onMakeBoard() {
        for (let i = 0; i < 5; i++) {
            const row = new BoardButtonRowComponent();
            this.addComponent(row);
            this.rows.push(row);
        }
    }
}
