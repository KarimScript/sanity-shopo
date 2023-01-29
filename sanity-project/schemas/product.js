export default{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },

        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true
            }
        },

        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90
            }
        },

        {
          name:'price',
          title:'Price',
          type:'number'
        },

        {
            name:'details',
            title:'Details',
            type:'string'
        },

        {
            name:'sale',
            title:'sale in %',
            type:'number'

        },
        
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            weak: true,
            to: [{type: 'category'}],
        }

      ]
}