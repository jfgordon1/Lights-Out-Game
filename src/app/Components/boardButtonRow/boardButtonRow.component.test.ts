import { describe, expect, test, beforeAll } from "@jest/globals";
import { BoardButtonRowComponent } from "./boardButtonRow.component";
import { bootstrap } from "@gsilber/webez";

describe("BoardButtonRowComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<BoardButtonRowComponent>(BoardButtonRowComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(BoardButtonRowComponent);
        });
    });
});
