import { describe, expect, test, beforeAll } from "@jest/globals";
import { GameBoardComponent } from "./GameBoard.component";
import { bootstrap } from "@gsilber/webez";
//import { BoardButtonRowComponent } from "../boardButtonRow/boardButtonRow.component";

describe("GameBoardComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<GameBoardComponent>(GameBoardComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(GameBoardComponent);
        });
    });
    describe("Makes Board", () => {
        test("3x3 board", () => {
            const board = new GameBoardComponent();
            board.onMakeBoard(3, 3);
            //expect(board).toBeInstanceOf();
        });
    });
});
