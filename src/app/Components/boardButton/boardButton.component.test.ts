import { describe, expect, test, beforeAll } from "@jest/globals";
import { BoardButtonComponent } from "./boardButton.component";
import { bootstrap } from "@gsilber/webez";

describe("BoardButtonComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<BoardButtonComponent>(BoardButtonComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(BoardButtonComponent);
        });
    });
});
