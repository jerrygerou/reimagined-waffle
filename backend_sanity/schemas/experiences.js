export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string',
        },
        {
            name: 'rank',
            title: 'Ranking Order',
            type: 'number'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}