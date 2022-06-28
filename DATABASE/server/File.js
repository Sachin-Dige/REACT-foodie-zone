import React from 'react'

const File = () => {
  return (
    <div>
     <form action="/" method="POST" enctype="multipart/form-data">
            <div>
                <label for="name">Image Title</label>
                <input type="text" id="name" placeholder="Name" 
                       value="" name="name" required/>
            </div>
            <div>
                <label for="desc">Image Description</label>
                <textarea id="desc" name="desc" value="" rows="2" 
                          placeholder="Description" required>
                </textarea>
            </div>
            <div>
                <label for="image">Upload Image</label>
                <input type="file" id="image" 
                       name="image" value="" required/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default File
