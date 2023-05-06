export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
                // What is hotspot? https://www.sanity.io/docs/hotspot -> "Hotspot" is a term used to describe the area of an image that is the most interesting or important. It is used to crop images responsively. basically what areas should be cropped and what areas should not be cropped
            }
        },
        {
            name: 'userID',
            title: 'UserID',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy' // This is a reference to the user schema
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save' }], // This is a reference to the save schema
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }], // This is a reference to the comment schema
        },
    ]
}