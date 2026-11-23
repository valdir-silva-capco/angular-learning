import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const users$ = of(
    'Valdir',
    'Alice',
    'Bob',
    'Charlie',
)

users$.pipe(
    map(user => user.toUpperCase())
).subscribe(user => {
    console.log(user);
});
