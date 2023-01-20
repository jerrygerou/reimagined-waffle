export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'title',
               title:'Title',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type: 'array',
                of: [{type: 'block'}]
            }
    ]
}