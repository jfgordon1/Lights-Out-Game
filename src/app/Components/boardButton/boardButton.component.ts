import {
    BindAttribute,
    BindStyle,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./boardButton.component.html";
import css from "./boardButton.component.css";

export class BoardButtonComponent extends EzComponent {
    @BindStyle("button", "backgroundColor")
    public backgroundColor: string = "red";
    private onOrOff: boolean;
    @BindAttribute("button", "title", (id: number) => id.toString())
    private id: number;

    public clickEvent: EventSubject<number> = new EventSubject<number>();

    constructor(id: number) {
        super(html, css);
        let i: number = Math.random();
        if (i < 0.5) {
            this.onOrOff = false;
            this.backgroundColor = "gray";
        } else {
            this.onOrOff = true;
            this.backgroundColor = "red";
        }
        this.id = id;
    }
    /**
     * changes the color of the button that was clicked
     * and passes the id of the button to any object subscribed to
     * the clickEvent EventSubject
     */
    @Click("button")
    onClick() {
        this.changeColor();
        console.log("Button Clicked!!");
        this.clickEvent.next(this.id);
    }
    /**
     * Changes the color of the box and changes button's board state
     */
    changeColor() {
        if (this.backgroundColor === "red") {
            this.backgroundColor = "gray";
            this.onOrOff = false;
        } else {
            this.backgroundColor = "red";
            this.onOrOff = true;
        }
    }
    /**
     * Checks the color of the box by returning the backgroundColor member variable
     * @returns color
     */
    checkColor(): string {
        let color = this.backgroundColor;
        return color;
    }
    /**
     * returns the id of the button
     * @returns this.id
     */
    getId(): number {
        return this.id;
    }
}
