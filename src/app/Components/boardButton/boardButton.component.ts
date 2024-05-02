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

    @Click("button")
    onClick() {
        this.changeColor();
        console.log("Button Clicked!!");
        this.clickEvent.next(this.id);
    }

    changeColor() {
        if (this.backgroundColor === "red") {
            this.backgroundColor = "gray";
            this.onOrOff = false;
        } else {
            this.backgroundColor = "red";
            this.onOrOff = true;
        }
    }

    checkColor(): string {
        let color = this.backgroundColor;
        return color;
    }

    getId(): number {
        return this.id;
    }
}
