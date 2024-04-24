import { BindCSSClassToBoolean, Click, EzComponent } from "@gsilber/webez";
import html from "./boardButton.component.html";
import css from "./boardButton.component.css";

export class BoardButtonComponent extends EzComponent {
    private onOrOff = false;
    constructor() {
        super(html, css);
    }

    @Click("button")
    onClicked() {
        this.changeColor();
    }

    @BindCSSClassToBoolean("button", "button-off") turnItOff: boolean = true;
    changeColor() {
        if (this.turnItOff) {
            this.onOrOff = false;
        } else {
            this.onOrOff = true;
        }
    }
}
