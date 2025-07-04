import { Component, inject } from '@angular/core';
import { GreetingPipe } from '../../pipes/greeting-pipe';
import { RootService } from '../../services/root-level-service';
import { ComponentLevelService } from '../../services/component-level-service';

@Component({
  selector: 'app-products',
  imports: [GreetingPipe],
  providers: [ComponentLevelService],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  num = 20;
  msg: string = '';
  private rootService = inject(RootService);

  constructor(
    // private rootService: RootService,
    private componentService: ComponentLevelService
  ) {}

  ngOnInit(): void {
    this.msg = this.rootService.display();
    console.log(this.componentService.show());
  }
}
