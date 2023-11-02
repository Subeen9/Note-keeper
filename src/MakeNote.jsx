import React from 'react'

function MakeNote() {
  return (
    <div>
      <form>
  <div class="form-group col-md-6">
    <label for="Add your Title Here">Title</label>
    <input type="text" class="form-control"  placeholder="Title here"/>
  </div>
  <div class="form-group col-md-6">
    <label for="area">Your Notes</label>
    <textarea class="form-control" id="area" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default MakeNote