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
                console.log("Row event:" + id);
                this.clickCheck.next(id);
            });
            this.addComponent(button, "buttons");
            this.row.push(button);
            tempId++;
        }
        this.width = width;
    }

    /**
     * @description iterates through the array and checks the board states of
     * each button to see if all of the buttons are off.
     * @returns true or false
     */
    checkOff(): boolean {
        for (let i = 0; i < this.width; i++) {
            if (this.row[i].checkColor() === "red") {
                return false;
            }
        }
        return true;
    }
    /**
     * @description returns the button at the specified index.
     * @param index
     * @returns the button at index
     */
    getButton(index: number) {
        for (let i = 0; i < this.row.length; i++) {
            if (i === index) {
                return this.row[i];
            }
        }
    }
}
