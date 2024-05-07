import html from "./main.component.html";
import css from "./main.component.css";
import {
    BindValue,
    BindValueToNumber,
    Change,
    Click,
    EzComponent,
    EzDialog,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import { GameBoardComponent } from "./Components/GameBoard/GameBoard.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private clicks: number = 0;
    private board = new GameBoardComponent();
    private firstTime: boolean = true;

    @BindValueToNumber("length")
    private length: number = 3;

    @BindValueToNumber("width")
    private width: number = 3;

    @BindValue("modes")
    private mode = "Cardinal Directions";

    constructor() {
        super(html, css);
        this.addComponent(this.board, "gameboard");
    }

    /**
     * @click
     * @description Displays the instructions if this is the first time,
     * then creates the board
     */
    @Click("makeBoard")
    makeBoard() {
        this.clicks = 0;
        if (this.firstTime) {
            EzDialog.popup(
                this,
                "The aim of this game is to get all the squares in the grid gray.\n The squares that you click will also affect the other based on what game mode you have selected.\n Have Fun!!!",
                "Welcome",
                ["Play Game"],
            );
            this.firstTime = false;
        }
        this.board.onMakeBoard(this.length, this.width, this.mode);
    }
    /**
     * @click
     * @description increases the number of clicks used to solve board by 1
     * as well as checking the board states of all buttons to check for victory
     */
    @Click("gameboard")
    onCLick() {
        this.clicks++;
        if (this.board.checkWin(this.length)) {
            EzDialog.popup(
                this,
                "Clicks:" + this.clicks.toString(),
                "You Win!!",
                ["play again?"],
            ).subscribe(() => {
                this.makeBoard();
            });
            this.clicks = 0;
        }
    }

    /**
     * @description Binds the value from the length scroll bar to the length member variable
     * @param e : ValueEvent
     */
    @Input("length")
    lengthChange(e: ValueEvent) {
        this.length = Number(e.value);
    }

    /**
     * @description Binds the value from the length scroll bar to the width member variable
     * @param e : ValueEvent
     */
    @Input("width")
    widthChange(e: ValueEvent) {
        this.width = Number(e.value);
    }

    /**
     * @description Binds the value from the mode dropdown box to the mode member variable
     * @param e : ValueEvent
     */
    @Change("modes")
    modeChange(e: ValueEvent) {
        this.mode = e.value;
    }
}
