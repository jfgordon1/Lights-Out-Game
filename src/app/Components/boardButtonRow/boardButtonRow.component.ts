import { EzComponent } from "@gsilber/webez";
import html from "./boardButtonRow.component.html";
import css from "./boardButtonRow.component.css";
import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class BoardButtonRowComponent extends EzComponent {
    row: BoardButtonComponent[] = [];
    constructor() {
        super(html, css);
        for (let i = 0; i < 5; i++) {
            const temp = new BoardButtonComponent();
            this.addComponent(temp, "buttons");
            this.row.push(temp);
        }
    }
}
