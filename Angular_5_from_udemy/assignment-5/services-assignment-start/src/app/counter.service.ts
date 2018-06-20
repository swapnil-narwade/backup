export class CounterService {
  incrementActive = 0;
  incrementInactive = 0;

  IncrementToInactive() {
  this.incrementInactive++;
  console.log('increment To Inactive ' + this.incrementInactive);
  }

  IncrementToActive() {
    this.incrementActive++;
    console.log('increment To Active ' + this.incrementActive);
  }


}
