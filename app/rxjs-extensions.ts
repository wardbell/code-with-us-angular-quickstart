// RxJS extensions used in this app

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// re-export
export { Observable }      from 'rxjs/Observable';
export { Subject }         from 'rxjs/Subject';
export { BehaviorSubject } from 'rxjs/BehaviorSubject';

export { of }              from 'rxjs/observable/of';

