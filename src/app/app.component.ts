import { Component, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import { MediaObserver, MediaChange,  } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 's-conn';
  maxCol = 3;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  };

  constructor(private mediaObserver: MediaObserver) {}

  ngAfterContentInit(): void {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      // this.maxCol = this.gridByBreakpoint[change.mqAlias];
      // this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  
}
