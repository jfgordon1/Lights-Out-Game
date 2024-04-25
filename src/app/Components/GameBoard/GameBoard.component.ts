import { EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";
//import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    private rows: BoardButtonRowComponent[] = [];

    constructor() {
        super(html, css);
    }

    onMakeBoard(length: number) {
        if (this.rows.length > 0) {
            for (let row of this.rows) {
                this.removeComponent(row);
            }
        }
        this.rows = [];
        for (let i = 0; i < length; i++) {
            const row = new BoardButtonRowComponent();
            this.addComponent(row);
            this.rows.push(row);
        }
    }

    /*checkWin(){
        let win: boolean = true;
        for(let i = 0; i< length; i++){

        }

    }*/
}
