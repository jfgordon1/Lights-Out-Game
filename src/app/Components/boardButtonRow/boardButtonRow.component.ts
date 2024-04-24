import { EzComponent } from "@gsilber/webez";
import html from "./boardButtonRow.component.html";
import css from "./boardButtonRow.component.css";
import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class BoardButtonRowComponent extends EzComponent {
    row: BoardButtonComponent[] = [];
    length: number = 3;
    constructor() {
        super(html, css);
        for (let i = 0; i < this.length; i++) {
            const temp = new BoardButtonComponent();
            this.addComponent(temp, "buttons");
            this.row.push(temp);
        }
    }
}
