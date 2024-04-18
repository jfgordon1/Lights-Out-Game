import { EzComponent } from "@gsilber/webez";
import html from "./boardButton.component.html";
import css from "./boardButton.component.css";

export class BoardButtonComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
