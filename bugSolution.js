```javascript
//Correct usage of $inc operator in MongoDB update query
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { count: 1 } } );
```