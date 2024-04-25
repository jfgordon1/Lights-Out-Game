import html from "./main.component.html";
import css from "./main.component.css";
import {
    BindValueToNumber,
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

    @BindValueToNumber("length")
    private length: number = 3;

    @BindValueToNumber("width")
    private width: number = 3;

    constructor() {
        super(html, css);
        this.addComponent(this.board, "gameboard");
    }

    @Click("makeBoard")
    makeBoard() {
        this.board.onMakeBoard(this.length, this.width);
    }
    @Click("gameboard")
    onCLick() {
        this.clicks++;
        //EzDialog.popup(this, this.clicks.toString());
        if (this.board.checkWin(this.length)) {
            EzDialog.popup(
                this,
                "You Win!!",
                "clicks:" + this.clicks.toString(),
            );
        }
    }

    @Input("length")
    lengthChange(e: ValueEvent) {
        this.length = Number(e.value);
    }

    @Input("width")
    widthChange(e: ValueEvent) {
        this.width = Number(e.value);
    }
}
