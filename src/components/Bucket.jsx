import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket({
  bucket,
  completeBucketItem,
  removeBucketItem,
  editBucketItem,
}) {
  const editInitialValue = {
    id: null,
    value: '',
    eagerness: '',
  };

  const [edit, setEdit] = useState(editInitialValue);

  console.log(bucket);

  const submitUpdate = (value) => {
    // TODO: Write logic to call the editBucketItem prop with the supplied values
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    console.log(value);
    editBucketItem(edit.id, value);

    setEdit(editInitialValue);
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return (
      <BucketForm
        edit={edit}
        onSubmit={submitUpdate}
      />
    );
  }

  function handleEnableUpdate(id, eagerness, text) {
    setEdit({ id, value: text, eagerness });
  }

  return bucket.map(({ id, eagerness, text, complete }, index) => (
    // DONE: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // DONE: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div
      className={`bucket-row ${complete ? 'complete' : ' '}${eagerness}`}
      key={index}>
      {/* DONE: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div
        key={index}
        onClick={() => completeBucketItem(id)}>
        {/* DONE: Add the item text here */}
        {text}
      </div>
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => handleEnableUpdate(id, eagerness, text)}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => removeBucketItem(id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
