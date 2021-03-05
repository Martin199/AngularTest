import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-state',
  templateUrl: './reusable-state.component.html',
  styleUrls: ['./reusable-state.component.scss']
})
export class ReusableStateComponent implements OnInit {

  @Input() status

  constructor() { }

  ngOnInit(): void {
  }

}
