import {
  Component,
  Input,
  HostListener,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "app-tootip",
  templateUrl: "./tootip.component.html",
  styleUrls: ["./tootip.component.scss"]
})
export class TootipComponent {
  @Input("tooltipText")
  tooltipText: string;

  @Input("isTooltipVisible")
  isTooltipVisible: boolean;

  @Output() isTooltipVisibleChange: any = new EventEmitter(); 
  
  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {           
      this.updateVisiblity(event);   
    }
  }

  updateVisiblity(event) {
    this.isTooltipVisible= true;   
    this.isTooltipVisibleChange.emit(event);
  }
}
