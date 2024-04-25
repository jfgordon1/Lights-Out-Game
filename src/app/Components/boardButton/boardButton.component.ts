import { BindStyle, Click, EzComponent } from "@gsilber/webez";
import html from "./boardButton.component.html";
import css from "./boardButton.component.css";

export class BoardButtonComponent extends EzComponent {
    @BindStyle("button", "backgroundColor")
    public backgroundColor: string = "red";
    private onOrOff = false;

    constructor() {
        super(html, css);
    }

    @Click("button")
    onClick() {
        this.changeColor();
        console.log("Button Clicked!!");
    }

    changeColor() {
        if (this.backgroundColor === "red") {
            this.backgroundColor = "gray";
        } else {
            this.backgroundColor = "red";
        }
    }
}
