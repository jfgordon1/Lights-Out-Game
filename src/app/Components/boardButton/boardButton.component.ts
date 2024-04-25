import { BindStyle, Click, EzComponent } from "@gsilber/webez";
import html from "./boardButton.component.html";
import css from "./boardButton.component.css";

export class BoardButtonComponent extends EzComponent {
    @BindStyle("button", "backgroundColor")
    public backgroundColor: string = "red";
    private onOrOff: boolean;

    constructor() {
        super(html, css);
        let i: number = Math.random();
        if (i < 0.5) {
            this.onOrOff = false;
            this.backgroundColor = "gray";
        } else {
            this.onOrOff = true;
            this.backgroundColor = "red";
        }
    }

    @Click("button")
    onClick() {
        this.changeColor();
        console.log("Button Clicked!!");
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
}
