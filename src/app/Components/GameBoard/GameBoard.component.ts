import { EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";
import { BoardButtonComponent } from "../boardButton/boardButton.component";
//import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    private rows: BoardButtonRowComponent[] = [];
    private board: BoardButtonComponent[][] = [];

    constructor() {
        super(html, css);
    }

    onMakeBoard(length: number, width: number) {
        let id = 0;

        if (this.rows.length > 0) {
            for (let row of this.rows) {
                this.removeComponent(row);
            }
        }
        this.rows = [];
        for (let i = 0; i < length; i++) {
            const row = new BoardButtonRowComponent(width, id);
            //if (type === "Cardinal Directions") {
            row.clickCheck.subscribe((id: number) => {
                console.log("boardEvent: " + id);
                this.cardinalDirectionCheck(id);
            });
            //}
            /*else if (type === "Left and Right"){
                row.clickCheck.subscribe((id: number) => {
                    leftRightCheck(id);
                });
            }*/
            row.clickCheck.subscribe(() => {});
            id += width;
            this.addComponent(row);
            this.rows.push(row);
        }
        /*
        if (this.board.length > 0) {
            for (let i = 0; i < length; i++) {
                for (let z = 0; z < width; i++) {
                    this.removeComponent(this.board[i][z]);
                }
            }
            this.board = [];
        }
        for (let i = 0; i < length; i++) {
            const tempRow = [];
            for (let z = 0; z < width; z++) {
                const tempButton = new BoardButtonComponent(id);
                id++;
                /*if(type === "Cardinal Directions")
                tempButton.clickEvent.subscribe(() => {
                    cardinalDirectionCheck
                });
                this.addComponent(tempButton, "board-layout");
                tempRow.push(tempButton);
            }
            this.board.push(tempRow);
            
        }
        */
    }

    checkWin(length: number) {
        let win: boolean = true;
        for (let i = 0; i < length; i++) {
            if (!this.rows[i].checkOff()) {
                win = false;
            }
        }
        return win;
    }

    cardinalDirectionCheck(id: number) {
        for (let i = 0; i < this.rows.length; i++) {
            for (let z = 0; z < this.rows[i].row.length; z++) {
                if (this.rows[i].row[z].getId() === id) {
                    if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[0].getId()
                    ) {
                        console.log(
                            "Id from variables: " + this.rows[i].row[z].getId(),
                        );
                        console.log(
                            "static position: " + this.rows[i].row[0].getId(),
                        );
                        //left side
                        if (i === 0) {
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                        } else if (i === this.rows.length - 1) {
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        } else {
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        }
                    }
                }
            }
        }
    }
}
