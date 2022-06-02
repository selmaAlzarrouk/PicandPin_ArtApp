export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',

    fields: [
        {
            name: 'title',
            title:'Title',
            type: 'string',
        },
        {
            name: 'about',
            title:'About',
            type: 'string',
        },
        {
            name: 'destination',
            title:'Destination',
            type: 'url',
        },
        {
            name: 'category',
            title:'Category',
            type: 'string',
        },
        {
            name: 'image',
            title:'Image',
            type: 'image',
            options:{
                hotspot: true  //hotspot is where you can find all the info about all the specific things that the field can have or in this case the Images :>
            }
        },
        {
            name: 'userId',
            title:'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            title:'PostedBy',
            type: 'postedBy', //type postedBy is a refernce to another document - sanity io be smart like that :>
        },
        {
            name: 'save',
            title:'Save',
            type: 'array',
            of:[{type: 'save'}]
        },
        {
            name: 'comments',
            title:'Comments',
            type: 'array',
            of:[{type: 'comment' }]
        },
    ]
}