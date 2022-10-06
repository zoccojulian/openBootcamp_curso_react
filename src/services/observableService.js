import { Observable } from "rxjs";

export const getNumbers = new Observable(subscriber => {
    //we emit values:
    subscriber.next(1); // Emit 1
  subscriber.next(2); // Emit 2
  subscriber.next(3); // Emit 3
  setTimeout(() => {
    subscriber.next(4); // Emit 4
    subscriber.complete(); // Finally, the Observable completes and finishes
  }, 1000); // Waits is
})