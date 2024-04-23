import { Click, EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";
//import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    private rows: BoardButtonRowComponent[] = [];

    length = 5;

    constructor() {
        super(html, css);
    }

    @Click("makeBoard")
    onMakeBoard() {
        if (this.rows.length > 0) {
            for (let row of this.rows) {
                this.removeComponent(row);
            }
        }
        this.rows = [];
        for (let i = 0; i < this.length; i++) {
            const row = new BoardButtonRowComponent();
            this.addComponent(row);
            this.rows.push(row);
        }
    }
}
