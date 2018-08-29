import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-tootip",
  templateUrl: "./tootip.component.html",
  styleUrls: ["./tootip.component.css"]
})
export class TootipComponent {
  @Input("tooltipText")
  tooltipText: string;

  @Input("isTooltipVisible")
  isTooltipVisible: boolean = true;

  clickInside($event: Event) {
    $event.stopPropagation();
  }
}
