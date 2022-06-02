export default { //below I am setting up properties
    name: 'user', //user is going to have a name called user
    title: 'User', // here we have title of that specific schema or model which is User
    type: 'document', //the type is document because each user is a document
    fields: [ // the fiedls that that document will have so username 
        {
            //here we have an array of a few objects
          name: 'userName',
          title:'UserName',
          type: 'string'
        },
    {
        //here we have an array of a few objects
      name: 'image',
      title:'Image',
      type: 'string'
    },
]
}