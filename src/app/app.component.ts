import { Component, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "xello-assessment";
  isTooltip1Close: boolean = true;
  isTooltip2Close: boolean = true;
  tooltipText: string;

  constructor(private eRef: ElementRef) {}

  toggleTooltip1() {
    this.isTooltip1Close = !this.isTooltip1Close;
    this.isTooltip2Close = true;
    this.tooltipText = "This is some serious information!";
  }

  toggleTooltip2() {
    this.isTooltip2Close = !this.isTooltip2Close;
    this.isTooltip1Close = true;
    this.tooltipText = "Nothing important here..not really!";
  }

  onScape() {
    this.isTooltip1Close = this.isTooltip2Close = true;
  }

  @HostListener("document:click", ["$event", "$event.target"])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) return;

    const clickedInside = this.eRef.nativeElement.contains(targetElement);
    if (!clickedInside) this.isTooltip1Close = this.isTooltip2Close = true;
  }
}
