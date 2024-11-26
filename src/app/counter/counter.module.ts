import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
declarations: [
  CounterComponent
],
exports: [
  CounterComponent // Expongo el modulo al exterior
]
})
export class CounterModule {}
