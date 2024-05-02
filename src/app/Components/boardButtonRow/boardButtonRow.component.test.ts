import { describe, expect, test, beforeAll } from "@jest/globals";
import { BoardButtonRowComponent } from "./boardButtonRow.component";
import { bootstrap } from "@gsilber/webez";

describe("BoardButtonRowComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<BoardButtonRowComponent>(
            BoardButtonRowComponent,
            html,
        );
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(BoardButtonRowComponent);
        });
    });
    describe("Check Row Colors", () => {
        test("all off", () => {
            let id = 0;
            const row = new BoardButtonRowComponent(3, id);
            for (let i = 0; i < 3; i++) {
                if (row.row[i].checkColor()) {
                    row.row[i].changeColor();
                }
            }
            expect(row.checkOff).toBeTruthy();
        });
        test("all on", () => {
            let id = 0;
            const row = new BoardButtonRowComponent(3, id);
            for (let i = 0; i < 3; i++) {
                if (row.row[i].checkColor() === "gray") {
                    row.row[i].changeColor();
                }
            }
            expect(row.checkOff()).toBeFalsy();
        });
    });
});
