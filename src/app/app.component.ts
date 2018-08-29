import { Component, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "xello-assessment";
  isTooltip1Close: boolean = true;
  isTooltip2Close: boolean = true;
  tooltipText: string;

  constructor() {}

  toggleTooltip1($event:Event) {           
    $event.stopPropagation();     
    this.isTooltip1Close = !this.isTooltip1Close;
    this.isTooltip2Close = true;      
    this.tooltipText = "This is some serious information!";       
  }

  toggleTooltip2($event: Event) {
    $event.stopPropagation();
    this.isTooltip2Close = !this.isTooltip2Close;
    this.isTooltip1Close = true;
    this.tooltipText = "Nothing important here..not really!";
  }

  onScape() {
    this.isTooltip1Close = this.isTooltip2Close = true;
  }   
}
