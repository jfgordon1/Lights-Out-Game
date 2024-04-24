import { BindStyle, Click, EzComponent, EzDialog } from "@gsilber/webez";
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
        //this.changeColor();
        EzDialog.popup(this, "Button Clicked!!");
        console.log("Button Clicked!!");
    }
}
