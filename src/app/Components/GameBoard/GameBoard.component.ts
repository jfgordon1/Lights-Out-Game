import { EzComponent } from "@gsilber/webez";
import html from "./GameBoard.component.html";
import css from "./GameBoard.component.css";
import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";
import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class GameBoardComponent extends EzComponent {
    private rows: BoardButtonRowComponent[] = [];
    private board: BoardButtonComponent[][] = [];

    constructor() {
        super(html, css);
    }
    /**
     * @description onMakeBoard takes @param length, @param width, and @param type to create
     * the game board with those specifications
     * @param length
     * @param width
     * @param type
     */
    onMakeBoard(length: number, width: number, type: string) {
        let id = 0;

        if (this.rows.length > 0) {
            for (let row of this.rows) {
                this.removeComponent(row);
            }
        }
        this.rows = [];
        for (let i = 0; i < length; i++) {
            const row = new BoardButtonRowComponent(width, id);
            if (type === "Cardinal Directions") {
                row.clickCheck.subscribe((id: number) => {
                    console.log("boardEvent: " + id);
                    this.cardinalDirectionCheck(id);
                });
            } else if (type === "Left & Right") {
                row.clickCheck.subscribe((id: number) => {
                    this.leftRightCheck(id);
                });
            } else if (type === "Diagonal") {
                row.clickCheck.subscribe((id: number) => {
                    this.diagonalCheck(id);
                });
            }
            row.clickCheck.subscribe(() => {});
            id += width;
            this.addComponent(row);
            this.rows.push(row);
        }
    }
    /**
     * @description Runs through the board to check the board states of all the buttons.
     * @param length
     * @returns boolean describing board state
     */
    checkWin(length: number): boolean {
        let win: boolean = true;
        for (let i = 0; i < length; i++) {
            if (!this.rows[i].checkOff()) {
                win = false;
            }
        }
        return win;
    }
    /**
     * @description method that the board is subscribed to affect the other buttons on click
     * @click affects the boxes in the cardinal directions
     * @param id
     */
    cardinalDirectionCheck(id: number) {
        for (let i = 0; i < this.rows.length; i++) {
            for (let z = 0; z < this.rows[i].row.length; z++) {
                if (this.rows[i].row[z].getId() === id) {
                    //left wall
                    if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[0].getId()
                    ) {
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
                    //right wall
                    else if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[this.rows[i].row.length - 1].getId()
                    ) {
                        //Top Row
                        if (i === 0) {
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                            //Bottow Row
                        } else if (i === this.rows.length - 1) {
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        } else {
                            //Middle Rows
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        }
                    }
                    //middle sections
                    else {
                        if (i === 0) {
                            //Top Row
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                        } else if (i === this.rows.length - 1) {
                            //Bottom Row
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        } else {
                            //Middle Rows
                            this.rows[i].row[z - 1].changeColor();
                            this.rows[i].row[z + 1].changeColor();
                            this.rows[i + 1].row[z].changeColor();
                            this.rows[i - 1].row[z].changeColor();
                        }
                    }
                }
            }
        }
    }
    /**
     * @description method that the board is subscribed to affect the other buttons on click
     * @click affects the immediate left and right boxes
     * @param id
     */
    leftRightCheck(id: number) {
        for (let i = 0; i < this.rows.length; i++) {
            for (let z = 0; z < this.rows[i].row.length; z++) {
                if (this.rows[i].row[z].getId() === id) {
                    //Left Wall
                    if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[0].getId()
                    ) {
                        this.rows[i].row[z + 1].changeColor();
                    } else if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[this.rows[i].row.length - 1].getId()
                    ) {
                        this.rows[i].row[z - 1].changeColor();
                    } else {
                        this.rows[i].row[z - 1].changeColor();
                        this.rows[i].row[z + 1].changeColor();
                    }
                }
            }
        }
    }

    /**
     * @description method that the board is subscribed to affect the other buttons on click
     * @click affects the adjecent box in the diagonal directions
     * @param id
     */
    diagonalCheck(id: number) {
        for (let i = 0; i < this.rows.length; i++) {
            for (let z = 0; z < this.rows[i].row.length; z++) {
                if (this.rows[i].row[z].getId() === id) {
                    //left wall
                    if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[0].getId()
                    ) {
                        if (i === 0) {
                            this.rows[i + 1].row[z + 1].changeColor();
                        } else if (i === this.rows.length - 1) {
                            this.rows[i - 1].row[z + 1].changeColor();
                        } else {
                            this.rows[i + 1].row[z + 1].changeColor();
                            this.rows[i - 1].row[z + 1].changeColor();
                        }
                    }
                    //right wall
                    else if (
                        this.rows[i].row[z].getId() ===
                        this.rows[i].row[this.rows[i].row.length - 1].getId()
                    ) {
                        //Top Row
                        if (i === 0) {
                            this.rows[i + 1].row[z - 1].changeColor();
                            //Bottow Row
                        } else if (i === this.rows.length - 1) {
                            this.rows[i - 1].row[z - 1].changeColor();
                        } else {
                            //Middle Rows
                            this.rows[i - 1].row[z - 1].changeColor();
                            this.rows[i + 1].row[z - 1].changeColor();
                        }
                    }
                    //middle sections
                    else {
                        if (i === 0) {
                            //Top Row
                            this.rows[i + 1].row[z - 1].changeColor();
                            this.rows[i + 1].row[z + 1].changeColor();
                        } else if (i === this.rows.length - 1) {
                            //Bottom Row
                            this.rows[i - 1].row[z - 1].changeColor();
                            this.rows[i - 1].row[z + 1].changeColor();
                        } else {
                            //Middle Rows
                            this.rows[i + 1].row[z + 1].changeColor();
                            this.rows[i - 1].row[z + 1].changeColor();
                            this.rows[i + 1].row[z - 1].changeColor();
                            this.rows[i - 1].row[z - 1].changeColor();
                        }
                    }
                }
            }
        }
    }
}
