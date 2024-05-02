import { EventSubject, EzComponent } from "@gsilber/webez";
import html from "./boardButtonRow.component.html";
import css from "./boardButtonRow.component.css";
import { BoardButtonComponent } from "../boardButton/boardButton.component";

export class BoardButtonRowComponent extends EzComponent {
    row: BoardButtonComponent[] = [];
    private width = 0;

    public clickCheck: EventSubject<number> = new EventSubject();
    constructor(width: number, id: number) {
        super(html, css);
        let tempId = id;
        for (let i = 0; i < width; i++) {
            let button = new BoardButtonComponent(tempId);
            button.clickEvent.subscribe((id: number) => {
                this.clickCheck.next(id);
            });
            this.addComponent(button, "buttons");
            this.row.push(button);
            tempId++;
        }
        this.width = width;
    }

    checkOff(): boolean {
        for (let i = 0; i < this.width; i++) {
            if (this.row[i].checkColor() === "red") {
                return false;
            }
        }
        return true;
    }

    leftRightClickEvent(id: number) {
        for (let i = 0; i < this.row.length; i++) {
            if (this.row[i].getId() === id && this.row[i].getId()) {
                this.row[i - 1].changeColor();
            }
            if (this.row[i].getId() === id && this.row[i].getId()) {
                this.row[i + 1].changeColor();
            }
        }
    }
}
