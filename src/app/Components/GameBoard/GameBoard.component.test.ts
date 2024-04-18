import { describe, expect, test, beforeAll } from "@jest/globals";
import { GameBoardComponent } from "./GameBoard.component";
import { bootstrap } from "@gsilber/webez";

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
});
